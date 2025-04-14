// src/app/page.js


import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import SectionDivider from "../components/SectionDivider";
import Packages from "../components/Packages";
import ContactBlock from "../components/ContactBlock";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Packages />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <ContactBlock />
      <Footer />
      
    </>
  );
}
