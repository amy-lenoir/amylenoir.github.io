interface SpecimenProps {
  name: string;
  spec: string;
  className?: string;
  style: React.CSSProperties;
  text: string;
  isLast?: boolean;
}

function TypeSpecimen({ name, spec, style, text, isLast }: SpecimenProps) {
  return (
    <div
      className={isLast ? '' : 'mb-10 pb-10'}
      style={isLast ? {} : { borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="flex gap-4 items-baseline mb-2">
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ds-coral)',
          }}
        >
          {name}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--ds-ink-muted)' }}>{spec}</span>
      </div>
      <div style={style}>{text}</div>
    </div>
  );
}

export function TypographySection() {
  return (
    <section className="ds-bg-grid-dark py-[4.5rem]">
      <div className="mx-auto max-w-[72rem] px-8">
        <div
          className="mb-8 pb-3"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: 'var(--ds-ink)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          Typography
        </div>

        <TypeSpecimen
          name="Display"
          spec="Satoshi 900 \u00b7 4.5rem \u00b7 -0.03em"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--ds-ink)',
          }}
          text="Design teams that ship."
        />
        <TypeSpecimen
          name="Heading 1"
          spec="Satoshi 700 \u00b7 3rem \u00b7 -0.025em"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: 'var(--ds-ink)',
          }}
          text="Healthcare systems trusted at scale"
        />
        <TypeSpecimen
          name="Heading 2"
          spec="Satoshi 600 \u00b7 2.25rem \u00b7 -0.02em"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 600,
            fontSize: '2.25rem',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'var(--ds-ink)',
          }}
          text="Nearly two decades of clinical design"
        />
        <TypeSpecimen
          name="Heading 3"
          spec="Satoshi 600 \u00b7 1.5rem"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            color: 'var(--ds-ink)',
          }}
          text="Cross-functional influence at the C-suite level"
        />
        <TypeSpecimen
          name="Body"
          spec="General Sans 400 \u00b7 1rem \u00b7 1.65 line-height"
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.65,
            color: 'var(--ds-ink-secondary)',
          }}
          text="I build the design teams and healthcare systems that ship products trusted by clinicians and patients. Nearly two decades of experience across clinical, enterprise, and consumer health."
        />
        <TypeSpecimen
          name="Caption"
          spec="General Sans 400 \u00b7 0.875rem (14px min per PRD)"
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.5,
            color: 'var(--ds-ink-muted)',
          }}
          text="7 min read \u00b7 Manager \u00b7 Healthcare \u00b7 B2B SaaS"
        />
        <TypeSpecimen
          name="Overline"
          spec="General Sans 700 \u00b7 0.75rem \u00b7 0.1em tracking \u00b7 uppercase"
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontWeight: 700,
            fontSize: '0.75rem',
            lineHeight: 1,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ds-coral)',
          }}
          text="Featured Case Study"
          isLast
        />
      </div>
    </section>
  );
}
