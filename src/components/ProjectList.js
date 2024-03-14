import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../actions/projectActions';

const ProjectList = () => {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector(state => state.project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loading) return <div style={styles.container}>Loading...</div>;
  if (error) return <div style={styles.container}>Error: {error.message}</div>;
  console.log(projects);

return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Projects</h1>
      <div>
        {projects.map(project => (
          <div key={project.id} style={styles.projectContainer}>
            <h2 style={styles.projectName}>{project.name}</h2>
            <div style={styles.projectDetails}>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Start Date:</strong> {project.start}</p>
              <p><strong>End Date:</strong> {project.end}</p>
              <p><strong>Project ID:</strong> {project.project_id}</p>
              <p><strong>Type:</strong> {project.type}</p>
              <p><strong>Progress:</strong> {project.progress}%</p>
              <p><strong>Project Manager:</strong> {project.project_manager_name}</p>
              <p><strong>Project Manager Email:</strong> {project.project_manager_email}</p>
              <p><strong>Project Manager Phone:</strong> {project.project_manager_phone}</p>
              <p><strong>Architect:</strong> {project.architect_name}</p>
              <p><strong>Architect Email:</strong> {project.architect_email}</p>
              <p><strong>Architect Phone:</strong> {project.architect_phone}</p>
              <p><strong>Engineer:</strong> {project.engineer_name}</p>
              <p><strong>Engineer Email:</strong> {project.engineer_email}</p>
              <p><strong>Engineer Phone:</strong> {project.engineer_phone}</p>
              <p><strong>Contractor:</strong> {project.contractor_name}</p>
              <p><strong>Contractor Email:</strong> {project.contractor_email}</p>
              <p><strong>Contractor Phone:</strong> {project.contractor_phone}</p>
              <p><strong>Budget:</strong> ${parseFloat(project.budget).toLocaleString()}</p>
              <p><strong>Timeline:</strong> {project.timeline}</p>
              <p><strong>Scope of Work:</strong> {project.scope_of_work}</p>
              <p><strong>Permits and Approvals:</strong> {project.permits_and_approvals}</p>
              <p><strong>Labor:</strong> {project.labor} workers</p>
              <p><strong>Equipment:</strong> {project.equipment}</p>
              <p><strong>Safety Measures:</strong> {project.safety_measures}</p>
              <p><strong>Environmental Impact:</strong> {project.environmental_impact}</p>
              <p><strong>Stakeholders:</strong> {project.stakeholders}</p>
              <p><strong>Risk Assessment:</strong> {project.risk_assessment}</p>
              <p><strong>Quality Control:</strong> {project.quality_control}</p>
              <p><strong>Progress Reports:</strong> {project.progress_reports}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  projectContainer: {
    marginBottom: '40px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
  },
  projectName: {
    fontSize: '20px',
    marginBottom: '10px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  projectDetails: {
    fontSize: '16px',
  },
};

export default ProjectList;
