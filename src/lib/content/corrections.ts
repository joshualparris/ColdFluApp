export interface CorrectionReport {
  id: string;
  moduleSlug: string;
  email: string;
  issue: string;
  priority: "low" | "medium" | "high";
  createdAt: string;
}

export function createCorrectionReport({
  moduleSlug,
  email,
  issue,
}: {
  moduleSlug: string;
  email: string;
  issue: string;
}): CorrectionReport {
  return {
    id: `correction-${Date.now()}`,
    moduleSlug,
    email,
    issue,
    priority: issue.length > 80 ? "high" : "medium",
    createdAt: new Date().toISOString(),
  };
}
