"use client";

import Image from "next/image";
import RevealText from "./RevealText";
import Reveal from "./Reveal";
import LazyVideo from "./LazyVideo";
import { projects, flagshipProject, type Project } from "@/lib/data";

type SelectedWorkProps = {
  onOpenProject: (project: Project) => void;
};

export default function SelectedWork({ onOpenProject }: SelectedWorkProps) {
  return (
    <section id="work" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div>
            <span className="eyebrow block mb-3">01 — Selected Work</span>
            <RevealText
              text="Selected Works"
              as="h2"
              className="font-display font-semibold text-clamp-h1"
            />
            <p className="font-body text-bone-dim text-sm sm:text-base leading-relaxed mt-4 max-w-md">
              {flagshipProject.description}
            </p>
          </div>
          <span className="eyebrow text-smoke text-sm md:text-base">
            ({flagshipProject.period})
          </span>
        </div>

        {/* 2-Column Card Grid (Last card spans 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
          {projects.map((project, idx) => {
            const isLast = idx === projects.length - 1;
            const category = project.category.replace(/^Shopify\s*\/\s*/i, "");

            return (
              <Reveal
                key={project.slug}
                delay={(idx % 2) * 0.1}
                className={isLast ? "md:col-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => onOpenProject(project)}
                  className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl cursor-pointer"
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden bg-stage-surface ${
                      isLast ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3]"
                    }`}
                  >
                    {project.mediaType === "video" ? (
                      <LazyVideo
                        src={project.coverVideo}
                        poster={project.poster}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-cinematic"
                      />
                    ) : (
                      <Image
                        src={project.coverImage || project.coverVideo}
                        alt={project.title}
                        fill
                        sizes={
                          isLast
                            ? "100vw"
                            : "(min-width: 768px) 50vw, 100vw"
                        }
                        className={
                          project.fit === "contain"
                            ? "object-contain p-6 group-hover:scale-[1.03] transition-transform duration-700 ease-cinematic"
                            : "object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-cinematic"
                        }
                      />
                    )}
                  </div>

                  <div className="flex items-baseline justify-between gap-4 mt-4">
                    <span className="text-base md:text-lg text-bone truncate font-body">
                      {project.shortTitle ?? project.title}
                    </span>
                    <span className="uppercase text-xs md:text-sm text-smoke whitespace-nowrap font-body">
                      {category}
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
