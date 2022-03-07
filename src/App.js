import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATHS } from "routePaths";

import reduxStore from "utils/store";

import LoginPage from "views/LoginPage";
import WelcomePage from "views/WelcomePage";

import "assets/sass/style.scss";

function App() {
  return (
    <Provider store={reduxStore.store}>
      <PersistGate persistor={reduxStore.persistor}>
        <BrowserRouter>
          <Routes>
            <Route exact path={PATHS.HOME} element={<LoginPage />} />
            <Route exact path={PATHS.WELCOME} element={<WelcomePage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
