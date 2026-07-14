export type EvidenceLevel =
  | 'Strong'
  | 'Moderate'
  | 'Weak-or-mixed'
  | 'Traditional-but-untested';

export interface Intervention {
  name: string;
  evidence: EvidenceLevel;
  finding: string;
  practical: string;
  mechanism: string;
  cautions: string;
}

export interface Myth {
  claim: string;
  reality: string;
}

export type ComparisonRow = Record<string, string>;

export interface KnowledgeModule {
  id: number;
  slug: string;
  section: string;
  title: string;
  summary: string;
  evidenceSnapshot: string;
  interventions: Intervention[];
  practicalSteps: string[];
  avoidOrCare: string[];
  myths: Myth[];
  redFlags: string[];
  unsettled: string[];
  sourceIds: string[];
  reviewDate: string;
  comparisonRows?: ComparisonRow[];
}

export interface SourceRecord {
  id: string;
  title: string;
  organisation: string;
  type: string;
  url: string;
  year: string;
  note: string;
}
