interface SwatchProps {
  bg: string;
  label: string;
  hex?: string;
  light?: boolean;
  border?: string;
}

function Swatch({ bg, label, hex, light = true, border }: SwatchProps) {
  return (
    <div
      className="flex flex-col justify-end rounded-lg cursor-default transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        width: 80,
        height: 80,
        background: bg,
        padding: '0.5rem',
        color: light ? '#fff' : 'var(--ds-ink-inverse)',
        border: border || 'none',
        boxShadow: 'var(--ds-shadow-dark-subtle)',
      }}
    >
      <span style={{ opacity: 0.8, fontSize: '0.625rem', fontWeight: 600 }}>{label}</span>
      {hex && <span style={{ opacity: 0.6, fontSize: '0.5625rem' }}>{hex}</span>}
    </div>
  );
}

interface PaletteRowProps {
  label: string;
  swatches: SwatchProps[];
}

function PaletteRow({ label, swatches }: PaletteRowProps) {
  return (
    <>
      <div
        className="w-full mb-1"
        style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ds-ink-muted)',
        }}
      >
        {label}
      </div>
      <div className="flex gap-3 mb-8 flex-wrap">
        {swatches.map((s, i) => (
          <Swatch key={i} {...s} />
        ))}
      </div>
    </>
  );
}

export function ColorPalette() {
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
          Color Palette
        </div>

        <PaletteRow
          label="Foundation"
          swatches={[
            { bg: 'var(--ds-surface)', label: 'Surface', hex: '#1C1C24' },
            { bg: 'var(--ds-surface-raised)', label: 'Raised', hex: '#26262F' },
            { bg: 'var(--ds-surface-sunken)', label: 'Sunken', hex: '#14141A' },
            { bg: 'var(--ds-surface-overlay)', label: 'Overlay', hex: '#32323D' },
            { bg: 'var(--ds-canvas)', label: 'Canvas', hex: '#FFFFFF', light: false, border: '1px solid rgba(0,0,0,0.08)' },
            { bg: 'var(--ds-canvas-soft)', label: 'Soft', hex: '#F8F8FA', light: false, border: '1px solid rgba(0,0,0,0.06)' },
          ]}
        />

        <PaletteRow
          label="Coral — Primary Accent"
          swatches={[
            { bg: 'var(--ds-coral-50)', label: '50', light: false },
            { bg: 'var(--ds-coral-100)', label: '100', light: false },
            { bg: 'var(--ds-coral-200)', label: '200', light: false },
            { bg: 'var(--ds-coral-300)', label: '300', light: false },
            { bg: 'var(--ds-coral-400)', label: '400' },
            { bg: 'var(--ds-coral)', label: '500 \u2605', hex: '#E8553A' },
            { bg: 'var(--ds-coral-600)', label: '600' },
            { bg: 'var(--ds-coral-700)', label: '700' },
          ]}
        />

        <PaletteRow
          label="Teal — Secondary Accent"
          swatches={[
            { bg: 'var(--ds-teal-50)', label: '50', light: false },
            { bg: 'var(--ds-teal-100)', label: '100', light: false },
            { bg: 'var(--ds-teal-200)', label: '200', light: false },
            { bg: 'var(--ds-teal-400)', label: '400', light: false },
            { bg: 'var(--ds-teal)', label: '500 \u2605', hex: '#1BA8A0' },
            { bg: 'var(--ds-teal-600)', label: '600' },
            { bg: 'var(--ds-teal-700)', label: '700' },
          ]}
        />

        <PaletteRow
          label="Gold — Highlights"
          swatches={[
            { bg: 'var(--ds-gold-50)', label: '50', light: false },
            { bg: 'var(--ds-gold-100)', label: '100', light: false },
            { bg: 'var(--ds-gold-300)', label: '300', light: false },
            { bg: 'var(--ds-gold-400)', label: '400', light: false },
            { bg: 'var(--ds-gold)', label: '500 \u2605', hex: '#E8B400', light: false },
            { bg: 'var(--ds-gold-600)', label: '600' },
          ]}
        />

        <PaletteRow
          label="Lime — Growth"
          swatches={[
            { bg: 'var(--ds-lime-50)', label: '50', light: false },
            { bg: 'var(--ds-lime-100)', label: '100', light: false },
            { bg: 'var(--ds-lime-300)', label: '300', light: false },
            { bg: 'var(--ds-lime)', label: '500 \u2605', hex: '#8BC34A', light: false },
            { bg: 'var(--ds-lime-600)', label: '600' },
          ]}
        />
      </div>
    </section>
  );
}
