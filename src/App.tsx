import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Atmosphere } from "./components/visuals/Atmosphere";
import { Reveal } from "./components/ui/Reveal";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Journey } from "./components/sections/Journey";
import { Education } from "./components/sections/Education";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Atmosphere />
      <Navbar />
      <main id="main" className="relative overflow-x-clip pb-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        {/* closing row: achievements + certifications beside contact, as in the design */}
        <div className="container-page grid gap-4 py-4 sm:gap-5 sm:py-5 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)]">
          <Reveal className="h-full">
            <Achievements />
          </Reveal>
          <Reveal className="h-full" delay={0.08}>
            <Contact />
          </Reveal>
        </div>
      </main>
      <Footer />
    </MotionConfig>
  );
}
