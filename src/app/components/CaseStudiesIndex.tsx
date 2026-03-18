import { useState } from 'react';
import { Link } from 'react-router';
import { caseStudies, allProjectTypes, allSkills } from './caseStudyData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, Filter, X } from 'lucide-react';

/* ── Tag ── */
function Tag({ children, variant = 'default' }: { children: React.ReactNode; variant?: string }) {
  const styles: Record<string, React.CSSProperties> = {
    manager: { background: 'rgba(232,85,58,0.12)', color: 'var(--ds-coral-400)', fontWeight: 600 },
    ic: { background: 'rgba(27,168,160,0.12)', color: 'var(--ds-teal-400)', fontWeight: 600 },
    coral: { background: 'rgba(232,85,58,0.12)', color: 'var(--ds-coral-400)' },
    teal: { background: 'rgba(27,168,160,0.12)', color: 'var(--ds-teal-400)' },
    gold: { background: 'rgba(232,180,0,0.12)', color: 'var(--ds-gold-400)' },
    lime: { background: 'rgba(139,195,74,0.15)', color: 'var(--ds-lime-300)' },
    default: { background: 'rgba(255,255,255,0.06)', color: 'var(--ds-ink-secondary)' },
  };
  return (
    <span
      className="inline-flex items-center"
      style={{
        fontFamily: 'var(--ds-font-body)',
        fontWeight: 500,
        fontSize: '0.75rem',
        letterSpacing: '0.02em',
        padding: '0.375rem 0.875rem',
        borderRadius: '9999px',
        ...(styles[variant] || styles.default),
      }}
    >
      {children}
    </span>
  );
}

/* ── Filter chip ── */
function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer transition-all duration-200"
      style={{
        fontFamily: 'var(--ds-font-body)',
        fontWeight: 500,
        fontSize: '0.75rem',
        letterSpacing: '0.02em',
        padding: '0.375rem 0.875rem',
        borderRadius: '9999px',
        border: active ? '1.5px solid var(--ds-coral)' : '1.5px solid rgba(255,255,255,0.1)',
        background: active ? 'rgba(232,85,58,0.12)' : 'transparent',
        color: active ? 'var(--ds-coral-400)' : 'var(--ds-ink-secondary)',
      }}
    >
      {label}
    </button>
  );
}

