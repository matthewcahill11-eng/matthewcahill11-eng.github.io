import Link from "next/link";
import { projectsDatabase } from "@/data/projects";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
  // Get only headline projects for main display
  const headlineProjects = projectsDatabase.filter((p) => p.headline === true);
  const scholarshipProjects = projectsDatabase.filter((p) => p.section === "Scholarships Awards honous & recognitionh");

  // Check if sections have projects
  const hasEngineering = projectsDatabase.some((p) => p.section === "Engineering");
  const hasTrane = projectsDatabase.some((p) => p.section === "Trane Technologies");
  const hasPersonal = projectsDatabase.some((p) => p.section === "Personal Projects");
  const hasForge = projectsDatabase.some((p) => p.section === "Forge Robotics");

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold tracking-tight mb-12">Projects</h2>

        {/* Headline Projects - 3 Column Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Headline Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {headlineProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* Section Banners - Links to dedicated pages */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Project Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {hasEngineering && (
              <Link
                href="/category/engineering"
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Engineering
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {projectsDatabase.filter((p) => p.section === "Engineering").length} projects
                  </p>
                </div>
              </Link>
            )}

            {hasTrane && (
              <Link
                href="/category/trane"
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Trane Technologies
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {projectsDatabase.filter((p) => p.section === "Trane Technologies").length} projects
                  </p>
                </div>
              </Link>
            )}

            {hasPersonal && (
              <Link
                href="/category/personal"
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Personal Projects
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {projectsDatabase.filter((p) => p.section === "Personal Projects").length} projects
                  </p>
                </div>
              </Link>
            )}

            {hasForge && (
              <Link
                href="/category/forge"
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Forge Robotics
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {projectsDatabase.filter((p) => p.section === "Forge Robotics").length} projects
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Scholarships & Awards - Larger cards with images */}
        {scholarshipProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Scholarships, Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarshipProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} compact={true} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
