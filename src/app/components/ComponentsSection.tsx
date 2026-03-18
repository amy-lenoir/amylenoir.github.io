import { useState } from 'react';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  );
}

function Tag({ children, variant }: { children: React.ReactNode; variant?: string }) {
  const variantStyles: Record<string, React.CSSProperties> = {
    manager: { background: 'rgba(232,85,58,0.12)', color: 'var(--ds-coral-400)', fontWeight: 600 },
    ic: { background: 'rgba(27,168,160,0.12)', color: 'var(--ds-teal-400)', fontWeight: 600 },
    coral: { background: 'rgba(232,85,58,0.12)', color: 'var(--ds-coral-400)' },
    teal: { background: 'rgba(27,168,160,0.12)', color: 'var(--ds-teal-400)' },
    gold: { background: 'rgba(232,180,0,0.12)', color: 'var(--ds-gold-400)' },
    lime: { background: 'rgba(139,195,74,0.15)', color: 'var(--ds-lime-300)' },
    default: { background: 'rgba(255,255,255,0.06)', color: 'var(--ds-ink-secondary)' },
  };
  const s = variantStyles[variant || 'default'] || variantStyles.default;
  return (
    <span
      className="inline-flex items-center transition-all duration-150"
      style={{
        fontFamily: 'var(--ds-font-body)',
        fontWeight: 500,
        fontSize: '0.75rem',
        letterSpacing: '0.02em',
        padding: '0.375rem 0.875rem',
        borderRadius: '9999px',
        ...s,
      }}
    >
      {children}
    </span>
  );
}

interface CardData {
  num: string;
  tags: { label: string; variant: string }[];
  title: string;
  desc: string;
  metricNum: string;
  metricLabel: string;
  gradient?: string;
}

const cards: CardData[] = [
  {
    num: '01',
    tags: [
      { label: 'Manager', variant: 'manager' },
      { label: 'Healthcare', variant: 'coral' },
    ],
    title: 'Reimagining Cardiac Rehab at Scale',
    desc: 'Led a cross-functional team of 12 to redesign the end-to-end cardiac rehabilitation experience across 40+ facilities.',
    metricNum: '34%',
    metricLabel: 'task completion\nimprovement',
  },
  {
    num: '02',
    tags: [
      { label: 'Manager', variant: 'manager' },
      { label: 'B2B SaaS', variant: 'teal' },
      { label: '0-to-1', variant: 'gold' },
    ],
    title: 'AI-Powered Clinical Decision Support',
    desc: 'Built the design practice from zero for a Series B health tech startup, shipping the first clinician-in-the-loop AI tool.',
    metricNum: '3\u00d7',
    metricLabel: 'faster design-to-dev\nhandoff',
    gradient: 'linear-gradient(135deg, rgba(27,168,160,0.15) 0%, var(--ds-surface) 100%)',
  },
  {
    num: '03',
    tags: [
      { label: 'IC', variant: 'ic' },
      { label: 'Growth', variant: 'lime' },
    ],
    title: 'Revenue Cycle Optimization',
    desc: 'Redesigned the provider billing portal for a large health system, reducing claim rejection rates and improving cash flow.',
    metricNum: '$2.1M',
    metricLabel: 'annual revenue\nimpact',
    gradient: 'linear-gradient(135deg, rgba(232,180,0,0.1) 0%, var(--ds-surface) 100%)',
  },
];

