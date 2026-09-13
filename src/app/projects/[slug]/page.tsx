import type { Metadata } from "next";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { CurrentTime } from "@/components/CurrentTime";
import { RightNavbar } from "@/components/RightNavbar";
import { FooterBackground } from "@/components/FooterBackground";
import { ProjectImageCarousel } from "@/components/ProjectImageCarousel";
import { BackButton } from "@/components/BackButton";
import { CopyField } from "@/components/CopyField";
import { CommandTabs } from "@/components/CommandTabs";
import { projectsData, iconMap, techNames, type TechItem, type TechKey } from "@/data/projectsData";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const title = `${project.title} | Prabhjot Singh Assi`;
  const description = project.subtitle || project.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: project.src ? [{ url: project.src }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.src ? [project.src] : [],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden transition-colors duration-300">
      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Horizontal Lines - Ultra-fine Micro Dots */}
      <div className="absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Ultra-Tiny Solid Nodes */}
      {[
        { top: '22vh', left: '30%' },
        { top: '22vh', right: '30%' },
        { top: 'calc(22vh + 112px)', left: '30%' },
        { top: 'calc(22vh + 112px)', right: '30%' },
      ].map((pos, i) => (
        <div key={i} className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.right ? '50%' : '-50%'}, -50%)`
          }} />
      ))}

      {/* Cell 1: Dot Matrix Background */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto">
        <FooterBackground />
        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Cell 2: Header with Back Button + Title + Controls */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">
          {/* Left: Back + Title */}
          <div className="flex items-center gap-5">
            <BackButton fallbackHref="/" ariaLabel="Go back" />
            <div className="flex flex-col justify-center">
              <h1 className="text-[20px] sm:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]">
                {project.title}
              </h1>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-400 font-medium">
                {project.subtitle ?? "Projects"}
              </p>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-16 px-4 flex flex-col z-10 relative">

        {/* Media (Carousel or Video or Single Image) */}
        <div className="w-full mt-8 z-20">
          {project.video ? (
            <div className="w-full aspect-video relative rounded-lg overflow-hidden border border-black/10 dark:border-white/[0.15] shadow-sm bg-black">
              {project.video.includes('youtube') ? (
                <iframe
                  src={project.video}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video 
                  src={project.video} 
                  className="w-full h-full object-cover" 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                />
              )}
            </div>
          ) : (
            <ProjectImageCarousel
              images={project.galleryImages || [project.src]}
              alt={project.imageTitle}
            />
          )}
        </div>

        {/* Top Dashed Divider (Blueprint system) */}
        <div className="relative mt-8">
          <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Action Links Grid */}
        <div className="grid grid-cols-3 items-center justify-between py-4 relative">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <SiGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Github
            </a>
          ) : <div />}
          
          {/* Vertical Divider 1 */}
          <div className="absolute left-1/3 top-0 bottom-0 w-0 border-l border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Website
            </a>
          ) : <div />}
          
          {/* Vertical Divider 2 */}
          <div className="absolute left-2/3 top-0 bottom-0 w-0 border-l border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

          {project.blogLink ? (
            <Link href={project.blogLink} className="flex items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 sm:w-4 sm:h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="15" y1="9" y2="9"/><line x1="9" x2="15" y1="15" y2="15"/></svg>
              Post
            </Link>
          ) : (
            <span className="flex items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] font-medium text-zinc-400 dark:text-zinc-600 opacity-50 cursor-not-allowed">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 sm:w-4 sm:h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="15" y1="9" y2="9"/><line x1="9" x2="15" y1="15" y2="15"/></svg>
              Post
            </span>
          )}
        </div>

        {/* Bottom Dashed Divider */}
        <div className="relative mb-6">
          <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Overview — the title and subtitle live in the header cell above, not repeated here */}
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
          {project.longDescription || project.description}
        </p>

        {/* Recognition and outcome — kept on separate lines so they never read as one run-on */}
        {(project.achievements || project.impact) && (
          <div className="mt-4 border-l-2 border-zinc-300 dark:border-zinc-700 pl-3.5 space-y-1">
            {project.achievements && (
              <p className="text-[13px] leading-relaxed font-medium text-zinc-600 dark:text-zinc-300">
                {project.achievements}
              </p>
            )}
            {project.impact && (
              <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                {project.impact}
              </p>
            )}
          </div>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mt-8">
            <h2 className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-medium mb-3">What it does</h2>
            <ul className="flex flex-col">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="group flex items-start gap-2.5 -mx-2 px-2 py-2 rounded-md text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-300 transition-colors hover:bg-zinc-100/70 dark:hover:bg-zinc-900/60"
                >
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0 transition-colors group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Setup — only for projects a visitor can install and run themselves */}
        {project.setup && (
          <div className="mt-8">
            <h2 className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-medium mb-3">
              {project.setup.title}
            </h2>

            {project.setup.commands && project.setup.commands.length > 0 && (
              <div className="mb-5">
                <CommandTabs
                  title="Install command"
                  commands={project.setup.commands}
                />
              </div>
            )}

            {project.setup.endpoint && (
              <div className="mb-5">
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mb-1.5">
                  {project.setup.endpoint.label}
                </p>
                <CopyField
                  value={project.setup.endpoint.value}
                  label={`Copy ${project.setup.endpoint.label}`}
                />
                {project.setup.endpoint.note && (
                  <p className="mt-2 text-[12px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.setup.endpoint.note}
                  </p>
                )}
              </div>
            )}

            {project.setup.steps && project.setup.steps.length > 0 && (
              <ol className="flex flex-col gap-4">
                {project.setup.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center text-[10px] font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
                      {idx + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-medium text-zinc-800 dark:text-zinc-100 mb-1">
                        {step.title}
                      </p>
                      <p className="text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {step.body}
                      </p>
                      {step.code && (
                        <div className="mt-2">
                          <CopyField value={step.code} label={`Copy the command for step ${idx + 1}`} />
                        </div>
                      )}
                      {step.codes && step.codes.length > 0 && (
                        <div className="mt-2.5 flex flex-col gap-2">
                          {step.codes.map((c) => (
                            <div key={c.label} className="flex flex-col gap-1">
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                                {c.label}
                              </span>
                              <CopyField value={c.value} label={`Copy ${c.label}`} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {project.setup.links && project.setup.links.length > 0 && (
              <div className="mt-5 flex flex-col gap-1.5">
                {project.setup.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 w-fit text-[12px] text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    <ExternalLink className="w-3 h-3 shrink-0" />
                    <span className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-2 group-hover:decoration-current">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Dashed Divider before Stack */}
        <div className="relative mt-8 mb-6">
          <div className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-medium mb-4">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: TechItem, i: number) => {
              const isKey = typeof t === "string";
              const label = isKey ? techNames[t as TechKey] : t.label;
              const Icon = isKey ? iconMap[t as TechKey] : null;

              return (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/5 rounded-md text-[12px] font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:border-black/25 dark:hover:border-white/20 hover:text-zinc-900 dark:hover:text-zinc-100">
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
