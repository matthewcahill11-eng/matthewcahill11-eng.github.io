import ProjectSectionCarousel from "@/components/project-section-carousel";
import { projectsDatabase } from "@/data/projects";

export default function Projects() {
  // Group projects by section
  // Headline section includes both projects with section="headline" AND any project with headline=true flag
  const headlineProjects = projectsDatabase.filter((p) => p.section === "headline" || p.headline === true);
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

        {/* Headline Projects Section */}
        <ProjectSectionCarousel
          title="Headline Projects"
          projects={headlineProjects}
        />

        {/* Engineering Section */}
        <ProjectSectionCarousel
          title="Engineering College Projects"
          projects={engineeringProjects}
        />

        {/* Scholarships Awards & Recognition Section */}
        <ProjectSectionCarousel
          title="Scholarships, Awards & Recognition"
          projects={scholarshipProjects}
        />

        {/* Trane Technologies Section */}
        <ProjectSectionCarousel
          title="Trane Technologies"
          projects={traneProjects}
        />

        {/* Personal Projects Section */}
        <ProjectSectionCarousel
          title="Personal Projects"
          projects={personalProjects}
        />

        {/* Sports & Extra Section */}
        <ProjectSectionCarousel
          title="Sports & Extra"
          projects={sportsProjects}
        />

        {/* Forge Robotics Section */}
        <ProjectSectionCarousel
          title="Forge Robotics"
          projects={forgeProjects}
        />
      </div>
    </section>
  );
}
