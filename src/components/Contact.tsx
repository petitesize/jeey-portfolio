import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 40px 0;
`;

const ContactTitle = styled.h2`
  color: #ff69b4;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Contact</ContactTitle>
      <p>Feel free to reach out via email or LinkedIn.</p>
    </ContactSection>
  );
};

export default Contact;
