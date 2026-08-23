"use client";

import React, { useState } from "react";
import Image from "next/image";

type ExperienceData = {
  title: string;
  role: string;
  dates: string;
  location: string;
  src: string;
  type?: string;
  imageFit?: "contain" | "cover";
  imageZoom?: number;
  description: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
  screenshot?: string;
};

const experiences: ExperienceData[] = [
  {
    title: "ClearTrail Technologies Pvt. Ltd.",
    role: "Associate Software Engineer",
    dates: "Aug 2026 - Present",
    location: "Indore, India",
    src: "/Experience-image/cleartrail.png",
    imageFit: "contain",
    imageZoom: 1.1,
    description: `
      Engineered and optimized backend application features and microservices using Java and Spring Boot to power high-throughput, mission-critical intelligence platforms
      Designed, consumed, and integrated robust REST APIs with relational SQL databases for streamlined CRUD operations and data workflows
      Containerized backend services using Docker and managed container orchestration with Kubernetes for scalable, resilient deployments
      Collaborated with senior developers, QA, and product teams on code reviews, bug fixes, and agile sprint ceremonies following strict coding standards
    `,
    tech: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "Docker",
      "Kubernetes",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "Microservices",
      "Git",
    ],
    metrics: [
      { label: "Role", value: "ASE" },
      { label: "Domain", value: "Backend" },
      { label: "Stack", value: "Spring Boot" },
      { label: "DevOps", value: "Docker & K8s" },
    ],
  },
  {
    title: "Vected Technologies Pvt. Ltd.",
    role: "Software Engineer (Generative AI)",
    dates: "May 2026 - Aug 2026",
    location: "Indore, India",
    src: "/Experience-image/vected-dark.svg",
    imageFit: "contain",
    imageZoom: 1.1,
    description: `
      Worked on MLOps pipelines on Azure Databricks to eliminate silent failures and improve deployment reliability
      Developed RAG-based Gen AI applications using LangChain, vector databases, and LLMs, enabling intelligent document retrieval and context-aware Q&A across enterprise knowledge bases
      Designed AI Agents with tool-calling and multi-step reasoning to automate internal business workflows, pulling data from external APIs and reducing repetitive manual effort
    `,
    tech: [
      "Python",
      "Azure Databricks",
      "MLOps",
      "LangChain",
      "Vector Databases",
      "LLMs",
      "RAG",
      "AI Agents",
      "REST APIs",
    ],
    metrics: [
      { label: "Role", value: "SDE 1" },
      { label: "Domain", value: "GenAI & MLOps" },
      { label: "Platform", value: "Databricks" },
      { label: "Focus", value: "AI Agents & RAG" },
    ],
  },
  {
    title: "IEEE SIGHT",
    role: "Tech Lead - IEEE HTB Grant Project",
    dates: "Jul 2024 - Mar 2025",
    location: "Indore, India",
    src: "/Experience-image/ieee-sight.png",
    imageFit: "contain",
    imageZoom: 1.0,
    description: `
      Led end-to-end development of “Harvesting Hope,” a humanitarian AI+IoT platform awarded a $4,000 grant by IEEE HTB to help farmers improve crop yields through AI-driven soil analysis and IoT sensors
      Coordinated a team of 5 engineers with Git branching strategies and structured code reviews to build and ship the Krishi mobile application
      Trained a YOLOv8 model on a custom dataset of 1,000+ images for real-time pest detection, achieving 90% accuracy and integrating it into the production mobile app
    `,
    tech: [
      "Python",
      "YOLOv8",
      "AI + IoT",
      "ESP32",
      "Mobile App",
      "Git",
      "Computer Vision",
      "Machine Learning",
    ],
    metrics: [
      { label: "IEEE Grant", value: "$4,000" },
      { label: "Team Managed", value: "5 Engineers" },
      { label: "AI Model", value: "Gemini" },
      { label: "Custom Dataset", value: "1,000+ Images" },
    ],
  },
];

