import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./pages/Login";
import Home from "./pages/Home";
import API from "./adapters/API";
import Callback from "./pages/Callback";
import Login from "./pages/Login";

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (localStorage.access_token) {
      API.getUserActivities(localStorage.access_token).then(activities =>
        setActivities(activities)
      );
    }
  }, [localStorage.access_token]);

  return (
    <div className="App">
      <Router>
        <Login path="/login" />
        <Home activities={activities} path="/home" />
        <Callback path="/callback" />
      </Router>
    </div>
  );
};

export default App;
