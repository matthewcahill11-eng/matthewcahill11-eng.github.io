import ProjectSectionCarousel from "@/components/project-section-carousel";
import { projectsDatabase } from "@/data/projects";

export default function Projects() {
  // Group projects by section
  const headlineProjects = projectsDatabase.filter((p) => p.section === "headline");
  const traneProjects = projectsDatabase.filter((p) => p.section === "Trane Technologies");
  const forgeProjects = projectsDatabase.filter((p) => p.section === "Forge Robotics");
  const personalProjects = projectsDatabase.filter((p) => p.section === "Personal Projects");
  const engineeringProjects = projectsDatabase.filter((p) => p.section === "Engineering");
  const scholarshipProjects = projectsDatabase.filter((p) => p.section === "Scholarships Awards honous & recognitionh");
  const sportsProjects = projectsDatabase.filter((p) => p.section === "Sports & Extra");

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold tracking-tight mb-12">Projects</h2>

        {/* Headline Projects Section - populated */}
        <ProjectSectionCarousel
          title="Headline Projects"
          projects={headlineProjects}
        />

        {/* Trane Technologies Section - empty for now */}
        <ProjectSectionCarousel
          title="Trane Technologies"
          projects={traneProjects}
        />

        {/* Forge Robotics Section - empty for now */}
        <ProjectSectionCarousel
          title="Forge Robotics"
          projects={forgeProjects}
        />

        {/* Personal Projects Section - empty for now */}
        <ProjectSectionCarousel
          title="Personal Projects"
          projects={personalProjects}
        />

        {/* Engineering Section - empty for now */}
        <ProjectSectionCarousel
          title="Engineering"
          projects={engineeringProjects}
        />

        {/* Scholarships Awards & Recognition Section - empty for now */}
        <ProjectSectionCarousel
          title="Scholarships, Awards & Recognition"
          projects={scholarshipProjects}
        />

        {/* Sports & Extra Section - empty for now */}
        <ProjectSectionCarousel
          title="Sports & Extra"
          projects={sportsProjects}
        />
      </div>
    </section>
  );
}
