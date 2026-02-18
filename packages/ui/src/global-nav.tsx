export type ZoneKey = "web" | "docs" | "blog";

export type GlobalNavProps = {
  currentZone: ZoneKey;
};

const links: Array<{ key: ZoneKey; label: string; href: string }> = [
  { key: "web", label: "Web", href: "/" },
  { key: "docs", label: "Docs", href: "/docs" },
  { key: "blog", label: "Blog", href: "/blog" }
];

export function GlobalNav({ currentZone }: GlobalNavProps) {
  return (
    <nav
      aria-label="Global site navigation"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "2rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #d0d7de"
      }}
    >
      <strong>Prism</strong>
      <ul
        style={{
          display: "flex",
          gap: "0.75rem",
          margin: 0,
          padding: 0,
          listStyle: "none"
        }}
      >
        {links.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              aria-current={currentZone === link.key ? "page" : undefined}
              style={{
                fontWeight: currentZone === link.key ? 700 : 400,
                textDecoration: "none"
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
