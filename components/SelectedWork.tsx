"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "./RevealText";
import { projects, type Project } from "@/lib/data";

type SelectedWorkProps = {
  onOpenProject: (project: Project) => void;
};

/**
 * An editorial index of work: rows of title/client/year rather than a
 * conventional image grid. On hover, a floating preview image tracks the
 * cursor — the classic Awwwards "reveal on approach" pattern — implemented
 * with plain mousemove + Framer Motion spring, no external cursor library.
 */
export default function SelectedWork({ onOpenProject }: SelectedWorkProps) {
  const [hovered, setHovered] = useState<Project | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <section id="work" className="relative py-32 md:py-48 px-6 md:px-10">
      <div className="flex items-end justify-between mb-16 md:mb-24 flex-wrap gap-6">
        <div>
          <span className="eyebrow">Act II — Selected Work</span>
          <RevealText
            text="Recent Chapters"
            as="h2"
            className="font-display italic text-clamp-h1 leading-[0.9] mt-4"
          />
        </div>
        <p className="font-body text-bone-dim max-w-xs">
          A selection of recent projects. Hover to preview, click
          to read the full case study.
        </p>
      </div>

      <div
        className="border-t border-line"
        onMouseMove={(e) =>
          setCoords({ x: e.clientX, y: e.clientY })
        }
      >
        {projects.map((project) => (
          <button
            key={project.slug}
            onMouseEnter={() => setHovered(project)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onOpenProject(project)}
            data-cursor="hover"
            className="group w-full text-left border-b border-line py-8 md:py-10 flex items-center justify-between gap-6 transition-colors duration-300 hover:bg-stage-raised/40 px-2 md:px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <span className="font-mono text-sm text-smoke w-10 shrink-0">
              {project.index}
            </span>

            <span className="font-display italic text-[clamp(1.75rem,5vw,4rem)] leading-none flex-1 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500 ease-cinematic">
              {project.title}
            </span>

            <span className="hidden md:block font-body text-sm text-smoke w-48 shrink-0">
              {project.category}
            </span>

            <span className="hidden sm:flex items-center gap-4 shrink-0">
              <span className="font-mono text-sm text-smoke">{project.year}</span>
              <span className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent group-hover:-translate-x-1 transition-all duration-300">
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
            className="hidden lg:block fixed z-30 w-[320px] h-[220px] pointer-events-none overflow-hidden"
            style={{
              left: coords.x + 24,
              top: coords.y - 110,
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full h-full bg-stage-raised relative overflow-hidden">
              <video
                src={hovered.coverVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale-[0.2] contrast-110 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stage/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 eyebrow text-bone">
                {hovered.category}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
