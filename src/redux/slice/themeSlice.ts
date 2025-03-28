import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  mode: string;
};

type ThemeMode = "light" | "dark";

const getInitialThemeMode = (): ThemeMode => {
  // 로컬에 저장된 테마가 있으면 그걸 return
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme as ThemeMode;

  //   없으면 os 설정 return
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const initialState: ThemeState = {
  mode: getInitialThemeMode(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
    setTheme(state, action) {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

/* [study memo]
action.payload 는 해당 액션과 같이 전달하는 값을 의미합니다. 
예를 들어, setName(value) 와 같이 액션을 호출하는 코드를 작성했다면 
action.payload 값에는 value 가 담기게 됩니다. */
