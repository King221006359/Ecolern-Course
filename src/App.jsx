// Import necessary modules
import React from "react";
import {
  BrowserRouter as Router,
  
} from "react-router-dom";

// import Home from "./pages/Home";
import "./App.css";

import Courses from "./pages/CoursePage"

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        <Courses />
      </div>
    </Router>
  );
}

export default App;