interface AccentSectionProps {
  bg: string;
  title: string;
  desc: string;
  lightText?: boolean;
}

function AccentBlock({ bg, title, desc, lightText = true }: AccentSectionProps) {
  const textColor = lightText ? '#fff' : 'var(--ds-ink-inverse)';
  return (
    <section className="ds-bg-grid-accent py-[4.5rem]" style={{ background: bg }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <div
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: textColor,
          }}
        >
          {title}
        </div>
        <div
          className="mt-4"
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            maxWidth: '36rem',
            opacity: 0.85,
            color: textColor,
            fontFamily: 'var(--ds-font-body)',
          }}
        >
          {desc}
        </div>
      </div>
    </section>
  );
}

export function AccentSections() {
  return (
    <>
      <AccentBlock
        bg="var(--ds-coral)"
        title="Coral \u2014 Primary Accent"
        desc="CTAs, links, active states, metric highlights. The book's \u201cExplore\u201d energy \u2014 action, urgency, confidence."
      />
      <AccentBlock
        bg="var(--ds-teal)"
        title="Teal \u2014 Secondary Accent"
        desc="Healthcare credibility, trust signals, secondary actions. The book's \u201cInvent\u201d intelligence \u2014 depth, expertise."
      />
      <AccentBlock
        bg="var(--ds-gold)"
        title="Gold \u2014 Highlights"
        desc="Badges, featured items, warm emphasis. The book's \u201cFrontstage\u201d warmth \u2014 optimism, opportunity."
        lightText={false}
      />
      <AccentBlock
        bg="var(--ds-lime)"
        title="Lime \u2014 Growth"
        desc="Success states, growth metrics, positive outcomes. The book's \u201cProfit Formula\u201d energy \u2014 results, impact."
        lightText={false}
      />
    </>
  );
}
