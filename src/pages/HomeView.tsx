import React from "react";
import Header from "@components/Header";
import About from "@components/About";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Arial", sans-serif;
  background-color: ${(props) => props.theme.colors.orange000};
  color: #333;
  width: 100vw;
`;

const Main = styled.main`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.orange000};
  height: 100vh;
`;

const HomeView = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <About />
        <Projects />
        <Contact />
      </Main>
    </Wrapper>
  );
};

export default HomeView;
