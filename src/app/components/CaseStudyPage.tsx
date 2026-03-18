import { Link } from 'react-router';

/* ── Shared small components ── */
function Tag({ children, variant = 'default' }: { children: React.ReactNode; variant?: string }) {
  const styles: Record<string, React.CSSProperties> = {
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

function SectionNumber({ num, variant = 'coral' }: { num: number; variant?: 'coral' | 'dark' | 'light' }) {
  const bg =
    variant === 'coral'
      ? 'var(--ds-coral)'
      : variant === 'light'
        ? 'var(--ds-ink-inverse)'
        : 'var(--ds-surface-overlay)';
  const color = variant === 'light' ? 'var(--ds-canvas)' : '#fff';
  return (
    <span
      className="inline-flex items-center justify-center shrink-0 mr-3"
      style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '0.25rem',
        fontFamily: 'var(--ds-font-heading)',
        fontWeight: 900,
        fontSize: '0.875rem',
        background: bg,
        color,
      }}
    >
      {num}
    </span>
  );
}

function SectionHeader({
  num,
  title,
  variant = 'coral',
  titleColor,
}: {
  num: number;
  title: string;
  variant?: 'coral' | 'dark' | 'light';
  titleColor?: string;
}) {
  return (
    <div className="flex items-center mb-10">
      <SectionNumber num={num} variant={variant} />
      <h2
        style={{
          fontFamily: 'var(--ds-font-heading)',
          fontWeight: 700,
          fontSize: '1.75rem',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color: titleColor,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Prose({
  children,
  dark = false,
  className = '',
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        fontSize: '1.0625rem',
        lineHeight: 1.7,
        maxWidth: '42rem',
        color: dark ? 'var(--ds-ink-secondary)' : 'var(--ds-ink-inverse-secondary)',
        fontFamily: 'var(--ds-font-body)',
      }}
    >
      {children}
    </div>
  );
}

/* ── Hero ── */
function CaseStudyHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--ds-surface)', padding: '6rem 0 5rem' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative z-10 mx-auto max-w-[72rem] px-8">
        <div className="cs-anim cs-d1 mb-8" style={{ fontSize: '0.8125rem', color: 'var(--ds-ink-muted)' }}>
          <Link
            to="/case-studies"
            className="no-underline transition-colors duration-200"
            style={{ color: 'var(--ds-ink-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ds-ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ds-ink-secondary)')}
          >
            Case Studies
          </Link>
          <span className="mx-2" style={{ color: 'var(--ds-ink-muted)' }}>
            &rarr;
          </span>
          Presbyterian
        </div>

        <div
          className="cs-anim cs-d2 mb-5"
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ds-coral)',
          }}
        >
          Featured Case Study
        </div>

        <h1
          className="cs-anim cs-d3 mb-6"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: 'var(--ds-ink)',
            maxWidth: '42rem',
          }}
        >
          Presbyterian Cardiology Referrals &amp; CAHPS
        </h1>

        <p
          className="cs-anim cs-d4 mb-10"
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--ds-ink-secondary)',
            maxWidth: '38rem',
            fontFamily: 'var(--ds-font-body)',
          }}
        >
          Strategy to enhance patient experience, increase Medicare CAHPS scores, reduce wait times, and
          improve access to cardiology services through human-centered design and service design methodology.
        </p>

        <div className="cs-anim cs-d5 flex gap-2 flex-wrap mb-10">
          <Tag variant="coral">CX Strategist</Tag>
          <Tag variant="teal">Healthcare System</Tag>
          <Tag variant="gold">Service Design</Tag>
          <Tag>Discovery</Tag>
          <Tag>Initiatives &amp; OKRs</Tag>
          <Tag variant="lime">Digital Transformation</Tag>
        </div>

        <div
          className="cs-anim cs-d6 flex gap-8 items-center flex-wrap"
          style={{ fontSize: '0.8125rem', color: 'var(--ds-ink-muted)' }}
        >
          <span className="flex items-center gap-1.5">&nbsp;8 min read</span>
          <span
            className="shrink-0"
            style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ds-ink-muted)' }}
          />
          <span>1 year engagement</span>
          <span
            className="shrink-0"
            style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ds-ink-muted)' }}
          />
          <span>Presbyterian Healthcare Services</span>
        </div>
      </div>
    </section>
  );
}

