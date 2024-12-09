import CarebuddyImg from "@assets/project/carebuddy.png";
import C1 from "@assets/project/details/c1.png";
import C2 from "@assets/project/details/c2.png";
import C3 from "@assets/project/details/c3.png";
import C4 from "@assets/project/details/c4.png";

export const projectDetailData = [
  {
    id: "carebuddy",
    backgroundColor: "green",
    img: CarebuddyImg,
    title: "반려동물 질병 커뮤니티 플랫폼",
    buttons: [
      { text: "사이트 방문", link: "" },
      { text: "GitHub", link: "" },
      { text: "PDF 문서", link: "" },
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
      "<em>AWS S3 Bucket</em>를 이용한 이미지 URL 생성 및 업로드 기능",
      "<em>Recoil</em> 사용하여 전역 상태 관리",
      "<em>Vite</em> 기반 ESLint와 TypeScript를 적용한 개발 환경 구성",
      "<em>ESLint</em>로 코드 품질 유지 및 <em>TypeScript</em>를 통해 컴파일 단계에서 타입 안정성 보장",
      "<em>react-icons / styled-components</em> 등 사용하여 스타일링",
      "<em>rc-pagination</em> 사용하여 리스트의 페이지네이션 처리 및 테이블 컴포넌트 공통화",
      "<em>swiper</em> 사용하여 반려동물 프로필 슬라이더 UI로 구현",
    ],
    detailsImg: [C1, C2, C3, C4],
  },
];
