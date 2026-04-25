import React, { JSX } from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Experience from "../components/experience";
import About from "../components/about";
import Services from "../components/services";
import Footer from "../components/footer";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
