import ProjectSectionCarousel from "@/components/project-section-carousel";
import { projectsDatabase } from "@/data/projects";

export default function Projects() {
  // Group projects by section
  const headlineProjects = projectsDatabase.filter(
    (p) => p.section === "headline"
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold tracking-tight mb-12">Projects</h2>

        {/* Headline Projects Section */}
        {headlineProjects.length > 0 && (
          <ProjectSectionCarousel
            title="Headline Projects"
            projects={headlineProjects}
          />
        )}

        {/* Add more sections here as needed */}
      </div>
    </section>
  );
}
