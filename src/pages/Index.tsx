import React, { lazy, useState, useCallback, Suspense } from "react";
import BottomNav from "@/components/BottomNav";
import SkipNavigation from "@/components/SkipNavigation";
import Hero from "@/components/Hero";
import LazySection from "@/components/LazySection";
import CommandPalette from "@/components/CommandPalette";
import { useServiceWorker } from "@/hooks/useServiceWorker";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

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

  // Command palette state
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const openCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(true);
  }, []);

  const closeCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, []);

  // Keyboard shortcut for command palette (Cmd/Ctrl + K)
  useKeyboardShortcut(
    [
      { key: "k", meta: true },
      { key: "k", ctrl: true },
    ],
    openCommandPalette,
    { enabled: !isCommandPaletteOpen }
  );

  return (
    <div className="min-h-screen bg-background">
      <SkipNavigation />

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={closeCommandPalette}
      />

      {/* Bottom Navigation */}
      <BottomNav onOpenCommandPalette={openCommandPalette} />

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
    </div>
  );
};

export default Index;
