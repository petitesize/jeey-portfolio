import JYIMG from "@assets/jy.jpg";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const AboutSection = styled.section`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 80px 10rem;

  @media screen and (max-width: 991px) {
    padding: 80px 6rem;
  }

  @media (max-width: 768px) {
    justify-content: center;

    padding: 80px 4rem;
  }
`;

const AboutText = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #0000000a;
  color: ${(props) => props.theme.colors.orange000};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  flex-direction: row-reverse;
  border-radius: 1rem;
  border: 2px solid ${(props) => props.theme.colors.black000};

  /* &:hover .text {
    opacity: 0;
  } */

  @media (max-width: 768px) {
    height: 80vh;
    flex-direction: column-reverse;
  }
`;

const Text = styled.div`
  position: relative;
  z-index: 100;
  /* width: 50%; */
  transition: all 0.3s;
  font-size: 18px;
  margin-right: 2rem;

  @media screen and (max-width: 991px) {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    /* width: 80%; */
    padding: 0 1rem;
  }
`;

const ImgWrapper = styled.div`
  width: 20vh;
  height: 25vh;
  border-radius: 50%;
  overflow: hidden;
  /* filter: grayscale(100%); */
  transition: all 0.3s;

  @media screen and (max-width: 991px) {
    margin: 0 0.5rem;
  }
`;

const TextLine = styled.p<{ isVisible: boolean }>`
  color: ${(props) => props.theme.colors.black000};
  letter-spacing: 0.006em;
  font-size: 1rem;
  opacity: 0; // 처음에는 보이지 않도록 설정
  /* isVisible일 때에만 fallDown 애니메이션 적용 */
  animation: ${(props) => props.isVisible && fallDown} 0.6s ease forwards;

  &:not(:first-child) {
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    font-size: 0.925rem;
    text-align: center;
  }

  font-family: "Pretendard-Regular";

  > strong {
    font-size: 1.125rem;
    /* box-shadow: inset 0 -2px 0 0 ${(props) => props.theme.colors.rose100}; */
    /* color: ${(props) => props.theme.colors.white000}; */
    transition: box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: inline-block;
    font-family: "Pretendard-SemiBold";

    &:hover {
      box-shadow: none;
      opacity: 0.64;
      transform: skewY(3deg);
    }

    @media screen and (max-width: 991px) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 991px) {
    font-size: 0.9rem;
  }
`;

// 위에서 아래로 내려오는 애니메이션
const fallDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const About = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]); // 스크롤 위치에서 보일 텍스트 index를 저장할 배열
  const textRef = useRef<HTMLDivElement>(null); // Text div에 접근할 Ref

  //   스크롤 위치에 따라 한 줄씩 텍스트라인이 보이게 하는 함수
  const handleScroll = () => {
    if (textRef.current) {
      // Text div가 top 에서 얼마나 떨어져 있는지, 스크롤 할 때마다 변경
      const { top } = textRef.current.getBoundingClientRect();
      // 화면 상단 90%를 지정. 즉, 화면 하단 10% 지점에서부터 텍스트가 나타나게끔. 화면의 높이 기준이므로 고정
      const scrollThreshold = window.innerHeight * 0.9;

      //   화면에 보일 텍스트라인을 저장할 배열
      const newVisibleLines = [];
      //   현재 스크롤 한 시점의 top이 지정한 높이를 넘었으면 배열에 텍스트라인을 넣어준다.
      //   한 줄당 56px정도 차를 주어 스크롤을 내릴 때 마다 한 줄씩 나타나는 느낌을 주도록 한다.
      for (let i = 0; i < aboutText.desc.length; i++) {
        if (top + i * 36 < scrollThreshold) {
          newVisibleLines.push(i);
        }
      }
      setVisibleLines(newVisibleLines);
    }
  };

  //   스크롤 할 때마다 handleScroll 함수 실행
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // 언마운트 시 리스너 제거는 꼭 해주자
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutText = {
    title: "프론트엔드 개발자 안지영",
    desc: [
      "안녕하세요, <strong>소통</strong>을 중요시하는 개발자 안지영입니다. ",
      "<br />",
      "2년 간의 QA 업무로 프로젝트의 중심에서 <strong>사용자 경험</strong> 향상에 기여해왔으며",
      "사용자 중심 사고를 바탕으로 서비스를 개발하며, <strong>커뮤니케이션</strong>에 능통합니다.",
      "<br />",
      "이제, 직접 서비스를 개발하여 사용자에게 최적의 경험을 제공하고자 합니다.",
      "서비스가 어떻게 전달될 지를 고민하고 도전하여 항상 성장해나가겠습니다.",
    ],
  };

  return (
    <AboutSection id="about">
      {/* <AboutTitle>About</AboutTitle> */}
      <AboutText>
        <Text className="text" ref={textRef}>
          {aboutText.desc.map((line, index) => (
            <TextLine
              key={index}
              isVisible={visibleLines.includes(index)}
              dangerouslySetInnerHTML={{ __html: line }}
            ></TextLine>
          ))}
        </Text>
        <ImgWrapper className="img">
          <img src={JYIMG}></img>
        </ImgWrapper>
      </AboutText>
    </AboutSection>
  );
};

export default About;
