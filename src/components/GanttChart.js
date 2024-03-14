import React, { useState, useEffect } from "react";
import { Gantt } from "gantt-task-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../actions/projectActions';
import "gantt-task-react/dist/index.css";
import "./GanttChart.css";

function GanttChart() {

  /* app.css */

  const [selectedColor, setSelectedColor] = useState("#ffbb54"); // Common color for all tasks
  const navigate = useNavigate(); // Define useNavigate here

  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector(state => state.project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleClick = (project) => {
    navigate("/gantt-details", { state: project });
  }

  const projectsWithDateObjects = projects.map((project) => ({
    ...project,
    start: new Date(project.start_date),
    end: new Date(project.end_date),
  }));

  const handleColorChange = (selectedColor) => {
    setSelectedColor(selectedColor);
  };

  const projectsWithStyles = projectsWithDateObjects.map((project) => ({
    ...project,
    styles: {
      progressColor: selectedColor || "#ffbb54",
      progressSelectedColor: selectedColor || "#ffbb54",
    },
  }));

  return (
    <div>
      {projectsWithStyles.length > 0 ? (
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p>Select Tasks Colour:</p>
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => handleColorChange(e.target.value)}
            />
          </div>
          <Gantt tasks={projectsWithStyles} onClick={handleClick} />
        </div>
      ) : (
        <p>No projects loaded. Fetch tasks from the API.</p>
      )}
    </div>
  );
}

export default GanttChart;

