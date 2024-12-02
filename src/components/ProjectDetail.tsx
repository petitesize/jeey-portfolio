import { useEffect, useState } from "react";
import styled from "styled-components";
import CarebuddyImg from "@assets/project/carebuddy.png";
import C1 from "@assets/project/details/c1.png";
import C2 from "@assets/project/details/c2.png";
import C3 from "@assets/project/details/c3.png";
import C4 from "@assets/project/details/c4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination } from "swiper/modules";

const DetailWrapper = styled.div`
  padding: 80px 9rem;
  @media (max-width: 768px) {
    padding: 80px 4rem;
  }
`;

const Title = styled.h1`
  padding-top: 6rem;
  font-size: 2.75rem;
  font-family: "Paperlogy-8ExtraBold";
  color: ${(props) => props.theme.colors.rose300};
`;

const TextWrapper = styled.div``;

const Text = styled.p`
  letter-spacing: 0.006em;
  margin-top: 0;
  line-height: 1.6;
`;

const Contribution = styled.h3`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
`;

const ContributionList = styled.ul`
  margin-bottom: 4rem;
  line-height: 1.6;
`;

const DetailsList = styled.ul`
  margin-bottom: 4rem;
  list-style: disc;
  margin-left: 1rem;
  line-height: 1.7;
`;

const Header = styled.h2`
  letter-spacing: 0;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
`;

// 공톰 컴포넌트 분리 가능 고려
const AnimationWrapper = styled.div<{ isLoaded: boolean }>`
  transform: translate3d(0, ${(props) => (props.isLoaded ? "0" : "-80px")}, 0);
  transition: transform 1s ease-out;
`;

const Main = styled.main<{ isLoaded: boolean }>`
  background-color: ${(props) => props.theme.colors.orange000};

  opacity: ${(props) => (props.isLoaded ? "1" : "0")};
  transition: opacity 1.5s ease-in;
`;

const ProjectDetail = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  window.scrollTo(0, 0);
  useEffect(() => {
    // 컴포넌트가 마운트되고 로딩이 완료되면 애니메이션 실행
    setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsOpacity(true), 300);
    }, 300);
  }, []);

  return (
    <DetailWrapper>
      <AnimationWrapper isLoaded={isLoaded}>
        <Main isLoaded={isOpacity}>
          <div>
            <Title>반려동물 질병 커뮤니티 플랫폼, Carebuddy</Title>
          </div>
          <ButtonWrapper>
            <Button onMouseMove={handleMouseMove}>
              <a href="mailto:petitesize22@gmail.com">사이트 방문</a>
              <ShineEffect
                className="shine-effect"
                style={{
                  transform: `translate3d(${mousePosition.x - 50}px, ${
                    mousePosition.y - 50
                  }px, 0)`,
                }}
              />
            </Button>
            <Button onMouseMove={handleMouseMove}>
              <a>GitHub</a>
              <ShineEffect
                className="shine-effect"
                style={{
                  transform: `translate3d(${mousePosition.x - 50}px, ${
                    mousePosition.y - 50
                  }px, 0)`,
                }}
              />
            </Button>
            <Button onMouseMove={handleMouseMove}>
              <a>PDF 문서</a>
              <ShineEffect
                className="shine-effect"
                style={{
                  transform: `translate3d(${mousePosition.x - 50}px, ${
                    mousePosition.y - 50
                  }px, 0)`,
                }}
              />
            </Button>
          </ButtonWrapper>
          <ImageWrapper className="green">
            <img src={CarebuddyImg}></img>
          </ImageWrapper>
          <div>
            <Header>Overview</Header>

            <div>
              <TextWrapper>
                <Text>
                  케어버디는 같은 아픔을 가진 반려동물의 보호자들의
                  커뮤니티이며, 건강 다이어리를 통해 반려동물의 건강을 관리할 수
                  있는 플랫폼입니다.
                </Text>
                <Text>
                  질병 간 커뮤니티 그룹 가입을 통해 보호자 간의 소통을 지원하며,
                  진료 기록을 관리할 수 있는 기능을 통해 반려동물 건강 관리에
                  도움을 주기 위해 만들어진 서비스입니다.
                </Text>
                <Text>
                  또한, 지역 별 동물 병원 및 동물 약국 검색 기능으로 편리한 동물
                  의료 정보 검색을 제공합니다.
                </Text>
              </TextWrapper>
              <Contribution>Major Contribution</Contribution>
              <ContributionList>
                <li>프로젝트 기획 및 UI/UX 디자인</li>
                <li>반려동물 프로필 & 진료 기록 CRUD</li>
                <li>커뮤니티 게시글 등록</li>
                <li>전국 동물병원 및 약국 검색</li>
                <li>AWS S3 이미지 URL 생성 & 업로드</li>
              </ContributionList>
            </div>
          </div>

          <Divider />
          <div>
            <Header>Project Details</Header>
            <DetailsList>
              <li>
                <em>Recoil</em> 사용하여 전역 상태 관리
              </li>
              <li>
                <em>AWS S3 Bucket</em>를 이용한 이미지 URL 생성 및 업로드 기능
                구현
              </li>
              <li>
                <em>Vite</em> 기반 ESLint와 TypeScript를 적용한 개발 환경 구성
              </li>
              <li>
                <em>ESLint</em>로 코드 품질 유지 및 <em>TypeScript</em>를 통해
                컴파일 단계에서 타입 안정성 보장
              </li>
              <li>
                <em>react-icons / styled-components</em> 등 사용하여 스타일링
              </li>
              <li>
                <em>rc-pagination</em> 사용하여 리스트의 페이지네이션 처리 및
                테이블 컴포넌트 공통화
              </li>
              <li>
                <em>swiper</em> 사용하여 반려동물 프로필 슬라이더 UI로 구현
              </li>
            </DetailsList>
          </div>

          <CarouselWrapper>
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              loop={true} // 슬라이드 무한 반복
              spaceBetween={50} // 슬라이드 간격 설정
              slidesPerView={1.4} // 한 번에 보여줄 슬라이드 수 (1.5개 슬라이드 보이게 설정)
              centeredSlides={true} // 중앙 정렬하여 양 옆에 슬라이드가 보이도록 설정
            >
              <SwiperSlide>
                <img src={C2} alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={C1} alt="Slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={C3} alt="Slide 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={C4} alt="Slide 3" />
              </SwiperSlide>
            </Swiper>
          </CarouselWrapper>
        </Main>
      </AnimationWrapper>
    </DetailWrapper>
  );
};

