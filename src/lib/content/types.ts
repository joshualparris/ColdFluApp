export interface CanonicalSource { id: string; title: string; authorsOrOrganisation: string[]; type: string; url: string; jurisdiction: string; updatedAt: string | null; publishedAt: string | null; notes: string }
export interface CanonicalModule {
  id: string; slug: string; title: string; description: string; category: string; status: string; audience: string;
  jurisdictions: string[]; locale: string; summary: string;
  safety: { emergencySummary: string; redFlags: SafetyItem[]; vulnerableGroups: SafetyItem[] };
  claims: CanonicalClaim[]; practicalGuidance: { title: string; text: string; kind: string; professionalAdviceRequired: boolean; sourceIds: string[] }[];
  myths: { myth: string; correction: string; sourceIds: string[] }[];
  jurisdictionNotes: { jurisdiction: string; text: string; effectiveAt: string; sourceIds: string[] }[];
  relatedModules: string[]; sourceIds: string[];
  review: { researchOwner: string | null; evidenceReviewer: string | null; clinicalReviewer: string | null; editorialReviewer: string | null; lastEvidenceSearch: string | null; lastClinicallyReviewed: string | null; nextReviewDue: string | null; changeSummary: string | null };
}
interface SafetyItem { text: string; action: string; sourceIds: string[] }
interface CanonicalClaim {
  id: string; statement: string; outcome: string; population: string;
  intervention: { name: string; formulation: string | null; regimenStudied: string | null };
  comparison: string | null; evidence: { certainty: string; direction: string; effectSummary: string | null; rationale: string };
  sourceIds: string[]; caveats: string[]; jurisdictions: string[]; reviewedAt: string | null;
}
