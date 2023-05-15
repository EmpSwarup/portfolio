import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import PreLoader from "./components/preloader/PreLoader";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifications from "./components/qualification/Qualifications";
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
      </main>
      <Analytics />
    </>
  );
}

export default App;
