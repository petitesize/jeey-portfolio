import { styled } from "styled-components";

const IntroSection = styled.section`
  height: 100vh;
  /* padding-top: 80px; */
  padding: 80px 9rem 0 9rem;
  @media (max-width: 1439px) {
    padding: 80px 7rem 0 7rem;
  }

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
  /* h1:last-child {
    color: #ff99ad;
  } */

  @media (max-width: 768px) {
    padding-top: 7rem;
  }

  @media (max-width: 480px) {
    padding-top: 5rem;

    line-height: 1.2;
  }
`;

const IntroTitle = styled.h1`
  font-family: "Paperlogy_SemiBold";
  font-size: 6rem;
  /* text-transform: uppercase; */
  line-height: 1.3;
  font-weight: 800;
  white-space: nowrap;
  /* text-indent: -0.5vw; */
  letter-spacing: -0.1vw;
  color: ${(props) => props.theme.colors.header};

  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: 1439px) {
    font-size: 5rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (max-width: 991px) {
    font-size: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    white-space: normal;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Intro = () => {
  return (
    <IntroSection id="home">
      <TitleWrapper>
        <IntroTitle>JeeYoung</IntroTitle>
        <IntroTitle>Frontend developer</IntroTitle>
        <IntroTitle>Portfolio</IntroTitle>
      </TitleWrapper>
    </IntroSection>
  );
};

export default Intro;
