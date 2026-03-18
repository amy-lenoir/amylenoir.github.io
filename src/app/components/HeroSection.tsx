export function HeroSection() {
  return (
    <section className="ds-bg-grid-dark py-[7.5rem] text-center">
      <div className="mx-auto max-w-[72rem] px-8">
        <div
          className="ds-animate-in ds-delay-1 mb-6"
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ds-coral)',
          }}
        >
          Design System v1.0
        </div>
        <h1
          className="ds-animate-in ds-delay-2"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--ds-ink)',
          }}
        >
          Portfolio<br />Design System
        </h1>
        <p
          className="ds-animate-in ds-delay-3 mx-auto mt-6"
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--ds-ink-secondary)',
            maxWidth: '36rem',
            fontFamily: 'var(--ds-font-body)',
          }}
        >
          Tailwind CSS theme inspired by <em>The Invincible Company</em>.<br />
          Dark editorial foundation. Bold accent palette. Geometric type.
        </p>
      </div>
    </section>
  );
}
