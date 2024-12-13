import styled from "styled-components";
import aws from "@assets/icon/aws.png";
import express from "@assets/icon/express.png";
import firebase from "@assets/icon/Firebase.png";
import gitlab from "@assets/icon/icons8-gitlab-240.png";
import jira from "@assets/icon/icons8jira240.png";
import js from "@assets/icon/js.png";
import mongoDB from "@assets/icon/mongoDB.png";
import nodeJS from "@assets/icon/nodeJS.png";
import react from "@assets/icon/react.png";
import recoil from "@assets/icon/recoil.png";
import styledC from "@assets/icon/styled-component.png";
import ts from "@assets/icon/typescript.png";
import vercel from "@assets/icon/vercel-svgrepo-com.png";

const SkillsSection = styled.section`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 80px 9rem;
  @media (max-width: 768px) {
    padding: 80px 4rem;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 2.75rem;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 1.6;
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 4rem;
  color: ${(props) => props.theme.colors.black000};
  border-top: 0.15rem solid ${(props) => props.theme.colors.black000};
  width: 27%;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
`;

const SkillsInner = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CategoryInner = styled.div`
  width: 65%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// 스택 별 카테고리 div: 프론트엔드, 백엔드..
const SkillCategory = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  position: relative;
  /* display: inline-block; */
`;

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  text-align: center;
  justify-content: space-around;
  padding: 1rem;
  width: 70px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.white000};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
  object-fit: cover;
`;

const StackName = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.black000};
  font-weight: 500;
  line-height: 1.2;
  width: 80px;
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsInner>
        <SkillsTitle>Skills</SkillsTitle>
        <CategoryInner>
          <SkillCategory>
            <CategoryTitle>Frontend</CategoryTitle>
            <ItemContainer>
              <SkillItem>
                <Icon src={js} />
                <StackName>Javascript</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={ts} />
                <StackName>Typescript</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={react} />
                <StackName>React</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={styledC} />
                <StackName>Styled</StackName>
                <StackName>Components</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={recoil} />
                <StackName>Recoil</StackName>
              </SkillItem>
            </ItemContainer>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Backend</CategoryTitle>
            <ItemContainer>
              <SkillItem>
                <Icon src={nodeJS} />
                <StackName>NodeJs</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={express} />
                <StackName>Express</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={mongoDB} />
                <StackName>mongoDB</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={firebase} />
                <StackName>Firebase</StackName>
              </SkillItem>
            </ItemContainer>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Devops</CategoryTitle>
            <ItemContainer>
              <SkillItem>
                <Icon src={aws} />
                <StackName>AWS·S3</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={vercel} />
                <StackName>Vercel</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={gitlab} />
                <StackName>Gitlab</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src={jira} />
                <StackName>Jira</StackName>
              </SkillItem>
            </ItemContainer>
          </SkillCategory>
        </CategoryInner>
      </SkillsInner>
    </SkillsSection>
  );
};

export default Skills;
