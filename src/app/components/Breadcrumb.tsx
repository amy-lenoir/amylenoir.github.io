import { Link, useLocation } from 'react-router';

const outfit = "'Outfit', sans-serif";

/* Human-readable labels for path segments */
const LABELS: Record<string, string> = {
  'case-studies': 'Case Studies',
  'presbyterian': 'Presbyterian Cardiology',
  'mayo-clinic': 'Mayo Clinic',
  'healthcare': 'Healthcare',
  'ai-vibe-projects': 'AI Vibe Projects',
  'v2': 'Home V2',
  'v3': 'Home V3',
  'v4': 'Home V4',
};

function labelFor(segment: string) {
  return LABELS[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Breadcrumb() {
  const { pathname } = useLocation();

  // Don't render on home page
  if (pathname === '/') return null;

  const segments = pathname.replace(/\/$/, '').split('/').filter(Boolean);

  const crumbs = segments.map((seg, i) => ({
    label: labelFor(seg),
    path: '/' + segments.slice(0, i + 1).join('/'),
  }));

  return (
    <div
      className="sticky top-[57px] z-40"
      style={{
        background: 'var(--ds-surface)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <nav
        className="mx-auto max-w-[72rem] px-8 py-3 flex items-center gap-2 flex-wrap"
        style={{ fontSize: '0.8125rem', fontFamily: outfit, color: 'var(--ds-ink-muted)' }}
        aria-label="Breadcrumb"
      >
        <Link
          to="/"
          className="no-underline transition-colors duration-200"
          style={{ color: 'var(--ds-ink-secondary)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ds-ink)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ds-ink-secondary)')}
        >
          Home
        </Link>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <span key={crumb.path} className="flex items-center gap-2">
              <span style={{ color: 'var(--ds-ink-muted)', fontSize: '0.7rem' }}>/</span>
              {isLast ? (
                <span style={{ color: 'var(--ds-ink)' }}>{crumb.label}</span>
              ) : (
                <Link
                  to={crumb.path}
                  className="no-underline transition-colors duration-200"
                  style={{ color: 'var(--ds-ink-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ds-ink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ds-ink-secondary)')}
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
