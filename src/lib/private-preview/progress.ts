import {readdir} from "node:fs/promises";
import path from "node:path";

export const stageWeights={unassigned:0,assigned:5,researching:15,returned:30,"intake-audit":40,"needs-revision":40,"canonical-draft":50,"evidence-review":65,"clinical-review":80,"editorial-review":90,approved:95,published:100} as const;
export type WorkflowStage=keyof typeof stageWeights|"blocked";
export const workflowStages=["unassigned","assigned","researching","returned","intake-audit","canonical-draft","evidence-review","clinical-review","editorial-review","approved","published"] as const;
export const researchArtefacts=["protocol.md","search-log.md","screening.md","excluded-studies.md","extraction.json","claim-source-map.json","risk-of-bias.md","funding-conflicts.md","corrections-retractions.md","evidence-gaps.md","evidence-review-readiness.md"] as const;

export function workflowPercent(stage:WorkflowStage,achievedBeforeBlock:Exclude<WorkflowStage,"blocked">="unassigned"){return stage==="blocked"?stageWeights[achievedBeforeBlock]:stageWeights[stage]}
export function stageStep(stage:WorkflowStage){return stage==="blocked"?null:workflowStages.indexOf(stage as typeof workflowStages[number])+1}
export async function artefactProgress(slug:string){try{const files=new Set(await readdir(path.join(process.cwd(),"content","research",slug)));const present=researchArtefacts.filter(x=>files.has(x));return {present,total:researchArtefacts.length,missing:researchArtefacts.filter(x=>!files.has(x))}}catch{return {present:[],total:researchArtefacts.length,missing:[...researchArtefacts]}}}
