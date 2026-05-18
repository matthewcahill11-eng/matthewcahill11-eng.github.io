"use client";

import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function WindTurbineProject() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const previewImages = [
    "/preview-01.png", // page 2
    "/preview-02.png", // page 8
    "/preview-03.png", // page 11
    "/preview-04.png", // page 12
    "/preview-05.png", // page 14
    "/preview-06.png", // page 16
    "/preview-07.png", // page 21
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % previewImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + previewImages.length) % previewImages.length
    );
  };
  return (
    <main className="min-h-screen py-16">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Literature Review: ML-Accelerated Aeroelastic Modelling of Onshore
            Wind Turbines
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            MEng Mechanical Engineering, University of Galway — graded 98% (top
            of class)
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            A literature review and research study proposal on the state of
            the art in wind turbine aeroelastic simulation, identifying machine
            learning as the unexploited lever for breaking the computational cost
            barrier and scoping a fundable ML-integration programme around it.
          </p>

          {/* PDF Preview Carousel & Button */}
          <div className="flex flex-col gap-8 items-center mt-8">
            {/* Carousel - Card Deck Style */}
            <div className="relative w-full md:w-2/3 h-[350px]">
              <div className="relative w-full h-full max-w-[300px] mx-auto">
                {previewImages.map((img, idx) => {
                  const isCurrent = idx === currentSlide;
                  const nextIndex = (currentSlide + 1) % previewImages.length;
                  const thirdIndex = (currentSlide + 2) % previewImages.length;
                  const isNext = idx === nextIndex;
                  const isThird = idx === thirdIndex;

                  return (
                    <div
                      key={idx}
                      className={`absolute transition-all duration-500 ${
                        isCurrent
                          ? "z-30 left-0 top-0 w-full opacity-100"
                          : isNext
                          ? "z-20 left-[50%] top-0 w-full opacity-70 blur-[1px]"
                          : isThird
                          ? "z-10 left-[75%] top-0 w-full opacity-50 blur-[2px]"
                          : "opacity-0 pointer-events-none"
                      }`}
                      style={{
                        filter: isCurrent ? 'none' : isNext ? 'blur(1px)' : isThird ? 'blur(2px)' : 'none'
                      }}
                    >
                      <div className="relative aspect-[3/4] bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-2xl border-2 border-zinc-200 dark:border-zinc-700">
                        <Image
                          src={img}
                          alt={`PDF Preview Page ${idx + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-40"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dot indicators */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                  {previewImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide
                          ? "w-8 bg-zinc-800 dark:bg-white"
                          : "w-2 bg-zinc-400 hover:bg-zinc-600 dark:bg-zinc-500 dark:hover:bg-zinc-300"
                      }`}
                      aria-label={`Go to page ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Page counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-40">
                  {currentSlide + 1} / {previewImages.length}
                </div>
              </div>
            </div>

            {/* PDF Button */}
            <div className="flex flex-col items-center text-center mt-12">
              <a
                href="/wind-turbine-literature-review.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  📄 View Full PDF
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-3">
                Preview showing select pages. Click to view the complete 30-page literature review.
              </p>
            </div>

            {/* Recognition */}
            <div className="mt-12 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-3">Recognition</h3>
              <p className="text-base leading-relaxed">
                Graded 98% — the highest mark in the cohort by a significant margin.
                Professor Pedram Masjedi (University of Galway) subsequently cited the work
                in an academic reference letter and adopted it as a reference document to inform
                subsequent master's research projects in wind energy and wind turbine engineering
                at the School of Engineering.
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              How I approached the field
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Aeroelastic modelling sits at the intersection of three coupled
              disciplines, each with its own literature and conventions. Rather
              than read linearly, I mapped the field as a system first —
              aerodynamic model, structural model, coupling scheme — and used
              that scaffold to decide what each paper was actually contributing.
              Citation-graph tools (Litmaps) surfaced the foundational papers
              everyone else builds on; impact-factor and citation screening
              filtered the rest. Where wind-turbine sources thinned out, I
              pulled from aerospace, marine engineering, and the applied
              ML-for-physics literature, which face the same coupled-physics
              problems on different geometries and were further along on
              data-driven acceleration.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Scope of the review</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <strong>Aerodynamic models</strong> — CFD via FVM
                discretization; sliding, deforming and Chimera mesh motion;
                RANS, LES and DES turbulence closures
              </li>
              <li>
                <strong>Structural models</strong> — 3D FEM, 1D beam theory
                (Euler-Bernoulli vs Timoshenko), modal analysis, multi-body
                dynamics
              </li>
              <li>
                <strong>Cross-sectional analysis</strong> — 3D FEM, 2D FEM,
                classical lamination theory for composite blades
              </li>
              <li>
                <strong>Fluid-structure coupling</strong> — one-way vs two-way;
                weak and strong two-way schemes
              </li>
              <li>
                <strong>Adjacent ML literature</strong> — CFD-ML convergence
                coupling, physics-informed neural networks for turbulence,
                super-resolution for flow fields, surrogate FEM elements
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How the ML gap surfaced</h2>
            <p className="text-lg leading-relaxed mb-4">
              The same constraint kept reappearing across otherwise unrelated
              papers: high-fidelity methods are accurate but computationally
              prohibitive — one cited study needed 2,250 CPU hours per
              simulation, and a leading review concluded full-flow-field CFD is
              "too high for these methods to be solely used in design and
              certification." Industry stays on lower-fidelity BEM not because
              it's better, but because the high-fidelity alternative doesn't fit
              a design cycle.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Most reviewed papers flagged this as future work and stopped
              there. The move was to look outside the wind literature: machine
              learning for CFD acceleration (CFDnet), physics-informed neural
              networks for LES wall modelling, super-resolution autoencoders for
              flow upscaling, and smart-element surrogate FEM had all been
              validated in adjacent fields — aerospace, general fluids,
              structural mechanics — but hadn't been pulled together into
              wind-turbine aeroelastic pipelines. That intersection became the
              proposal.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Proposed ML-integration programme
            </h2>
            <ul className="space-y-3 text-lg">
              <li>
                <strong>CFD-ML convergence acceleration</strong> — replicating
                CFDnet-style coupling on aeroelastic benchmarks (cited 2.3–3.1×
                speed-ups on aerofoil cases)
              </li>
              <li>
                <strong>Neural-network turbulence closures</strong> — building
                and validating a data-driven turbulence model targeting LES
                wall-modelling failures
              </li>
              <li>
                <strong>Super-resolution flow upscaling</strong> — training a
                convolutional autoencoder to recover high-resolution turbulence
                fields from coarse-mesh CFD output
              </li>
              <li>
                <strong>Surrogate "smart" finite elements</strong> — applying
                ML-based FEM surrogates to blade structural deflection, removing
                iterative internal-node solves
              </li>
              <li>
                Full risk register, data-availability contingencies, and
                Gantt-charted three-year plan
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
