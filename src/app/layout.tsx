import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Cold & Flu Research Base", template: "%s · Cold & Flu Research Base" }, description: "An evidence-led research base for respiratory self-care. No medical modules are currently published." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-AU"><body><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><Link href="/" className="brand">Cold & Flu Research Base</Link><nav aria-label="Primary"><Link href="/">Public status</Link><Link href="/preview">Research preview</Link></nav></header><main id="main" className="shell">{children}</main><footer><p>Research project only. Not a diagnosis or substitute for professional care.</p></footer></body></html>; }
