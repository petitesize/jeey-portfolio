import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  mode: string;
};

const initialState: ThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

/* [study memo]
action.payload 는 해당 액션과 같이 전달하는 값을 의미합니다. 
예를 들어, setName(value) 와 같이 액션을 호출하는 코드를 작성했다면 
action.payload 값에는 value 가 담기게 됩니다. */
