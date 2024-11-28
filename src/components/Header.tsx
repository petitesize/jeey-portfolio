// 헤더완료

import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const headerNav = [
    // {
    //   title: "about",
    //   url: "#about",
    // },
    {
      title: "skills",
      url: "#skills",
    },

    {
      title: "Projects",
      url: "#projects",
    },
    {
      title: "contact",
      url: "#contact",
    },
  ];

  return (
    <HeaderWrapper>
      <HeaderInner isNavVisible={isNavVisible}>
        <Logo isNavVisible={isNavVisible}>
          <a href="/">JY</a>
        </Logo>
        <Nav isNavVisible={isNavVisible} className={isNavVisible ? "show" : ""}>
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url} onClick={() => setIsNavVisible(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </Nav>
        <NavMobile
          isNavVisible={isNavVisible}
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={isNavVisible}
          onClick={toggleNav}
        >
          <span></span>
        </NavMobile>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10000;
`;

const HeaderInner = styled.div<{ isNavVisible: boolean }>`
  display: flex;

  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isNavVisible ? "rgba(254, 168, 180,1)" : "rgba(255, 250, 245, 0.1)"};
  /* 헤더 불투명 효과 */
  backdrop-filter: blur(15px);
  padding: 1rem 9rem;

  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 4rem;
  }
`;

const Logo = styled.div<{ isNavVisible: boolean }>`
  font-size: 24px;
  padding: 12px 0;
  text-align: center;
  /* text-transform: uppercase; */
  line-height: 1;
  transition: color 0.5s ease, transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  color: ${(props) => (props.isNavVisible ? "white" : "#ff99ad ")};
  font-weight: 900;
  em {
    font-size: 10px;
    display: block;
  }
  &:hover {
    transform: rotate(30deg);
  }
`;

const NavMobile = styled.div<{ isNavVisible: boolean }>`
  /* 모바일에서만 보이게 */
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;

  /* 모바일에서만 보이게 */
  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 40px;
    height: 2px;
    /* 메뉴가 열리면(isNavVisible) 흰색, 닫히면 검은색 */
    background-color: ${(props) => (props.isNavVisible ? "#fff " : "#000")};
    margin-top: 19px;
    position: relative;

    /* 햄버거 메뉴의 윗 줄 막대 */
    &::before {
      content: ""; // 가상 요소에 content 속성이 필수!
      width: 40px;
      height: 2px;
      background-color: ${(props) => props.theme.colors.black000};
      position: absolute;
      right: 0;
      top: 6px;
      // 메뉴가 열리면, 막대 길이를 반으로 줄어드는데, 자연스럽게 애니메이션 효과 적용
      transition: width 0.3s;
    }
    &::after {
      content: "";
      width: 40px;
      height: 2px;
      background-color: ${(props) => props.theme.colors.black000};
      position: absolute;
      left: 0;
      bottom: 6px;
      transition: width 0.3s;
    }
  }
`;

const Nav = styled.nav<{ isNavVisible: boolean }>`
  /* 모바일용 css */
  @media (max-width: 768px) {
    position: absolute;
    top: 80px;
    right: 0;
    background-color: rgba(254, 168, 180);
    backdrop-filter: blur(15px);
    z-index: 10000;
    min-width: 150px;
    padding: 20px 0;
    height: 100vh;
    overflow-y: auto;
    /* 활성화 시켰을 때, 왼쪽으로 나오는 효과들 */
    /* isNavVisible 상태가 아니면 화면 밖에 */
    transform: translateX(${(props) => (props.isNavVisible ? "0" : "100%")});
    opacity: ${(props) => (props.isNavVisible ? "1" : "0")};
    transition: visibility 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
    visibility: ${(props) => (props.isNavVisible ? "visible" : "hidden")};

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: block;
        text-align: right;

        a {
          display: inline-block;
          padding: 10px;
          color: ${(props) => props.theme.colors.black000};
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 700;
          position: relative;

          /* hover 시 나오는 밑줄 효과를 가상요소를 이용해 표현 */
          &::before {
            content: "";
            width: calc(100% - 16px);
            height: 1px;
            background-color: ${(props) => props.theme.colors.white000};
            position: absolute;
            left: 8px;
            bottom: 10px;
            /* hover 전에는 scaleX가 0 */
            transform: scaleX(0);
            transition: transform 0.3s ease;
          }

          &:hover {
            color: ${(props) => props.theme.colors.white000};
            &::before {
              /* a 링크 hover 시 밑줄 가상 효과 scale을 0.9로 늘려서 보여준다 */
              transform: scaleX(0.9);
            }
          }
        }
      }
    }
    /* isNavVisible이면 즉, 모바일메뉴가 열리면, show 클래스가 추가된다
        show 클래스가 추가되면 NavMobile 햄버거 메뉴 막대의 width를 반으로 줄이고, 흰색으로 변경한다. */
    &.show + ${NavMobile} span::before {
      width: 20px;
      background-color: ${(props) => props.theme.colors.white000};
    }
    &.show + ${NavMobile} span::after {
      background-color: ${(props) => props.theme.colors.white000};
      width: 20px;
    }
  }

  li {
    display: inline;

    a {
      text-transform: uppercase;
      font-size: 16px;
      padding: 14px;
      position: relative;
      color: ${(props) => props.theme.colors.black000};
      font-weight: 700;

      /* hover 시 나오는 밑줄 효과를 가상요소를 이용해 표현 */
      &::before {
        content: "";
        width: calc(100% - 16px);
        /* 웹에서는 밑줄이 나오지 않도록 0으로 해놨는데, 밑줄 필요 시 1px 설정 */
        height: 0;
        background-color: ${(props) => props.theme.colors.rose300};
        position: absolute;
        left: 8px;
        bottom: 10px;
        transform: scaleX(0);
        transition: all 0.3s ease;
      }

      &:hover {
        color: ${(props) => (props.isNavVisible ? "#fff " : `#ff99ad`)};
        transition: all 0.3s ease;
        &::before {
          transform: scaleX(0.9);
          color: ${(props) => props.theme.colors.white000};
        }
      }
    }
  }
`;
