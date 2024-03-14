import React from "react";
import { useLocation } from "react-router-dom";
import "./GanttDetails.css"; // Import the CSS file for styling

const GanttDetailsPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="details-container">
      <h1 className="details-heading">Project Details</h1>
      <div className="details-content">
        <div className="details-row">
          <span className="details-label">Project ID:</span>
          <span className="details-value">{data.project_id}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Project Name:</span>
          <span className="details-value">{data.name}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Type:</span>
          <span className="details-value">{data.type}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Progress:</span>
          <span className="details-value">{data.progress}%</span>
        </div>
        <div className="details-row">
          <span className="details-label">Location:</span>
          <span className="details-value">{data.location}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Start Date:</span>
          <span className="details-value">{new Date(data.start).toISOString()}</span>
        </div>
        <div className="details-row">
          <span className="details-label">End Date:</span>
          <span className="details-value">{new Date(data.end).toDateString()}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Project Manager:</span>
          <span className="details-value">{data.project_manager_name}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Project Manager Email:</span>
          <span className="details-value">{data.project_manager_email}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Project Manager Phone:</span>
          <span className="details-value">{data.project_manager_phone}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Architect:</span>
          <span className="details-value">{data.architect_name}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Architect Email:</span>
          <span className="details-value">{data.architect_email}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Architect Phone:</span>
          <span className="details-value">{data.architect_phone}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Engineer:</span>
          <span className="details-value">{data.engineer_name}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Engineer Email:</span>
          <span className="details-value">{data.engineer_email}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Engineer Phone:</span>
          <span className="details-value">{data.engineer_phone}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Contractor:</span>
          <span className="details-value">{data.contractor_name}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Contractor Email:</span>
          <span className="details-value">{data.contractor_email}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Contractor Phone:</span>
          <span className="details-value">{data.contractor_phone}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Budget:</span>
          <span className="details-value">${parseFloat(data.budget).toLocaleString()}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Timeline:</span>
          <span className="details-value">{data.timeline}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Scope of Work:</span>
          <span className="details-value">{data.scope_of_work}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Permits and Approvals:</span>
          <span className="details-value">{data.permits_and_approvals}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Labor:</span>
          <span className="details-value">{data.labor} workers</span>
        </div>
        <div className="details-row">
          <span className="details-label">Equipment:</span>
          <span className="details-value">{data.equipment}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Safety Measures:</span>
          <span className="details-value">{data.safety_measures}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Environmental Impact:</span>
          <span className="details-value">{data.environmental_impact}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Stakeholders:</span>
          <span className="details-value">{data.stakeholders}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Risk Assessment:</span>
          <span className="details-value">{data.risk_assessment}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Quality Control:</span>
          <span className="details-value">{data.quality_control}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Progress Reports:</span>
          <span className="details-value">{data.progress_reports}</span>
        </div>
        <div className="details-row">
          <span className="details-label">Dependencies:</span>
          <span className="details-value">{data.dependencies.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export default GanttDetailsPage;

