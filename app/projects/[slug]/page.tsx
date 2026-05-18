import { notFound } from "next/navigation";
import { projectsDatabase } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsDatabase.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mb-6">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground">{project.date}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {project.content ? (
            <div
              dangerouslySetInnerHTML={{
                __html: project.content.replace(/\n/g, "<br />"),
              }}
            />
          ) : (
            <p>{project.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projectsDatabase
    .filter((p) => p.slug)
    .map((project) => ({
      slug: project.slug,
    }));
}
