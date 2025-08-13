import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FixedTitle, TitleDivider } from "./Title";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import CarebuddyImg from "@assets/project/carebuddy.png";
import JYPortImg from "@assets/project/portjeey.png";
import PhotoSplash from "@assets/project/PhotoSplash.png";
import Jwitter from "@assets/project/Jwitter.png";
import FloraDer from "@assets/project/FloraDer.png";
import SearchCat from "@assets/project/SearchCat.png";
import Unretired from "@assets/project/Unretired.png";

// 섹션 전체 영영
const ProjectsSection = styled.section`
  height: 100%;
  padding: 80px 9rem;
  @media (max-width: 768px) {
    padding: 80px 4rem;
  }
`;

// 프로젝트 필터 영역
const Filter = styled.div`
  display: flex; // 버튼 가로 배치 할 것
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  margin-top: 2rem;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 1.25rem;
  }

  @media (max-width: 480px) {
    margin-top: 5rem;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  z-index: 10;
  height: 2.25rem;
  font-size: 1rem;
  font-weight: bold;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.rose300 : theme.colors.rose100};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.black000 : "#000000a8"};
  border: none;
  border-radius: 10075rem;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    transform: translateY(-0.0675rem);
  }

  &:active {
    transform: scale(0.98) translate(0);
  }

  @media (max-width: 768px) {
    height: 2rem;
    padding: 0.325rem 0.875rem;
    font-size: 0.875rem;
  }

  transform: scale(0.98) translate(0);
`;

const ProjectGrid = styled.div`
  display: grid;
  margin: 6rem 0;
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  transition: all, opacity 300ms ease-in-out;
  opacity: 1;

  @media (max-width: 768px) {
    margin-top: 3.5rem;
  }
`;

const ImageWrapper = styled.div`
  background-image: linear-gradient(
    -45deg,
    rgb(109, 152, 122, 0.5),
    rgb(109, 152, 122, 0.4),
    rgb(223, 233, 224, 0.5)
  );
  padding: 2rem 4rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;

  position: relative;
  opacity: 1;
  border: 1px none solid;

  &.orange {
    background-image: linear-gradient(
      -45deg,
      rgba(249, 193, 99, 0.9),
      rgba(249, 204, 128, 0.8),
      rgb(255, 227, 189)
    );
  }
  &.green {
    background-image: linear-gradient(
      -45deg,
      rgb(109, 152, 122, 0.8),
      rgb(109, 152, 122, 0.7),
      rgb(223, 233, 224, 0.8)
    );
  }
  &.yellow {
    background-image: linear-gradient(
      -45deg,
      rgb(253, 232, 158, 1),
      rgb(253, 232, 158, 0.8),
      rgb(253, 232, 158, 0.8)
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
      rgb(255, 222, 226, 0.8),
      rgb(255, 222, 226, 0.8)
    );
  }
  &.gold {
    background-image: linear-gradient(
      -45deg,
      rgb(170, 147, 136, 0.9),
      rgb(232, 222, 212, 1),
      rgb(170, 147, 136, 0.8),
      rgb(232, 222, 212, 1)
    );
  }
  &.brown {
    background-image: linear-gradient(
      -45deg,
      rgb(160, 128, 108, 0.9),
      rgb(200, 170, 140, 0.8),
      rgb(225, 205, 180, 0.8),
      rgb(245, 230, 210, 0.8)
    );
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const ProjectCard = styled.div`
  overflow: hidden; /* 카드 크기를 넘어가는 이미지 숨김 */
  position: relative; /* 필수: 자식 요소들이 위치를 설정할 수 있게 */
  border-radius: 10px; /* 부드러운 모서리 */
  cursor: pointer;

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

  &:hover {
    transform: skew(0.72deg, 0.72deg);
  }

  transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const ProjectInfo = styled.div`
  padding: 1rem;
  /* text-align: center; */
  /* background: rgba(0, 0, 0, 0.6); */
  color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  h2 {
    font-size: 1.3rem;
    position: relative;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    font-family: "Pretendard-Regular";
    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }

  p {
    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0.875rem;
    padding-left: 0.125rem;
  }
`;

const ProjectTitle = styled.div`
  width: 100%;
  display: flex;
  div {
    font-size: 1.3rem;
    padding-left: 0.25rem;
    font-family: "Pretendard-SemiBold";
  }
`;

type FilterType = "All" | "Team" | "Personal";

