import { useAppSelector } from "@/hooks/redux";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";

export const ThemeApplier = () => {
  const mode = useAppSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    document.body.className = mode === "dark" ? "dark" : "";
  }, [mode]);
  return null;
};
