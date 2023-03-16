import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import TopContainerPage from "./pages/TopContainerPage";
import MenuContainerPage from "./pages/MenuContainerPage";
import TodayPage from "./pages/TodayPage";
import HabitsPage from "./pages/HabitsPage";
import HistoryPage from "./pages/HistoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import MyStyle from "./GlobalStyle/MyStyle";



function App() {
  return (

    <BrowserRouter>
      <GlobalStyle />
      <MyStyle />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/historico" element={<HistoryPage />} />



        { /* <TopContainerPage /> */}
        {/* <MenuContainerPage /> */}



      </Routes>
    </BrowserRouter>
  );
}

export default App;
