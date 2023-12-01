import React from "react";
import NavBar from "../components/NavbarHome/NavBar";
import WelcomePage from "../components/WelcomePage";
import AboutSection from "../components/AboutSection";
import Schedule from "../components/Schedule";
import TourSection from "../components/TourSection";
import CoursesSection from "../components/CoursesSection";
import FrequentSection from "../components/FrequentSection";
function Home() {
  return (
    <div>
      <NavBar />
      <WelcomePage />
      <AboutSection />
      <Schedule />
      <TourSection />
      <CoursesSection />
      <FrequentSection />
    </div>
  );
}

export default Home;
