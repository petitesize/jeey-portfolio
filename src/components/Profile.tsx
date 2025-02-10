import styled from "styled-components";
import JYIMG from "@assets/jy.jpg";
import { Title, TitleDivider } from "./Title";

const AboutSection = styled.section`
  height: 100%;
  padding: 80px 9rem;
  @media (max-width: 768px) {
    padding: 80px 4rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10rem;
  align-items: start;
  max-width: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ProfilePhoto = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 16px;
  object-fit: cover;
  display: block;
  margin: 0 5rem;
  /* border: 1px solid ${(props) => props.theme.colors.black000}; */
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const InfoSection = styled.div`
  display: grid;
  gap: 20px;
`;

const Section = styled.div`
  /* border-left: 3px solid ${(props) => props.theme.colors.black000}; */
  padding-left: 15px;
  > p {
    margin-top: 4px;
    /* > span {
      color: ${(props) => props.theme.colors.gray400};
    } */
  }
  @media (max-width: 768px) {
    border-left: none;
  }
`;

const SectionTitle = styled.a`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.black000};
  box-shadow: 0 2.5px 0 0 ${(props) => props.theme.colors.rose300};
`;

const Profile = () => {
  return (
    <AboutSection id="about">
      <TitleDivider />
      <Title>About</Title>
      <Container>
        {/* 프로필 사진 */}
        <div>
          <ProfilePhoto src={JYIMG} alt="Profile Photo" />
        </div>

        {/* 정보 섹션 */}
        <InfoSection>
          <Section>
            <SectionTitle>Certificate</SectionTitle>
            <p>
              SQL개발자(SQLD자격) <span>(최종합격)</span>
            </p>
            <p>
              컴퓨터활용능력1급 <span>(최종합격)</span>
            </p>
            <p>
              정보처리기사 <span>(필기합격)</span>
            </p>
            <p>
              2종보통운전면허 <span>(최종합격)</span>
            </p>
          </Section>

          <Section>
            <SectionTitle>Career</SectionTitle>
            <p>'(주)엑스엘게임즈' 모바일게임QA실 (2021.05 ~ 2023.08)</p>
            <p>
              ‘(주)엔씨소프트’ 모바일게임QA실 하계인턴십 (2019.07 ~ 2019.08)
            </p>
          </Section>

          <Section>
            <SectionTitle>Education</SectionTitle>
            <p>부트캠프 엘리스 소프트웨어 엔지니어링 트랙 8기 수료</p>
            <p>1차 프로젝트 최우수상</p>
          </Section>
        </InfoSection>
      </Container>
    </AboutSection>
  );
};

export default Profile;
