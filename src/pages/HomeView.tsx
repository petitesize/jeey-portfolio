import { useEffect, useState } from "react";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import styled from "styled-components";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import link from "@/utils/link";
import Profile from "@/components/Profile";

const Wrapper = styled.div`
  font-family: "Arial", sans-serif;
  /* background-color: ${(props) => props.theme.colors.orange000}; */
  color: #333;
  /* padding: 0 9rem; */
  /* width: 100%; */
  overflow-x: hidden;
`;

const AnimationWrapper = styled.div<{ $isLoaded: boolean }>`
  transform: translate3d(0, ${(props) => (props.$isLoaded ? "0" : "-80px")}, 0);
  transition: transform 1s ease-out;
`;

const Main = styled.main<{ $isLoaded: boolean }>`
  /* background-color: ${(props) => props.theme.colors.orange000}; */
  /* height: 100vh; */
  /* width: 100% */
  opacity: ${(props) => (props.$isLoaded ? "1" : "0")};
  transition: opacity 1s ease-in;
`;

const HomeView = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되고 로딩이 완료되면 애니메이션 실행
    setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsOpacity(true), 300);
    }, 300);
    link(); // 현재 페이지에서의 해시 값을 감지할 것이기 때문에 여기로 이동
  }, []);

  return (
    <Wrapper>
      <AnimationWrapper $isLoaded={isLoaded}>
        <Main $isLoaded={isOpacity}>
          <Intro />
          {/* <About /> */}
          <Profile />
          <Skills />
          <Projects />
          <Contact />
        </Main>
      </AnimationWrapper>
    </Wrapper>
  );
};

export default HomeView;
