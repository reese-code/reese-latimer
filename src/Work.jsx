import React, { useState } from 'react';
import './work.css';
import ProjectCard from './Project-card.jsx';
import ProjectView from './Edistrict.jsx';
import PageHeading from './pageHeading.jsx';

function Work() {
  const [isProjectViewVisible, setIsProjectViewVisible] = useState(false);

  const showProjectView = () => {
    setIsProjectViewVisible(true);
  };

  const hideProjectView = () => {
    setIsProjectViewVisible(false);
  };

  return (
    <div className="work-container">
      <PageHeading
        title="work"
      />
      <div className="work-section">
        <ProjectCard showProjectView={showProjectView} />
      </div>
      {isProjectViewVisible && (
        <ProjectView
          proTitle="edistrict"
          teamMembers="Reese Latimer"
          challenge="To drive clients to fill out the leasing application."
          solution="Built an easy-to-navigate website that shows off the features, amenities, and location."
          onClose={hideProjectView}
        />
      )}
    </div>
  );
}

export default Work;
