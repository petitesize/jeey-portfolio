import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { toggleTheme } from "@/redux/slice/themeSlice";
import { RootState } from "@/redux/store/store";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import styled from "styled-components";

export const DarkMode = () => {
  // useSelector => Redux 상태값 읽어오기 위해서 사용
  const mode = useAppSelector((state: RootState) => state.theme.mode);
  // 액션을 보내기 위해 사용
  const dispatch = useAppDispatch();
  return (
    <>
      <ToggleButton type="button" onClick={() => dispatch(toggleTheme())}>
        <IconWrapper active={mode === "light"}>
          <MdOutlineLightMode />
        </IconWrapper>
        <IconWrapper active={mode === "dark"}>
          <MdOutlineDarkMode />
        </IconWrapper>
      </ToggleButton>
    </>
  );
};

const ToggleButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  padding: 0 1em;
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:hover svg {
    color: #ff99ad;
    transition: color 0.3s ease;
  }
`;

const IconWrapper = styled.span<{ active: boolean }>`
  position: absolute;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  transition: transform 0.3s ease;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0.8)")};

  > svg {
    color: ${(props) => props.theme.colors.text};
    width: 24px;
    height: 24px;
    height: 100%;
  }
`;
