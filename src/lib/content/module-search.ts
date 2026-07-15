export interface ModuleSearchCandidate {
  slug: string;
  title: string;
  category: string;
  description: string;
}

export function filterModulesByQuery(modules: ModuleSearchCandidate[], query: string, category?: string) {
  const normalized = query.trim().toLowerCase();
  const selectedCategory = category?.trim().toLowerCase();

  const filtered = modules.filter((module) => {
    const matchesCategory = !selectedCategory || module.category.toLowerCase().includes(selectedCategory);
    if (!matchesCategory) return false;

    if (!normalized) return true;

    const haystack = [module.title, module.category, module.description, module.slug]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });

  if (!normalized) return filtered;

  return filtered.sort((left, right) => {
    const leftTitle = left.title.toLowerCase().includes(normalized) ? 0 : 1;
    const rightTitle = right.title.toLowerCase().includes(normalized) ? 0 : 1;
    return leftTitle - rightTitle;
  });
}
