import React from "react";
import NavBar from "../components/NavbarHome/NavBar";
import WelcomePage from "../components/WelcomePage";
import AboutSection from "../components/AboutSection";
import Schedule from "../components/Schedule";
import TourSection from "../components/TourSection";
import CoursesSection from "../components/CoursesSection";
import FrequentSection from "../components/FrequentSection";
import OurSuccess from "../components/OurSuccess";
import SliderSection from "../components/slider/Slider";
import Footer from "../components/Footer/Footer";

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
      <OurSuccess />
      <SliderSection />
      <Footer />
    </div>
  );
}

export default Home;
