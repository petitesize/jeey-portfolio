import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 40px 0;
`;

const AboutTitle = styled.h2`
  color: #ff69b4;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutTitle>About Me</AboutTitle>
      <p>
        I'm a junior frontend developer with a passion for building beautiful
        and functional web applications.
      </p>
    </AboutSection>
  );
};

export default About;
