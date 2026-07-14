import type { Metadata } from "next";
export const metadata: Metadata = { robots: { index: false, follow: false }, title: "Unpublished research preview" };
export default function PreviewLayout({ children }: { children: React.ReactNode }) { return children; }
