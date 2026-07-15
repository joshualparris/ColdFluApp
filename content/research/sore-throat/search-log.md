# Sore throat — search log

Search date: 2026-07-15

| Source/service | Exact query or action | Result used | Notes |
|---|---|---|---|
| Web search | `site:healthdirect.gov.au sore throat self care emergency Australia` | Healthdirect sore throat page | Australian course, self-care, red flags and helpline |
| Web search | `site:health.gov.au sore throat antibiotics Australia` | Australian Government antibiotics page | Viral respiratory infections and antibiotic stewardship |
| Web search | `site:cochrane.org sore throat lozenges gargle analgesics review` | No directly usable result in this pass | Requires a fuller database search |
| Web search | `site:nice.org.uk guidance sore throat acute self care analgesia` | NICE NG84 recommendations and evidence summary | Analgesia, lozenges, evidence gaps and illness course |
| Direct page review | `https://www.healthdirect.gov.au/sore-throat` | Included | Page stated last reviewed April 2025 |
| Direct guideline review | `https://www.nice.org.uk/guidance/ng84` | Included | UK local prescribing details excluded from AU advice |
| PubMed web index | `acute sore throat systematic review analgesics lozenges corticosteroids gargle` | Located PMID 32356360, 39318911 and 24621446 | Discovery leads only; full record retrieval was blocked by reCAPTCHA and no record was promoted |
| NICE evidence pages | NG84 evidence review, summary, history and recommendations | Rechecked | Confirmed formulation-specific limits and evidence gaps |
| Cochrane Library web search | `sore throat corticosteroids lozenges analgesics review` | No directly retrievable record | CENTRAL/full Cochrane searching remains incomplete |
| NCBI E-utilities PubMed XML | `efetch?db=pubmed&id=32356360,39318911,24621446&retmode=xml` | 3 records retrieved and screened | Exact titles, authors, abstracts, dates, DOI, publication type and PMID retrieved without interactive PubMed; 2 retained as canonical source records |
| Crossref REST API | DOI lookups for `10.1002/14651858.CD008268.pub3`, `10.7759/cureus.67740`, `10.1186/1471-2296-15-45` | 3 metadata records checked | Confirmed titles, dates, authors and DOI update relation; no correction/retraction relation reported for retained records |

## Screening notes

- Healthdirect laryngitis material was not used for the sore-throat module because it addresses a different primary condition.
- General Australian safe-medicines guidance was superseded for the current claims by the more specific 2025 antibiotics communication.
- Search snippets, commercial pages and product marketing were excluded.

## Work remaining for or after evidence-review hand-off

- An independent reviewer should decide whether separate CENTRAL/Epistemonikos access and further citation searching are necessary after reviewing the documented PubMed, Cochrane, NICE and Europe PMC coverage.
- Retrieve proprietary/full trial reports if medicine or formulation-specific claims are reconsidered; the current combined analgesic and medicated-lozenge claims were removed.
- Australian clinical review remains required for harms, contraindications and paediatric/pregnancy applicability.
- Complete publisher/trial-level correction, retraction, funding and conflict checks where full reports become available.
- Have a second person screen and verify the claim-to-source extraction.
- Complete trial-level funding/conflict and formal retraction-database checks; metadata verification alone does not complete appraisal.

## Structured PubMed searches — 2026-07-15

All searches used NCBI E-utilities `esearch`, database `pubmed`, no date/language filter, `sort=relevance`, `retmax=20`. Counts are database results; the first 20 records were title/abstract screened. Included means retained for extraction or exact-source context, not necessarily mapped to a reader claim.

| Question | Exact query | Results | Screened | Included in package | Limitations |
|---|---|---:|---:|---|
| Natural history | `("Pharyngitis"[Mesh] OR sore throat[Title/Abstract]) AND (natural history OR duration OR self-limiting)` | 1388 | 20 | Current NICE/Healthdirect records retained; no new primary source promoted | Broad retrieval; cause-specific trajectories not fully screened |
| Paracetamol | `("Pharyngitis"[Mesh] OR sore throat[Title/Abstract]) AND (acetaminophen OR paracetamol) AND (randomized controlled trial[pt] OR systematic review[pt])` | 45 | 20 | PMID 3197368 as trial lead; NICE synthesis retained | Full trial text and clinically interpretable absolute effects unavailable |
| Ibuprofen | `("Pharyngitis"[Mesh] OR sore throat[Title/Abstract]) AND ibuprofen AND (randomized controlled trial[pt] OR systematic review[pt])` | 17 | 17 | PMID 8491069 as paediatric assay lead | Directness to uncomplicated sore throat and current safety context unresolved |
| Lozenges | `("Pharyngitis"[Mesh] OR sore throat[Title/Abstract]) AND (lozenge OR benzocaine OR flurbiprofen OR hexylresorcinol OR ambroxol)` | 153 | 20 | PMID 24621446 and 28869700 | Ingredient/formulation heterogeneity; some full texts inaccessible |
| Sprays | `("Pharyngitis"[Mesh] OR sore throat[Title/Abstract]) AND (spray OR benzydamine OR chlorhexidine)` | 223 | 20 | NICE evidence summary only | Retrieval dominated by unrelated perioperative/dental uses; no self-care spray claim supported |
| Comfort measures | `("Pharyngitis"[Mesh] OR sore throat[Title/Abstract]) AND (gargle OR salt water OR warm fluids OR cold fluids OR ice OR hydration OR humidification OR honey)` | 195 | 20 | Healthdirect custom/guidance only | Many cough/general respiratory or perioperative records; no direct effect estimate promoted |
| Corticosteroids | `("Pharyngitis"[Mesh] OR sore throat[Title/Abstract]) AND corticosteroids AND (systematic review[pt] OR randomized controlled trial[pt])` | 81 | 20 | PMID 32356360 and 28931508; PMID 39318911 screened | Clinical-setting/adjunct evidence; not home self-care and no reader recommendation added |
| Antibiotics | `("Pharyngitis"[Mesh] OR sore throat[Title/Abstract]) AND antibiotics AND systematic review[pt]` | 91 | 20 | PMID 34881426 | Older trials and baseline-risk differences constrain modern Australian transfer |
| Diagnostic limits | `("Pharyngitis"[Mesh] OR sore throat[Title/Abstract]) AND (diagnosis OR clinical prediction rule OR rapid antigen) AND systematic review[pt]` | 144 | 20 | NICE diagnostic boundary retained | Top results included chronic rhinosinusitis and recurrent tonsillitis; no diagnostic rule added |

Exact metadata for retained PMIDs was retrieved with `efetch` XML and `esummary` JSON. Europe PMC searches `EXT_ID:<PMID> AND SRC:MED` verified titles, DOI, dates, journal, publication type, PMCID and citation metadata for PMIDs 34881426, 28931508, 28869700, 3197368, 8491069 and 17535039. Crossref DOI records were used as a secondary metadata check where available.
