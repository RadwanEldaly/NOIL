"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Image from "next/image";
import RevealText from "./RevealText";
import { projects, flagshipProject, type Project } from "@/lib/data";

type SelectedWorkProps = {
  onOpenProject: (project: Project) => void;
};

export default function SelectedWork({ onOpenProject }: SelectedWorkProps) {
  const [hovered, setHovered] = useState<Project | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <section id="work" className="relative py-32 md:py-48 px-6 md:px-10">
      <div className="flex items-end justify-between mb-14 md:mb-20 flex-wrap gap-6">
        <div>
          <span className="eyebrow text-accent">Act II — Flagship Project</span>
          <RevealText
            text={flagshipProject.name}
            as="h2"
            className="font-display italic text-clamp-h1 leading-[0.9] mt-3"
          />
        </div>
        <div className="max-w-md">
          <p className="font-body text-bone-dim text-sm sm:text-base leading-relaxed">
            {flagshipProject.description}
          </p>
          <div className="flex items-center gap-3 mt-3 eyebrow text-[0.65rem] text-smoke">
            <span>{flagshipProject.platform}</span>
            <span>•</span>
            <span>{flagshipProject.role}</span>
          </div>
        </div>
      </div>

      <div
        className="border-t border-line"
        onMouseMove={(e) => {
          mouseX.set(e.clientX + 24);
          mouseY.set(e.clientY - 110);
        }}
      >
        {projects.map((project) => (
          <button
            key={project.slug}
            onMouseEnter={() => setHovered(project)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onOpenProject(project)}
            className="group w-full text-left border-b border-line py-6 md:py-9 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 transition-colors duration-200 hover:bg-stage-raised/40 px-2 md:px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <div className="flex items-start md:items-center gap-4 sm:gap-6 flex-1 min-w-0">
              <span className="font-mono text-xs sm:text-sm text-smoke w-7 sm:w-9 shrink-0 pt-1 md:pt-0">
                {project.index}
              </span>

              {/* Mobile thumbnail indicator */}
              <div className="md:hidden relative w-12 h-12 rounded bg-stage-raised shrink-0 overflow-hidden border border-line">
                {project.mediaType === "image" ? (
                  <Image
                    src={project.coverImage || project.coverVideo}
                    alt={project.title}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs font-mono text-accent bg-accent/10">
                    ▶
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <span className="font-display italic text-[clamp(1.25rem,3.2vw,3.25rem)] leading-[1.2] block group-hover:translate-x-1.5 transition-transform duration-200">
                  {project.title}
                </span>
                <span className="md:hidden font-mono text-[0.65rem] text-accent tracking-wider uppercase mt-1 block">
                  {project.category}
                </span>
              </div>
            </div>

            <span className="hidden md:block font-body text-xs text-smoke w-56 shrink-0 text-left">
              {project.category}
            </span>

            <span className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 shrink-0 pl-11 md:pl-0">
              <span className="font-mono text-xs sm:text-sm text-smoke">{project.year}</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm">
                →
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Floating cursor preview — desktop only */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.slug}
            className="hidden lg:block fixed top-0 left-0 z-30 w-[340px] h-[230px] pointer-events-none overflow-hidden rounded-lg shadow-2xl border border-line bg-stage-raised"
            style={{
              x: mouseX,
              y: mouseY,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="w-full h-full relative overflow-hidden">
              {hovered.mediaType === "image" ? (
                <Image
                  src={hovered.coverImage || hovered.coverVideo}
                  alt={hovered.title}
                  fill
                  sizes="340px"
                  className="object-cover object-top pointer-events-none"
                />
              ) : (
                <video
                  src={hovered.coverVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover pointer-events-none"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-stage/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="eyebrow text-bone text-[0.65rem] truncate">
                  {hovered.category}
                </span>
                <span className="font-mono text-[0.65rem] text-accent">
                  {hovered.mediaType === "image" ? "Case Study & UI" : "Live Section"}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
