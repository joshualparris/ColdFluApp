export interface SourceIndexEntry {
  id: string;
  title: string;
  jurisdiction: string;
  url?: string;
}

export function groupSourcesByJurisdiction(sources: SourceIndexEntry[]) {
  return sources.reduce<Record<string, SourceIndexEntry[]>>((groups, source) => {
    const jurisdiction = source.jurisdiction || "Unknown";
    groups[jurisdiction] = [...(groups[jurisdiction] ?? []), source];
    return groups;
  }, {});
}

export function getJurisdictionSummary(grouped: Record<string, SourceIndexEntry[]>) {
  return Object.fromEntries(
    Object.entries(grouped).map(([jurisdiction, sources]) => [jurisdiction, sources.length]),
  );
}
