import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Hero from "../pages/Hero";
import Navbar from "../pages/Navbar";
import Projects from "../pages/Projects";
import ResumeDownload from "../pages/ResumeDownload";
import Skills from "../pages/Skills";
import Testimonials from "../pages/Testimonials";

export default function PortFolioPageComponent() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Testimonials />
      <Contact />
      <ResumeDownload />
    </main>
  );
}
