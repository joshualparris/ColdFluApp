export interface CorrectionReport {
  id: string;
  moduleSlug: string;
  email: string;
  issue: string;
  priority: "low" | "medium" | "high";
  createdAt: string;
}

export interface CorrectionFormState {
  moduleSlug: string;
  email: string;
  issue: string;
  priority: "low" | "medium" | "high";
  canSubmit: boolean;
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

export function buildCorrectionFormState({
  moduleSlug,
  email,
  issue,
}: {
  moduleSlug: string;
  email: string;
  issue: string;
}): CorrectionFormState {
  const trimmedIssue = issue.trim();
  const trimmedEmail = email.trim();
  return {
    moduleSlug,
    email: trimmedEmail,
    issue: trimmedIssue,
    priority: trimmedIssue.length > 80 ? "high" : "medium",
    canSubmit: Boolean(trimmedIssue && trimmedEmail && moduleSlug),
  };
}
