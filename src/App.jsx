import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import PreLoader from "./components/preloader/PreLoader";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifications from "./components/qualification/Qualifications";
import Work from "./components/work/Work";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");

  const toggleMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <>
      <PreLoader />
      <Header darkMode={darkMode} toggleMode={toggleMode} />
      <main className={`main ${darkMode ? "dark" : "light"}`}>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Work />
        <Certifications />
        <Contact />
      </main>
      <Footer darkMode={darkMode} />
      <ScrollUp darkMode={darkMode} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
