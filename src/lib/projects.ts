export type ProjectCategory = "Full Stack" | "Backend" | "Frontend" | "Design" | "Research Papers";

export interface Project {
  title: string;
  href?: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  image?: string;
  video?: string;
  category?: ProjectCategory;
}

/**
 * Groups projects by category and returns a Map of category to projects array
 */
export function getProjectsByCategory(projects: readonly Project[]): Map<ProjectCategory, Project[]> {
  const categoryMap = new Map<ProjectCategory, Project[]>();

  projects.forEach(project => {
    if (project.category) {
      if (!categoryMap.has(project.category)) {
        categoryMap.set(project.category, []);
      }
      categoryMap.get(project.category)!.push(project);
    }
  });

  return categoryMap;
}

/**
 * Returns the top N categories by project count, sorted by count descending
 */
export function getTopCategories(projects: readonly Project[], limit: number): Array<{ category: ProjectCategory; count: number }> {
  const categoryMap = getProjectsByCategory(projects);

  const categories = Array.from(categoryMap.entries()).map(([category, projects]) => ({
    category,
    count: projects.length
  }));

  return categories
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

/**
 * Filters projects for a specific category
 */
export function getProjectsForCategory(projects: readonly Project[], category: ProjectCategory): Project[] {
  return projects.filter(project => project.category === category);
}

/**
 * Returns array of all unique categories present in the projects
 */
export function getAllCategories(projects: readonly Project[]): ProjectCategory[] {
  const categories = new Set<ProjectCategory>();

  projects.forEach(project => {
    if (project.category) {
      categories.add(project.category);
    }
  });

  return Array.from(categories);
}

/**
 * Converts category name to URL slug (e.g., "Full Stack" → "full-stack")
 */
export function categoryToSlug(category: ProjectCategory): string {
  return category.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Converts URL slug back to category name (e.g., "full-stack" → "Full Stack")
 */
export function slugToCategory(slug: string): ProjectCategory | null {
  const categoryMap: Record<string, ProjectCategory> = {
    'full-stack': 'Full Stack',
    'backend': 'Backend',
    'frontend': 'Frontend',
    'design': 'Design',
    'research-papers': 'Research Papers'
  };

  return categoryMap[slug] || null;
}

/**
 * Returns the count of projects in a specific category
 */
export function getCategoryProjectCount(projects: readonly Project[], category: ProjectCategory): number {
  return getProjectsForCategory(projects, category).length;
}