import CarebuddyImg from "@assets/project/carebuddy.png";
import JYPortImg from "@assets/project/portjeey.png";
import PhotoSplash from "@assets/project/PhotoSplash.png";
import Jwitter from "@assets/project/Jwitter.png";
import FloraDer from "@assets/project/FloraDer.png";
import SearchCat from "@assets/project/SearchCat.png";
import C1 from "@assets/project/details/c1.png";
import C2 from "@assets/project/details/c2.png";
import C3 from "@assets/project/details/c3.png";
import C4 from "@assets/project/details/c4.png";
import P1 from "@assets/project/details/p1.png";
import P2 from "@assets/project/details/p2.png";
import PS1 from "@assets/project/details/ps1.png";
import PS2 from "@assets/project/details/ps2.png";
import J1 from "@assets/project/details/j1.png";
import J2 from "@assets/project/details/j2.png";
import F1 from "@assets/project/details/f1.png";
import F2 from "@assets/project/details/f2.png";
import F3 from "@assets/project/details/f3.png";
import F4 from "@assets/project/details/f4.png";
import S1 from "@assets/project/details/s1.png";
import S2 from "@assets/project/details/s2.png";

export const projectDetailData = [
  {
    id: "carebuddy",
    backgroundColor: "green",
    img: CarebuddyImg,
    title: "반려동물 질병 커뮤니티 플랫폼, Carebuddy",
    buttons: [
      { text: "사이트 방문", link: "https://carebuddy.vercel.app/" },
      { text: "GitHub", link: "https://github.com/care-buddy/Carebuddy" },
      {
        text: "프로젝트 소개",
        link: "https://drive.google.com/file/d/1FVLnqVvKNXyuykXMLpbXyErJeZIeKgEF/view",
      },
    ],
    desc: [
      "케어버디는 같은 아픔을 가진 반려동물의 보호자들의 커뮤니티이며, 건강 다이어리를 통해 반려동물의 건강을 관리할 수 있는 플랫폼입니다.",
      "질병 간 커뮤니티 그룹 가입을 통해 보호자 간의 소통을 지원하며, 진료 기록을 관리할 수 있는 기능을 통해 반려동물 건강 관리에 도움을 주기 위해 만들어진 서비스입니다.",
      "또한, 지역 별 동물 병원 및 동물 약국 검색 기능으로 편리한 동물 의료 정보 검색을 제공합니다.",
    ],
    contribution: [
      "프로젝트 기획 및 UI/UX 디자인",
      "반려동물 프로필 & 진료 기록 CRUD",
      "커뮤니티 게시글 등록",
      "전국 동물병원 및 약국 검색",
      "AWS S3 이미지 URL 생성 & 업로드",
    ],
    detailsDesc: [
      {
        title: "<em>swiper</em> 사용하여 반려동물 프로필 슬라이더 UI로 구현",
      },
      {
        title:
          "<em>rc-pagination</em> 사용하여 리스트의 페이지네이션 처리 및 테이블 컴포넌트 공통화",
        description:
          "커스터마이즈 가능한 속성들을 활용하여 케어버디 웹 테마와 디자인 일치",
      },
      {
        title:
          "<em>Axios Interceptor</em> 활용하여 반복되는 HTTP 요청을 일관되게 관리하며 코드의 재사용성을 향상",
      },

      {
        title: "<em>AWS S3 Bucket</em>를 이용한 이미지 URL 생성 및 업로드 기능",
        description:
          "AWS SDK를 사용하여 사용자가 업로드한 이미지 파일을 S3 버킷에 저장하며, URL을 생성하여 클라이언트에 반환하도록 구현",
      },
      {
        title: "<em>Recoil</em> 상태 관리로 반려동물 관리 및 진료 기록 구현",
        description:
          "선택된 반려동물의 고유 ID를 selectedIdState를 통해 Recoil로 상태 관리하며, 이를 반려동물 및 진료 기록 관련 API 호출의 기준으로 활용",
      },
      {
        title: "<em>Recoil</em> 상태 관리로 사용자 접근 제어 구현",
        description:
          "사용자의 로그인 상태를 관리하고, 라우팅 처리를 통해 로그인이 필요한 페이지에 대한 접근 제어 구현",
      },
      {
        title:
          "<em>Recoil</em>과 <em>JWT</em>를 활용하여 인증 오류 처리 및 자동 로그인 연장 구현",
        description:
          "백엔드 팀과 협업하여 서버로부터 새로운 accessToken을 받아오고, 이를 Recoil 상태에 저장하여 사용자 세션을 자동으로 연장하여 로그인 연장 구현",
      },

      {
        title: "<em>Vite</em> 기반 ESLint와 TypeScript를 적용한 개발 환경 구성",
      },
      {
        title:
          "<em>ESLint</em>로 코드 품질 유지 및 <em>TypeScript</em>를 통해 컴파일 단계에서 타입 안정성 보장",
      },
      {
        title: "<em>react-icons / styled-components</em> 등 사용하여 스타일링",
      },
    ],
    detailsImg: [C2, C1, C3, C4],
  },
  {
    id: "searchCat",
    backgroundColor: "brown",
    img: SearchCat,
    title: "고양이 사진 검색 사이트",
    buttons: [
      { text: "사이트 방문", link: "https://searching-cat.netlify.app/" },
      { text: "GitHub", link: "https://github.com/petitesize/search-cat" },
      { text: "Blog", link: "https://jee0.tistory.com/59" },
    ],
    desc: [
      "라이브러리나 프레임워크 없이 오픈 API를 활용하여 Vanilla JS(ES6)로만 반응형 웹을 구현하였습니다.",
      "랜덤한 고양이 또는 키워드에 맞는 고양이를 검색할 수 있으며, 검색 기록이 저장됩니다.",
      "원하는 고양이를 선택하여 상세 정보를 확인할 수 있습니다.",
      "다크모드가 지원됩니다.",
    ],

    detailsDesc: [
      {
        title:
          "<em>data-theme</em> 속성을 사용하여 OS 설정을 기반으로 동작하는 다크모드 구현",
      },
      {
        title:
          "<em>IntersectionObserver</em> 사용하여 다수의 이미지를 lazy load 개념으로 렌더링하며, 스크롤 페이징 구현",
      },
      {
        title:
          "<em>localStorage</em>에 다크모드, 검색 히스토리, 검색 결과를 저장",
      },

      {
        title:
          "라이브러리 없이 <em>HTML&CSS</em>만을 사용하여 슬라이드 배너 섹션 구현",
        description:
          "translateX와 flex 속성을 사용하여 배너 섹션을 구현하였으며, transition을 적용하여 슬라이드 효과 적용",
      },
      {
        title:
          "검색 결과 화면을 <em>Event Delegation</em> 기법을 이용하여 코드 단순화 및 메모리 절약",
        description:
          "각 이미지들의 클릭 이벤트를 Event Delegation 기법을 적용하여 등록",
      },
    ],
    detailsImg: [S1, S2],
  },

  {
    id: "JYportfolio",
    backgroundColor: "gold",
    img: JYPortImg,
    title: "개인 포트폴리오 웹사이트",
    buttons: [
      { text: "GitHub", link: "https://github.com/petitesize/jeey-portfolio" },
    ],
    desc: [
      "나만의 포트폴리오를 위한 웹사이트 개발",
      "Vite + React + TypeScript 환경에서 동적 라우팅과 반응형 웹을 구현한 웹사이트",
    ],

    detailsDesc: [
      {
        title: "<em>Lenis</em>를 이용한 부드러운 스크롤 애니메이션 구현",
      },
      {
        title:
          "<em>Redux Toolkit</em>을 활용해 전역 다크모드 상태 관리 및 토글 기능 구현",
        description:
          "theme 전역 상태로로 사용자 인터랙션에 따라 다크/라이트 모드를 관리",
      },
      {
        title:
          "<em>ThemeProvider</em>로 다크/라이트 테마 분기 및 스타일 일관성 확보 ",
        description:
          "라이트/다크 테마 객체를 분기하여 컴포넌트 단위에서 동적으로 색상을 적용하고, Redux를 통한 상태를 기반으로 테마 일관성 유지",
      },
      {
        title:
          "<em>styled-components</em> 및 <em>react-transition-group</em>을 활용한 스타일링과 애니메이션 구현",
      },
      {
        title: "<em>Swiper</em>를 이용하여 프로젝트 상세 슬라이더 UI 구현",
      },
      {
        title:
          "<em>ESLint</em>로 코드 품질 유지 및 <em>TypeScript</em>를 통해 컴파일 단계에서 타입 안정성 보장",
      },
      {
        title: "<em>Vite</em> 기반 빠르고 가벼운 개발 환경 설정",
      },
    ],
    detailsImg: [P1, P2],
  },

  {
    id: "photoSplash",
    backgroundColor: "white",
    img: PhotoSplash,
    title: "이미지 검색 사이트, PhotoSplash",
    buttons: [
      { text: "사이트 방문", link: "https://image-splash-iota.vercel.app/" },
      { text: "GitHub", link: "https://github.com/petitesize/ImageSplash" },
    ],
    desc: [
      "Unsplash Image API를 활용한 이미지 검색 사이트 만들기",
      "오픈 API와 Recoil 활용하여 키워드에 맞는 이미지를 검색하여 다운로드할 수 있습니다.",
      "마음에 드는 이미지를 북마크에 저장할 수 있습니다.",
    ],

    detailsDesc: [
      {
        title:
          "<em>Recoil</em> 중앙집중식 상태관리 라이브러리를 사용하여 이미지 검색 구현",
      },
      {
        title: "<em>SCSS</em>를 활용한 스타일링",
      },
      {
        title:
          "<em>react-simple-toasts</em> 모듈을 활용하여 사용자 알림 UI 구현",
      },
      {
        title: "<em>Axios</em>를 활용하여 오픈 API 호출, 이미지 다운로드 구현",
      },
    ],
    detailsImg: [PS2, PS1],
  },

  {
    id: "jwitter",
    backgroundColor: "pink",
    img: Jwitter,
    title: "X(Twitter) 클론 코딩",
    buttons: [
      { text: "사이트 방문", link: "https://jwitter-bf762.web.app/" },
      { text: "GitHub", link: "https://github.com/petitesize/Jwitter" },
    ],
    desc: [
      "Firebase를 활용법을 익히기 위한 X(Twitter) 클론 코딩",
      "로그인, 회원가입 및 게시물 CRUD 등의 SNS 기본 기능을 X(Twitter)를 클론 코딩하여 구현한 웹사이트",
      "Firebase를 통해 게시물에 이미지 업로드 및 GitHub 소셜 로그인이 가능합니다.",
    ],

    detailsDesc: [
      {
        title:
          "<em>Firebase</em>를 활용하여 사용자 인증 및 실시간 데이터베이스 연동",
      },
      {
        title: "<em>Styled-components</em>를 활용한 스타일링",
      },
      {
        title: "<em>TypeScript</em>를 통해 컴파일 단계에서 타입 안정성 보장",
      },
      {
        title: "<em>Vite</em> 기반 빠르고 가벼운 개발 환경 설정",
      },
    ],
    detailsImg: [J1, J2],
  },

  {
    id: "floraNder",
    backgroundColor: "yellow",
    img: FloraDer,
    title: "꽃다발 온라인 커스텀 쇼핑몰 사이트, Flora & Dér",
    buttons: [
      { text: "GitHub", link: "https://github.com/petitesize/flowerNderFront" },
      {
        text: "프로젝트 소개",
        link: "https://drive.google.com/file/d/1NmhgTKe2lAvaysK-uOPqrG697KrmVm7w/view",
      },
    ],
    desc: [
      "Flora & Dér란, '꽃과 더'라는 뜻으로, 꽃을 중심으로 다양한 아이템과 서비스를 제공하는 쇼핑몰을 의미합니다.",
      "꽃의 아름다움과 향기를 통해 사용자에게 긍정적인 경험을 제공하는 플랫폼을 만들자는 마음으로 시작했습니다.",
      "현대적인 웹디자인을 활용하고, 트렌드에 민감하게 반응하는 사용자들의 취향과 요구를 반영하려 합니다.",
      "전통적인 웹 쇼핑몰의 구조를 기반으로, 관리자 기능을 포함한 필수적인 기능들 위주로 구현하였습니다.",
      "엘리스 SW 부트캠프에서 진행한 팀 프로젝트로, 최우수상을 수상하였습니다.",
    ],
    contribution: [
      "프로젝트 컨셉 및 기획",
      "비회원 & 회원 주문 페이지",
      "비회원 & 회원 주문 조회 페이지",
    ],

    detailsDesc: [
      {
        title: "<em>AWS S3 Bucket</em>를 이용한 이미지 URL 생성 및 업로드 기능",
      },
      {
        title:
          "순수 <em>Vanilla Javascript(ES6)</em>로 DOM 조작 및 이벤트 처리, API 호출과 데이터 처리 로직을 구현",
      },
      {
        title:
          "<em>HTML & CSS</em> 기본 지식을 활용하여 디자인 레이아웃 및 스타일링 구현",
      },
      {
        title: "<em>AWS EC2</em> 서비스를 활용한 프론트엔드 서버 배포",
      },
    ],
    detailsImg: [F1, F2, F3, F4],
  },
];
