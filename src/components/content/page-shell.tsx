import Link from "next/link";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{intro}</p>
      {children}
      <p style={{ marginTop: "2rem" }}>
        <Link href="/">Return to the public status page</Link>
      </p>
    </>
  );
}
