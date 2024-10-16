import React from 'react';
import './projects.css';
import Btn from "./button.jsx";
import edistrict from "../assets/edistrict-desktop.png";

function ProjectCard({ showProjectView }) {
  return (
    <div className="projects-home">
      <div className="detail-container shadow">
        <img className='img-desktop' src={edistrict} alt="Edistrict Project"/>
        <div className="content-detail-card flex flex-col w-full p-5 justify-between relative">
          <div className="upper-half-card flex flex-col">
            <div className="title-card-container flex justify-between">
              <div className="title-card">edistrict</div>
              <div className="number-project">001</div>
            </div>
            <div className="developement-detail flex gap-3">
              <div className="development-info">ui/ux</div>
              <div className="development-info">front end</div>
            </div>
          </div>
          <div className="bottom-half-card">
            <Btn
              color="btn-white"
              onClick={showProjectView} // Call the function to show ProjectView
              text="View project"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;