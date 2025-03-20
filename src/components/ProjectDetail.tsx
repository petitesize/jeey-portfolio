import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination } from "swiper/modules";
import { projectDetailData } from "@/constants";
import { useLocation, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { pathname } = useLocation();
  // 열려있는 상세 desc의 index를 저장하는 number 배열
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // URL에서 projectId를 가져와서, 해당 id와 동일한 id를 프로젝트 데이터에서 찾아옴
  const { projectId } = useParams();
  const project = projectDetailData.find((p) => p.id === projectId);

  const toggleDetail = (
    index: number,
    e: React.MouseEvent<HTMLSpanElement>
  ) => {
    e.stopPropagation();
    // 열려있는 desc index 배열 전달해서 있으면 없애서 닫기, 없으면 추가해서 열기
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  useEffect(() => {
    // 컴포넌트가 마운트되고 로딩이 완료되면 애니메이션 실행
    setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsOpacity(true), 300);
    }, 300);
  }, []);

  if (!project) {
    return <div></div>;
  }

  return (
    <DetailWrapper>
      <AnimationWrapper isLoaded={isLoaded}>
        <Main isLoaded={isOpacity}>
          <div>
            <Title>{project.title}</Title>
          </div>
          <ButtonWrapper>
            {project.buttons.map((button, index) => (
              <Button onMouseMove={handleMouseMove} key={index}>
                <a target="_blank" href={button.link}>
                  {button.text}
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
            ))}
          </ButtonWrapper>
          <ImageWrapper className={project.backgroundColor}>
            <img src={project.img}></img>
          </ImageWrapper>
          <div>
            <Header>Overview</Header>

            <div>
              <TextWrapper>
                {project.desc.map((desc, index) => (
                  <Text key={index}>{desc}</Text>
                ))}
              </TextWrapper>
              {project.contribution && (
                <>
                  <Contribution>Major Contribution</Contribution>
                  <ContributionList>
                    {project.contribution.map((c, index) => (
                      <li key={index}>{c}</li>
                    ))}
                  </ContributionList>
                </>
              )}
            </div>
          </div>

          <Divider />
          <div>
            <Header>Project Details</Header>
            {project.detailsDesc && (
              <DetailsList>
                {project.detailsDesc.map((detail, index) => {
                  const isOpen = openIndexes.includes(index);
                  const hasDescription =
                    "description" in detail && !!detail.description;

                  return (
                    <DetailItem key={index}>
                      <DetailTitle
                        hasDescription={hasDescription}
                        onClick={(e) =>
                          hasDescription && toggleDetail(index, e)
                        }
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: detail.title }}
                        />
                      </DetailTitle>

                      {isOpen && hasDescription && (
                        <DetailDesc>{detail.description}</DetailDesc>
                      )}
                    </DetailItem>
                  );
                })}
              </DetailsList>
            )}
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
              {project.detailsImg.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt="Slide 1" />
                </SwiperSlide>
              ))}
            </Swiper>
          </CarouselWrapper>
        </Main>
      </AnimationWrapper>
    </DetailWrapper>
  );
};

export default ProjectDetail;

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
  line-height: 1.6;
`;

const DetailsList = styled.ul`
  margin-bottom: 4rem;
  list-style: disc;
  margin-left: 1rem;
  line-height: 1.7;
  > li {
    margin-bottom: 4px;
  }
`;

const DetailDesc = styled.p`
  margin: 4px 0;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.gray500};
`;

const DetailItem = styled.li`
  margin-bottom: 10px;
`;

const DetailTitle = styled.span<{ hasDescription: boolean }>`
  display: inline-block;
  font-weight: bold;
  ${({ hasDescription }) =>
    hasDescription &&
    `& em {
    cursor: pointer;
    background-color: #ffe4e8; 
    padding: 0.125em 0.3em; 
    font-weight: bold;  
    &:hover {
      background-color: rgba(255, 153, 173,0.5);
      
    }
      transition: all 0.3s ease;
    }`}
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
  transition: opacity 1s ease-in;
`;

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
  &.brown {
    background-image: linear-gradient(
      -45deg,
      rgb(160, 128, 108, 0.9),
      rgb(200, 170, 140, 0.8),
      rgb(225, 205, 180, 0.6),
      rgb(245, 230, 210, 0.4)
    );
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Divider = styled.div`
  background-color: ${(props) => props.theme.colors.black000};
  height: 0.0625rem;
  margin-top: 4rem;
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
