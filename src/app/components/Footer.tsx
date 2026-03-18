import { Link } from 'react-router';

export function Footer() {
  return (
    <footer
      className="text-center py-12"
      style={{
        background: 'var(--ds-surface-sunken)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="mx-auto max-w-[72rem] px-8">
        <p
          className="mb-2"
          style={{ fontSize: '0.875rem', color: 'var(--ds-ink-muted)', fontFamily: 'var(--ds-font-body)' }}
        >
          Amy leNoir &mdash; Portfolio Design System
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--ds-ink-muted)', fontFamily: 'var(--ds-font-body)' }}>
          Tailwind CSS &middot;{' '}
          <a href="#" className="no-underline hover:underline" style={{ color: 'var(--ds-coral)' }}>
            Satoshi
          </a>{' '}
          +{' '}
          <a href="#" className="no-underline hover:underline" style={{ color: 'var(--ds-coral)' }}>
            General Sans
          </a>{' '}
          via Fontshare
        </p>
      </div>
    </footer>
  );
}
