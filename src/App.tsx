import { useEffect } from "react";
import HomeView from "@/pages/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import GlobalStyles from "./assets/styles/GlobalStyles";
import lenis from "./utils/lenis";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    lenis();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
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
