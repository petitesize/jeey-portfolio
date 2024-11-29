const link = () => {
  // 웹 페이지 내 모든 href 속성 값이 # 으로 시작하는 a 요소에 반복문 실행
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    // 각 a 요소에 클릭 이벤트 추가
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      //  대상 a 요소의 href 속성 값 저장 (eg. #home)
      const targetId = anchor.getAttribute("href");
      //   #home, 즉 id="home" 인 요소를 저장
      const targetElement = targetId ? document.querySelector(targetId) : null;

      //   해당 위치로 smooth 옵션으로 스크롤
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    });
  });
};

export default link;
