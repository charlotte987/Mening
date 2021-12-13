import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Pricing from "./pages/pricing";

import Login from "./pages/login";
import BoardCreation from "./pages/boardcreation";
import IdeaCreation from "./pages/ideacreation";
import Board from "./pages/board";
import Account from "./pages/Account";
import AccountSettings from "./pages/AccountSettings";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import infos from "./reducers/infos";
import token from "./reducers/token";
import isLoggedIn from "./reducers/isLoggedIn";
import ideaContent from "./reducers/addIdea";
import user from "./reducers/user";

const store = createStore(
  combineReducers({ token, infos, ideaContent, isLoggedIn, user })
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/sign-up" element={<Login />} />
          <Route path="/create" element={<BoardCreation />} />
          <Route path="/idea-creation" element={<IdeaCreation />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
