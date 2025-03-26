import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@redux/slice/themeSlice";

// 만든 슬라이스를 스토어에 연결
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
