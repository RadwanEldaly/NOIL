"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";

type CaseStudyOverlayProps = {
  project: Project | null;
  onClose: () => void;
};

/**
 * Act III — Project Case Studies. Opens as a full-bleed overlay with a
 * vertical shutter wipe (an homage to a camera iris/film transition)
 * rather than a fade or a generic modal scale-in.
 */
export default function CaseStudyOverlay({ project, onClose }: CaseStudyOverlayProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      {project && (
        <motion.div
          key={project.slug}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          className="fixed inset-0 z-[80] bg-stage overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Ambient Cinematic Sunlight Flare from Top Right */}
          <div
            className="pointer-events-none fixed -top-32 right-1/4 w-[750px] max-w-full h-[450px] rounded-full bg-[radial-gradient(ellipse_at_top,_rgba(254,240,138,0.22)_0%,_rgba(251,191,36,0.12)_35%,_rgba(245,158,11,0.04)_65%,_transparent_80%)] blur-3xl z-20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none fixed -top-16 right-[35%] w-[380px] h-[220px] rounded-full bg-gradient-to-b from-amber-100/35 via-amber-300/15 to-transparent blur-2xl z-20"
            aria-hidden="true"
          />
          {/* Diagonal Sunbeam Streaks */}
          <div
            className="pointer-events-none fixed -top-24 right-[25%] w-[220px] h-[800px] -rotate-45 bg-gradient-to-b from-amber-200/15 via-amber-400/5 to-transparent blur-3xl z-20"
            aria-hidden="true"
          />

          <div className="sticky top-0 z-30 flex items-center justify-between gap-4 px-6 md:px-10 py-4 sm:py-5 bg-[#121417] border-b border-line shadow-lg">
            <span className="font-display italic text-sm sm:text-base md:text-lg truncate text-bone">{project.title}</span>
            <button
              onClick={onClose}
              className="eyebrow shrink-0 p-2 -mr-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:text-accent transition-colors"
              aria-label="Close case study"
            >
              Close ✕
            </button>
          </div>

          <article className="px-6 md:px-10 pt-10 sm:pt-14 md:pt-20 pb-32 max-w-6xl mx-auto relative z-10">
            <header className="mb-14 md:mb-20">
              <span className="eyebrow text-smoke">
                {project.client} — {project.year}
              </span>
              <h2
                className="font-display italic text-clamp-h1 leading-[0.9] mt-4 mb-6 sm:mb-8"
                style={{
                  textShadow: "0 0 45px rgba(251, 191, 36, 0.2)",
                }}
              >
                {project.title}
              </h2>
              <p className="font-body text-clamp-body text-bone-dim max-w-2xl leading-relaxed">
                {project.excerpt}
              </p>

              <div className="flex flex-col gap-4 sm:gap-5 mt-8 sm:mt-10">
                {/* Role Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="eyebrow text-smoke shrink-0">Role:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-line bg-stage-raised/60 text-accent font-mono text-[11px] sm:text-xs tracking-wider uppercase whitespace-nowrap shadow-sm">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Stack Row */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                  <span className="eyebrow text-smoke shrink-0 sm:pt-1">Stack:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-line bg-stage-raised/40 text-bone-dim font-mono text-[11px] sm:text-xs tracking-wider uppercase whitespace-nowrap shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </header>

            {project.mediaType === "image" ? (
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-stage-raised mb-16 md:mb-24 overflow-hidden rounded-xl shadow-[0_0_70px_-15px_rgba(251,191,36,0.22)] border border-line/80 flex items-center justify-center p-4 sm:p-8 group">
                {/* Sunlight wash over media */}
                <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-amber-300/12 via-amber-500/3 to-transparent pointer-events-none z-10" />
                <div className="relative h-full w-full max-w-xs sm:max-w-sm aspect-[9/16] rounded-lg overflow-hidden shadow-2xl border border-line/60">
                  <Image
                    src={project.coverImage || project.coverVideo}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[16/9] bg-stage-raised mb-16 md:mb-24 overflow-hidden rounded-xl shadow-[0_0_70px_-15px_rgba(251,191,36,0.22)] border border-line/80 group">
                {/* Sunlight wash over media */}
                <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-amber-300/12 via-amber-500/3 to-transparent pointer-events-none z-10" />
                <video
                  src={project.coverVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-300 ease-cinematic group-hover:scale-[1.01] pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stage/40 via-transparent to-transparent pointer-events-none" />
              </div>
            )}

            <div className="grid sm:grid-cols-3 gap-6 md:gap-6 mb-20 md:mb-28 border-y border-line py-8 md:py-10">
              {project.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <p className="font-display italic text-2xl sm:text-3xl md:text-4xl text-accent break-words">
                    {stat.value}
                  </p>
                  <p className="eyebrow mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-20 md:mb-28">
              {[
                { label: "The Challenge", copy: project.challenge },
                { label: "What I Built", copy: project.approach },
                { label: "The Outcome", copy: project.result },
              ].map((block) => (
                <div key={block.label} className="min-w-0">
                  <span className="eyebrow">{block.label}</span>
                  <p className="font-body text-bone-dim leading-relaxed mt-4">
                    {block.copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-16 md:gap-24 mb-20">
              {project.showcases?.map((showcase, idx) => {
                if (showcase.image) {
                  return (
                    <div key={idx} className="flex flex-col gap-3">
                      <div className="w-full min-h-[380px] sm:min-h-[500px] bg-stage-raised/80 flex items-center justify-center p-6 md:p-12 rounded-xl shadow-[0_0_60px_-15px_rgba(251,191,36,0.18)] border border-line/80 relative overflow-hidden group">
                        {/* Sunlight wash over showcase */}
                        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-amber-300/10 via-amber-500/2 to-transparent pointer-events-none z-10" />
                        <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border border-line/70">
                          <Image
                            src={showcase.image.src}
                            alt={showcase.image.caption || project.title}
                            fill
                            sizes="(max-width: 768px) 90vw, 400px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                      {showcase.image.caption && (
                        <p className="eyebrow text-xs text-smoke text-center mt-2">
                          {showcase.image.caption}
                        </p>
                      )}
                    </div>
                  );
                }
                if (showcase.video && showcase.video.src !== project.coverVideo) {
                  return (
                    <div
                      key={idx}
                      className="w-full aspect-video bg-stage-raised overflow-hidden relative group rounded-xl shadow-[0_0_60px_-15px_rgba(251,191,36,0.18)] border border-line/80"
                    >
                      {/* Sunlight wash over showcase */}
                      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-amber-300/10 via-amber-500/2 to-transparent pointer-events-none z-10" />
                      <video
                        src={showcase.video.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-300 ease-cinematic group-hover:scale-[1.01] pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stage/30 via-transparent to-transparent pointer-events-none" />
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <div className="flex justify-between items-center gap-4 pt-10 border-t border-line flex-wrap sm:flex-nowrap">
              <button
                onClick={onClose}
                  className="eyebrow flex items-center gap-2 p-2 -ml-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:text-accent transition-colors"
              >
                ← Back to Projects
              </button>
              <a
                href="#contact"
                onClick={onClose}
                  className="eyebrow text-accent p-2 -mr-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Start a project →
              </a>
            </div>
          </article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
