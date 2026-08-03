"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Project } from "@/lib/data";

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <SelectedWork onOpenProject={setActiveProject} />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <CaseStudyOverlay project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
