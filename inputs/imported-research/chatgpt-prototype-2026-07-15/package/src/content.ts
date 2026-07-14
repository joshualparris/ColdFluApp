import sourceData from './content/sources.json';
import type { KnowledgeModule, SourceRecord } from './types';

const moduleFiles = import.meta.glob('./content/modules/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, KnowledgeModule>;

export const modules = Object.values(moduleFiles).sort((a, b) => a.id - b.id);
export const sources = sourceData as SourceRecord[];
export const sourceById = new Map(sources.map((source) => [source.id, source]));

export const sections = [...new Set(modules.map((module) => module.section))];
