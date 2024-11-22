import { styled } from "styled-components";

const IntroSection = styled.section`
  height: 100vh;
  padding-top: 80px;
  @media (max-width: 768px) {
    height: 75vh;
  }
`;

const TitleWrapper = styled.div`
  padding-top: 9rem;

  @media (max-width: 768px) {
    padding-top: 7rem;
  }
`;

const IntroTitle = styled.h1`
  font-family: "RIDIBatang";
  font-size: 6rem;
  text-transform: uppercase;
  line-height: 1.3;
  font-weight: 800;
  white-space: normal;
  /* text-indent: -0.5vw; */
  letter-spacing: -0.1vw;
  color: ${(props) => props.theme.colors.black000};

  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Intro = () => {
  return (
    <IntroSection>
      <TitleWrapper>
        <IntroTitle>Jeeyoung</IntroTitle>
        <IntroTitle>Frontend Developer</IntroTitle>
        <IntroTitle>PortFolio</IntroTitle>
      </TitleWrapper>
    </IntroSection>
  );
};

export default Intro;
