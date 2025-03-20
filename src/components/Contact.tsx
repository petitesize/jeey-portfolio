import React, { useState } from "react";
import styled from "styled-components";
import { Title, TitleDivider } from "./Title";
import Arrow from "./Arrow";
import { CopyToClipboard } from "react-copy-to-clipboard";
import githubIcon from "@assets/icon/github-41.svg";
import resumeIcon from "@assets/icon/document.png";
import blogIcon from "@assets/icon/tstory.svg";

const ContactSection = styled.section`
  height: 100%;
  padding: 80px 9rem;
  @media (max-width: 768px) {
    padding: 80px 4rem;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;

  grid-column-gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
  }
`;

const ContentWrapper = styled.div``;

const SubHeading = styled.h2`
  font-size: 3.625rem;
  color: ${(props) => props.theme.colors.black000};
  margin-bottom: 4rem;
  margin-top: -1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Content = styled.p`
  letter-spacing: 0.006em;
  max-width: 52ch;
  margin-top: 0;
  margin-bottom: 0.625rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.black000};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const EmailLink = styled.a`
  box-shadow: inset 0 -2.5px 0 0 ${(props) => props.theme.colors.rose300};
  cursor: pointer;
  transition: box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: inline-block;

  &:hover {
    box-shadow: none;
    opacity: 0.64;
    transform: skewY(3deg);
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
  grid-column-gap: 0.75rem;
  display: flex;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Button = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.white000};
  text-align: center;
  letter-spacing: 0.02em;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.black000};
  border: none;
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  inset: 0%;
  width: 6rem;
  overflow: hidden; /* ShineEffect가 버튼 밖으로 넘어가지 않도록 */
  > a {
    font-size: 0.9rem;
    font-family: "Paperlogy_SemiBold";
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.rose300};
    color: ${(props) => props.theme.colors.black000};
    transform: translateY(-0.0675rem);
  }
  &:active {
    transform: scale(0.98) translate(0);
  }

  &:hover .shine-effect {
    opacity: 1;
  }

  transition: all 0.3s;
`;

const ShineEffect = styled.div`
  top: 0%;
  left: 0%;
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(
    circle farthest-side,
    #fffaf54d,
    #1c134100 60%
  );
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.1s linear, opacity 0.2s ease;
  opacity: 0;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 1;
  grid-row-gap: 0.75rem;
  /* 알아보기 */
  place-content: start flex-start;
  place-items: flex-start start;
`;

const LinkWrapper = styled.div`
  display: flex;

  > img {
    padding-right: 0.5rem;
    display: inline-block;
    height: 1.5rem;

    &:hover + span {
      box-shadow: none;
    }

    &.github {
      padding-right: 0.4rem;
      height: 1.6rem;
    }
  }
  transition: box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    box-shadow: none;
    opacity: 0.64;
    transform: skewY(3deg);
  }

  span {
    box-shadow: inset 0 -2.5px 0 0 ${(props) => props.theme.colors.rose300};
    font-size: 1.25rem;
    line-height: 1.2;
    letter-spacing: 0.01em;
    transition: box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    font-family: "Paperlogy-8ExtraBold";
    &:hover {
      box-shadow: none;
    }
  }
`;

const SocialLinks = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: pointer;
`;

const Contact = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false); // 복사 상태 관리
  const email = "petitesize22@gmail.com";

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1800);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <ContactSection id="contact">
      <TitleDivider />
      <Title>Get In Touch</Title>
      <SubHeading>Contact me :)</SubHeading>
      <ContactContainer>
        <ContentWrapper>
          <Content>
            저에게 관심이 있으시거나, 더 많은 정보가 필요하시다면
          </Content>
          <Content>
            <EmailLink href="mailto:petitesize22@gmail.com">
              petitesize22@gmail.com
            </EmailLink>
          </Content>
          <Content>위의 이메일로 언제든지 연락 부탁드립니다.</Content>
          <ButtonWrapper>
            <Button onMouseMove={handleMouseMove}>
              <a href="mailto:petitesize22@gmail.com">
                Email me <Arrow>→</Arrow>
              </a>
              <ShineEffect
                className="shine-effect"
                style={{
                  transform: `translate3d(${mousePosition.x - 50}px, ${
                    mousePosition.y - 50
                  }px, 0)`,
                }}
              />
            </Button>
            <CopyToClipboard text={email} onCopy={handleCopy}>
              <Button onMouseMove={handleMouseMove}>
                <a>{isCopied ? "Copied !" : "Copy Email"}</a>
                <ShineEffect
                  className="shine-effect"
                  style={{
                    transform: `translate3d(${mousePosition.x - 50}px, ${
                      mousePosition.y - 50
                    }px, 0)`,
                  }}
                />
              </Button>
            </CopyToClipboard>
          </ButtonWrapper>
        </ContentWrapper>
        <SocialWrapper>
          <SocialLinks
            target="_blank"
            href="https://drive.google.com/file/d/1BiBCjAZJs6xZU2JShIE9CS61f8O4h79u/view?usp=sharing"
          >
            <LinkWrapper>
              <img src={resumeIcon} alt="Resume Icon" />
              <span>View Full Resume</span>
            </LinkWrapper>
          </SocialLinks>
          <SocialLinks href="https://github.com/petitesize" target="_blank">
            <LinkWrapper>
              <img src={githubIcon} alt="github Icon" className="github" />
              <span>Github</span>
            </LinkWrapper>
          </SocialLinks>
          <SocialLinks href="https://jee0.tistory.com/" target="_blank">
            <LinkWrapper>
              <img src={blogIcon} alt="blog Icon" />
              <span>Blog</span>
            </LinkWrapper>
          </SocialLinks>
        </SocialWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
