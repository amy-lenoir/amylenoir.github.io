import { Link } from 'react-router';
import { caseStudies } from './caseStudyData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, ArrowUpRight, Download, Mail, Linkedin } from 'lucide-react';
import imgImage38 from 'figma:asset/d7888304bad6c7cd00fcc5aeb749cc58319881c6.png';
import imgMayoLogo from 'figma:asset/6acd1a2994cea933774ca495b0c47d201789f99a.png';
import imgLogoSmith from 'figma:asset/2d5bcbd0ee92fbb3da2c56a68d90bdc7b30cba6a.png';
import imgLogoInrix from 'figma:asset/de15d4e6961b5c8bf990897577a932bfa81cfaad.png';
import svgPaths from '../../imports/svg-3w6g82g30d';

/* ── images ── */
const IMG_HOSPITAL = 'https://images.unsplash.com/photo-1584451049700-ec9b394f3805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGNvcnJpZG9yJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwxfHx8fDE3NzI2MDk3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const IMG_STRATEGY = 'https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHJhdGVneSUyMHdoaXRlYm9hcmQlMjBwbGFubmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MjYwOTc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const IMG_UX = 'https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMHJlc2VhcmNoJTIwaGVhbHRoY2FyZSUyMHBhdGllbnR8ZW58MXx8fHwxNzcyNjA5NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const IMG_DIGITAL = 'https://images.unsplash.com/photo-1758691461932-d0aa0ebf6b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGluaWNhbCUyMHdvcmtmbG93JTIwZGlnaXRhbCUyMGhlYWx0aCUyMGRlc2lnbnxlbnwxfHx8fDE3NzI2MDk3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

