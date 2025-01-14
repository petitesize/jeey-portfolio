import { styled } from "styled-components";

const IntroSection = styled.section`
  height: 100vh;
  /* padding-top: 80px; */
  padding: 80px 9rem 0 9rem;
  @media (max-width: 768px) {
    height: 70vh;

    @media (max-width: 768px) {
      padding: 80px 4rem 0 4rem;
    }
  }

  @media (max-width: 480px) {
    height: 50vh;
    padding: 3rem 2rem 0 2rem;
  }
`;

const TitleWrapper = styled.div`
  padding-top: 9rem;

  @media (max-width: 768px) {
    padding-top: 7rem;
  }

  @media (max-width: 480px) {
    padding-top: 5rem;

    line-height: 1.2;
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
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    text-align: center;
    padding-left: 3rem;
  }
`;

const Intro = () => {
  return (
    <IntroSection id="home">
      <TitleWrapper>
        <IntroTitle>Jeeyoung</IntroTitle>
        <IntroTitle>Frontend Developer</IntroTitle>
        <IntroTitle>PortFolio</IntroTitle>
      </TitleWrapper>
    </IntroSection>
  );
};

export default Intro;
