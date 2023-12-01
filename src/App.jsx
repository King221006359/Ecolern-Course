// Import necessary modules
import React from "react";
import {
  BrowserRouter as Router,
  
} from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const userRole = "user"; // Set the user's role (you can fetch this from the API response)

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;