import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { getAllCategories, getProjectsForCategory, slugToCategory, type Project } from "@/lib/projects";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

interface ProjectsPageProps {
  searchParams: { category?: string };
}

export const metadata = {
  title: "Projects",
  description: "Explore all my projects, organized by category.",
};

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const selectedCategorySlug = searchParams.category;
  const selectedCategory = selectedCategorySlug ? slugToCategory(selectedCategorySlug) : null;

  const allCategories = getAllCategories(DATA.projects);
  const filteredProjects = selectedCategory
    ? getProjectsForCategory(DATA.projects, selectedCategory)
    : DATA.projects;

  return (
    <section className="space-y-12 w-full py-2">
      <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
        <div className="flex justify-start mb-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
          >
            ← Back to home
          </Link>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-2">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              All Projects
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {selectedCategory ? `${selectedCategory} Projects` : "All My Projects"}
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {selectedCategory
                ? `Explore my ${filteredProjects.length} ${selectedCategory.toLowerCase()} project${filteredProjects.length !== 1 ? 's' : ''}.`
                : "Explore all my projects across different categories and technologies."
              }
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Link href="/projects">
            <Badge
              variant={selectedCategorySlug ? "secondary" : "default"}
              className="cursor-pointer px-3 py-1 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              All ({DATA.projects.length})
            </Badge>
          </Link>
          {allCategories.map((category) => {
            const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
            const categoryCount = getProjectsForCategory(DATA.projects, category).length;
            const isSelected = selectedCategorySlug === categorySlug;

            return (
              <Link key={category} href={`/projects?category=${categorySlug}`}>
                <Badge
                  variant={isSelected ? "default" : "secondary"}
                  className="cursor-pointer px-3 py-1 text-sm hover:bg-foreground hover:text-background transition-colors"
                >
                  {category} ({categoryCount})
                </Badge>
              </Link>
            );
          })}
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {[...filteredProjects]
          .sort((a: Project, b: Project) => new Date(b.dates).getTime() - new Date(a.dates).getTime())
          .map((project: Project, id: number) => (
            <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={project.title}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
      </div>
    </section>
  );
}