const Projects = () => {
  // 버튼 필터 상태
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const projects: Project[] = [
    {
      id: "unretired",
      color: "orange",
      title: "Un:Retired",
      description:
        "50+ 베테랑에게 배우는 진짜 인생 수업, 온라인 강의 플랫폼 Un:Retired",
      tags: "#React #TypeScript #Zustand #TailwindCSS #RadixUI #TanStakReactQuery #AWS·S3·CloudFront",
      img: Unretired,
      type: "Team",
      link: "#",
    },
    {
      id: "carebuddy",
      color: "green",
      title: "Carebuddy",
      description: "반려동물 질병 커뮤니티 플랫폼, 케어버디",
      tags: "#React #TypeScript #Recoil #NodeJs #MongoDB #Vercel #AWS·S3",
      img: CarebuddyImg,
      type: "Team",
      link: "#",
    },
    {
      id: "JYportfolio",
      color: "gold",
      title: "JY Portfolio",
      description: "포트폴리오 웹사이트",
      tags: "#React #Typescript #Redux #Redux-Toolkit #Responsive",
      img: JYPortImg,
      type: "Personal",
      link: "#",
    },
    {
      id: "searchCat",
      color: "brown",
      title: "고양이 사진 검색 사이트",
      description: "Vanilla JS(ES6)로만 구현해보는 고양이 사진 검색 사이트",
      tags: "#ES6 #JavaScipt #HTML&CSS",
      img: SearchCat,
      type: "Personal",
      link: "#",
    },

    {
      id: "photoSplash",
      color: "white",
      title: "PhotoSplash",
      description: "Unsplash Image API를 활용한 이미지 검색 사이트",
      tags: "#React #Typescript #Recoil #SCSS #Axios #Node.js",
      img: PhotoSplash,
      type: "Personal",
      link: "#",
    },
    {
      id: "jwitter",
      color: "pink",
      title: "Jwitter",
      description: "X(Twitter) 클론 코딩",
      tags: "#React #Typescript #Firebase #Styled-components",
      img: Jwitter,
      type: "Personal",
      link: "#",
    },
    {
      id: "floraNder",
      color: "yellow",
      title: "Flora & Dér",
      description: "꽃다발 온라인 커스텀 쇼핑몰 사이트",
      tags: "#ES6 #JavaScipt #MongoDB #HTML&CSS #AWS·S3",
      img: FloraDer,
      type: "Team",
      link: "#",
    },
  ];

  const filters: FilterType[] = ["All", "Team", "Personal"];

  return (
    <ProjectsSection id="projects">
      <TitleDivider />
      <FixedTitle>Projects</FixedTitle>
      <Filter>
        {/* 배열 매핑 시 꼭 key 설정해주자 */}
        {/* activeFilter 상태와 filter 이름이 같은 필터를 true로 하여 활성화 */}
        {/* 클릭 시, 활성화하는 이벤트 추가 */}
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            $active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </Filter>
      <ProjectGrid>
        <ProjectList projects={projects} filter={activeFilter} />
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;

type Project = {
  id: number | string;
  color: string;
  title: string;
  description: string;
  tags: string;
  img: string;
  type: "Team" | "Personal";
  link: string;
};

// 프로젝트 리스트 컴포넌트 프롭 타입 정의
type ProjectListProps = {
  projects: Project[];
  filter: FilterType;
};

type Props = {
  $isFirst: boolean;
} & React.ComponentProps<typeof Link>;

// styled(Link)는 ref를 Link로 전달해주지 않음
// 단순히 ref를 외부에서 받아와서 넘겨주기 위해 forwardRef 사용
const RawProjectLinkWrapper = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, ...rest }, ref) => (
    <Link ref={ref} className={className} {...rest}>
      {children}
    </Link>
  )
);

const ProjectLinkWrapper = styled(RawProjectLinkWrapper)<{ $isFirst: boolean }>`
  transition: all, opacity 300ms;
  /* 주요 프로젝트의 경우 grid-column을 2칸을 차지하게 만들어서 강조할 것 */
  ${({ $isFirst }) =>
    $isFirst &&
    `
    grid-column: span 2;
  `}

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
  }

  @media (max-width: 768px) {
    grid-column: span 2;
  }
`;

const ProjectList: React.FC<ProjectListProps> = ({ projects, filter }) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  // 슬라이드마다의 ref를 담아둘 Map 생성
  const nodeRefs = useRef(new Map());

  // 슬라이드(프로젝트)의 key로 ref 생성
  const getNodeRef = (key: string) => {
    if (!nodeRefs.current.has(key)) {
      nodeRefs.current.set(key, React.createRef());
    }
    return nodeRefs.current.get(key);
  };

  useEffect(() => {
    // All 일 때에는 모든 프로젝트를 보여준다
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      // 그 외의 경우 필터에 맞는 프로젝트만 보여준다. project의 type에 지정
      setFilteredProjects(
        projects.filter((project) => project.type === filter)
      );
    }
  }, [filter, projects]);

  return (
    <TransitionGroup component={null}>
      {filteredProjects.map((project, index) => {
        const key = `${project.id}-${filter}`;
        // key 값으로 고유 ref 생성
        const nodeRef = getNodeRef(key);

        return (
          // All 필터일 때 메인 프로젝트(index 0 프로젝트에 지정)를 강조할 것
          // isFirst 프롭은 grid 컬럼을 두개로 지정
          <CSSTransition
            key={key}
            timeout={0}
            classNames="fade"
            // React 18부터는 findDOMNode 에러가 나기 때문에, 해당 프롭 사용하여 에러 해결
            // 애니메이션 적용할 대상 DOM을 알려주는 prop
            nodeRef={nodeRef}
          >
            <ProjectLinkWrapper
              // 실제 해당 DOM에 ref 연결
              ref={nodeRef}
              to={`/project/${project.id}`}
              $isFirst={index === 0 && filter === "All"}
            >
              <ProjectCard key={project.id} className="fade-in">
                <ImageWrapper className={project.color}>
                  <img src={project.img}></img>
                </ImageWrapper>
                <ProjectInfo>
                  <ProjectTitle>
                    <h2>{project.title}</h2>
                    <div>→</div>
                  </ProjectTitle>
                  <h3>{project.description}</h3>
                  <p>{project.tags}</p>
                </ProjectInfo>
              </ProjectCard>
            </ProjectLinkWrapper>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
