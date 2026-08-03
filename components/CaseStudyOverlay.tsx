"use client";

import { useEffect } from "react";
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
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          className="fixed inset-0 z-[80] bg-stage overflow-y-auto"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-10 py-6 bg-stage/80 backdrop-blur-sm border-b border-line">
            <span className="font-display italic text-lg">{project.title}</span>
            <button
              onClick={onClose}
              data-cursor="hover"
              className="eyebrow p-2 -mr-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close case study"
            >
              Close ✕
            </button>
          </div>

          <article className="px-6 md:px-10 pt-14 md:pt-24 pb-32 max-w-6xl mx-auto">
            <header className="mb-16 md:mb-24">
              <span className="eyebrow">
                {project.client} — {project.year}
              </span>
              <h2 className="font-display italic text-clamp-h1 leading-[0.9] mt-4 mb-8">
                {project.title}
              </h2>
              <p className="font-body text-clamp-body text-bone-dim max-w-2xl leading-relaxed">
                {project.excerpt}
              </p>

              <div className="flex flex-col gap-4 mt-8">
                <div>
                  <span className="eyebrow text-smoke mr-3">Role:</span>
                  <span className="eyebrow border border-line px-3 py-2 rounded-full text-accent">{project.role}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow text-smoke mr-1">Stack:</span>
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="eyebrow border border-line px-3 py-2 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative w-full aspect-[16/9] bg-stage-raised mb-16 md:mb-24 overflow-hidden rounded-xl shadow-2xl border border-line group"
            >
              <video
                src={project.coverVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.02] pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stage/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-6 mb-20 md:mb-28 border-y border-line py-10">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display italic text-3xl md:text-4xl text-accent">
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
                <div key={block.label}>
                  <span className="eyebrow">{block.label}</span>
                  <p className="font-body text-bone-dim leading-relaxed mt-4">
                    {block.copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-16 md:gap-24 mb-20">
              {project.showcases?.map((showcase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full aspect-video bg-stage-raised overflow-hidden relative group rounded-xl shadow-2xl border border-line"
                >
                  <video
                    src={showcase.video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.02] pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stage/30 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-10 border-t border-line">
              <button
                onClick={onClose}
                data-cursor="hover"
                className="eyebrow flex items-center gap-3 p-2 -ml-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                ← Back to Index
              </button>
              <a
                href="#contact"
                onClick={onClose}
                data-cursor="hover"
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
