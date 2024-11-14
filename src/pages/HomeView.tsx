import React from "react";
import Header from "@components/Header";
import About from "@/components/About";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import styled from "styled-components";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";

const Wrapper = styled.div`
  font-family: "Arial", sans-serif;
  background-color: ${(props) => props.theme.colors.orange000};
  color: #333;
  padding: 0 80px;
`;

const Main = styled.main`
  background-color: ${(props) => props.theme.colors.orange000};
  /* height: 100vh; */
  /* width: 100vw; */
`;

const HomeView = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Intro />
        <About />
        <Skills />

        <Projects />
        <Contact />
      </Main>
    </Wrapper>
  );
};

export default HomeView;
