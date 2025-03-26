import { useEffect } from "react";
import HomeView from "@/pages/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/styles/theme";
import GlobalStyles from "./assets/styles/GlobalStyles";
import lenis from "./utils/lenis";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { RootState } from "@redux/store/store";
import { ThemeApplier } from "./components/ThemeApplier";
import { useAppSelector } from "./hooks/redux";

function App() {
  const mode = useAppSelector((state: RootState) => state.theme.mode);
  const theme = mode === "dark" ? darkTheme : lightTheme;
  useEffect(() => {
    lenis();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeApplier />
        <Header />
        <Routes>
          <Route index path="/" element={<HomeView />}></Route>
          <Route
            index
            path="/project/:projectId"
            element={<ProjectDetail />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
