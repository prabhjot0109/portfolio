"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

const sections = [
  {
    id: "about",
    label: "About",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
        <circle cx="9" cy="6" r="3" />
        <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Exp",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
        <rect x="2" y="4" width="14" height="11" rx="1.5" />
        <path d="M6 4V2.5A1.5 1.5 0 0 1 7.5 1h3A1.5 1.5 0 0 1 12 2.5V4" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
        <rect x="1.5" y="1.5" width="6" height="6" rx="1" />
        <rect x="10.5" y="1.5" width="6" height="6" rx="1" />
        <rect x="1.5" y="10.5" width="6" height="6" rx="1" />
        <rect x="10.5" y="10.5" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    id: "opensource",
    label: "OSS",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
        <circle cx="9" cy="4" r="2" />
        <circle cx="5" cy="14" r="2" />
        <circle cx="13" cy="14" r="2" />
        <path d="M9 6v3M7.5 10.5 5.5 12M10.5 10.5l2 1.5" />
      </svg>
    ),
  },
  {
    id: "achievements",
    label: "Awards",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
        <path d="M9 1l2.2 4.5 5 .7-3.6 3.5.9 5L9 12.5 4.5 14.7l.9-5L1.8 6.2l5-.7z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "research",
    label: "Research",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
        <path d="M3 2h12v14l-6-3-6 3z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
        <path d="M5.5 1L3 9h4.5L6 17l9-10h-5l2-6z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "blogs",
    label: "Blog",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
        <path d="M14 1.5L4.5 11 3 15l4-1.5L16.5 4z" strokeLinejoin="round" />
        <path d="M11 4.5l2.5 2.5" />
      </svg>
    ),
  },
  {
    id: "highlights",
    label: "Highlights",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[14px] h-[14px]">
        <path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.3 3.3l1.4 1.4M13.3 13.3l1.4 1.4M14.7 3.3l-1.4 1.4M4.7 13.3l-1.4 1.4" strokeLinecap="round" />
        <circle cx="9" cy="9" r="3" />
      </svg>
    ),
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Show after scrolling past the banner
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150 && !isScrollingRef.current) {
        setActiveSection("about");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        // Skip observer updates while a programmatic scroll is in progress
        if (isScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 150) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Center the active pill in the nav bar scroll container
  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeItem = itemRefs.current.get(activeSection);
    if (!container || !activeItem) return;

    const scrollLeft =
      activeItem.offsetLeft -
      container.offsetWidth / 2 +
      activeItem.offsetWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [activeSection]);

  const handleNavClick = useCallback((sectionId: string) => {
    // Immediately update the indicator
    setActiveSection(sectionId);

    // Lock observer so it doesn't override during smooth scroll
    isScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // Scroll the page to the section
    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Unlock observer after scroll settles
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Only render on the homepage
  if (pathname !== "/") return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] lg:hidden transition-all duration-400 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >

      {/* Clean solid bar */}
      <div className="mx-2.5 mb-2.5 rounded-xl border border-black/[0.12] dark:border-white/[0.1] bg-zinc-50 dark:bg-zinc-900">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide px-1.5 py-1.5"
        >
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                ref={(el) => {
                  if (el) itemRefs.current.set(section.id, el);
                }}
                onClick={() => handleNavClick(section.id)}
                className={`relative flex items-center gap-1 px-2.5 py-[6px] rounded-lg text-[11px] font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? "text-zinc-800 dark:text-zinc-200 bg-zinc-200/70 dark:bg-zinc-800"
                    : "text-zinc-500 dark:text-zinc-500 active:bg-zinc-100 dark:active:bg-zinc-800/50"
                }`}
              >
                <span className={`transition-colors duration-200 ${
                  isActive
                    ? "text-zinc-600 dark:text-zinc-300"
                    : "text-zinc-400 dark:text-zinc-600"
                }`}>
                  {section.icon}
                </span>
                <span>{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