/* ── Metrics Bar ── */
function MetricsBar() {
  const metrics = [
    { value: '74\u219283%', color: 'var(--ds-coral)', caption: 'Medicare "Getting Needed\nCare" target improvement' },
    { value: '54\u219285%', color: 'var(--ds-teal)', caption: 'Referrals accepted\nwithin 3 days target' },
    { value: '$60M', color: 'var(--ds-gold)', caption: 'Potential revenue impact\nfrom star rating increase' },
    { value: '150K', color: 'var(--ds-lime)', caption: 'Health plan members\nimpacted' },
  ];
  return (
    <div
      style={{
        background: 'var(--ds-surface-raised)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={i}
            className={`cs-anim-count cs-d${i + 3} text-center`}
            style={{ background: 'var(--ds-surface-raised)', padding: '2.25rem 1.5rem' }}
          >
            <div
              style={{
                fontFamily: 'var(--ds-font-heading)',
                fontWeight: 900,
                fontSize: '2.75rem',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
                color: m.color,
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontSize: '0.8125rem',
                color: 'var(--ds-ink-secondary)',
                lineHeight: 1.4,
                whiteSpace: 'pre-line',
              }}
            >
              {m.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Section 1: Summary & Role ── */
function SummarySection() {
  const roleCards = [
    {
      title: 'Responsibilities',
      items: [
        'Led human-centered design research to understand patient needs and pain points across the cardiology referral journey',
        'Improved member access by redesigning experience, improving governance, and implementing process improvements',
        'Built customer segments, defined metrics, and created service design blueprints',
        'Facilitated co-design workshops with patients, providers, and clinical staff',
      ],
    },
    {
      title: 'Key Activities',
      items: [
        { highlight: 'Discovery:', text: ' Patient interviews, survey data review (CAHPS, HEDIS, PSAT), empathy mapping' },
        { highlight: 'Define:', text: ' Customer segments, prioritized patient needs, value mapping' },
        { highlight: 'Design:', text: ' Service blueprinting, journey mapping, co-design workshops' },
        { highlight: 'Deliver:', text: ' OKRs, initiative roadmap, process improvement recommendations' },
      ],
    },
    {
      title: 'Cross-Functional Team',
      items: [
        'Chief Consumer Officer',
        'Director of Practice Operations',
        'Process Excellence / Sigma Six Team',
        'Change Management',
        'Director of Customer Experience',
        'Cardiology Providers & Clinical Ops',
        'Central Access Call Center',
      ],
    },
  ];

  return (
    <section className="ds-bg-grid-dark py-20" style={{ background: 'var(--ds-surface)', color: 'var(--ds-ink)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader num={1} title="Summary & My Role" variant="coral" titleColor="var(--ds-ink)" />
        <Prose dark className="mb-10">
          <p className="mb-5">
            As <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>Portfolio Manager of Strategy and Experience</strong> at Presbyterian Healthcare Services, I led a cross-functional initiative to understand and address declining CAHPS scores in the cardiology referral process. Using human-centered design methodologies, I sought to understand patient pain points and redesign the experience to improve member access, governance, and clinical operations.
          </p>
        </Prose>

        <div className="grid gap-8 mt-8 cs-role-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {roleCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '0.75rem',
                padding: '2rem',
              }}
            >
              <div
                className="mb-4 pb-3"
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: 'var(--ds-ink)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {card.title}
              </div>
              <ul className="list-none" style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--ds-ink-secondary)' }}>
                {card.items.map((item, j) => (
                  <li key={j} className="relative pl-4 mb-2">
                    <span
                      className="absolute left-0"
                      style={{ top: '0.6rem', width: 4, height: 4, borderRadius: '50%', background: 'var(--ds-coral)' }}
                    />
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <>
                        <span style={{ color: 'var(--ds-ink)', fontWeight: 500 }}>{item.highlight}</span>
                        {item.text}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 2: Problem Definition ── */
function ProblemSection() {
  const funnelLevels = [
    {
      label: 'L1: Leadership Level',
      text: 'Improve Medicare Ease of Getting Needed Care \u2014 appointment with a specialist (% usually or always) from **74% to 83%** by Q4 2024',
      className: 'first',
      bg: 'var(--ds-coral-50)',
      border: 'var(--ds-coral-200)',
      labelColor: 'var(--ds-coral-700)',
      width: '100%',
    },
    {
      label: 'L2: Organizational Outcome',
      text: 'Increase "accepted cardiology referrals" within 3 days from **54% to 85%** by end of 2024',
      bg: 'var(--ds-canvas)',
      border: 'var(--ds-canvas-muted)',
      labelColor: 'var(--ds-ink-inverse-secondary)',
      width: '88%',
    },
    {
      label: 'L3: Department Goal',
      text: 'Increase patients with a cardiology appointment within 30 days from **32.6% to 85%** by end of 2024',
      bg: 'var(--ds-canvas)',
      border: 'var(--ds-canvas-muted)',
      labelColor: 'var(--ds-ink-inverse-secondary)',
      width: '76%',
    },
    {
      label: 'L4: Project Initiatives',
      text: 'Repeat calls to cardiology **<37%** \u00b7 Appointment scheduled within 3 days \u00b7 Perceived access improvement',
      className: 'last',
      bg: 'var(--ds-gold-50)',
      border: 'var(--ds-gold-300)',
      labelColor: 'var(--ds-gold-600)',
      width: '64%',
    },
  ];

  function renderBoldText(text: string) {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} style={{ fontWeight: 600, color: 'var(--ds-ink-inverse)' }}>
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
  }

  return (
    <section className="py-20" style={{ background: 'var(--ds-canvas)', color: 'var(--ds-ink-inverse)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader num={2} title="Problem Definition" variant="light" titleColor="var(--ds-ink-inverse)" />
        <Prose>
          <p className="mb-5">
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink-inverse)' }}>Extended patient wait times</strong> were
            leading to patient concerns, potential rises in acuity levels during the wait, ED and inpatient admissions, and
            patients seeking care at external facilities. This contributed to dissatisfaction among Medicare Advantage members
            and resulted in <strong style={{ fontWeight: 600, color: 'var(--ds-ink-inverse)' }}>declining CAHPS scores</strong>{' '}
            &mdash; specifically in the domain of "Getting Needed Care."
          </p>
          <p className="mb-5">
            The core patient sentiment was clear: patients felt they couldn't get an appointment to see a specialist when they
            needed it. Stakeholder alignment was achieved within{' '}
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink-inverse)' }}>7 days</strong>, and the problem was structured
            across four organizational levels:
          </p>
        </Prose>

        <div className="flex flex-col items-center my-10 gap-0">
          {funnelLevels.map((level, i) => (
            <div
              key={i}
              className="text-center cs-funnel-level"
              style={{
                width: level.width,
                padding: '1.5rem 2rem',
                background: level.bg,
                border: `1.5px solid ${level.border}`,
                borderTop: i > 0 ? 'none' : undefined,
                borderRadius:
                  i === 0
                    ? '0.75rem 0.75rem 0 0'
                    : i === funnelLevels.length - 1
                      ? '0 0 0.75rem 0.75rem'
                      : undefined,
              }}
            >
              <div
                className="mb-2"
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: level.labelColor,
                }}
              >
                {level.label}
              </div>
              <div
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.5,
                  color: 'var(--ds-ink-inverse)',
                  maxWidth: '32rem',
                  margin: '0 auto',
                }}
              >
                {renderBoldText(level.text)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 3: Business Impact ── */
function BusinessImpactSection() {
  const blocks = [
    { value: '.5\u2605', color: 'var(--ds-coral)', label: 'Increase in\nstar rating' },
    { value: '150K', color: 'var(--ds-teal)', label: 'Members on\nhealth plan' },
    { value: '$400', color: 'var(--ds-gold)', label: 'Per member\nannually' },
    { value: '$60M', color: 'var(--ds-lime)', label: 'Approximately in\nextra revenue' },
  ];

  return (
    <section className="ds-bg-grid-dark py-20" style={{ background: 'var(--ds-surface)', color: 'var(--ds-ink)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader num={3} title="Background \u2014 Impact & Cost of CAHPS" variant="coral" titleColor="var(--ds-ink)" />
        <Prose dark className="mb-8">
          <p className="mb-5">
            A high Medicare CAHPS star rating has massive financial implications. Patient experience metrics now comprise{' '}
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>32% of the total star rating score</strong>, making
            CAHPS improvement a top organizational priority. Understanding the business model was critical to securing
            executive buy-in and resources.
          </p>
        </Prose>

        <div
          className="relative overflow-hidden my-10"
          style={{
            background: 'var(--ds-surface)',
            borderRadius: '1rem',
            padding: '3rem',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative z-10 flex items-center gap-6 flex-wrap justify-center mt-8 cs-impact-eq">
            {blocks.map((b, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="text-center p-4">
                  <div
                    style={{
                      fontFamily: 'var(--ds-font-heading)',
                      fontWeight: 900,
                      fontSize: '3rem',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      color: b.color,
                    }}
                  >
                    {b.value}
                  </div>
                  <div
                    className="mt-1.5"
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--ds-ink-secondary)',
                      lineHeight: 1.3,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {b.label}
                  </div>
                </div>
                {i < blocks.length - 1 && (
                  <span
                    style={{
                      fontFamily: 'var(--ds-font-heading)',
                      fontWeight: 900,
                      fontSize: '2rem',
                      color: 'var(--ds-ink-muted)',
                    }}
                  >
                    {i === blocks.length - 2 ? '=' : '\u00d7'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 4: Research ── */
function ResearchSection() {
  const insights = [
    {
      title: 'New patients experience peak anxiety with lowest knowledge',
      desc: 'Education provided to patients is not adequate early in their journey. The gap between what patients know and what they need to know creates significant distress.',
    },
    {
      title: 'Patients turn to Google to fill knowledge gaps',
      desc: 'New patients search online for answers and often spiral into unnecessary and incorrect information, adding to anxiety and misperception of their condition\u2019s urgency.',
    },
    {
      title: 'Wait time communication feels dismissive',
      desc: 'When told it\u2019s "ok" to wait two weeks for non-urgent conditions, patients feel staff are insensitive and dismissive \u2014 they don\u2019t understand urgency levels for their specific condition.',
    },
    {
      title: 'Patients want process transparency',
      desc: 'Patients want to understand the process and protocols they will experience ahead of time. Moving between steps without set expectations feels random and unsettling.',
    },
    {
      title: 'Education needs start upstream',
      desc: 'The need for education and process expectations starts at the first onset of symptoms \u2014 waiting until a cardiology visit is too far down the journey to begin addressing patient concerns.',
    },
  ];

  return (
    <section
      className="ds-bg-grid-light py-20"
      style={{ background: 'var(--ds-canvas-soft)', color: 'var(--ds-ink-inverse)' }}
    >
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader num={4} title="Research: User Interviews" variant="light" titleColor="var(--ds-ink-inverse)" />
        <Prose className="mb-6">
          <p className="mb-5">
            I conducted{' '}
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink-inverse)' }}>9 patient interviews over 14 days</strong> to
            understand the drivers behind lower Cardiology CAHPS scores, and to identify opportunities for connecting the
            member journey across health plan, primary care, and cardiology.
          </p>
        </Prose>

        {/* Quote */}
        <div
          className="relative my-10"
          style={{
            background: 'var(--ds-surface-raised)',
            borderLeft: '4px solid var(--ds-coral)',
            borderRadius: '0 0.75rem 0.75rem 0',
            padding: '2.5rem 2.5rem 2.5rem 2rem',
          }}
        >
          <span
            className="absolute"
            style={{
              fontFamily: 'var(--ds-font-heading)',
              fontWeight: 900,
              fontSize: '4rem',
              color: 'var(--ds-coral)',
              lineHeight: 0.8,
              opacity: 0.3,
              top: '1rem',
              left: '1.5rem',
            }}
          >
            &ldquo;
          </span>
          <div
            className="relative z-10 pl-4"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: 'var(--ds-ink-secondary)',
              fontStyle: 'italic',
            }}
          >
            I just think the fundamental problem in cardiac care is just the explanatory element of it, where they have to
            realize that the person who they are interacting with, it's their first time&hellip; They just have no idea what's
            going on.
          </div>
          <div className="pl-4 mt-4" style={{ fontSize: '0.8125rem', color: 'var(--ds-ink-muted)' }}>
            &mdash; New Patient, Presbyterian Cardiology
          </div>
        </div>

        {/* Insight cards */}
        <div className="grid gap-5 mt-8 cs-insights-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {insights.map((ins, i) => (
            <div
              key={i}
              className="relative cursor-pointer transition-all duration-300"
              style={{
                background: 'var(--ds-canvas)',
                border: '1px solid var(--ds-canvas-muted)',
                borderRadius: '0.75rem',
                padding: '2rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--ds-shadow-elevated)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span
                className="absolute"
                style={{
                  top: '1.25rem',
                  right: '1.5rem',
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 900,
                  fontSize: '2.5rem',
                  color: 'rgba(0,0,0,0.04)',
                  lineHeight: 1,
                }}
              >
                {i + 1}
              </span>
              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '1.0625rem',
                  color: 'var(--ds-ink-inverse)',
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                }}
              >
                {ins.title}
              </div>
              <div style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--ds-ink-inverse-secondary)' }}>
                {ins.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 5: Co-Design Workshop ── */
function CoDesignSection() {
  const steps = [
    { icon: '\ud83d\udccb', name: 'Review', desc: 'Current state service blueprint review with stakeholders', bg: 'rgba(232,85,58,0.12)' },
    { icon: '\ud83d\udca1', name: 'Design Thinking', desc: 'Introduction to design thinking methodology for cross-functional teams', bg: 'rgba(27,168,160,0.12)' },
    { icon: '\u2764\ufe0f', name: 'Empathy Mapping', desc: 'Understanding patient thoughts, feelings, actions, and pain points', bg: 'rgba(232,180,0,0.12)' },
    { icon: '\ud83d\uddfa', name: 'As-Is Mapping', desc: 'Live, in-person journey mapping with individual patients', bg: 'rgba(139,195,74,0.12)' },
  ];

  return (
    <section className="ds-bg-grid-dark py-20" style={{ background: 'var(--ds-surface)', color: 'var(--ds-ink)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader num={5} title="Co-Design Workshop" variant="coral" titleColor="var(--ds-ink)" />
        <Prose dark className="mb-8">
          <p className="mb-5">
            I designed and facilitated a{' '}
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>
              cross-functional, in-person co-design workshop
            </strong>{' '}
            with 5 patients, 4 call agents, 4 providers, and 3 PAs to map the end-to-end process for patients seeking a
            cardiology appointment. The goal was to identify friction points causing long wait times and adding to patient
            anxiety.
          </p>
        </Prose>

        <div
          className="grid overflow-hidden my-10 cs-process-steps"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '0.75rem',
          }}
        >
          {steps.map((step) => (
            <div key={step.name} className="text-center" style={{ background: 'var(--ds-surface-raised)', padding: '2rem 1.5rem' }}>
              <div
                className="inline-flex items-center justify-center mb-4"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '0.5rem',
                  background: step.bg,
                  fontSize: '1.25rem',
                }}
              >
                {step.icon}
              </div>
              <div
                className="mb-2.5"
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--ds-ink)',
                }}
              >
                {step.name}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--ds-ink-secondary)', lineHeight: 1.55 }}>{step.desc}</div>
            </div>
          ))}
        </div>

        <Prose dark>
          <p>
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>Key findings from the workshop:</strong> Primary pain
            points centered on test results, patient education, and provider follow-up. Test results appeared quickly in
            MyChart but were extremely difficult for patients to understand. Many patients had no provider follow-up and
            experienced high anxiety. Patients consistently wanted providers to explain results and set expectations for next
            steps.
          </p>
        </Prose>
      </div>
    </section>
  );
}

/* ── Section 6: Service Design ── */
function ServiceDesignSection() {
  const phases = [
    { icon: '\ud83e\udec0', name: 'Symptom Onset', desc: 'Patient experiences heart-related symptoms', bg: 'rgba(232,85,58,0.1)' },
    { icon: '\ud83d\udcde', name: 'Schedule PCP', desc: 'Call to schedule primary care appointment', bg: 'rgba(27,168,160,0.1)' },
    { icon: '\ud83c\udfe5', name: 'Primary Care', desc: 'See PCP, blood draw, EKG, diagnostics', bg: 'rgba(232,180,0,0.1)' },
    { icon: '\ud83d\udcc4', name: 'Test Results', desc: 'Results in MyChart, patient reviews', bg: 'rgba(139,195,74,0.1)' },
    { icon: '\ud83d\udce4', name: 'Referral', desc: 'Referral sent to cardiology, fax queue', bg: 'rgba(232,85,58,0.1)' },
    { icon: '\ud83e\ude7a', name: 'Cardiology', desc: 'First appointment with cardiologist', bg: 'rgba(27,168,160,0.1)' },
  ];

  const rows = [
    {
      label: 'Line of Interaction \u2014 Patient Touchpoints',
      cells: [
        { text: 'Wearable alert', variant: 'active' },
        { text: 'Phone call', variant: '' },
        { text: 'In-clinic visit', variant: 'teal' },
        { text: 'MyChart portal', variant: 'gold' },
        { text: 'Wait for call', variant: '' },
        { text: 'In-clinic visit', variant: 'teal' },
      ],
    },
    {
      label: 'Line of Visibility \u2014 Frontstage Actions',
      cells: [
        { text: '\u2014', variant: '' },
        { text: 'MA schedules', variant: '' },
        { text: 'PCP evaluation', variant: '' },
        { text: 'Results released', variant: 'active' },
        { text: 'Coordinator reviews', variant: '' },
        { text: 'Provider consult', variant: 'teal' },
      ],
    },
    {
      label: 'Backstage Actions \u2014 Support Processes',
      cells: [
        { text: '\u2014', variant: '' },
        { text: '\u2014', variant: '' },
        { text: 'Diagnostic orders', variant: '' },
        { text: 'Lab processing', variant: '' },
        { text: 'Fax queue \u00b7 Prior auth \u00b7 Epic lookup', variant: 'gold' },
        { text: 'Triage \u00b7 Chart review', variant: '' },
      ],
    },
  ];

  const cellBg: Record<string, React.CSSProperties> = {
    active: { background: 'rgba(232,85,58,0.08)', color: 'var(--ds-coral-300)' },
    teal: { background: 'rgba(27,168,160,0.08)', color: 'var(--ds-teal-400)' },
    gold: { background: 'rgba(232,180,0,0.08)', color: 'var(--ds-gold-300)' },
    '': { background: 'rgba(255,255,255,0.03)', color: 'var(--ds-ink-secondary)' },
  };

  return (
    <section className="py-20" style={{ background: 'var(--ds-canvas)', color: 'var(--ds-ink-inverse)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader num={6} title="Service Design" variant="light" titleColor="var(--ds-ink-inverse)" />
        <Prose className="mb-8">
          <p className="mb-5">
            I created a{' '}
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink-inverse)' }}>comprehensive service blueprint</strong>{' '}
            visualizing the end-to-end cardiology referral process &mdash; mapping the relationships between patients,
            providers, clinical staff, call center agents, and back-office systems.
          </p>
        </Prose>

        <div
          className="overflow-hidden my-10"
          style={{
            background: 'var(--ds-surface)',
            borderRadius: '1rem',
            border: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          {/* Header bar */}
          <div
            className="flex items-center gap-3 px-6 py-4"
            style={{
              background: 'var(--ds-surface-overlay)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span className="shrink-0 rounded-full" style={{ width: 8, height: 8, background: 'var(--ds-coral)' }} />
            <span className="shrink-0 rounded-full" style={{ width: 8, height: 8, background: 'var(--ds-gold)' }} />
            <span className="shrink-0 rounded-full" style={{ width: 8, height: 8, background: 'var(--ds-lime)' }} />
            <span
              style={{
                fontFamily: 'var(--ds-font-heading)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                color: 'var(--ds-ink-secondary)',
              }}
            >
              Service Blueprint &middot; Cardiology Referrals
            </span>
          </div>

          {/* Body */}
          <div className="p-10">
            {/* Phases */}
            <div className="grid grid-cols-6 gap-4 mb-4 cs-blueprint-phases">
              {phases.map((p) => (
                <div key={p.name} className="text-center" style={{ padding: '1rem 0.5rem' }}>
                  <div
                    className="inline-flex items-center justify-center mb-2"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '0.5rem',
                      background: p.bg,
                      fontSize: '1.25rem',
                    }}
                  >
                    {p.icon}
                  </div>
                  <div
                    className="mb-1"
                    style={{
                      fontFamily: 'var(--ds-font-heading)',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      color: 'var(--ds-ink)',
                    }}
                  >
                    {p.name}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--ds-ink-muted)', lineHeight: 1.4 }}>{p.desc}</div>
                </div>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row, ri) => (
              <div key={ri}>
                <div className="my-2" style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
                <div
                  className="py-2"
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--ds-coral)',
                    opacity: 0.6,
                  }}
                >
                  {row.label}
                </div>
                <div className="grid grid-cols-6 gap-2 py-2 cs-blueprint-row">
                  {row.cells.map((cell, ci) => (
                    <div
                      key={ci}
                      className="flex items-center justify-center text-center"
                      style={{
                        borderRadius: '0.25rem',
                        padding: '0.625rem',
                        fontSize: '0.6875rem',
                        lineHeight: 1.35,
                        minHeight: '2.5rem',
                        ...cellBg[cell.variant],
                      }}
                    >
                      {cell.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 7: Opportunities ── */
function OpportunitiesSection() {
  const opps = [
    {
      title: 'Better Patient Education',
      desc: 'Patients want more personalized, in-depth education on their specific conditions \u2014 not just a general overview. Education needs to begin much earlier in the journey.',
      topColor: 'var(--ds-coral)',
    },
    {
      title: 'Care Plan Expectations',
      desc: 'Patients want to know the standard process for their condition \u2014 what to expect in terms of testing, care, and overall approach \u2014 before they experience it.',
      topColor: 'var(--ds-teal)',
    },
    {
      title: 'Schedule of Events',
      desc: 'Not being provided with reasoning behind the timeline of appointments caused significant frustration. Patients need transparency into scheduling logic.',
      topColor: 'var(--ds-gold)',
    },
    {
      title: 'Improve Test Result Follow-Up',
      desc: 'MyChart releases test results immediately but doesn\u2019t help patients interpret them. Without follow-up, patients research on their own and often reach incorrect conclusions.',
      topColor: 'var(--ds-lime)',
    },
    {
      title: 'Medication Questions & Follow-Up',
      desc: 'Many repeat calls to the call center are about cardiology medication and management \u2014 a signal that proactive communication could reduce call volume and patient anxiety.',
      topColor: 'var(--ds-coral-400)',
    },
  ];

  return (
    <section
      className="ds-bg-grid-light py-20"
      style={{ background: 'var(--ds-canvas-soft)', color: 'var(--ds-ink-inverse)' }}
    >
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader num={7} title="Areas for Opportunity" variant="light" titleColor="var(--ds-ink-inverse)" />
        <Prose className="mb-6">
          <p>
            Synthesis across research, workshops, and service blueprinting surfaced five primary opportunity areas to improve
            the cardiology patient experience:
          </p>
        </Prose>

        <div className="grid gap-4 mt-8 cs-opp-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {opps.map((opp, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: 'var(--ds-canvas)',
                border: '1px solid var(--ds-canvas-muted)',
                borderRadius: '0.75rem',
                padding: '1.75rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--ds-shadow-md)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="absolute top-0 left-0 right-0"
                style={{ height: 3, background: opp.topColor }}
              />
              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 900,
                  fontSize: '0.875rem',
                  color: 'var(--ds-coral)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                className="mb-2"
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--ds-ink-inverse)',
                  lineHeight: 1.35,
                }}
              >
                {opp.title}
              </div>
              <div style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ds-ink-inverse-secondary)' }}>
                {opp.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 8: Key Learnings ── */
function LearningsSection() {
  return (
    <section className="ds-bg-grid-dark py-20" style={{ background: 'var(--ds-surface)', color: 'var(--ds-ink)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader num={8} title="Key Learnings & Look Back" variant="coral" titleColor="var(--ds-ink)" />
        <Prose dark>
          <p className="mb-5">
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>What worked well:</strong> Bringing patients directly
            into co-design workshops alongside providers and clinical staff created immediate shared understanding and empathy.
            The service blueprint became a powerful alignment tool across departments &mdash; it made invisible backstage
            processes visible and helped leadership understand where handoff failures were occurring.
          </p>
          <p className="mb-5">
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>What I would do differently:</strong> I would push to
            include more quantitative data from call center logs earlier in the process to complement qualitative patient
            interviews. I also learned that mapping the service blueprint collaboratively with the referral coordination team
            &mdash; rather than presenting it to them &mdash; generated significantly more buy-in and surfaced insights I
            wouldn't have captured otherwise.
          </p>
          <p>
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>Impact on my approach:</strong> This project reinforced
            that in complex healthcare systems, the patient experience is shaped far more by backstage coordination than by any
            single frontstage interaction. Service design &mdash; not just UX design &mdash; is essential for this kind of
            systemic improvement work.
          </p>
        </Prose>
      </div>
    </section>
  );
}

/* ── Case Study Nav ── */
function CaseStudyNav() {
  return (
    <nav className="grid cs-nav-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
      <Link
        to="/case-studies/mayo-clinic"
        className="no-underline transition-all duration-300"
        style={{ background: 'var(--ds-surface-raised)', padding: '2.5rem' }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ds-surface-overlay)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ds-surface-raised)')}
      >
        <div
          className="mb-2"
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ds-ink-muted)',
          }}
        >
          &larr; Next Case Study
        </div>
        <div
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 700,
            fontSize: '1.125rem',
            color: 'var(--ds-ink)',
            letterSpacing: '-0.01em',
          }}
        >
          Mayo Clinic: Patient Platform
        </div>
      </Link>
      <Link
        to="/case-studies/ai-clinical"
        className="no-underline text-right transition-all duration-300"
        style={{ background: 'var(--ds-surface-raised)', padding: '2.5rem' }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ds-surface-overlay)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ds-surface-raised)')}
      >
        <div
          className="mb-2"
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ds-ink-muted)',
          }}
        >
          Next Case Study &rarr;
        </div>
        <div
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 700,
            fontSize: '1.125rem',
            color: 'var(--ds-ink)',
            letterSpacing: '-0.01em',
          }}
        >
          AI-Powered Clinical Decision Support
        </div>
      </Link>
    </nav>
  );
}

/* ── Case Study Footer ── */
function CaseStudyFooter() {
  return (
    <footer
      className="text-center py-12"
      style={{
        background: 'var(--ds-surface-sunken)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="mx-auto max-w-[72rem] px-8">
        <p className="mb-2" style={{ fontSize: '0.875rem', color: 'var(--ds-ink-muted)', fontFamily: 'var(--ds-font-body)' }}>
          Amy leNoir &mdash; Portfolio
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--ds-ink-muted)', fontFamily: 'var(--ds-font-body)' }}>
          <Link to="/case-studies" className="no-underline" style={{ color: 'var(--ds-coral)' }}>
            Case Studies
          </Link>{' '}
          &middot;{' '}
          <a href="#" className="no-underline" style={{ color: 'var(--ds-coral)' }}>
            Healthcare
          </a>{' '}
          &middot;{' '}
          <a href="#" className="no-underline" style={{ color: 'var(--ds-coral)' }}>
            About
          </a>{' '}
          &middot;{' '}
          <a href="#" className="no-underline" style={{ color: 'var(--ds-coral)' }}>
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ══════════════════════════════════════════════ */
export function CaseStudyPage() {
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
      <CaseStudyHero />
      <MetricsBar />
      <SummarySection />
      <ProblemSection />
      <BusinessImpactSection />
      <ResearchSection />
      <CoDesignSection />
      <ServiceDesignSection />
      <OpportunitiesSection />
      <LearningsSection />
      <CaseStudyNav />
      <CaseStudyFooter />
    </div>
  );
}