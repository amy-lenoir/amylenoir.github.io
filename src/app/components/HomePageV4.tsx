import { Link } from 'react-router';
import { caseStudies } from './caseStudyData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, ArrowUpRight, Download, Mail, Linkedin } from 'lucide-react';

/* ── Figma assets (V3) ── */
import imgImage38 from 'figma:asset/d7888304bad6c7cd00fcc5aeb749cc58319881c6.png';
import imgProfilePhoto from 'figma:asset/3e3a9f51dc98a1da176300fe60e995b528a0f775.png';
import imgMayoLogo from 'figma:asset/6acd1a2994cea933774ca495b0c47d201789f99a.png';
import imgCaseStudyPresby from 'figma:asset/d9b935d18d1ef49cabb3ff7b05849a52ed273626.png';
import imgCaseStudyMayo from 'figma:asset/6189cba611e9e5d83ba5af144ebaede27831fe9e.png';
import imgProcessMap1 from 'figma:asset/e87ec5837fbe34eedbed076f4af3fe73b46cb1d0.png';
import imgProcessMap2 from 'figma:asset/ed0df57c5a4bbeab059608bd02edda8c96b22e24.png';
import imgFigmaIcon from 'figma:asset/17901242d6b61e4df018c63d5faf36d4a46bd2cc.png';
import imgAhaIcon from 'figma:asset/d345c5c7d91edf4f4b47586e4f62d0707a5152ee.png';
import imgNotionIcon from 'figma:asset/7705c25e5df0771b0ce2e763abefa23d64ece2cc.png';
import imgAxureIcon from 'figma:asset/d077c059402fe1f402447d647850d317347c7e1f.png';
import imgUserTestingIcon from 'figma:asset/dda53bb655ed67a7ef91a931f2c449e38bb4ae6c.png';
import imgAirtableIcon from 'figma:asset/6a2d9bc05a89f0bfd00caddbb1de22a4b9688055.png';
import imgDovetailIcon from 'figma:asset/8f9448bfd886139e348c397c6602c3babd43b1d9.png';
import imgJiraIcon from 'figma:asset/17901242d6b61e4df018c63d5faf36d4a46bd2cc.png';
import imgOptimalIcon from 'figma:asset/4435f16466f7a1b03206c1b62e463921755bdc66.png';
import svgPaths from '../../imports/svg-e43ui3l6d5';
import svgPathsV2 from '../../imports/svg-3w6g82g30d';
import svgLogos from '../../imports/svg-yr5gx5on3s';

/* ─── Font shortcuts ─── */
const lato = "'Lato', sans-serif";
const playfair = "'Playfair Display', serif";
const outfit = "'Outfit', sans-serif";
const heading = 'var(--ds-font-heading)';
const body = 'var(--ds-font-body)';

/* ─── Grid textures (V3) ─── */
const gridDark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`;
const gridLight = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(0,0,0,0.05)' stroke-width='0.5'/%3E%3C/svg%3E")`;
const gridCoral = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='0.5'/%3E%3C/svg%3E")`;

/* ─── Colors ─── */
const INK = '#0b0b0b';
const MUTED = '#7a7a7a';
const SURFACE = '#0e1011';

/* ─── Geometric accents (V3) ─── */
function GeoAccent({ light = false }: { light?: boolean }) {
  const c = light ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, opacity: 1 }}>
      <div style={{ width: 48, height: 38, border: `2px solid ${c}` }} />
      <div style={{ width: 28, height: 22, border: `2px solid ${c}`, alignSelf: 'flex-end', marginTop: 2 }} />
    </div>
  );
}

