import styled from "styled-components";

const SkillsSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 16px;
  padding-top: 80px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
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
    width: 100%;
    font-size: 2rem;
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
                <Icon src="src/assets/icon/js.png" />
                <StackName>Javascript</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src="src\assets\icon/typescript.png" />
                <StackName>Typescript</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src="src\assets\icon/react.png" />
                <StackName>React</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src="src\assets\icon/styled-component.png" />
                <StackName>Styled</StackName>
                <StackName>Components</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src="src\assets\icon/recoil.png" />
                <StackName>Recoil</StackName>
              </SkillItem>
            </ItemContainer>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Backend</CategoryTitle>
            <ItemContainer>
              <SkillItem>
                <Icon src="src/assets/icon/nodeJS.png" />
                <StackName>Node.js</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src="src\assets\icon/express.png" />
                <StackName>Express</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src="src\assets\icon/mongoDB.png" />
                <StackName>mongoDB</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src="src\assets\icon/Firebase.png" />
                <StackName>Firebase</StackName>
              </SkillItem>
            </ItemContainer>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Infra</CategoryTitle>
            <ItemContainer>
              <SkillItem>
                <Icon src="src/assets/icon/aws.png" />
                <StackName>AWS</StackName>
              </SkillItem>
              <SkillItem>
                <Icon src="src\assets\icon/vercel-svgrepo-com.png" />
                <StackName>Vercel</StackName>
              </SkillItem>
            </ItemContainer>
          </SkillCategory>
        </CategoryInner>
      </SkillsInner>
    </SkillsSection>
  );
};

export default Skills;