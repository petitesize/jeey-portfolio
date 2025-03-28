import styled from "styled-components";
import githubIcon from "@assets/icon/github-41.svg";
import resumeIcon from "@assets/icon/document.png";
import blogIcon from "@assets/icon/tstory.svg";

const FooterWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 5.125rem;
`;

const FooterContent = styled.div`
  /* background-color: ${(props) => props.theme.colors.rose300}; */

  justify-content: space-between;
  align-items: center;
  padding: 1.625rem 9rem;
  display: flex;
  @media (max-width: 768px) {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
  }

  @media (max-width: 480px) {
    > div:first-child {
      text-align: center;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.text};

  margin: 0 9rem;
  @media (max-width: 768px) {
    margin: 0 4rem;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  text-align: center;
  line-height: 1;
  transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  color: ${(props) => props.theme.colors.rose300};
  font-weight: 900;
  &:hover {
    transform: rotate(30deg);
  }

  @media (max-width: 768px) {
    order: -1;
  }
`;

const IconWrapper = styled.div`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-direction: row;
  display: flex;
  > a > img {
    height: 22px;

    &.github {
      height: 24px;
    }

    opacity: 0.6;
    &.tistory {
      filter: grayscale(1);
      opacity: 1;
    }

    &:hover {
      opacity: 1;
      filter: grayscale(0);
    }
    &.invert {
      ${({ theme }) => theme.mode === "dark" && `filter: invert(100%);`}
    }
    transition: all 0.12s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  @media (max-width: 768px) {
    grid-column-gap: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Divider></Divider>
      <FooterContent>
        <div>© 2024 to JEEYOUNG</div>
        <Logo>
          <a href="#home">JY</a>
        </Logo>
        <div>
          <IconWrapper>
            <a target="_blank" href="https://my.surfit.io/w/1181520374">
              <img src={resumeIcon} alt="Resume Icon" className="invert" />
            </a>
            <a href="https://github.com/petitesize" target="_blank">
              <img
                src={githubIcon}
                alt="github Icon"
                className="github invert"
              />
            </a>
            <a href="https://jee0.tistory.com/" target="_blank">
              <img className="tistory" src={blogIcon} alt="blog Icon" />
            </a>
          </IconWrapper>
        </div>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
