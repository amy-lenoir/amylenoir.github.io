import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Figma asset imports
import imgImage1 from "figma:asset/0873c7d3941a1cba6f47be1a8f4e3e63f558979d.png";
import imgScreenshot20240812At15523Pm1 from "figma:asset/3f22aa39f9279277c4e96a655088108fe832cb71.png";
import imgScreenshot20240812At20435Pm1 from "figma:asset/27e1ffbdd0594c511dfb063ff85e0be21372b421.png";
import imgScreenshot20240812At20541Pm1 from "figma:asset/441b63eedefbcadc50d2dddb56dd0184bf4c57e8.png";
import imgScreenshot20240812At20709Pm1 from "figma:asset/0dcbc899561bbd96c0d900b6cf0fe3673f5a88ed.png";
import imgScreenshot20240812At21205Pm1 from "figma:asset/e1adde30aafe2342fb8edc5b0205827dbe23e44d.png";
import imgScreenshot20240812At21331Pm1 from "figma:asset/6c57bc0c849d01c7d73562622fdd014955a29294.png";
import imgScreenshot20240812At21518Pm1 from "figma:asset/75f6c6f3ad12af76bd6e3f5054fc82b778953861.png";
import imgScreenshot20240812At22008Pm1 from "figma:asset/0d979c26a7bbe8594246b36efff44b9029a5f18a.png";
import img9E2Fa81 from "figma:asset/17901242d6b61e4df018c63d5faf36d4a46bd2cc.png";
import img15390231766491 from "figma:asset/d345c5c7d91edf4f4b47586e4f62d0707a5152ee.png";
import imgRpicon1 from "figma:asset/d077c059402fe1f402447d647850d317347c7e1f.png";
import imgAirtableIcon from "figma:asset/6a2d9bc05a89f0bfd00caddbb1de22a4b9688055.png";
import imgUserBig from "figma:asset/dda53bb655ed67a7ef91a931f2c449e38bb4ae6c.png";
import imgDownload2 from "figma:asset/4435f16466f7a1b03206c1b62e463921755bdc66.png";
import svgPaths from "../../imports/svg-o07vdwm03a";