function CaseStudyCard({ card }: { card: CardData }) {
  return (
    <div
      className="overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: 'var(--ds-surface-raised)',
        borderRadius: '0.75rem',
        border: '1px solid rgba(255,255,255,0.04)',
        boxShadow: 'var(--ds-shadow-dark-subtle)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--ds-shadow-dark-elevated)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--ds-shadow-dark-subtle)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
      }}
    >
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: 200,
          background: card.gradient || 'linear-gradient(135deg, var(--ds-surface-overlay) 0%, var(--ds-surface) 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <span
          className="relative z-10"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: '3rem',
            color: 'rgba(255,255,255,0.06)',
            letterSpacing: '-0.03em',
          }}
        >
          {card.num}
        </span>
      </div>
      <div className="p-6">
        <div className="flex gap-2 flex-wrap mb-3">
          {card.tags.map((t, i) => (
            <Tag key={i} variant={t.variant}>
              {t.label}
            </Tag>
          ))}
        </div>
        <div
          className="mb-2"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 700,
            fontSize: '1.25rem',
            lineHeight: 1.3,
            color: 'var(--ds-ink)',
            letterSpacing: '-0.01em',
          }}
        >
          {card.title}
        </div>
        <div
          className="mb-4"
          style={{
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            color: 'var(--ds-ink-secondary)',
            fontFamily: 'var(--ds-font-body)',
          }}
        >
          {card.desc}
        </div>
        <div
          className="inline-flex items-center gap-2"
          style={{
            padding: '0.5rem 0.75rem',
            background: 'rgba(232, 85, 58, 0.08)',
            borderRadius: '0.25rem',
            borderLeft: '3px solid var(--ds-coral)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--ds-font-heading)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: 'var(--ds-coral)',
              letterSpacing: '-0.02em',
            }}
          >
            {card.metricNum}
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--ds-ink-secondary)',
              lineHeight: 1.3,
              whiteSpace: 'pre-line',
            }}
          >
            {card.metricLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ComponentsSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1.5px solid rgba(255,255,255,0.1)',
    borderRadius: '0.5rem',
    color: 'var(--ds-ink)',
    fontFamily: 'var(--ds-font-body)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'all 0.2s',
  };

  return (
    <section className="ds-bg-grid-dark py-[4.5rem]">
      <div className="mx-auto max-w-[72rem] px-8">
        {/* Buttons */}
        <SectionLabel>Buttons</SectionLabel>
        <div className="flex gap-4 flex-wrap mb-8 items-center">
          <button
            className="inline-flex items-center justify-center cursor-pointer no-underline transition-all duration-200"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.04em',
              padding: '0.75rem 1.75rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: 'var(--ds-coral)',
              color: '#fff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--ds-coral-600)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(232, 85, 58, 0.3)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--ds-coral)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View My Work
          </button>
          <button
            className="inline-flex items-center justify-center cursor-pointer transition-all duration-200"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.04em',
              padding: '0.75rem 1.75rem',
              borderRadius: '0.5rem',
              background: 'transparent',
              color: 'var(--ds-ink)',
              border: '1.5px solid rgba(255,255,255,0.2)',
            }}
          >
            Download Resume
          </button>
          <button
            className="inline-flex items-center justify-center cursor-pointer transition-all duration-200"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.04em',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              background: 'transparent',
              color: 'var(--ds-ink-secondary)',
              border: 'none',
            }}
          >
            Contact &rarr;
          </button>
          <button
            className="inline-flex items-center justify-center cursor-pointer transition-all duration-200"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontWeight: 600,
              fontSize: '0.8125rem',
              letterSpacing: '0.04em',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: 'var(--ds-coral)',
              color: '#fff',
            }}
          >
            Read Case Study
          </button>
          <button
            className="inline-flex items-center justify-center cursor-pointer transition-all duration-200"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              padding: 0,
              borderRadius: '0.5rem',
              background: 'rgba(255,255,255,0.06)',
              color: 'var(--ds-ink-secondary)',
              border: 'none',
              fontSize: '1rem',
            }}
          >
            &nearr;
          </button>
        </div>

        {/* Tags */}
        <SectionLabel>Tags &amp; Badges</SectionLabel>
        <div className="flex gap-2 flex-wrap mb-8">
          <Tag variant="manager">Manager</Tag>
          <Tag variant="ic">IC</Tag>
          <Tag variant="coral">Healthcare</Tag>
          <Tag variant="teal">B2B SaaS</Tag>
          <Tag variant="gold">0-to-1</Tag>
          <Tag variant="lime">Growth</Tag>
          <Tag>Design Systems</Tag>
          <Tag>Service Design</Tag>
          <Tag>AI</Tag>
        </div>

        {/* Metrics */}
        <SectionLabel>Metrics Callout Block</SectionLabel>
        <div
          className="grid gap-px overflow-hidden mb-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '0.75rem',
          }}
        >
          {[
            { value: '34%', color: 'var(--ds-coral)', label: 'Task completion\nrate improvement' },
            { value: '3\u00d7', color: 'var(--ds-teal)', label: 'Faster design-to-dev\nhandoff' },
            { value: '4\u219222', color: 'var(--ds-gold)', label: 'Design team\nscaled' },
            { value: '$2.1M', color: 'var(--ds-lime)', label: 'Annual revenue\nimpact' },
          ].map((m, i) => (
            <div key={i} className="text-center" style={{ background: 'var(--ds-surface-raised)', padding: '2rem 1.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 900,
                  fontSize: '2.5rem',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.5rem',
                  color: m.color,
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--ds-ink-secondary)', lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <SectionLabel>Case Study Cards (Dark)</SectionLabel>
        <div
          className="grid gap-6 mb-8"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
        >
          {cards.map((card) => (
            <CaseStudyCard key={card.num} card={card} />
          ))}
        </div>

        {/* Form */}
        <SectionLabel>Form Elements</SectionLabel>
        <div className="mb-6" style={{ maxWidth: '28rem' }}>
          <label
            className="block mb-2"
            style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ds-ink-secondary)' }}
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Amy leNoir"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--ds-coral)';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(232, 85, 58, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
        <div className="mb-6" style={{ maxWidth: '28rem' }}>
          <label
            className="block mb-2"
            style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ds-ink-secondary)' }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="hello@amylenoir.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--ds-coral)';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(232, 85, 58, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
        <div className="mb-6" style={{ maxWidth: '28rem' }}>
          <label
            className="block mb-2"
            style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ds-ink-secondary)' }}
          >
            Message
          </label>
          <textarea
            placeholder="Tell me about the role..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--ds-coral)';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(232, 85, 58, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
        <button
          className="inline-flex items-center justify-center cursor-pointer transition-all duration-200 mb-12"
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontWeight: 600,
            fontSize: '0.875rem',
            letterSpacing: '0.04em',
            padding: '0.75rem 1.75rem',
            borderRadius: '0.5rem',
            border: 'none',
            background: 'var(--ds-coral)',
            color: '#fff',
          }}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