export function CaseStudiesIndex() {
  const [roleFilter, setRoleFilter] = useState<'All' | 'Manager' | 'IC'>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [skillFilter, setSkillFilter] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters = roleFilter !== 'All' || typeFilter !== 'All' || skillFilter !== 'All';

  const filtered = caseStudies.filter((cs) => {
    if (roleFilter !== 'All' && cs.roleType !== roleFilter) return false;
    if (typeFilter !== 'All' && cs.projectType !== typeFilter) return false;
    if (skillFilter !== 'All' && !cs.skills.includes(skillFilter)) return false;
    return true;
  });

  function clearFilters() {
    setRoleFilter('All');
    setTypeFilter('All');
    setSkillFilter('All');
  }

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: 'var(--ds-font-body)',
        background: 'var(--ds-canvas)',
        color: 'var(--ds-ink-inverse)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--ds-surface)', padding: '6rem 0 4rem' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[72rem] px-8">
          <div
            className="mb-4"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ds-coral)',
            }}
          >
            Portfolio
          </div>
          <h1
            className="mb-4"
            style={{
              fontFamily: 'var(--ds-font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'var(--ds-ink)',
            }}
          >
            Case Studies
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--ds-ink-secondary)',
              maxWidth: '38rem',
              fontFamily: 'var(--ds-font-body)',
            }}
          >
            Nearly two decades of healthcare design leadership &mdash; from service design and CX strategy to AI-powered clinical tools and enterprise design systems.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section style={{ background: 'var(--ds-surface-raised)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="mx-auto max-w-[72rem] px-8 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="cursor-pointer inline-flex items-center gap-2 transition-colors duration-200"
              style={{
                fontFamily: 'var(--ds-font-body)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                color: showFilters ? 'var(--ds-coral)' : 'var(--ds-ink-secondary)',
                background: 'none',
                border: 'none',
                padding: '0.5rem 0',
              }}
            >
              <Filter size={14} />
              Filter &amp; Sort
              {hasActiveFilters && (
                <span
                  className="ml-1"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--ds-coral)',
                    display: 'inline-block',
                  }}
                />
              )}
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="cursor-pointer inline-flex items-center gap-1 transition-colors duration-200"
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  color: 'var(--ds-ink-muted)',
                  background: 'none',
                  border: 'none',
                }}
              >
                <X size={12} />
                Clear filters
              </button>
            )}
          </div>

          {showFilters && (
            <div className="pt-4 pb-2 flex flex-col gap-4">
              {/* Role */}
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--ds-ink-muted)',
                  }}
                >
                  Role Type
                </div>
                <div className="flex gap-2 flex-wrap">
                  {(['All', 'Manager', 'IC'] as const).map((r) => (
                    <FilterChip key={r} label={r} active={roleFilter === r} onClick={() => setRoleFilter(r)} />
                  ))}
                </div>
              </div>
              {/* Project type */}
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--ds-ink-muted)',
                  }}
                >
                  Project Type
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['All', ...allProjectTypes].map((t) => (
                    <FilterChip key={t} label={t} active={typeFilter === t} onClick={() => setTypeFilter(t)} />
                  ))}
                </div>
              </div>
              {/* Skills */}
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--ds-ink-muted)',
                  }}
                >
                  Skill
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['All', ...allSkills].map((s) => (
                    <FilterChip key={s} label={s} active={skillFilter === s} onClick={() => setSkillFilter(s)} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="ds-bg-grid-dark" style={{ background: 'var(--ds-surface)', padding: '4rem 0 7.5rem' }}>
        <div className="mx-auto max-w-[72rem] px-8">
          {/* Result count */}
          <div
            className="mb-8"
            style={{ fontSize: '0.8125rem', color: 'var(--ds-ink-muted)' }}
          >
            Showing {filtered.length} of {caseStudies.length} case studies
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div
                className="mb-4"
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'var(--ds-ink)',
                }}
              >
                No case studies match your filters
              </div>
              <button
                onClick={clearFilters}
                className="cursor-pointer transition-all duration-200"
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  background: 'var(--ds-coral)',
                  color: '#fff',
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div
              className="grid gap-8"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
            >
              {filtered.map((cs) => (
                <Link key={cs.id} to={`/case-studies/${cs.id}`} className="no-underline">
                  <div
                    className="overflow-hidden cursor-pointer transition-all duration-300 h-full flex flex-col"
                    style={{
                      background: 'var(--ds-surface-raised)',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(255,255,255,0.04)',
                      boxShadow: 'var(--ds-shadow-dark-subtle)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = 'var(--ds-shadow-dark-elevated)';
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'var(--ds-shadow-dark-subtle)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ height: 200 }}>
                      <ImageWithFallback
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(0.65) saturate(0.8)' }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to top, var(--ds-surface-raised) 0%, transparent 60%)',
                        }}
                      />
                      <span
                        className="absolute top-4 right-4"
                        style={{
                          fontFamily: 'var(--ds-font-heading)',
                          fontWeight: 900,
                          fontSize: '2.5rem',
                          color: 'rgba(255,255,255,0.08)',
                          lineHeight: 1,
                        }}
                      >
                        {cs.num}
                      </span>
                      {/* Read time */}
                      <div
                        className="absolute bottom-4 left-4 flex items-center gap-1.5"
                        style={{
                          fontSize: '0.6875rem',
                          color: 'rgba(255,255,255,0.7)',
                          fontWeight: 500,
                        }}
                      >
                        <Clock size={11} />
                        {cs.readTime}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div
                        className="mb-2"
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--ds-ink-muted)',
                          fontFamily: 'var(--ds-font-body)',
                        }}
                      >
                        {cs.company}
                      </div>
                      <div className="flex gap-2 flex-wrap mb-3">
                        {cs.tags.map((t, i) => (
                          <Tag key={i} variant={t.variant}>
                            {t.label}
                          </Tag>
                        ))}
                      </div>
                      <div
                        className="mb-3"
                        style={{
                          fontFamily: 'var(--ds-font-heading)',
                          fontWeight: 700,
                          fontSize: '1.25rem',
                          lineHeight: 1.3,
                          color: 'var(--ds-ink)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {cs.title}
                      </div>
                      <div
                        className="mb-5 flex-1"
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: 1.6,
                          color: 'var(--ds-ink-secondary)',
                          fontFamily: 'var(--ds-font-body)',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {cs.description}
                      </div>

                      {/* Skills */}
                      <div className="flex gap-1.5 flex-wrap mb-4">
                        {cs.skills.map((s) => (
                          <span
                            key={s}
                            style={{
                              fontSize: '0.625rem',
                              fontWeight: 600,
                              letterSpacing: '0.06em',
                              textTransform: 'uppercase',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '0.25rem',
                              background: 'rgba(255,255,255,0.04)',
                              color: 'var(--ds-ink-muted)',
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Metric */}
                      <div
                        className="inline-flex items-center gap-3 mt-auto"
                        style={{
                          padding: '0.5rem 0.75rem',
                          background: 'rgba(232, 85, 58, 0.08)',
                          borderRadius: '0.25rem',
                          borderLeft: '3px solid var(--ds-coral)',
                          alignSelf: 'flex-start',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--ds-font-heading)',
                            fontWeight: 900,
                            fontSize: '1.375rem',
                            color: 'var(--ds-coral)',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {cs.metricNum}
                        </span>
                        <span
                          style={{
                            fontSize: '0.6875rem',
                            color: 'var(--ds-ink-secondary)',
                            lineHeight: 1.3,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {cs.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
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
            Amy leNoir &mdash; Portfolio
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--ds-ink-muted)', fontFamily: 'var(--ds-font-body)' }}>
            <Link to="/" className="no-underline" style={{ color: 'var(--ds-coral)' }}>
              Home
            </Link>
            {' '}&middot;{' '}
            <Link to="/case-studies" className="no-underline" style={{ color: 'var(--ds-coral)' }}>
              Case Studies
            </Link>
            {' '}&middot;{' '}
            <a href="#" className="no-underline" style={{ color: 'var(--ds-coral)' }}>About</a>
            {' '}&middot;{' '}
            <a href="#" className="no-underline" style={{ color: 'var(--ds-coral)' }}>Contact</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