import {
  Briefcase,
  Clock,
  MonitorSmartphone,
  Target,
  Users,
  Layers,
  BarChart3,
  Compass,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

/* ── Shared ── */
function Tag({
  children,
  variant = 'yellow',
}: {
  children: React.ReactNode;
  variant?: 'yellow' | 'orange' | 'coral' | 'teal' | 'gold' | 'lime' | 'default'
    | 'yellow-light' | 'orange-light' | 'coral-light' | 'teal-light' | 'gold-light' | 'lime-light';
}) {
  const styles: Record<string, React.CSSProperties> = {
    yellow: { background: 'rgba(204,75,51,0.15)', color: '#ffa085', border: '1px solid #d64751' },
    orange: { background: 'rgba(255,113,36,0.15)', color: '#FF7124', border: '1px solid #FF7124' },
    coral: { background: 'rgba(204,75,51,0.15)', color: '#ffa085', border: '1px solid #d64751' },
    teal: { background: 'rgba(27,168,160,0.15)', color: 'var(--ds-teal-400)', border: '1px solid var(--ds-teal-400)' },
    gold: { background: 'rgba(232,180,0,0.15)', color: '#ffce3a', border: '1px solid #ffce3a' },
    lime: { background: 'rgba(139,195,74,0.15)', color: 'var(--ds-lime-300)', border: '1px solid var(--ds-lime-300)' },
    default: { background: 'rgba(255,255,255,0.06)', color: 'var(--ds-ink-secondary)', border: '1px solid rgba(255,255,255,0.1)' },
    // AAA-accessible light variants (7:1+ contrast on white)
    'yellow-light': { background: 'rgba(161,118,0,0.12)', color: '#6b4f00', border: '1px solid rgba(161,118,0,0.3)' },
    'orange-light': { background: 'rgba(180,62,0,0.10)', color: '#8a3000', border: '1px solid rgba(180,62,0,0.3)' },
    'coral-light': { background: 'rgba(180,50,30,0.10)', color: '#7a2b15', border: '1px solid rgba(180,50,30,0.3)' },
    'teal-light': { background: 'rgba(15,110,105,0.10)', color: '#0d5450', border: '1px solid rgba(15,110,105,0.3)' },
    'gold-light': { background: 'rgba(161,118,0,0.12)', color: '#6b4f00', border: '1px solid rgba(161,118,0,0.3)' },
    'lime-light': { background: 'rgba(70,110,20,0.10)', color: '#365a0e', border: '1px solid rgba(70,110,20,0.3)' },
  };
  return (
    <span
      className="inline-flex items-center gap-1"
      style={{
        fontFamily: "'General Sans', sans-serif",
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '18px',
        letterSpacing: '0.24px',
        padding: '7px 15px',
        borderRadius: '9999px',
        ...(styles[variant] || styles.yellow),
      }}
    >
      {children}
    </span>
  );
}

function SectionNumber({ num, variant = 'coral' }: { num: number; variant?: 'coral' | 'light' }) {
  const bg = variant === 'coral' ? 'var(--ds-coral)' : 'var(--ds-ink-inverse)';
  const color = variant === 'coral' ? '#fff' : 'var(--ds-canvas)';
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
  variant?: 'coral' | 'light';
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

/* ══════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════ */
function CaseStudyHero() {
  const primaryTags = [
    { icon: <Briefcase size={14} />, label: 'Design Director', variant: 'teal' as const },
    { icon: <Layers size={14} />, label: 'Replatforming', variant: 'teal' as const },
    { icon: <Compass size={14} />, label: 'Vision & Strategy', variant: 'teal' as const },
    { icon: <Users size={14} />, label: 'Hiring/Team Development', variant: 'teal' as const },
  ];
  const secondaryTags = [
    { icon: <Lightbulb size={14} />, label: 'Digital Transformation', variant: 'yellow' as const },
    { icon: <Lightbulb size={14} />, label: 'Early Org Maturity', variant: 'yellow' as const },
    { icon: <Target size={14} />, label: 'Enterprise', variant: 'yellow' as const },
    { icon: <MonitorSmartphone size={14} />, label: 'Healthcare', variant: 'yellow' as const },
    { icon: <Users size={14} />, label: 'B2C', variant: 'yellow' as const },
  ];

  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--ds-surface)', padding: '4rem 0 5rem' }}
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
          {/* Case Study label - removed old breadcrumb, starts with label now */}
          <div
            className="cs-anim cs-d2 mb-5"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ds-coral-300)',
            }}
          >
            Case Study
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
              maxWidth: '48rem',
            }}
          >
            Mayo Clinic: Patient Platform
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
            Establishing a clear vision, direction, and strategy for reimagining and redesigning the
            authenticated patient experience at Mayo Clinic.
          </p>

          {/* Tags */}
          <div className="cs-anim cs-d5 flex flex-col gap-2 mb-10">
            <div className="flex gap-2 flex-wrap">
              {primaryTags.map((t, i) => (
                <Tag key={i} variant={t.variant}>
                  {t.icon}
                  {t.label}
                </Tag>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {secondaryTags.map((t, i) => (
                <Tag key={i} variant={t.variant}>
                  {t.icon}
                  {t.label}
                </Tag>
              ))}
            </div>
          </div>

          <div
            className="cs-anim cs-d6 flex gap-8 items-center flex-wrap"
            style={{ fontSize: '0.8125rem', color: '#9494A4' }}
          >
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              10 min read
            </span>
            <span
              className="shrink-0"
              style={{ width: 4, height: 4, borderRadius: '50%', background: '#9494A4' }}
            />
            <span>1 year engagement</span>
            <span
              className="shrink-0"
              style={{ width: 4, height: 4, borderRadius: '50%', background: '#9494A4' }}
            />
            <span>Mayo Clinic</span>
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════
   METRICS BAR
   ══════════════════════════════════════════════ */
function MetricsBar() {
  const metrics = [
    { value: '7', color: 'var(--ds-coral)', caption: 'Direct reports\nmanaged' },
    { value: '1', color: 'var(--ds-teal)', caption: 'Custom platform\nvision delivered' },
    { value: '0\u21921', color: 'var(--ds-gold)', caption: 'Patient platform\nreplatformed' },
    { value: '5', color: 'var(--ds-lime)', caption: 'Value propositions\nassessed' },
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
            style={{ background: '#26262f', padding: '2rem 1.5rem' }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: '2.5rem',
                lineHeight: '40px',
                letterSpacing: '-1.2px',
                marginBottom: '0.5rem',
                color: m.color,
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: '0.8125rem',
                color: '#a0a0b0',
                lineHeight: '1.4',
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

/* ══════════════════════════════════════════════
   SECTION 1: MY ROLE — Responsibilities, Tools, Team
   ══════════════════════════════════════════════ */

/* Shared row-label style for the Figma-inspired highlights layout */
const monoLabel: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 500,
  fontSize: '0.8125rem',
  letterSpacing: '0.04em',
  textTransform: 'uppercase' as const,
  color: 'var(--ds-ink)',
};

const dividerStyle: React.CSSProperties = {
  height: 1,
  background: 'rgba(255,255,255,0.06)',
  marginTop: '0.5rem',
};

function HighlightPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 400,
        fontSize: '0.75rem',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--ds-ink)',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '4px',
        padding: '5px 10px',
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
}

function RoleSection() {
  const overviewTags = ['Health System', 'Digital Transformation', 'Platform/Replatforming', '1 Year'];

  const skillTags = [
    'Roadmapping',
    'Agile XD/Scrum Teams',
    'Hiring/Team Development',
    'Define Product Vision & Strategy',
    'Capacity Planning',
    'Design Operations',
    'Define KPI & Metrics',
    'UX Strategy',
    'Atomic Design',
    'Design Systems',
    'Information Architecture',
    'Personas',
    'Double Diamond',
    'Design Ops',
    'Team capacity planning',
    'User Story Mapping',
    'UX Kanban',
    'Writing User Stories',
    'Value Proposition Design',
  ];

  const responsibilities = [
    'Define and drive strategy and vision across teams',
    'Establish and track key metrics to track success',
    'Hiring, managing, developing a team',
    'Team cadence and process',
    'Roadmap and Capacity Planning',
    'Evidence & research based product direction',
    'Working with large-scale data sets to drive decisions',
    'Build products 0-1',
    'Re-platform',
  ];

  const crossFunctionalTeam = ['Product Director', 'Medical Director', 'IT Lead', 'Practice Enablement MD'];
  const directReports = ['4 User Experience Designers', '2 User Researchers', '1 Frontend Dev'];

  const tools = [
    { name: 'Jira', img: img9E2Fa81 },
    { name: 'Aha!', img: img15390231766491 },
    { name: 'Airtable', img: imgAirtableIcon },
    { name: 'Axure', img: imgRpicon1 },
    { name: 'Figma', img: null },
    { name: 'Optimal Workshop', img: imgDownload2 },
    { name: 'UserTesting', img: imgUserBig },
  ];

  return (
    <section
      className="py-16"
      style={{ background: 'var(--ds-surface)', color: 'var(--ds-ink)' }}
    >
      <div className="mx-auto max-w-[72rem] px-8 flex flex-col gap-14">

        {/* ── OVERVIEW ROW ── */}
        <div className="grid gap-8" style={{ gridTemplateColumns: '200px 1fr 1fr' }}>
          {/* Left: label + tags */}
          <div>
            <p style={monoLabel}>Overview</p>
            <div style={dividerStyle} />
          </div>

          {/* Middle: description + bullets */}
          <div>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--ds-ink-secondary)',
                marginBottom: '1.5rem',
              }}
            >This            <span className="font-bold">portfolio strategy</span>, which I created, outlines my <span className="font-bold">proposal for Mayo Clinic's consumer facing app</span> to grow and improve the patient experience by addressing a radical <span className="font-bold italic">change in patient expectations and shifting how value is created</span>.</p>
            
          </div>

          {/* Right: skill tags */}
          <div>
            <p style={monoLabel}>Skills</p>
            <div style={dividerStyle} />
            <div className="flex flex-wrap gap-2 mt-5">
              {skillTags.map((t) => (
                <HighlightPill key={t}>{t}</HighlightPill>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHAT I DID ROW ── */}
        <div className="grid gap-8" style={{ gridTemplateColumns: '200px 1fr' }}>
          {/* Left label */}
          <div>
            <p style={monoLabel}>What I Did</p>
            <div style={dividerStyle} />
            <div className="mt-5">
              <HighlightPill>Design Manager/Director</HighlightPill>
            </div>
          </div>

          {/* Right: responsibilities + team in a panel */}
          <div
            style={{
              background: 'rgba(255,255,255,0.025)',
              borderRadius: '0.5rem',
              padding: '2rem 2.5rem',
            }}
          >
            <div className="grid gap-10" style={{ gridTemplateColumns: '1fr 1fr' }}>
              {/* Responsibilities */}
              <div>
                <p style={{ ...monoLabel, marginBottom: '0.25rem' }}>Responsibilities</p>
                <div style={dividerStyle} />
                <ul
                  className="list-disc pl-5 mt-4"
                  style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--ds-ink-secondary)' }}
                >
                  {responsibilities.map((r, i) => (
                    <li key={i} className="mb-1">{r}</li>
                  ))}
                </ul>
              </div>

              {/* Team */}
              <div>
                <p style={{ ...monoLabel, marginBottom: '0.25rem' }}>Cross Functional Team</p>
                <div style={dividerStyle} />
                <ul
                  className="list-disc pl-5 mt-4"
                  style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--ds-ink-secondary)' }}
                >
                  {crossFunctionalTeam.map((m, i) => (
                    <li key={i} className="mb-1">{m}</li>
                  ))}
                </ul>

                <p style={{ ...monoLabel, marginBottom: '0.25rem', marginTop: '1.5rem' }}>Direct Reports</p>
                <div style={dividerStyle} />
                <ul
                  className="list-disc pl-5 mt-4"
                  style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--ds-ink-secondary)' }}
                >
                  {directReports.map((m, i) => (
                    <li key={i} className="mb-1">{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── TOOLS ROW ── */}
        <div className="grid gap-8" style={{ gridTemplateColumns: '200px 1fr' }}>
          <div>
            <p style={monoLabel}>Tools</p>
            <div style={dividerStyle} />
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center justify-center"
                style={{
                  width: 80,
                  height: 80,
                  flexShrink: 0,
                }}
                title={tool.name}
              >
                {tool.name === 'Figma' ? (
                  <svg width="24" height="36" viewBox="0 0 32 48" fill="none">
                    <path d={svgPaths.p2f47fb00} fill="#0ACF83" />
                    <path d={svgPaths.p1d9b0d00} fill="#A259FF" />
                    <path d={svgPaths.p2052d100} fill="#F24E1E" />
                    <path d={svgPaths.pde5e680} fill="#FF7262" />
                    <path d={svgPaths.p23117880} fill="#1ABCFE" />
                  </svg>
                ) : (
                  <ImageWithFallback
                    src={tool.img!}
                    alt={tool.name}
                    className="object-contain"
                    style={{ width: 40, height: 40 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SECTION 2: Summary — Strategy & Vision
   ══════════════════════════════════════════════ */
function SummarySection() {
  return (
    <section className="py-20" style={{ background: 'var(--ds-canvas)', color: 'var(--ds-ink-inverse)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader
          num={2}
          title="How I Defined & Drove Strategy Across Teams"
          variant="light"
          titleColor="var(--ds-ink-inverse)"
        />

        <div className="flex gap-2 mb-8">
          <Tag variant="yellow-light">
            <BarChart3 size={14} />
            Business Model
          </Tag>
          <Tag variant="yellow-light">
            <Compass size={14} />
            Define Vision & Strategy
          </Tag>
        </div>

        <div className="grid gap-12" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Text */}
          <div>
            <Prose className="mb-8">
              <p className="mb-5">
                A case study focused on establishing a clear vision, direction, and strategy for reimagining
                and redesigning the authenticated patient experience at Mayo Clinic.
              </p>
              <p className="mb-5">
                I used the concepts from Strategizer Portfolio Map to serve as a key tool to engage leadership
                in building consensus around the current state and creating a unified vision for the product's
                future direction.
              </p>
              <p className="mb-5">
                This approach aimed to safeguard the Patient Platform's market position and enhance its appeal
                to a global user base.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Leveraged the Strategizer Explore &amp; Exploit business model to evaluate value
                  propositions.
                </li>
                <li>Assessed Mayo Clinic's current product portfolio.</li>
                <li>Determined strategic investment opportunities for future growth.</li>
              </ul>
            </Prose>
          </div>

          {/* Portfolio Map images */}
          <div className="flex flex-col gap-4">
            <div
              className="relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer"
              style={{ border: '2px solid var(--ds-canvas-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--ds-shadow-elevated)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="px-4 py-2"
                style={{
                  background: 'var(--ds-ink-inverse)',
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  color: '#fff',
                }}
              >
                Portfolio Map
              </div>
              <ImageWithFallback
                src={imgScreenshot20240812At15523Pm1}
                alt="Strategizer Portfolio Map - Assessing Innovation"
                className="w-full object-cover"
                style={{ maxHeight: 220 }}
              />
            </div>
            <div
              className="relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer"
              style={{ border: '2px solid var(--ds-canvas-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--ds-shadow-elevated)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ImageWithFallback
                src={imgImage1}
                alt="Explore & Exploit BM Portfolios"
                className="w-full object-cover"
                style={{ maxHeight: 220 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SECTION 3: Current State Assessment
   ══════════════════════════════════════════════ */
function AssessmentSection() {
  const keyAreas = [
    {
      title: 'Innovation in Patient Experience',
      desc: 'Creating custom in-house digital platform that outperforms competitors and enhances the patient experience.',
      color: 'var(--ds-coral)',
    },
    {
      title: 'Direct Market Access',
      desc: 'Building a B2C platform to interact with patients, reducing reliance on third-party tools like MyChart.',
      color: 'var(--ds-teal)',
    },
    {
      title: 'Flexible Technology',
      desc: "Developing Mayo's own scalable APIs and AI models to offer new digital services, moving beyond vendor limitations.",
      color: 'var(--ds-gold)',
    },
    {
      title: "Leveraging Mayo's Expertise",
      desc: "Using Mayo's extensive medical knowledge database to provide personalized health information directly to patients through the platform.",
      color: 'var(--ds-lime)',
    },
  ];

  return (
    <section className="ds-bg-grid-dark py-20" style={{ background: 'var(--ds-surface)', color: 'var(--ds-ink)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader
          num={3}
          title="Current State Assessment & Future State Value Propositions"
          variant="coral"
          titleColor="var(--ds-ink)"
        />

        <div className="flex gap-2 mb-8">
          <Tag variant="yellow">
            <BarChart3 size={14} />
            Business Model
          </Tag>
          <Tag variant="yellow">
            <Compass size={14} />
            Define Vision & Strategy
          </Tag>
        </div>

        <Prose dark className="mb-8">
          <p className="mb-5">
            I analyzed key areas to transform patient experience and value through strategic innovations and
            existing assets.
          </p>
          <p className="mb-5">
            This strategy seeks to innovate patient expectations and{' '}
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>
              disrupt the current healthcare digital landscape by focusing on radical value creation and
              ownership of the patient journey
            </strong>
            .
          </p>
        </Prose>

        {/* Key Areas Cards */}
        <div className="grid gap-4 mb-10" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {keyAreas.map((area, i) => (
            <div
              key={i}
              className="relative overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '0.75rem',
                padding: '1.75rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="absolute top-0 left-0 right-0"
                style={{ height: 3, background: area.color }}
              />
              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--ds-ink)',
                  lineHeight: 1.35,
                }}
              >
                {area.title}
              </div>
              <div style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ds-ink-secondary)' }}>
                {area.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Frontstage screenshots */}
        <div
          className="overflow-hidden"
          style={{
            background: 'var(--ds-surface-raised)',
            borderRadius: '1rem',
            border: '1px solid rgba(255,255,255,0.04)',
          }}
        >
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
              Frontstage Value Assessments
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 p-6">
            {[
              { img: imgScreenshot20240812At20435Pm1, label: 'Patient Access' },
              { img: imgScreenshot20240812At20541Pm1, label: 'UX Assessment' },
              { img: imgScreenshot20240812At20709Pm1, label: 'Lifetime Value' },
              { img: imgScreenshot20240812At21205Pm1, label: 'Backstage Technology' },
              { img: imgScreenshot20240812At21331Pm1, label: 'Industry Norms' },
            ].map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg transition-all duration-300 cursor-pointer"
                style={{ border: '2px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <ImageWithFallback
                  src={item.img}
                  alt={item.label}
                  className="w-full h-40 object-cover"
                />
                <div
                  className="px-3 py-2"
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#9494A4',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SECTION 4: Vision & Strategy — Recommendation
   ══════════════════════════════════════════════ */
function VisionSection() {
  const recommendations = [
    "Develop a unique Mayo-branded patient platform by using exclusive design libraries, and phasing out reliance on third-party services like MyChart to ensure full control over the patient experience and data integration.",
    "Innovate with custom APIs and AI/ML models that align with Mayo's long-term goals, enabling scalable and flexible digital solutions that will enhance both patient care and operational efficiency.",
    "Leverage Mayo's exclusive knowledge base to offer personalized, proactive health education, giving the organization a competitive advantage by creating services that can't be easily replicated.",
  ];

  const pillars = [
    { text: 'ONE cohesive patient experience', color: 'var(--ds-coral)' },
    { text: 'Build in-house software and data engineering teams', color: 'var(--ds-teal)' },
    { text: 'Dedicated Agile product teams', color: 'var(--ds-gold)' },
    { text: 'Flexible and future-proof technical architecture built on best-in-class technology stack', color: 'var(--ds-teal-600)' },
    { text: 'Vendor partner to accelerate efforts while we maintain current experience and build new architecture', color: 'var(--ds-teal-700)' },
  ];

  return (
    <section className="ds-bg-grid-light py-20" style={{ background: 'var(--ds-canvas-soft)', color: 'var(--ds-ink-inverse)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader
          num={4}
          title="Vision & Strategy"
          variant="light"
          titleColor="var(--ds-ink-inverse)"
        />
        <p
          className="mb-8"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 700,
            fontSize: '0.875rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--ds-ink-inverse-secondary)',
          }}
        >
          My Value Proposition Recommendation
        </p>

        <div className="flex gap-2 mb-8">
          <Tag variant="yellow-light">
            <BarChart3 size={14} />
            Business Model
          </Tag>
          <Tag variant="yellow-light">
            <Compass size={14} />
            Define Vision & Strategy
          </Tag>
        </div>

        <div className="grid gap-12" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Text */}
          <div>
            <Prose className="mb-8">
              <p className="mb-5">
                My final recommendation centers around transforming the current digital patient platform to:
              </p>
              <ul className="list-disc pl-5 space-y-3">
                {recommendations.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <p className="mt-5">
                These strategies aim to modernize the patient experience while maintaining Mayo's competitive
                edge and aligning with long-term organizational goals.
              </p>
            </Prose>
          </div>

          {/* Vision images */}
          <div className="flex flex-col gap-4">
            <div
              className="overflow-hidden rounded-lg"
              style={{ border: '2px solid var(--ds-canvas-muted)' }}
            >
              <ImageWithFallback
                src={imgScreenshot20240812At22008Pm1}
                alt="Front Stage and Back Stage Strategy"
                className="w-full object-cover"
                style={{ maxHeight: 220 }}
              />
            </div>
            <div
              className="overflow-hidden rounded-lg"
              style={{ border: '2px solid var(--ds-canvas-muted)' }}
            >
              <ImageWithFallback
                src={imgScreenshot20240812At21518Pm1}
                alt="Platform Recommendation"
                className="w-full object-cover"
                style={{ maxHeight: 300 }}
              />
            </div>
          </div>
        </div>

        {/* Recommendation Pillars */}
        <div
          className="mt-12 p-8 overflow-hidden"
          style={{
            background: 'var(--ds-surface)',
            borderRadius: '1rem',
            border: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          <div
            className="mb-6"
            style={{
              fontFamily: 'var(--ds-font-heading)',
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--ds-ink)',
            }}
          >
            Recommendation
          </div>
          <p className="mb-6" style={{ fontSize: '0.9375rem', color: 'var(--ds-ink-secondary)', lineHeight: 1.6 }}>
            Authenticated Experience Platform will have:
          </p>
          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {pillars.slice(0, 3).map((p, i) => (
              <div
                key={i}
                className="p-4 rounded-lg text-center"
                style={{
                  background: p.color,
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: '#fff',
                  lineHeight: 1.4,
                }}
              >
                {p.text}
              </div>
            ))}
          </div>
          <div className="grid gap-3 mt-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {pillars.slice(3).map((p, i) => (
              <div
                key={i}
                className="p-4 rounded-lg text-center"
                style={{
                  background: p.color,
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: '#fff',
                  lineHeight: 1.4,
                }}
              >
                {p.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SECTION 5: Key Learnings
   ══════════════════════════════════════════════ */
function LearningsSection() {
  return (
    <section className="ds-bg-grid-dark py-20" style={{ background: 'var(--ds-surface)', color: 'var(--ds-ink)' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHeader num={5} title="Key Learnings & Look Back" variant="coral" titleColor="var(--ds-ink)" />
        <Prose dark>
          <p className="mb-5">
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>What worked well:</strong> Using the
            Strategizer Explore &amp; Exploit framework was incredibly effective at engaging executive leadership
            in a language they understood &mdash; investment, risk, and value creation. By mapping
            Mayo&rsquo;s patient platform portfolio, I was able to move the conversation from &ldquo;what
            should the app look like&rdquo; to &ldquo;what strategic bets should we make as an
            organization.&rdquo;
          </p>
          <p className="mb-5">
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>What I would do differently:</strong>{' '}
            I would invest earlier in socializing the portfolio map concept with middle management and
            clinical leadership. While the executive team was aligned, the practical teams implementing
            changes needed more time to understand the strategic rationale behind the platform
            transformation.
          </p>
          <p>
            <strong style={{ fontWeight: 600, color: 'var(--ds-ink)' }}>Impact on my approach:</strong> This
            project proved that design leadership at scale requires mastering business strategy tools &mdash;
            not just design tools. The Portfolio Map became a reusable artifact I&rsquo;ve since adapted for
            other large-scale platform decisions.
          </p>
        </Prose>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CASE STUDY NAV
   ══════════════════════════════════════════════ */
function CaseStudyNav() {
  return (
    <nav
      className="grid cs-nav-grid"
      style={{
        gridTemplateColumns: '1fr 1fr',
        gap: '1px',
        background: 'rgba(255,255,255,0.06)',
      }}
    >
      <Link
        to="/case-studies/presbyterian"
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
            color: '#9494A4',
          }}
        >
          &larr; Previous Case Study
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
          Presbyterian Cardiology Referrals &amp; CAHPS
        </div>
      </Link>
      <Link
        to="/case-studies/revenue-cycle"
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
            color: '#9494A4',
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
          Revenue Cycle Optimization
        </div>
      </Link>
    </nav>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
   ═════════════════════════════════════════════ */
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
        <p
          className="mb-2"
          style={{ fontSize: '0.875rem', color: '#9494A4', fontFamily: 'var(--ds-font-body)' }}
        >
          Amy leNoir &mdash; Portfolio
        </p>
        <p style={{ fontSize: '0.875rem', color: '#9494A4', fontFamily: 'var(--ds-font-body)' }}>
          <Link to="/case-studies" className="no-underline" style={{ color: 'var(--ds-coral-300)' }}>
            Case Studies
          </Link>
          {' '}&middot;{' '}
          <a href="#" className="no-underline" style={{ color: 'var(--ds-coral-300)' }}>About</a>
          {' '}&middot;{' '}
          <a href="#" className="no-underline" style={{ color: 'var(--ds-coral-300)' }}>Contact</a>
        </p>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   PAGE EXPORT
   ══════════════════════════════════════════════ */
export function MayoClinicCaseStudy() {
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
      <RoleSection />
      <SummarySection />
      <AssessmentSection />
      <VisionSection />
      <LearningsSection />
      <CaseStudyNav />
      <CaseStudyFooter />
    </div>
  );
}