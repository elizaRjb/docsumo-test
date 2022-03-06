import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATHS } from "./routePaths";

import LoginPage from "./views/LoginPage";

import "./assets/sass/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
