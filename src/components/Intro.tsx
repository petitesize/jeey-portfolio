import JYIMG from "@assets/jy.jpg";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const IntroSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IntroText = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.colors.black000};
  color: ${(props) => props.theme.colors.orange000};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  flex-direction: row-reverse;

  /* &:hover .text {
    opacity: 0;
  } */

  &:hover .img {
    /* filter: grayscale(0); */
  }
`;

const Text = styled.div`
  position: relative;
  z-index: 100;
  width: 50%;
  transition: all 0.3s;
  font-size: 18px;

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const ImgWrapper = styled.div`
  width: 20vh;
  height: 25vh;
  border-radius: 50%;
  overflow: hidden;
  /* filter: grayscale(100%); */
  transition: all 0.3s;

  @media (max-width: 320px) {
    width: 20vh;
    height: 20vh;
  }
`;

const TextLine = styled.p<{ isVisible: boolean }>`
  font-size: 16px;
  opacity: 0; // 처음에는 보이지 않도록 설정
  /* isVisible일 때에만 fallDown 애니메이션 적용 */
  animation: ${(props) => props.isVisible && fallDown} 0.6s ease forwards;

  &:not(:first-child) {
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  font-family: "Pretendard-Regular";
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

const Intro = () => {
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
      for (let i = 0; i < introText.desc.length; i++) {
        if (top + i * 56 < scrollThreshold) {
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

  const introText = {
    title: "프론트엔드 개발자 안지영",
    desc: [
      "첫 번째 문장",
      "두 번째 문장",
      "세 번째 문장",
      "네 번째 문장",
      "다섯 번째 문장",
    ],
  };

  return (
    <IntroSection>
      <IntroText>
        <Text className="text" ref={textRef}>
          {introText.desc.map((line, index) => (
            <TextLine key={index} isVisible={visibleLines.includes(index)}>
              {line}
            </TextLine>
          ))}
        </Text>
        <ImgWrapper className="img">
          <img src={JYIMG}></img>
        </ImgWrapper>
      </IntroText>
    </IntroSection>
  );
};

export default Intro;