export default ProjectDetail;

const ButtonWrapper = styled.div`
  margin: 3rem 0;
  grid-column-gap: 0.75rem;
  display: flex;
  justify-content: flex-end;
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
  padding: 0.6rem 1rem;
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

const ImageWrapper = styled.div`
  background-image: linear-gradient(
    -45deg,
    rgb(109, 152, 122, 0.5),
    rgb(109, 152, 122, 0.4),
    rgb(223, 233, 224, 0.5)
  );
  padding: 4rem 8rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;

  position: relative;
  opacity: 1;
  border: 1px white solid;

  img {
    width: 100%; /* 카드 내부의 이미지를 꽉 채움 */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    aspect-ratio: 16 / 9;
    max-height: 100%;
    display: block;
    border-radius: 0.75rem; /* 모서리가 카드와 동일하게 둥글도록 설정 */
    transition: transform 0.3s;
    object-fit: cover;
  }

  &.green {
    background-image: linear-gradient(
      -45deg,
      rgb(109, 152, 122, 0.5),
      rgb(109, 152, 122, 0.4),
      rgb(223, 233, 224, 0.5)
    );
  }
  &.yellow {
    background-image: linear-gradient(
      -45deg,
      rgb(253, 232, 158, 1),
      rgb(253, 232, 158, 0.5),
      rgb(253, 232, 158, 0.2)
    );
  }
  &.white {
    background-image: linear-gradient(
      -45deg,
      rgb(124, 127, 125, 1),
      rgb(250, 251, 250, 1),
      rgb(124, 127, 125, 1),
      rgb(250, 251, 250, 1)
    );
  }
  &.pink {
    background-image: linear-gradient(
      -45deg,
      rgb(255, 222, 226, 1),
      rgb(255, 222, 226, 0.5),
      rgb(255, 222, 226, 0.2)
    );
  }
  &.gold {
    background-image: linear-gradient(
      -45deg,
      rgb(170, 147, 136, 0.9),
      rgb(232, 222, 212, 1),
      rgb(170, 147, 136, 0.6),
      rgb(232, 222, 212, 1)
    );
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Divider = styled.div`
  background-color: ${(props) => props.theme.colors.black000};
  height: 0.0625rem;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease; // 슬라이드 전환 부드럽게
  }

  .swiper-pagination-bullet {
    background-color: ${(props) =>
      props.theme.colors.black000}; // 페이지네이션 색상
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.colors.black000}; // 네비게이션 버튼 색상
  }

  /* Swiper의 기본 스타일을 덮어쓰기 */
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 32px; /* 화살표 크기 조정 */
  }
`;
