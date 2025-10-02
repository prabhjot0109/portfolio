import React, { lazy } from "react";
import Navigation from "@/components/Navigation";
import SkipNavigation from "@/components/SkipNavigation";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import LazySection from "@/components/LazySection";
import { useServiceWorker } from "@/hooks/useServiceWorker";

// Lazy load below-the-fold components
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Achievements = lazy(() => import("@/components/Achievements"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  // Register service worker for caching
  useServiceWorker();

  return (
    <div className="min-h-screen bg-background">
      <SkipNavigation />
      <Navigation />
      <main id="main-content">
        <Hero />

        <LazySection>
          <About />
        </LazySection>

        <LazySection>
          <Skills />
        </LazySection>

        <LazySection>
          <Achievements />
        </LazySection>

        <LazySection>
          <Projects />
        </LazySection>

        <LazySection>
          <Experience />
        </LazySection>

        <LazySection>
          <Contact />
        </LazySection>
      </main>

      <LazySection>
        <Footer />
      </LazySection>

      <ScrollToTop />
    </div>
  );
};

export default Index;
