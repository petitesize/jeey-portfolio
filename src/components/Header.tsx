// 헤더완료

import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <HeaderWrapper>
      <HeaderInner isNavVisible={isNavVisible}>
        <Logo isNavVisible={isNavVisible}>
          <a href="/">JY's Portfolio</a>
        </Logo>
        <Nav isNavVisible={isNavVisible} className={isNavVisible ? "show" : ""}>
          <ul>
            <li>
              <a href="#intro">intro</a>
            </li>
            <li>
              <a href="#skill">skill</a>
            </li>
            <li>
              <a href="#site">site</a>
            </li>
            <li>
              <a href="#port">portfolio</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
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
    props.isNavVisible ? "rgba(254, 168, 180) " : "rgba(255, 250, 245, 0.1)"};
  /* 헤더 불투명 효과 */
  backdrop-filter: blur(15px);
  padding: 1rem;

  transition: background-color 0.3s ease;
`;

const Logo = styled.div<{ isNavVisible: boolean }>`
  font-size: 24px;
  padding: 12px 0;
  text-align: center;
  /* text-transform: uppercase; */
  line-height: 1;
  transition: color 0.5s ease;
  color: ${(props) => (props.isNavVisible ? "white" : "#ff99ad ")};
  font-weight: 900;
  em {
    font-size: 10px;
    display: block;
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
    background-color: ${(props) => (props.isNavVisible ? "#fff " : "#000")};
    margin-top: 19px;
    position: relative;

    &::before {
      content: "";
      width: 40px;
      height: 2px;
      background-color: ${(props) => props.theme.colors.black000};
      position: absolute;
      right: 0;
      top: 6px;
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
  @media (max-width: 768px) {
    position: absolute;
    top: 72px;
    right: 0;
    background-color: rgba(254, 168, 180);
    backdrop-filter: blur(15px);
    z-index: 10000;
    min-width: 150px;
    padding: 20px 0;
    height: 100vh;
    overflow-y: auto;
    /* 활성화 시켰을 때, 왼쪽으로 나오는 효과 */
    transform: translateX(${(props) => (props.isNavVisible ? "0" : "100%")});
    opacity: ${(props) => (props.isNavVisible ? "1" : "0")};
    transition: transform 0.3s ease, opacity 0.3s ease;
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

          &::before {
            content: "";
            width: calc(100% - 16px);
            height: 1px;
            background-color: ${(props) => props.theme.colors.white000};
            position: absolute;
            left: 8px;
            bottom: 10px;
            transform: scaleX(0);
            transition: transform 0.3s ease;
          }

          &:hover {
            color: ${(props) => props.theme.colors.white000};
            &::before {
              transform: scaleX(0.9);
            }
          }
        }
      }
    }

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

      /* 헤더 네브바 호버시 밑줄 스타일인데, 헤이트 0px로 비활성화해놨음 */
      &::before {
        content: "";
        width: calc(100% - 16px);
        height: 0px;
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