/* ═══════════════════════════════════════════════════
   HERO — Full-viewport split (Figma-inspired)
   ═══════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
      style={{ background: '#0e1011' }}
    >
      {/* Left — Image */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen overflow-hidden">
        <img
          src={imgImage38}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.55) saturate(0.8)' }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(14,16,17,0.4) 0%, transparent 50%), linear-gradient(to right, transparent 50%, #0e1011 100%)',
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Right — Content */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-between py-16 lg:py-20 px-8 lg:px-16 xl:px-24">
        {/* Large Name */}
        <div>
          <h1
            className="ds-animate-in ds-delay-1"
            style={{
              fontFamily: 'var(--ds-font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--ds-ink)',
              textTransform: 'uppercase',
            }}
          >
            A<span style={{ color: 'var(--ds-coral)' }}>.</span>
            <br />
            Lenoir
          </h1>
        </div>

        {/* Positioning Statement */}
        <div className="mt-10 lg:mt-0">
          <p
            className="ds-animate-in ds-delay-1 mb-6"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.01em',
            }}
          >
            (Based in Albuquerque, NM)
          </p>
          <p
            className="ds-animate-in ds-delay-2 mb-10"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontWeight: 700,
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              lineHeight: 1.45,
              color: 'var(--ds-ink)',
              letterSpacing: '-0.02em',
              maxWidth: '32rem',
            }}
          >
            Design and product leader with 20+ years in healthcare, specializing in provider tools and complex workflows. I create digital products that make care easier — for clinicians, staff, and patients.
          </p>

          {/* CTA buttons */}
          <div className="ds-animate-in ds-delay-3 flex gap-4 flex-wrap items-center">
            <Link
              to="/case-studies"
              className="no-underline inline-flex items-center gap-2 transition-all duration-200"
              style={{
                fontFamily: 'var(--ds-font-body)',
                fontWeight: 700,
                fontSize: '0.875rem',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                background: 'var(--ds-coral)',
                color: '#fff',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--ds-coral-600)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(232,85,58,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--ds-coral)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View My Work
              <ArrowRight size={16} />
            </Link>
            <a
              href="#"
              className="no-underline inline-flex items-center gap-2 transition-all duration-200"
              style={{
                fontFamily: 'var(--ds-font-body)',
                fontWeight: 600,
                fontSize: '0.875rem',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                border: '1.5px solid rgba(255,255,255,0.15)',
                color: 'var(--ds-ink)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-16 lg:mt-0">
          <p
            className="mb-6"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontStyle: 'italic',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            (Companies I've worked with)
          </p>
          <div className="flex flex-wrap items-center gap-8 opacity-50">
            {/* Presbyterian logo SVG */}
            <div className="h-[20px] w-[140px] overflow-hidden relative shrink-0">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 177.459 19.631">
                <path d={svgPaths.p2d19ce80} fill="white" />
                <path d={svgPaths.p38b37200} fill="white" />
                <path d={svgPaths.p20b7c500} fill="white" />
                <path d={svgPaths.p3fc29980} fill="white" />
                <path d={svgPaths.p2d751b00} fill="white" />
                <path d={svgPaths.p472d00} fill="white" />
                <path d={svgPaths.p70f3e00} fill="white" />
                <path d={svgPaths.pecb1100} fill="white" />
                <path d={svgPaths.p1ae48780} fill="white" />
                <path d={svgPaths.pe028700} fill="white" />
                <path d={svgPaths.p27189640} fill="white" />
                <path d={svgPaths.p7a27c80} fill="white" />
                <path d={svgPaths.p341a6700} fill="white" />
                <path d={svgPaths.p3e79c000} fill="white" />
                <path d={svgPaths.p3e14e340} fill="white" />
                <path d={svgPaths.p2c229900} fill="white" />
              </svg>
            </div>
            {/* Mayo Clinic logo */}
            <img src={imgMayoLogo} alt="Mayo Clinic" className="h-[36px] w-auto object-contain" style={{ filter: 'brightness(1.5)' }} />
            {/* Providence SVG */}
            <div className="h-[20px] w-[112px] relative shrink-0">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 145 26">
                <path d={svgPaths.p2654c200} fill="white" />
                <path d={svgPaths.p1ff2a500} fill="white" />
              </svg>
            </div>
            {/* Smith & Inrix */}
            <img src={imgLogoSmith} alt="Smith" className="h-[24px] w-auto object-contain" style={{ filter: 'brightness(1.5)' }} />
            <img src={imgLogoInrix} alt="Inrix" className="h-[22px] w-auto object-contain" style={{ filter: 'brightness(1.5)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   CASE STUDIES — Bold editorial section
   ═══════════════════════════════════════════════════ */
function CaseStudiesSection() {
  const featured = caseStudies.filter((c) => c.featured);
  const remaining = caseStudies.filter((c) => !c.featured).slice(0, 2);
  const all = [...featured, ...remaining];

  return (
    <section style={{ background: '#181a1b' }}>
      {/* Section header */}
      <div
        className="px-8 lg:px-16 xl:px-24 pt-20 pb-16"
        style={{ background: '#0e1011' }}
      >
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <p
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            (Selected Work)
          </p>
          <p
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            (01)
          </p>
        </div>
        <h2
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'var(--ds-ink)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          Case
          <br />
          Studies
        </h2>
        <p
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontWeight: 600,
            fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
            lineHeight: 1.3,
            color: 'var(--ds-ink)',
            letterSpacing: '-0.02em',
            maxWidth: '52rem',
          }}
        >
          Explore recent projects showcasing creativity, innovation, and impactful healthcare design solutions.
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {all.map((cs) => (
          <Link
            key={cs.id}
            to={`/case-studies/${cs.id}`}
            className="no-underline group relative block overflow-hidden"
            style={{ aspectRatio: '1' }}
          >
            {/* Image */}
            <ImageWithFallback
              src={cs.image}
              alt={cs.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              style={{ filter: 'brightness(0.35) saturate(0.7)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.transform = 'scale(1.05)';
                el.style.filter = 'brightness(0.45) saturate(0.9)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.transform = 'scale(1)';
                el.style.filter = 'brightness(0.35) saturate(0.7)';
              }}
            />
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <div
                className="mb-2"
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontStyle: 'italic',
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                ({cs.company})
              </div>
              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                  lineHeight: 1.2,
                  color: 'var(--ds-ink)',
                  letterSpacing: '-0.02em',
                }}
              >
                {cs.title}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span
                  style={{
                    fontFamily: 'var(--ds-font-heading)',
                    fontWeight: 900,
                    fontSize: '1.5rem',
                    color: 'var(--ds-coral)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {cs.metricNum}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.3,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {cs.metricLabel}
                </span>
              </div>
            </div>
            {/* Arrow on hover */}
            <div
              className="absolute top-6 right-6 flex items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
              style={{
                width: 48,
                height: 48,
                background: 'var(--ds-coral)',
              }}
            >
              <ArrowUpRight size={20} color="white" />
            </div>
          </Link>
        ))}
      </div>

      {/* View all link */}
      <div className="px-8 lg:px-16 xl:px-24 py-8 flex items-center justify-between" style={{ background: '#0e1011' }}>
        <Link
          to="/case-studies"
          className="no-underline inline-flex items-center gap-3 transition-colors duration-200"
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--ds-ink)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ds-coral)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ds-ink)')}
        >
          View All Case Studies
          <ArrowRight size={18} />
        </Link>
        <span style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)' }}>
          ({caseStudies.length} Projects)
        </span>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   EXPERTISE — Split layout panels (Figma services style)
   ═══════════════════════════════════════════════════ */
const expertiseAreas = [
  {
    num: '01',
    title: 'Design\nLeadership',
    desc: 'Build and scale high-performing design teams aligned around outcomes, not outputs.',
    services: ['Team Building & Mentorship', 'DesignOps & Process', 'Stakeholder Alignment', 'Design Strategy'],
    label: '(Leadership Services)',
    image: IMG_STRATEGY,
    flip: false,
  },
  {
    num: '02',
    title: 'Healthcare\nUX',
    desc: 'Create clinician-centered experiences through deep domain research and intuitive workflows.',
    services: ['User Research', 'Clinical Workflow Design', 'Usability Testing', 'Accessibility'],
    label: '(UX Services)',
    image: IMG_UX,
    flip: true,
  },
  {
    num: '03',
    title: 'Service\nDesign',
    desc: 'Map cross-functional workflows in complex healthcare organizations to improve outcomes.',
    services: ['Journey Mapping', 'Stakeholder Research', 'Process Optimization', 'Systems Thinking'],
    label: '(Service Design)',
    image: IMG_DIGITAL,
    flip: false,
  },
];

function ExpertiseSection() {
  return (
    <section style={{ background: '#0e1011' }}>
      {/* Section header */}
      <div className="px-8 lg:px-16 xl:px-24 pt-20 pb-16">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <p style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.4)' }}>
            (What I do)
          </p>
          <p style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.4)' }}>
            (02)
          </p>
        </div>
        <h2
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'var(--ds-ink)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          Expertise
        </h2>
        <p
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontWeight: 600,
            fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
            lineHeight: 1.3,
            color: 'var(--ds-ink)',
            letterSpacing: '-0.02em',
            maxWidth: '52rem',
          }}
        >
          Tailored expertise designed to elevate healthcare products and transform patient experiences.
        </p>
      </div>

      {/* Split panels */}
      {expertiseAreas.map((area, i) => (
        <div
          key={i}
          className={`flex flex-col ${area.flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} overflow-hidden`}
          style={{ background: i % 2 === 0 ? '#181a1b' : '#0e1011' }}
        >
          {/* Image */}
          <div className="relative w-full lg:w-2/5 h-[50vh] lg:h-auto min-h-[400px] overflow-hidden">
            <ImageWithFallback
              src={area.image}
              alt={area.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.5) saturate(0.7)' }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5 flex flex-col justify-between py-16 lg:py-24 px-8 lg:px-16 xl:px-24">
            <div>
              <h3
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 900,
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  color: 'var(--ds-ink)',
                  textTransform: 'uppercase',
                  whiteSpace: 'pre-line',
                  marginBottom: '1.5rem',
                }}
              >
                {area.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  lineHeight: 1.5,
                  color: 'var(--ds-ink)',
                  letterSpacing: '-0.01em',
                  maxWidth: '32rem',
                }}
              >
                {area.desc}
              </p>
            </div>

            <div className="mt-12">
              <p
                className="mb-6"
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontStyle: 'italic',
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                {area.label}
              </p>
              <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                {area.services.map((s) => (
                  <p
                    key={s}
                    style={{
                      fontFamily: 'var(--ds-font-body)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: 'var(--ds-ink)',
                    }}
                  >
                    {s}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   IMPACT METRICS — Bold numbers
   ═══════════════════════════════════════════════════ */
function ImpactSection() {
  const metrics = [
    { value: '20+', label: 'Years in healthcare design', color: 'var(--ds-coral)' },
    { value: '4→22', label: 'Design teams built & scaled', color: 'var(--ds-teal)' },
    { value: '$60M+', label: 'Revenue impact across projects', color: 'var(--ds-gold)' },
    { value: '150K+', label: 'Patients & members served', color: 'var(--ds-lime)' },
  ];

  return (
    <section
      className="py-24"
      style={{
        background: '#0e1011',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
          <p style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.4)' }}>
            (Impact)
          </p>
          <p style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.4)' }}>
            (03)
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((m, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: 'var(--ds-font-heading)',
                  fontWeight: 900,
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: m.color,
                  marginBottom: '0.75rem',
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.5,
                  color: 'var(--ds-ink-secondary)',
                  fontFamily: 'var(--ds-font-body)',
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   TESTIMONIALS — Grid cards (Figma-inspired)
   ═══════════════════════════════════════════════════ */
const testimonials = [
  {
    quote: 'Amy completely transformed how we approach cardiology patient access. Her service design work reduced wait times and elevated CAHPS scores across our entire system.',
    name: 'Dr. Sarah Mitchell',
    role: 'VP of Cardiology, Presbyterian',
    bg: '#181a1b',
  },
  {
    quote: "Working with Amy was transformative. She didn't just design a platform — she built consensus across leadership and delivered a vision that aligned every stakeholder.",
    name: 'James Moreno',
    role: 'Digital Strategy, Mayo Clinic',
    bg: '#1f2122',
  },
  {
    quote: "Amy's ability to go deep into clinical subspecialties, earn trust from physicians, and translate complexity into elegant workflows is unlike anything I've seen.",
    name: 'Karen Wright',
    role: 'COO, Radiology Partners',
    bg: '#1f2122',
  },
  {
    quote: 'She built our design team from 4 to 22 people while simultaneously shipping products that generated $60M+ in measurable impact. Exceptional leader.',
    name: 'Michael Chen',
    role: 'CTO, Providence Health',
    bg: '#181a1b',
  },
];

function TestimonialsSection() {
  return (
    <section style={{ background: '#0e1011' }}>
      {/* Header */}
      <div className="px-8 lg:px-16 xl:px-24 pt-20 pb-16">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <p style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.4)' }}>
            (Testimonials)
          </p>
          <p style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.4)' }}>
            (04)
          </p>
        </div>
        <h2
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'var(--ds-ink)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          What Leaders
          <br />
          Say
        </h2>
        <p
          style={{
            fontFamily: 'var(--ds-font-body)',
            fontWeight: 600,
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            lineHeight: 1.3,
            color: 'var(--ds-ink)',
            letterSpacing: '-0.02em',
            maxWidth: '42rem',
          }}
        >
          Hear from healthcare leaders about their experience working with me.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-10 lg:p-16"
            style={{ background: t.bg }}
          >
            {/* Quote mark */}
            <svg width="47" height="30" viewBox="0 0 47.36 30" fill="none" className="mb-12 opacity-30">
              <path d={svgPaths.p130d6900} fill="white" />
            </svg>

            <div>
              <p
                className="mb-10"
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  lineHeight: 1.6,
                  color: 'var(--ds-ink)',
                  letterSpacing: '-0.01em',
                }}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div
                  className="shrink-0 rounded-full flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    background: `color-mix(in srgb, var(--ds-coral) 20%, transparent)`,
                    fontFamily: 'var(--ds-font-heading)',
                    fontWeight: 900,
                    fontSize: '1rem',
                    color: 'var(--ds-coral)',
                  }}
                >
                  {t.name.split(' ').map((w) => w[0]).join('')}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--ds-font-body)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--ds-ink)',
                      lineHeight: 1.3,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--ds-font-body)',
                      fontStyle: 'italic',
                      fontSize: '0.8125rem',
                      color: 'rgba(255,255,255,0.45)',
                    }}
                  >
                    ({t.role})
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--ds-coral)', padding: '6rem 0' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative z-10 px-8 lg:px-16 xl:px-24 text-center">
        <h2
          className="mb-4"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#fff',
          }}
        >
          Let's build something together.
        </h2>
        <p
          className="mx-auto mb-10"
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '34rem',
            fontFamily: 'var(--ds-font-body)',
          }}
        >
          I'm open to leadership roles in healthcare design, product strategy, and experience transformation.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#"
            className="no-underline inline-flex items-center gap-2 transition-all duration-200"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              padding: '1rem 2.5rem',
              borderRadius: '0.5rem',
              background: '#fff',
              color: 'var(--ds-coral)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <a
            href="#"
            className="no-underline inline-flex items-center gap-2 transition-all duration-200"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              padding: '1rem 2.5rem',
              borderRadius: '0.5rem',
              border: '2px solid rgba(255,255,255,0.5)',
              background: 'transparent',
              color: '#fff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fff';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FOOTER — Light, editorial (Figma-inspired)
   ═══════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: '#fff', color: '#0e1011' }}>
      <div className="px-8 lg:px-16 xl:px-24 pt-16 pb-12">
        {/* Large wordmark */}
        <div
          className="mb-16"
          style={{
            fontFamily: 'var(--ds-font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 10vw, 10rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
            color: '#0e1011',
            textTransform: 'uppercase',
          }}
        >
          Amy<span style={{ color: 'var(--ds-coral)' }}>.</span>leNoir
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <p
              className="mb-5"
              style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '0.9375rem', color: 'rgba(14,16,17,0.45)' }}
            >
              (Pages)
            </p>
            {['Home', 'Case Studies', 'Healthcare', 'About'].map((p) => (
              <p
                key={p}
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: '#0e1011',
                }}
              >
                {p}
              </p>
            ))}
          </div>
          <div>
            <p
              className="mb-5"
              style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '0.9375rem', color: 'rgba(14,16,17,0.45)' }}
            >
              (Work)
            </p>
            {['Presbyterian', 'Mayo Clinic', 'Radiology Partners', 'All Case Studies'].map((p) => (
              <p
                key={p}
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: '#0e1011',
                }}
              >
                {p}
              </p>
            ))}
          </div>
          <div>
            <p
              className="mb-5"
              style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '0.9375rem', color: 'rgba(14,16,17,0.45)' }}
            >
              (Expertise)
            </p>
            {['Design Leadership', 'Healthcare UX', 'Service Design', 'AI in Healthcare'].map((p) => (
              <p
                key={p}
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: '#0e1011',
                }}
              >
                {p}
              </p>
            ))}
          </div>
          <div>
            <p
              className="mb-5"
              style={{ fontFamily: 'var(--ds-font-body)', fontStyle: 'italic', fontSize: '0.9375rem', color: 'rgba(14,16,17,0.45)' }}
            >
              (Socials)
            </p>
            {['LinkedIn', 'Dribbble', 'Medium'].map((p) => (
              <p
                key={p}
                style={{
                  fontFamily: 'var(--ds-font-body)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: '#0e1011',
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-8" style={{ borderTop: '1px solid rgba(14,16,17,0.1)' }}>
          <p style={{ fontFamily: 'var(--ds-font-body)', fontWeight: 600, fontSize: '0.875rem', color: 'rgba(14,16,17,0.45)' }}>
            &copy; 2026 Amy leNoir &middot; Portfolio
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer transition-colors duration-200"
            style={{
              fontFamily: 'var(--ds-font-body)',
              fontWeight: 600,
              fontSize: '0.875rem',
              color: '#0e1011',
              background: 'none',
              border: 'none',
              borderBottom: '2px solid #0e1011',
              padding: '0 0 2px 0',
            }}
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE EXPORT
   ═══════════════════════════════════════════════════ */
export function HomePageV2() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: 'var(--ds-font-body)',
        background: '#0e1011',
        color: 'var(--ds-ink)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <HeroSection />
      <CaseStudiesSection />
      <ExpertiseSection />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
