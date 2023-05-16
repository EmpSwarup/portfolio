import React from "react";
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

function App() {
  return (
    <>
      <PreLoader />
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Work />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <Analytics />
    </>
  );
}

export default App;
