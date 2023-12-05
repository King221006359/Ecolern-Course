// Import necessary modules
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import CoursePage from "./pages/CoursePage"
import CourseInfos from "./pages/CourseInfos";
import Curriculumpage from "./pages/Curriculumpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/CourseInfos" element={<CourseInfos />} />
          <Route path="/Curriculumpage" element={<Curriculumpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;