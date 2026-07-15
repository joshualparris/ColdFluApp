export interface ModuleSearchCandidate {
  slug: string;
  title: string;
  category: string;
  description: string;
}

export function filterModulesByQuery(modules: ModuleSearchCandidate[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return modules;

  return modules.filter((module) => {
    const haystack = [module.title, module.category, module.description, module.slug]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}
