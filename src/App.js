// eslint-disable-next-line import/no-unresolved
import NavBar from "component/NavBar";
import "./App.css";
import Reset from "pages/Reset/Reset";
import GlobalStyle from "styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <NavBar />
    <Routes>
      <Route path="/reset" element={<Reset />} />
    </Routes>
  </BrowserRouter>
);

export default App;
