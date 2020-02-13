import React from "react";
import { useState } from 'react'
import "./App.css";
import "./pages/Login";
import Home from "./pages/Home";

import Callback from "./pages/Callback";
import { Router } from "@reach/router";
import Login from "./pages/Login";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Login path="/login" />
        <Home path="/home" />
        <Callback path="/callback" />
      </Router>
    </div>
  );
};

export default App;