/* ─── Section label with dash (V3) + parenthetical numbering (V2) ─── */
function SectionLabel({ children, num }: { children: React.ReactNode; num?: string }) {
  return (
    <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
      <div
        style={{
          fontFamily: outfit,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: MUTED,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span style={{ width: 20, height: 1, background: MUTED, display: 'block' }} />
        {children}
      </div>
      {num && (
        <span style={{ fontFamily: body, fontStyle: 'italic', fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)' }}>
          ({num})
        </span>
      )}
    </div>
  );
}

/* ─── Tags ─── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: lato, fontSize: 12, background: INK, color: '#fff', padding: '6px 12px', borderRadius: 20, whiteSpace: 'nowrap' as const }}>
      {children}
    </span>
  );
}
function TagOutline({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: lato, fontSize: 12, background: 'transparent', color: INK, padding: '6px 12px', borderRadius: 20, border: '1.5px solid rgba(0,0,0,0.18)', whiteSpace: 'nowrap' as const }}>
      {children}
    </span>
  );
}
function TagCoralGhost({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: lato, fontSize: 12, background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '5px 12px', borderRadius: 20, whiteSpace: 'nowrap' as const }}>
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════
   1. HERO — V2 split layout + V3 grid texture + V1 glow
   ═══════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
      style={{ background: SURFACE }}
    >
      {/* Left — Image (V2) */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen overflow-hidden">
        <img
          src={imgImage38}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.55) saturate(0.8)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, rgba(14,16,17,0.4) 0%, transparent 50%), linear-gradient(to right, transparent 50%, ${SURFACE} 100%)` }}
        />
        {/* V3 grid texture overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: gridDark }} />
        {/* V3 Geo accent */}
        <div className="absolute top-10 left-10">
          <GeoAccent />
        </div>
      </div>

      {/* Right — Content (V2 editorial + V3 textures) */}
      <div
        className="relative w-full lg:w-1/2 flex flex-col justify-between py-16 lg:py-20 px-8 lg:px-16 xl:px-24"
        style={{ backgroundImage: gridDark }}
      >
        {/* V1 gradient orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '50vw', height: '50vw', maxWidth: 600, maxHeight: 600,
            right: '-15vw', top: '5%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,85,58,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Name — V2 massive type */}
        <div className="relative z-10">
          <h1
            style={{
              fontFamily: heading,
              fontWeight: 900,
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
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
          {/* V3 outlined text */}
          <div
            className="mt-3"
            style={{
              fontFamily: lato,
              fontWeight: 900,
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
              color: 'transparent',
              lineHeight: 1,
            }}
          >
            Since 2007
          </div>
        </div>

        {/* Mid — positioning statement */}
        <div className="relative z-10 mt-10 lg:mt-0">
          <p
            className="mb-2"
            style={{ fontFamily: body, fontStyle: 'italic', fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}
          >
            (Based in Albuquerque, NM)
          </p>
          <p
            className="mb-8"
            style={{
              fontFamily: body,
              fontWeight: 700,
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: 1.45,
              color: 'var(--ds-ink)',
              letterSpacing: '-0.02em',
              maxWidth: '30rem',
            }}
          >
            Design and product leader with 18+ years in healthcare, specializing in provider tools and complex workflows. I create digital products that make care easier — for clinicians, staff, and patients.
          </p>

          {/* CTAs — V1/V2 style */}
          <div className="flex gap-4 flex-wrap items-center">
            <Link
              to="/case-studies"
              className="no-underline inline-flex items-center gap-2 transition-all duration-200"
              style={{
                fontFamily: body, fontWeight: 700, fontSize: '0.875rem',
                padding: '0.875rem 2rem', borderRadius: '0.5rem',
                background: 'var(--ds-coral)', color: '#fff', letterSpacing: '0.02em',
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
              View My Work <ArrowRight size={16} />
            </Link>
            <a
              href="#"
              className="no-underline inline-flex items-center gap-2 transition-all duration-200"
              style={{
                fontFamily: body, fontWeight: 600, fontSize: '0.875rem',
                padding: '0.875rem 2rem', borderRadius: '0.5rem',
                border: '1.5px solid rgba(255,255,255,0.15)', color: 'var(--ds-ink)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        {/* Company logos — Figma CompanyLogos layout with 6 logos */}
        <div className="relative z-10 mt-16 lg:mt-0">
          <p className="mb-5" style={{ fontFamily: outfit, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED }}>
            Previously at
          </p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-5 opacity-40">
            {/* Radiology Partners */}
            <div className="h-[24px] w-[200px] shrink-0 relative">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 24.3793">
                {[svgLogos.p303793f0,svgLogos.p19091580,svgLogos.p3fe51d00,svgLogos.p1750f100,svgLogos.p6283000,svgLogos.p3c96cb80,svgLogos.p2a2cb00,svgLogos.p13319d80,svgLogos.p19b2f100,svgLogos.p1ac77970,svgLogos.pd308400,svgLogos.pb9f5ff0,svgLogos.p51b7a00,svgLogos.p46cf7f0,svgLogos.p333c7c80,svgLogos.p21f6e080,svgLogos.p12e98f80,svgLogos.pd584f80,svgLogos.p1503dc00,svgLogos.p7dfd400,svgLogos.pab61100,svgLogos.p1c254300,svgLogos.p31766171].map((d,i)=><path key={i} d={d} fill="white"/>)}
              </svg>
            </div>
            {/* Presbyterian */}
            <div className="h-[26px] w-[181px] shrink-0 relative">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 181 26" style={{ padding: '12.24% 1.1% 12.25% 0.86%', boxSizing: 'border-box' }}>
                <svg viewBox="0 0 177.459 19.631" width="100%" height="100%">
                  {[svgLogos.p2d19ce80,svgLogos.p38b37200,svgLogos.p20b7c500,svgLogos.p3fc29980,svgLogos.p2d751b00,svgLogos.p472d00,svgLogos.p70f3e00,svgLogos.pecb1100,svgLogos.p1ae48780,svgLogos.pe028700,svgLogos.p27189640,svgLogos.p7a27c80,svgLogos.p341a6700,svgLogos.p3e79c000,svgLogos.p3e14e340,svgLogos.p2c229900].map((d,i)=><path key={i} d={d} fill="white"/>)}
                </svg>
              </svg>
            </div>
            {/* Mayo Clinic */}
            <img src={imgMayoLogo} alt="Mayo Clinic" className="h-[74px] w-[68px] object-contain shrink-0" />
            {/* Providence */}
            <div className="h-[26px] w-[145px] shrink-0 relative">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 145 26">
                <g clipPath="url(#provClip)">
                  <path d={svgLogos.p2654c200} fill="white" />
                  <path d={svgLogos.p1ff2a500} fill="white" />
                </g>
                <defs><clipPath id="provClip"><rect fill="white" height="26" width="145" /></clipPath></defs>
              </svg>
            </div>
            {/* iHealthHome square */}
            <div className="w-[62px] h-[62px] shrink-0 relative">
              <svg className="block" fill="none" viewBox="0 0 58.1029 60.3295" style={{ position: 'absolute', inset: '1.29% 3.14% 1.41% 3.14%', width: '93.72%', height: '97.3%' }}>
                {[svgLogos.p3d2e8f40,svgLogos.p22cda080,svgLogos.p3ecbf6c0,svgLogos.p22212300,svgLogos.p70af900,svgLogos.p1964e300,svgLogos.p16c39700].map((d,i)=><path key={i} d={d} fill="white"/>)}
              </svg>
            </div>
            {/* Lumedic (logomark + text) */}
            <div className="h-[30px] w-[140px] shrink-0 relative">
              {/* Logomark */}
              <svg className="block" fill="none" viewBox="0 0 30.3014 30" style={{ position: 'absolute', left: 0, top: 0, width: '21.64%', height: '100%' }}>
                {[svgLogos.p2cd15180,svgLogos.p2c6c1d00,svgLogos.p31b2e00,svgLogos.p28bb11c0].map((d,i)=><path key={i} clipRule="evenodd" d={d} fill="white" fillRule="evenodd"/>)}
              </svg>
              {/* Text */}
              <svg className="block" fill="none" viewBox="0 0 97.6815 17.1104" style={{ position: 'absolute', left: '30.22%', top: '23.18%', width: '69.78%', height: '57.03%' }}>
                <path clipRule="evenodd" d={svgLogos.p123bf780} fill="#E5E5E5" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgLogos.p134e5a80} fill="#E5E5E5" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgLogos.p2fa1b900} fill="white" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgLogos.p2f5a3a70} fill="white" fillRule="evenodd" />
                <path d={svgLogos.p1ef42900} fill="white" />
                <path clipRule="evenodd" d={svgLogos.p1e904600} fill="white" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgLogos.p1019cf00} fill="white" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   2. ABOUT — Figma ShowcaseAboutMe: text left, B&W portrait right bleeding
   ═══════════════════════════════════════════════════ */
function AboutSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#fff', backgroundImage: gridLight }}>
      <div style={{ padding: '100px 40px 100px clamp(40px, 8vw, 183px)', maxWidth: 1440, position: 'relative' }} className="v4-about">
        {/* B&W portrait — positioned right, partially bleeding off-edge */}
        <div
          className="hidden lg:block absolute right-0 w-[55%] max-w-[740px]"
          style={{ top: 200, height: 410, overflow: 'hidden' }}
        >
          <img
            src={imgProfilePhoto}
            alt="Amy leNoir"
            className="w-full h-full object-cover object-top"
            style={{ filter: 'grayscale(100%) contrast(1.05)' }}
          />
        </div>

        {/* Text content — left column, overlaps portrait */}
        <div style={{ maxWidth: 710, position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 900,
              fontSize: 'clamp(48px, 5vw, 64px)',
              lineHeight: 0.855,
              letterSpacing: '0.64px',
              color: INK,
              marginBottom: 40,
            }}
          >
            Hi, I'm Amy.
          </h2>
          <div style={{ fontFamily: lato, fontSize: 18, fontWeight: 300, lineHeight: '34px', color: INK }}>
            <p style={{ marginBottom: 0 }}>
              Through my work, I bridge the gap between{' '}
              <strong style={{ fontWeight: 700 }}>problem definition</strong> and{' '}
              <strong style={{ fontWeight: 700 }}>solution development</strong>
              {' '}&ndash; helping organizations determine which solutions to implement and the optimal path for getting there. I am passionate about{' '}
              <strong style={{ fontWeight: 700 }}>research-driven</strong>
              {' '}innovation and committed to the continuous learning of industry trends and emerging technologies &ndash; I believe we must understand it in order to leverage, manage, and teach it.
            </p>
            <p style={{ marginTop: 34, marginBottom: 0 }}>
              Proven track record of influencing organizations through{' '}
              <span style={{ fontWeight: 500 }}>product design</span> and{' '}
              <span style={{ fontWeight: 500 }}>design thinking</span>,{' '}
              <span style={{ fontWeight: 500 }}>building teams</span>, as well as the ability to do hands-on work while leading the team to ship innovative digital products from inception to launch.
            </p>
            <p style={{ marginTop: 34, marginBottom: 0 }}>
              In my spare time I{' '}
              <span style={{ fontWeight: 500 }}>coach youth sports</span> and{' '}
              <span style={{ fontWeight: 500 }}>mentor designers</span>.
            </p>
          </div>
        </div>

        {/* Mobile portrait fallback */}
        <div className="block lg:hidden mt-12 w-full overflow-hidden" style={{ height: 300 }}>
          <img
            src={imgProfilePhoto}
            alt="Amy leNoir"
            className="w-full h-full object-cover object-top"
            style={{ filter: 'grayscale(100%) contrast(1.05)' }}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   3. CHAPTER DIVIDER — V3 coral healthcare strip
   ═══════════════════════════════════════════════════ */
function ChapterDivider() {
  return (
    <div
      style={{ background: 'var(--ds-coral)', backgroundImage: gridCoral, padding: '52px clamp(40px, 8vw, 120px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}
    >
      <div>
        <div style={{ fontFamily: outfit, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 14 }}>Domain Expertise</div>
        <div style={{ fontFamily: heading, fontWeight: 900, fontSize: 'clamp(36px, 5vw, 64px)', textTransform: 'uppercase', lineHeight: 0.92, color: 'rgba(255,255,255,0.95)', letterSpacing: '-0.03em' }}>
          Healthcare<br />Experience
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['Cardiology', 'Radiology', 'Oncology', 'Telehealth', 'Clinical Trials', 'Medicare/Medicaid', 'AI in Healthcare'].map((d) => (
            <TagCoralGhost key={d}>{d}</TagCoralGhost>
          ))}
        </div>
      </div>
      <GeoAccent />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   4. CASE STUDIES — V2 full-bleed image grid + V3 structured labels
   ═══════════════════════════════════════════════════ */
function CaseStudiesSection() {
  const featured = caseStudies.filter((c) => c.featured);
  const remaining = caseStudies.filter((c) => !c.featured).slice(0, 2);
  const all = [...featured, ...remaining];

  return (
    <section style={{ background: '#181a1b' }}>
      {/* Header — V2 editorial + V3 section label */}
      <div className="px-8 lg:px-16 xl:px-24 pt-20 pb-12" style={{ background: SURFACE, backgroundImage: gridDark }}>
        <SectionLabel num="02">Selected Work</SectionLabel>
        <h2 style={{ fontFamily: heading, fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--ds-ink)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Case<br />Studies
        </h2>
        <p style={{ fontFamily: body, fontWeight: 600, fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', lineHeight: 1.3, color: 'var(--ds-ink)', letterSpacing: '-0.02em', maxWidth: '48rem' }}>
          Explore recent projects showcasing creativity, innovation, and impactful healthcare design solutions.
        </p>
      </div>

      {/* Grid — V2 image-overlay cards */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {all.map((cs, i) => (
          <Link key={cs.id} to={`/case-studies/${cs.id}`} className="no-underline group relative block overflow-hidden" style={{ aspectRatio: '1' }}>
            <ImageWithFallback src={cs.image} alt={cs.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.35) saturate(0.7)' }} />
            {/* V3 grid overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: gridDark }} />
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <div style={{ fontFamily: outfit, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
                Case Study {cs.num}
              </div>
              <div className="mb-1" style={{ fontFamily: body, fontStyle: 'italic', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>
                ({cs.company})
              </div>
              <div className="mb-3" style={{ fontFamily: heading, fontWeight: 700, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1.2, color: 'var(--ds-ink)', letterSpacing: '-0.02em' }}>
                {cs.title}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span style={{ fontFamily: heading, fontWeight: 900, fontSize: '1.5rem', color: 'var(--ds-coral)', letterSpacing: '-0.02em' }}>{cs.metricNum}</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{cs.metricLabel}</span>
              </div>
            </div>
            {/* Arrow on hover */}
            <div className="absolute top-6 right-6 flex items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ width: 48, height: 48, background: 'var(--ds-coral)' }}>
              <ArrowUpRight size={20} color="white" />
            </div>
          </Link>
        ))}
      </div>

      {/* View all */}
      <div className="px-8 lg:px-16 xl:px-24 py-6 flex items-center justify-between" style={{ background: SURFACE, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Link to="/case-studies" className="no-underline inline-flex items-center gap-3 transition-colors duration-200" style={{ fontFamily: body, fontWeight: 700, fontSize: '0.9375rem', color: 'var(--ds-ink)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ds-coral)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ds-ink)')}>
          View All Case Studies <ArrowRight size={18} />
        </Link>
        <span style={{ fontFamily: body, fontStyle: 'italic', fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)' }}>({caseStudies.length} Projects)</span>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   5. EXPERTISE — V2 alternating split panels + V3 textures
   ═══════════════════════════════════════════════════ */
const expertiseAreas = [
  {
    title: 'Design\nLeadership',
    desc: 'Build and scale high-performing design teams aligned around outcomes, not outputs.',
    services: ['Team Building & Mentorship', 'DesignOps & Process', 'Stakeholder Alignment', 'Design Strategy'],
    image: imgCaseStudyPresby,
    flip: false,
  },
  {
    title: 'Healthcare\nUX',
    desc: 'Create clinician-centered experiences through deep domain research and intuitive workflows.',
    services: ['User Research', 'Clinical Workflow Design', 'Usability Testing', 'Accessibility'],
    image: imgCaseStudyMayo,
    flip: true,
  },
];

function ExpertiseSection() {
  return (
    <section style={{ background: SURFACE }}>
      <div className="px-8 lg:px-16 xl:px-24 pt-20 pb-12" style={{ backgroundImage: gridDark }}>
        <SectionLabel num="03">What I Do</SectionLabel>
        <h2 style={{ fontFamily: heading, fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--ds-ink)', textTransform: 'uppercase' }}>
          Expertise
        </h2>
      </div>

      {expertiseAreas.map((area, i) => (
        <div key={i} className={`flex flex-col ${area.flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} overflow-hidden`} style={{ background: i % 2 === 0 ? '#181a1b' : SURFACE }}>
          <div className="relative w-full lg:w-2/5 h-[50vh] lg:h-auto min-h-[400px] overflow-hidden">
            <img src={area.image} alt={area.title} className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.4) saturate(0.6)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: gridDark }} />
          </div>
          <div className="w-full lg:w-3/5 flex flex-col justify-between py-16 lg:py-24 px-8 lg:px-16 xl:px-24">
            <div>
              <h3 style={{ fontFamily: heading, fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--ds-ink)', textTransform: 'uppercase', whiteSpace: 'pre-line', marginBottom: '1.5rem' }}>
                {area.title}
              </h3>
              <p style={{ fontFamily: body, fontWeight: 600, fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: 1.5, color: 'var(--ds-ink)', maxWidth: '30rem' }}>
                {area.desc}
              </p>
            </div>
            <div className="mt-12">
              <p className="mb-5" style={{ fontFamily: outfit, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED }}>Services</p>
              <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                {area.services.map((s) => (
                  <p key={s} style={{ fontFamily: body, fontWeight: 600, fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--ds-ink)' }}>{s}</p>
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
   6. EXPERIENCE + SKILLS — Figma ShowcaseExperience: two-col layout
   ═══════════════════════════════════════════════════ */
const experience = [
  { org: 'Radiology Partners', role: 'Director of User Experience', date: 'Feb 2025 \u2013 Oct 2025' },
  { org: 'Presbyterian Health & Services', role: 'Portfolio Manager of Strategy and Experience', date: 'July 2023 \u2013 Feb 2025' },
  { org: 'Mayo Clinic', role: 'Director of User Experience', date: '2021 - 2023' },
  { org: 'TRA Radiology', role: 'Lead Product Designer & Manager (Consultant)', date: '2020 - 2021' },
  { org: 'Lumedic (Providence)', role: 'Product Design Manager', date: '2019 - 2020' },
  { org: 'Providence Health & Services (Digital Innovation Group)', role: 'Principal Product Manager & Designer', date: 'Jun 2017-Mar 2019' },
  { org: 'SMITH', role: 'Senior UX Content Strategist', date: 'Jul 2016- Apr 2017' },
  { org: 'iHealthHome', role: 'Lead User Experience Designer', date: 'Feb 2015-May 2016' },
];

const skillGroups: { label: string; tags: string[] }[] = [
  { label: 'Design', tags: ['Accessibility', 'Atomic Design', 'Design Systems', 'Interaction Design', 'Information Architecture', 'Sitemaps', 'Typography', 'Prototyping', 'Systems Thinking', 'Mobile Design', 'Web Design', 'Wireframing', 'Intranet Design', 'Visual Design'] },
  { label: 'Research', tags: ['Archetypes', 'Personas', 'Jobs to be done', 'Service Blue Prints', 'Field studies', 'Competitive Analysis & Market Research', 'Journey Maps', 'Task Analysis', 'Tree Testing', 'Card Sorts', 'Usability Testing', "Survey's", 'NPS/SUS/SEQ', 'User interviews', 'Moderated&Unmoderated Testing'] },
  { label: 'Product & Opps', tags: ['Planning & Estimation', 'Product Requirements', 'Team capacity planning', 'Design Sprints', 'Dual Track Design', 'Writing User Stories', 'User Story Mapping', 'Roadmaps', 'Release Planning', 'UX Kanban'] },
  { label: 'Methodologies', tags: ['Agile', 'Business Model Canvas', 'Design Thinking', 'Double Diamond', 'Lean UX', 'Human Centered Design', 'Value Proposition Design'] },
];

function ExperienceSkillsSection() {
  return (
    <section style={{ background: '#fff', backgroundImage: gridLight }}>
      <div
        style={{ padding: '60px 20px', maxWidth: 1117, margin: '0 auto' }}
        className="v4-exp-skills"
      >
        <div style={{ display: 'flex', gap: 20 }} className="v4-exp-skills-grid">
          {/* Left — Experience */}
          <div style={{ width: '100%', maxWidth: 523, flexShrink: 0 }}>
            <h2 style={{ fontFamily: playfair, fontWeight: 900, fontSize: 36, lineHeight: 0.855, letterSpacing: '0.36px', color: INK, marginBottom: 40 }}>
              Experience
            </h2>
            <div style={{ fontFamily: lato, fontSize: 16, fontWeight: 300, lineHeight: '22px', color: INK }}>
              {experience.map((exp, i) => (
                <div key={exp.org} style={{ marginBottom: i < experience.length - 1 ? 22 : 0 }}>
                  <div style={{ fontWeight: 400, lineHeight: '22px' }}>{exp.org}</div>
                  <div style={{ lineHeight: '22px' }}>
                    {exp.role} &middot;{' '}
                    <span style={{ fontStyle: 'italic' }}>{exp.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills */}
          <div style={{ width: '100%', maxWidth: 549, flexShrink: 0 }}>
            <h2 style={{ fontFamily: playfair, fontWeight: 900, fontSize: 36, lineHeight: 0.855, letterSpacing: '0.36px', color: INK, marginBottom: 40 }}>
              Skills
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <div style={{ fontFamily: lato, fontSize: 20, fontWeight: 400, lineHeight: '26.5px', color: INK, marginBottom: 10 }}>
                    {group.label}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: outfit,
                          fontSize: 14,
                          fontWeight: 400,
                          background: INK,
                          color: '#fff',
                          padding: '9px 12px',
                          borderRadius: 22,
                          whiteSpace: 'nowrap',
                          lineHeight: 'normal',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   7. TOOLS — Figma ShowcaseExperience: dark bg, 112px icon boxes
   ═══════════════════════════════════════════════════ */
const toolData = [
  { name: 'Figma', isSvg: true },
  { name: 'Jira', src: imgJiraIcon },
  { name: 'Aha!', src: imgAhaIcon },
  { name: 'Notion', src: imgNotionIcon, darkBg: true },
  { name: 'Axure', src: imgAxureIcon },
  { name: 'Optimal', src: imgOptimalIcon },
  { name: 'UserTesting', src: imgUserTestingIcon },
  { name: 'Airtable', src: imgAirtableIcon },
  { name: 'Dovetail', src: imgDovetailIcon },
];

function ToolsSection() {
  return (
    <section style={{ background: INK, padding: '60px clamp(40px, 8vw, 120px)' }}>
      <div style={{ maxWidth: 1099, margin: '0 auto' }}>
        <h2 style={{ fontFamily: playfair, fontWeight: 900, fontSize: 36, lineHeight: 0.855, letterSpacing: '0.36px', color: '#fff', marginBottom: 40 }}>Tools</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
          {toolData.map((tool) => (
            <div
              key={tool.name}
              style={{
                width: 112,
                height: 112,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: tool.darkBg ? INK : 'transparent',
                overflow: 'hidden',
              }}
            >
              {tool.isSvg ? (
                <div style={{ width: 112, height: 112, background: INK, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="32" height="48" viewBox="0 0 32 48" fill="none">
                    <path d={svgPaths.p2f47fb00} fill="#0ACF83" /><path d={svgPaths.p1d9b0d00} fill="#A259FF" />
                    <path d={svgPaths.p2052d100} fill="#F24E1E" /><path d={svgPaths.pde5e680} fill="#FF7262" />
                    <path d={svgPaths.p23117880} fill="#1ABCFE" />
                  </svg>
                </div>
              ) : (
                <img src={tool.src} alt={tool.name} style={{ maxWidth: 48, maxHeight: 48, objectFit: 'contain' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   8. PROCESS — V3 dark screenshots
   ═══════════════════════════════════════════════════ */
function ProcessSection() {
  return (
    <section style={{ background: INK, backgroundImage: gridDark, padding: '64px clamp(40px, 8vw, 120px)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <SectionLabel num="06">Methodology</SectionLabel>
      <h2 style={{ fontFamily: playfair, fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 12 }}>Process</h2>
      <p style={{ fontFamily: lato, fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: MUTED, maxWidth: 460, marginBottom: 40 }}>
        From research to delivery — my design process adapts to each engagement while maintaining rigour at every stage.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-7/12 overflow-hidden rounded-sm"><img src={imgProcessMap2} alt="Design process map" className="w-full h-auto object-cover" /></div>
        <div className="w-full md:w-5/12 overflow-hidden rounded-sm"><img src={imgProcessMap1} alt="Detailed process view" className="w-full h-auto object-cover" /></div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   9. TESTIMONIALS — V2 grid cards
   ═══════════════════════════════════════════════════ */
const testimonials = [
  { quote: 'Amy completely transformed how we approach cardiology patient access. Her service design work reduced wait times and elevated CAHPS scores across our entire system.', name: 'Dr. Sarah Mitchell', role: 'VP of Cardiology, Presbyterian', bg: '#181a1b' },
  { quote: "Working with Amy was transformative. She didn't just design a platform — she built consensus across leadership and delivered a vision that aligned every stakeholder.", name: 'James Moreno', role: 'Digital Strategy, Mayo Clinic', bg: '#1f2122' },
  { quote: "Amy's ability to go deep into clinical subspecialties, earn trust from physicians, and translate complexity into elegant workflows is unlike anything I've seen.", name: 'Karen Wright', role: 'COO, Radiology Partners', bg: '#1f2122' },
  { quote: 'She built our design team from 4 to 22 people while simultaneously shipping products that generated $60M+ in measurable impact. Exceptional leader.', name: 'Michael Chen', role: 'CTO, Providence Health', bg: '#181a1b' },
];

function TestimonialsSection() {
  return (
    <section style={{ background: SURFACE }}>
      <div className="px-8 lg:px-16 xl:px-24 pt-20 pb-12" style={{ backgroundImage: gridDark }}>
        <SectionLabel num="07">Testimonials</SectionLabel>
        <h2 style={{ fontFamily: heading, fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--ds-ink)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          What Leaders<br />Say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col justify-between p-10 lg:p-16" style={{ background: t.bg, backgroundImage: gridDark }}>
            <svg width="40" height="26" viewBox="0 0 47.36 30" fill="none" className="mb-10 opacity-25">
              <path d={svgPathsV2.p130d6900} fill="white" />
            </svg>
            <div>
              <p className="mb-10" style={{ fontFamily: body, fontWeight: 600, fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)', lineHeight: 1.6, color: 'var(--ds-ink)', letterSpacing: '-0.01em' }}>{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-full flex items-center justify-center" style={{ width: 44, height: 44, background: 'color-mix(in srgb, var(--ds-coral) 20%, transparent)', fontFamily: heading, fontWeight: 900, fontSize: '0.875rem', color: 'var(--ds-coral)' }}>
                  {t.name.split(' ').map((w) => w[0]).join('')}
                </div>
                <div>
                  <p style={{ fontFamily: body, fontWeight: 700, fontSize: '0.9375rem', color: 'var(--ds-ink)', lineHeight: 1.3 }}>{t.name}</p>
                  <p style={{ fontFamily: body, fontStyle: 'italic', fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>({t.role})</p>
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
   10. CTA — V2/V1 coral section + V3 grid texture
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--ds-coral)', backgroundImage: gridCoral, padding: '6rem 0' }}>
      <div className="relative z-10 px-8 lg:px-16 xl:px-24 text-center">
        <h2 className="mb-4" style={{ fontFamily: heading, fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}>
          Let's build something together.
        </h2>
        <p className="mx-auto mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: '34rem', fontFamily: body }}>
          I'm open to leadership roles in healthcare design, product strategy, and experience transformation.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#" className="no-underline inline-flex items-center gap-2 transition-all duration-200" style={{ fontFamily: body, fontWeight: 700, fontSize: '0.9375rem', padding: '1rem 2.5rem', borderRadius: '0.5rem', background: '#fff', color: 'var(--ds-coral)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <Mail size={16} /> Get in Touch
          </a>
          <a href="#" className="no-underline inline-flex items-center gap-2 transition-all duration-200" style={{ fontFamily: body, fontWeight: 700, fontSize: '0.9375rem', padding: '1rem 2.5rem', borderRadius: '0.5rem', border: '2px solid rgba(255,255,255,0.5)', background: 'transparent', color: '#fff' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}>
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   11. FOOTER — V2 light editorial + V3 Playfair accent
   ═══════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: '#fff', color: '#0e1011', backgroundImage: gridLight }}>
      <div className="px-8 lg:px-16 xl:px-24 pt-16 pb-12">
        {/* Large wordmark — V2 */}
        <div className="mb-14" style={{ fontFamily: heading, fontWeight: 900, fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.05em', color: INK, textTransform: 'uppercase' }}>
          Amy<span style={{ color: 'var(--ds-coral)' }}>.</span>leNoir
        </div>

        {/* 4-column nav — V2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-14">
          {[
            { heading: 'Pages', items: ['Home', 'Case Studies', 'Healthcare', 'About'] },
            { heading: 'Work', items: ['Presbyterian', 'Mayo Clinic', 'Radiology Partners', 'All Case Studies'] },
            { heading: 'Expertise', items: ['Design Leadership', 'Healthcare UX', 'Service Design', 'AI in Healthcare'] },
            { heading: 'Connect', items: ['LinkedIn', 'Resume', 'Contact', 'Dribbble'] },
          ].map((col) => (
            <div key={col.heading}>
              <p className="mb-4" style={{ fontFamily: body, fontStyle: 'italic', fontSize: '0.875rem', color: 'rgba(14,16,17,0.45)' }}>({col.heading})</p>
              {col.items.map((p) => (
                <p key={p} style={{ fontFamily: body, fontWeight: 600, fontSize: '0.9375rem', lineHeight: 2, color: INK }}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-8" style={{ borderTop: '1px solid rgba(14,16,17,0.1)' }}>
          <p style={{ fontFamily: body, fontWeight: 600, fontSize: '0.8125rem', color: 'rgba(14,16,17,0.45)' }}>&copy; 2026 Amy leNoir &middot; Portfolio</p>
          {/* V3 Geo accent in footer */}
          <div className="flex items-center gap-4">
            <GeoAccent light />
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer transition-colors duration-200" style={{ fontFamily: body, fontWeight: 600, fontSize: '0.8125rem', color: INK, background: 'none', border: 'none', borderBottom: `2px solid ${INK}`, padding: '0 0 2px 0' }}>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════
   RESPONSIVE OVERRIDES
   ═══════════════════════════════════════════════════ */
const responsiveCSS = `
  @media (max-width: 768px) {
    .v4-about-grid { grid-template-columns: 1fr !important; }
    .v4-exp-skills-grid { flex-direction: column !important; }
    .v4-exp-skills-grid > div { max-width: 100% !important; }
  }
`;

/* ═══════════════════════════════════════════════════
   PAGE EXPORT
   ═══════════════════════════════════════════════════ */
export function HomePageV4() {
  return (
    <div className="min-h-screen" style={{ fontFamily: `var(--ds-font-body)`, background: SURFACE, color: 'var(--ds-ink)', WebkitFontSmoothing: 'antialiased' }}>
      <style>{responsiveCSS}</style>
      <HeroSection />
      <AboutSection />
      <ChapterDivider />
      <CaseStudiesSection />
      <ExpertiseSection />
      <ExperienceSkillsSection />
      <ToolsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}