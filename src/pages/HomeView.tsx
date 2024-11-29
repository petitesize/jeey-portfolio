import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import About from "@/components/About";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import styled from "styled-components";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Wrapper = styled.div`
  font-family: "Arial", sans-serif;
  background-color: ${(props) => props.theme.colors.orange000};
  color: #333;
  /* padding: 0 9rem; */
  /* width: 100%; */
  overflow-x: hidden;
`;

const AnimationWrapper = styled.div<{ isLoaded: boolean }>`
  transform: translate3d(0, ${(props) => (props.isLoaded ? "0" : "-80px")}, 0);
  transition: transform 1s ease-out;
`;

const Main = styled.main<{ isLoaded: boolean }>`
  background-color: ${(props) => props.theme.colors.orange000};
  /* height: 100vh; */
  /* width: 100% */
  opacity: ${(props) => (props.isLoaded ? "1" : "0")};
  transition: opacity 1.5s ease-in;
`;

const HomeView = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되고 로딩이 완료되면 애니메이션 실행
    setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsOpacity(true), 500);
    }, 300);
  }, []);

  return (
    <Wrapper>
      <Header />
      <AnimationWrapper isLoaded={isLoaded}>
        <Main isLoaded={isOpacity}>
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Main>
      </AnimationWrapper>

      <Footer />
    </Wrapper>
  );
};

export default HomeView;