export function ExperienceList() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="block">
      {experiences.map((item, idx) => {
        const isOpen = openIdx === idx;
        const isLast = idx === experiences.length - 1;

        return (
          <div key={idx} className="group relative">
            {/* Dashed bottom border for all items except the last one */}
            {!isLast && (
              <div
                className="absolute bottom-0 left-[-16px] right-[-16px] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                style={{
                  maskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                }}
              />
            )}

            {/* Special full-width dashed line and intersection dots for the last item */}
            {isLast && (
              <>
                <div
                  className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                  style={{
                    maskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    WebkitMaskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  }}
                />
                <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              </>
            )}

            <div
              className="flex flex-row items-start justify-between gap-2 py-3.5 px-4 -mx-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer relative z-20 rounded-lg sm:gap-3 sm:py-4"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
            >
              <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="size-10 shrink-0 rounded-[10px] border border-black/10 bg-zinc-50 p-[2px] shadow-sm shadow-black/15 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
                  <div className="w-full h-full rounded-[7px] border border-black/5 dark:border-black/20 bg-white flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={40}
                      height={40}
                      sizes="40px"
                      quality={60}
                      style={item.imageZoom ? { transform: `scale(${item.imageZoom})` } : undefined}
                      className={`${item.imageFit === "contain" ? "object-contain" : "object-cover"} w-full h-full p-0.5`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 min-w-0 pr-2 sm:pr-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[14px] font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-[17px]">
                      {item.title === "Vercel OSS Program x VengenceUI" ? (
                        <>
                          <span className="sm:hidden">Vercel OSS Program x VengenceUI</span>
                          <span className="hidden flex-wrap items-center gap-x-2 gap-y-1 align-middle sm:inline-flex">
                            <span className="inline-flex h-10 items-center">
                              Vercel OSS Program
                            </span>
                            <span className="inline-flex h-10 items-center text-[13px] font-semibold leading-none text-zinc-500 dark:text-zinc-500">
                              x
                            </span>
                            <span className="inline-flex h-10 items-center gap-2 leading-none">
                              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-black/10 bg-zinc-50 p-[2px] shadow-sm shadow-black/15 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
                                <span className="inline-flex size-full items-center justify-center overflow-hidden rounded-[7px] border border-black/5 bg-white dark:border-black/20">
                                  <Image
                                    src="/Experience-image/vengenceui-title-bg-less.png"
                                    alt=""
                                    width={113}
                                    height={96}
                                    sizes="40px"
                                    quality={60}
                                    aria-hidden="true"
                                    className="h-[18px] w-auto -translate-x-px translate-y-px rotate-180 object-contain"
                                  />
                                </span>
                              </span>
                              <span className="inline-flex h-10 items-center">
                                VengenceUI
                              </span>
                            </span>
                          </span>
                        </>
                      ) : (
                        item.title
                      )}
                    </span>
                    {item.type && (
                      <span className="self-center px-1.5 py-[1px] rounded-[4px] text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300/50 dark:border-zinc-700/50 whitespace-nowrap">
                        {item.type}
                      </span>
                    )}
                  </div>
                  <span
                    className={`${item.title === "Vercel OSS Program x VengenceUI" ? "sm:-mt-2" : ""} text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-400 truncate`}
                  >
                    {item.role}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end text-right shrink-0 pr-5 pl-2">
                <div className="flex items-center text-[12px] sm:text-[14px] font-medium text-zinc-900 dark:text-zinc-100 relative whitespace-nowrap">
                  <span>{item.dates}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-3.5 h-3.5 text-zinc-500 absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 -mt-[1.5px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[14px] text-zinc-500 dark:text-zinc-400">
                  {item.location}
                </span>
              </div>
            </div>

            {/* Expandable Details Section */}
            <div
              className={`-mx-4 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`${isOpen ? "pb-4 pt-0 opacity-100 translate-y-0" : "pb-0 pt-0 opacity-0 -translate-y-2"
                    } transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] pl-6 pr-8 text-[14px] text-zinc-600 dark:text-zinc-400`}
                >
                  {item.metrics && (
                    <div className="relative -ml-6 -mr-8 mb-4">
                      <div className="grid max-w-full grid-cols-2 pl-6 pr-8 2xl:grid-cols-4">
                        {item.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="relative min-w-0 px-3 py-2 after:absolute after:bottom-0 after:right-0 after:top-0 after:w-0 after:border-r after:border-black/30 after:[mask-image:repeating-linear-gradient(to_bottom,black_0,black_1px,transparent_1px,transparent_6px)] dark:after:border-white/[0.15] [&:nth-child(2n)]:after:hidden 2xl:[&:not(:last-child)]:after:block 2xl:[&:last-child]:after:hidden"
                          >
                            <p
                              className={`${metric.value.length > 13 ? "text-[13px] sm:text-[14px]" : "text-[15px] sm:text-[16px]"} truncate font-bold leading-none text-zinc-900 dark:text-zinc-100`}
                              title={metric.value}
                            >
                              {metric.value}
                            </p>
                            <p className="mt-1 text-[10px] font-medium uppercase text-zinc-400 dark:text-zinc-600 truncate">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                      <span
                        className="pointer-events-none absolute inset-x-0 top-0 h-0 border-t border-black/30 dark:border-white/[0.15]"
                        style={{
                          maskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                          WebkitMaskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                        }}
                      />
                      <span
                        className="pointer-events-none absolute inset-x-0 top-1/2 h-0 border-t border-black/30 dark:border-white/[0.15] 2xl:hidden"
                        style={{
                          maskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                          WebkitMaskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                        }}
                      />
                      <span
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-0 border-b border-black/30 dark:border-white/[0.15]"
                        style={{
                          maskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                          WebkitMaskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                        }}
                      />
                      <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                      <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-[2px] translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-[2px] -translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                      <span className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-[2px] translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                    </div>
                  )}

                  {isOpen && item.screenshot && (
                    <div className="relative mb-4 overflow-hidden bg-black">
                      <Image
                        src={item.screenshot}
                        alt={`${item.title} analytics screenshot`}
                        width={1400}
                        height={1050}
                        sizes="(min-width: 768px) 40vw, calc(100vw - 3rem)"
                        quality={70}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  )}

                  <ul className="mb-4 space-y-2 text-[13px] leading-relaxed">
                    {item.description
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((point, i) => {
                        const [label, ...detail] = point.trim().split(":");

                        return (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-zinc-400 dark:text-zinc-500 mt-[2px] text-[14px] leading-none">•</span>
                            <span>
                              {detail.length > 0 ? (
                                <>
                                  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                                    {label}:
                                  </strong>
                                  {detail
                                    .join(":")
                                    .split(
                                      /(kgateway|FOSSology|FOSSASIA Eventyay|Extralit|React JSON Schema Form)/,
                                    )
                                    .map((part, partIndex) =>
                                      /^(kgateway|FOSSology|FOSSASIA Eventyay|Extralit|React JSON Schema Form)$/.test(
                                        part,
                                      ) ? (
                                        <strong
                                          key={partIndex}
                                          className="font-semibold text-zinc-800 dark:text-zinc-200"
                                        >
                                          {part}
                                        </strong>
                                      ) : (
                                        part
                                      ),
                                    )}
                                </>
                              ) : (
                                point.trim()
                              )}
                            </span>
                          </li>
                        );
                      })}
                  </ul>

                  {item.tech && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-[4px] border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50 dark:bg-[#111111] text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
