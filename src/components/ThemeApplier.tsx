import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setTheme } from "@/redux/slice/themeSlice";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";

export const ThemeApplier = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state: RootState) => state.theme.mode);

  //   시스템 테마 변경 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark");

    const handleSystemThemeChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      dispatch(setTheme(newTheme));
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [dispatch]);

  //   테마 변경이 감지되면, 테마 적용
  useEffect(() => {
    document.body.className = mode === "dark" ? "dark" : "";
  }, [mode]);

  return null;
};
