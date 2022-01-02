import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages";
import About from "./pages/about";
=======
import Home from "./pages/Index";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
>>>>>>> d32fc61833ce1a6e2c4befed8ba712d928acf77f

import Login from "./pages/Login";
import BoardCreation from "./pages/BoardCreation";
import IdeaCreation from "./pages/IdeaCreation";
import Board from "./pages/Board";
import Account from "./pages/Account";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import token from "./reducers/token";
import isLoggedIn from "./reducers/isLoggedIn";
import user from "./reducers/user";

const store = createStore(combineReducers({ token, isLoggedIn, user }));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Login />} />
          <Route path="/create" element={<BoardCreation />} />
          <Route path="/idea-creation/:id" element={<IdeaCreation />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
