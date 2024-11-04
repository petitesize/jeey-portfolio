import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 40px 0;
`;

const ProjectList = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectItem = styled.div`
  background-color: #ffe6f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      <ProjectList>
        <ProjectItem>
          <h3>Project 1</h3>
          <p>Description of the project.</p>
        </ProjectItem>
        <ProjectItem>
          <h3>Project 2</h3>
          <p>Description of the project.</p>
        </ProjectItem>
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
