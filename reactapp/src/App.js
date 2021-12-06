import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Pricing from "./pages/pricing";
// import SignUp from "./pages/signup";
import Login from "./pages/login";
import Board from "./pages/board";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import token from "./reducers/token";

const store = createStore(combineReducers({ token }));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/sign-up" element={<Login />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
