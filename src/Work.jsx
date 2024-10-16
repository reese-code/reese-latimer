import React, { useState } from 'react';
import './work.css';
import ProjectCard from './Project-Card.jsx';
import ProjectView from './Edistrict.jsx'; // Import ProjectView

function Work() {
  const [isProjectViewVisible, setIsProjectViewVisible] = useState(false);

  const showProjectView = () => {
    setIsProjectViewVisible(true); // Show the project view when button is clicked
  };

  const hideProjectView = () => {
    setIsProjectViewVisible(false); // Hide the project view when close is clicked
  };

  return (
    <>
      <div className="about-title m-norm">work</div>
      <div className="work-section">
        <ProjectCard showProjectView={showProjectView} /> {/* Pass show function */}
      </div>
      {isProjectViewVisible && (
        <ProjectView
          proTitle="edistrict"
          teamMembers="Reese Latimer"
          challenge="To drive clients to fill out the leasing application."
          solution="Built an easy-to-navigate website that shows off the features, amenities, and location."
          onClose={hideProjectView} // Pass the function to hide the ProjectView
        />
      )}
    </>
  );
}

export default Work;