interface LightCardData {
  num: string;
  tags: { label: string; bg: string; color: string }[];
  title: string;
  desc: string;
}

const lightCards: LightCardData[] = [
  {
    num: '01',
    tags: [
      { label: 'Manager', bg: 'rgba(232,85,58,0.08)', color: 'var(--ds-coral)' },
      { label: 'Healthcare', bg: 'rgba(27,168,160,0.08)', color: 'var(--ds-teal-600)' },
    ],
    title: 'Reimagining Cardiac Rehab',
    desc: 'Led a cross-functional team to redesign the cardiac rehabilitation experience.',
  },
  {
    num: '02',
    tags: [
      { label: 'Manager', bg: 'rgba(232,85,58,0.08)', color: 'var(--ds-coral)' },
      { label: '0-to-1', bg: 'rgba(232,180,0,0.1)', color: 'var(--ds-gold-600)' },
    ],
    title: 'AI Clinical Decision Support',
    desc: 'Built the design practice from zero for a Series B health tech startup.',
  },
  {
    num: '03',
    tags: [
      { label: 'Growth', bg: 'rgba(139,195,74,0.1)', color: 'var(--ds-lime-600)' },
    ],
    title: 'Revenue Cycle Optimization',
    desc: 'Redesigned the provider billing portal for a large health system.',
  },
];

function LightCard({ card }: { card: LightCardData }) {
  return (
    <div
      className="overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: 'var(--ds-canvas)',
        borderRadius: '0.75rem',
        border: '1px solid var(--ds-canvas-muted)',
        boxShadow: 'var(--ds-shadow-subtle)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--ds-shadow-elevated)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--ds-shadow-subtle)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: 200,
          background: 'linear-gradient(135deg, var(--ds-canvas-muted) 0%, var(--ds-canvas-soft) 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <span
          className="relative z-10"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: '3rem',
            color: 'rgba(0,0,0,0.06)',
            letterSpacing: '-0.03em',
          }}
        >
          {card.num}
        </span>
      </div>
      <div className="p-6">
        <div className="flex gap-2 flex-wrap mb-3">
          {card.tags.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center"
              style={{
                fontFamily: 'var(--ds-font-body)',
                fontWeight: 500,
                fontSize: '0.75rem',
                letterSpacing: '0.02em',
                padding: '0.375rem 0.875rem',
                borderRadius: '9999px',
                background: t.bg,
                color: t.color,
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
        <div
          className="mb-2"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 700,
            fontSize: '1.25rem',
            lineHeight: 1.3,
            color: 'var(--ds-ink-inverse)',
            letterSpacing: '-0.01em',
          }}
        >
          {card.title}
        </div>
        <div
          style={{
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            color: 'var(--ds-ink-inverse-secondary)',
            fontFamily: 'var(--ds-font-body)',
          }}
        >
          {card.desc}
        </div>
      </div>
    </div>
  );
}

export function LightModeSection() {
  return (
    <section className="ds-bg-grid-light py-[4.5rem]" style={{ background: 'var(--ds-canvas-soft)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <div
          className="mb-8 pb-3"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: 'var(--ds-ink-inverse)',
            borderBottom: '1px solid var(--ds-canvas-muted)',
          }}
        >
          Light Mode Cards
        </div>
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
        >
          {lightCards.map((card) => (
            <LightCard key={card.num} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
