import About from "@/app/_components/pages/About";
import Blog from "@/app/_components/pages/Blog";
import Contact from "@/app/_components/pages/Contact";
import Experience from "@/app/_components/pages/Experience";
import Hero from "@/app/_components/pages/Hero";
import Projects from "@/app/_components/pages/Projects";
import ResumeDownload from "@/app/_components/pages/ResumeDownload";
import Skills from "@/app/_components/pages/Skills";
import Testimonials from "@/app/_components/pages/Testimonials";

export default function Home() {
  return <PortFolioPageComponent />;
}

function PortFolioPageComponent() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Testimonials />
      <Contact />
      <ResumeDownload />
    </>
  );
}
