import { Link } from 'react-router';
import { ArrowUpRight, Download } from 'lucide-react';

/* ── Figma assets ── */
import imgProfilePhoto from 'figma:asset/3e3a9f51dc98a1da176300fe60e995b528a0f775.png';
import imgAmyPhoto from 'figma:asset/ae3ad737236f103655898ade51a1891f23f2434c.png';
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
import imgRpIcon from 'figma:asset/d077c059402fe1f402447d647850d317347c7e1f.png';
import svgPaths from '../../imports/svg-e43ui3l6d5';
import svgLogos from '../../imports/svg-yr5gx5on3s';

/* ── Font shortcuts ── */
const lato = "'Lato', sans-serif";
const playfair = "'Playfair Display', serif";
const outfit = "'Outfit', sans-serif";

/* ── Grid texture SVGs ── */
const gridDark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`;
const gridLight = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(0,0,0,0.05)' stroke-width='0.5'/%3E%3C/svg%3E")`;
const gridCoral = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='0.5'/%3E%3C/svg%3E")`;

/* ── Colors ── */
const INK = '#0b0b0b';
const MUTED = '#7a7a7a';
const CORAL = '#E0614A';

/* ── Geometric accent shapes ── */
function GeoAccent({ className = '' }: { className?: string }) {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, opacity: 0.2 }}>
      
      
    </div>
  );
}

function GeoAccentLarge() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: 0.35, flexShrink: 0 }}>
      
      
    </div>
  );
}

/* ── Section label with dash ── */
function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      style={{
        fontFamily: outfit,
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: '0.16em',
        textTransform: 'uppercase' as const,
        color: MUTED,
        marginBottom: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <span style={{ width: 20, height: 1, background: MUTED, display: 'block' }} />
      {children}
    </div>
  );
}

/* ── Tag components ── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: lato,
        fontSize: 12,
        background: INK,
        color: '#fff',
        padding: '6px 12px',
        borderRadius: 20,
        whiteSpace: 'nowrap' as const,
      }}
    >
      {children}
    </span>
  );
}

function TagOutline({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: lato,
        fontSize: 12,
        background: 'transparent',
        color: INK,
        padding: '6px 12px',
        borderRadius: 20,
        border: '1.5px solid rgba(0,0,0,0.18)',
        whiteSpace: 'nowrap' as const,
      }}
    >
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      style={{
        background: INK,
        backgroundImage: gridDark,
        minHeight: '88vh',
        padding: '80px 40px 64px clamp(40px, 8vw, 120px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Geo accent */}
      <GeoAccent className="absolute top-[60px] right-[60px]" />

      {/* Label */}
      <div
        style={{
          fontFamily: outfit,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.16em',
          color: MUTED,
          textTransform: 'uppercase',
          marginBottom: 28,
        }}
      >
        Experience Design &middot; Healthcare + Technology &middot; Since 2007
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: lato,
          fontWeight: 900,
          fontSize: 64,
          lineHeight: 0.88,
          letterSpacing: '0.4px',
          textTransform: 'uppercase',
          color: '#fff',
          maxWidth: 800,
          marginBottom: 36,
        }}
      >
        Experience
        <br />
        Design Leader
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: lato,
          fontSize: 15,
          fontWeight: 300,
          color: MUTED,
          maxWidth: 460,
          lineHeight: 1.8,
        }}
      >
        Bridging problem definition and solution development across healthcare systems, digital products, and the teams that build them.
      </p>

      {/* Company logos strip */}
      <div
        style={{
          marginTop: 60,
          paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: 36,
          flexWrap: 'wrap' as const,
        }}
      >
        
        {/* Radiology Partners */}
        <div className="h-[16px] w-[130px] relative shrink-0 opacity-35">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 24.3793">
            {[svgLogos.p303793f0,svgLogos.p19091580,svgLogos.p3fe51d00,svgLogos.p1750f100,svgLogos.p6283000,svgLogos.p3c96cb80,svgLogos.p2a2cb00,svgLogos.p13319d80,svgLogos.p19b2f100,svgLogos.p1ac77970,svgLogos.pd308400,svgLogos.pb9f5ff0,svgLogos.p51b7a00,svgLogos.p46cf7f0,svgLogos.p333c7c80,svgLogos.p21f6e080,svgLogos.p12e98f80,svgLogos.pd584f80,svgLogos.p1503dc00,svgLogos.p7dfd400,svgLogos.pab61100,svgLogos.p1c254300,svgLogos.p31766171].map((d,i)=><path key={i} d={d} fill="white"/>)}
          </svg>
        </div>
        {/* Presbyterian */}
        <div className="h-[16px] w-[115px] relative shrink-0 opacity-35">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 177.459 19.631">
            {[svgLogos.p2d19ce80,svgLogos.p38b37200,svgLogos.p20b7c500,svgLogos.p3fc29980,svgLogos.p2d751b00,svgLogos.p472d00,svgLogos.p70f3e00,svgLogos.pecb1100,svgLogos.p1ae48780,svgLogos.pe028700,svgLogos.p27189640,svgLogos.p7a27c80,svgLogos.p341a6700,svgLogos.p3e79c000,svgLogos.p3e14e340,svgLogos.p2c229900].map((d,i)=><path key={i} d={d} fill="white"/>)}
          </svg>
        </div>
        {/* Mayo Clinic */}
        <img src={imgMayoLogo} alt="Mayo Clinic" className="h-[36px] w-auto object-contain opacity-35" />
        {/* Providence */}
        <div className="h-[16px] w-[95px] relative shrink-0 opacity-35">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 145 26">
            <g clipPath="url(#v3ProvClip)">
              <path d={svgLogos.p2654c200} fill="white" />
              <path d={svgLogos.p1ff2a500} fill="white" />
            </g>
            <defs><clipPath id="v3ProvClip"><rect fill="white" height="26" width="145" /></clipPath></defs>
          </svg>
        </div>
        {/* iHealthHome */}
        <div className="w-[40px] h-[40px] relative shrink-0 opacity-35">
          <svg className="block" fill="none" viewBox="0 0 58.1029 60.3295" style={{ position: 'absolute', inset: '1.29% 3.14% 1.41% 3.14%', width: '93.72%', height: '97.3%' }}>
            {[svgLogos.p3d2e8f40,svgLogos.p22cda080,svgLogos.p3ecbf6c0,svgLogos.p22212300,svgLogos.p70af900,svgLogos.p1964e300,svgLogos.p16c39700].map((d,i)=><path key={i} d={d} fill="white"/>)}
          </svg>
        </div>
        {/* Lumedic (logomark + text) */}
        <div className="h-[20px] w-[90px] relative shrink-0 opacity-35">
          <svg className="block" fill="none" viewBox="0 0 30.3014 30" style={{ position: 'absolute', left: 0, top: 0, width: '21.64%', height: '100%' }}>
            {[svgLogos.p2cd15180,svgLogos.p2c6c1d00,svgLogos.p31b2e00,svgLogos.p28bb11c0].map((d,i)=><path key={i} clipRule="evenodd" d={d} fill="white" fillRule="evenodd"/>)}
          </svg>
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
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. ABOUT — 2-col grid with stats & skills
   ═══════════════════════════════════════════ */
const skills: Record<string, string[]> = {
  Design: ['Visual Design', 'Interaction Design', 'Service Design', 'Systems Thinking', 'IA', 'Accessibility', 'Prototyping'],
  Research: ['User Research', 'Usability Testing', 'Journey Mapping', 'Ethnography', 'Competitive Analysis', 'Synthesis'],
  'Product & Ops': ['Product Strategy', 'Roadmapping', 'OKRs', 'Agile / Scrum', 'Stakeholder Mgmt', 'Design Ops'],
  Methodologies: ['HCD', 'Design Thinking', 'Jobs To Be Done', 'Lean UX', 'Service Blueprint', 'Co-design'],
};

function AboutSection() {
  return (
    <section
      style={{
        background: '#fff',
        backgroundImage: gridLight,
        padding: '80px 40px 0 clamp(40px, 8vw, 120px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
        className="al-about-grid"
      >
        {/* Left column */}
        <div>
          <SectionLabel>About</SectionLabel>
          <h2
            style={{
              fontFamily: playfair,
              fontWeight: 900,
              fontSize: 'clamp(40px, 4vw, 58px)',
              lineHeight: 0.9,
              letterSpacing: '0.4px',
              color: INK,
              marginBottom: 32,
            }}
          >
            Hi, I'm Amy.
          </h2>
          <div
            style={{
              fontFamily: lato,
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#333',
            }}
          >
            <p style={{ marginBottom: 16 }}>
              Through my work, I bridge the gap between <strong style={{ fontWeight: 700, color: INK }}>problem definition</strong> and{' '}
              <strong style={{ fontWeight: 700, color: INK }}>solution development</strong> — helping organizations determine which solutions to implement and the optimal path for getting there.
            </p>
            <p>
              Passionate about <strong style={{ fontWeight: 700, color: INK }}>research-driven innovation</strong> and committed to continuous learning across industry trends and emerging technologies. Proven track record influencing organizations through{' '}
              <strong style={{ fontWeight: 700, color: INK }}>product design</strong> and design thinking,{' '}
              <strong style={{ fontWeight: 700, color: INK }}>building teams</strong>, and shipping innovative digital products from inception to launch.
            </p>
          </div>
        </div>

        {/* Right column — Photo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 'min(100%, 380px)',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src={imgAmyPhoto}
              alt="Amy leNoir"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
                filter: 'grayscale(100%) contrast(1.05)',
              }}
            />
            {/* Subtle overlay to blend with the grid texture */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: gridLight,
                opacity: 0.35,
                pointerEvents: 'none',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats grid — full width at bottom */}
      <div
        style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
          marginLeft: 'calc(-1 * clamp(40px, 8vw, 120px))',
          marginRight: '-40px',
          width: 'calc(100% + clamp(40px, 8vw, 120px) + 40px)',
        }}
        className="al-stats-grid"
      >
        {[
          { num: '25+', label: 'Years Experience', bg: INK },
          { num: '22', label: 'Team Members Led', bg: '#1a1a1a' },
          { num: '6', label: 'Health Systems', bg: '#2a2a2a' },
          { num: '13', label: 'Healthcare Domains', bg: CORAL },
        ].map((s) => (
          <div key={s.label} style={{ background: s.bg, color: '#fff', padding: '32px 28px' }}>
            <div style={{ fontFamily: playfair, fontSize: 38, fontWeight: 900, lineHeight: 1 }}>{s.num}</div>
            <div
              style={{
                fontFamily: outfit,
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.88)',
                marginTop: 6,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. CHAPTER DIVIDER — Coral
   ═══════════════════════════════════════════ */
function ChapterDivider() {
  return (
    <div
      style={{
        background: CORAL,
        backgroundImage: gridCoral,
        padding: '52px clamp(40px, 8vw, 120px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: outfit,
            fontSize: 10,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: 14,
          }}
        >
          Domain Expertise
        </div>
        <div
          style={{
            fontFamily: lato,
            fontWeight: 900,
            fontSize: 'clamp(40px, 5vw, 68px)',
            textTransform: 'uppercase',
            lineHeight: 0.88,
            color: 'rgba(255,255,255,0.95)',
            letterSpacing: '0.4px',
          }}
        >
          Healthcare
          <br />
          Experience
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['Cardiology', 'Radiology', 'Oncology', 'Telehealth', 'Clinical Trials', 'Medicare/Medicaid', 'AI in Healthcare'].map((d) => (
            <span
              key={d}
              style={{
                fontFamily: lato,
                fontSize: 12,
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                padding: '5px 12px',
                borderRadius: 20,
              }}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <GeoAccentLarge />
    </div>
  );
}

/* ═══════════════════════════════════════════
   4. CASE STUDIES
   ═══════════════════════════════════════════ */
const caseStudyEntries = [
  {
    id: 'presbyterian',
    num: '01',
    org: 'Presbyterian Health & Services',
    role: 'Portfolio Manager of Strategy and Experience',
    project: 'Cardiology Service Design',
    desc: 'Using HCD and service design to understand process and pain points causing low CAHPS scores in cardiology among Medicare Advantage patient-members.',
    tags: ['Service Design', 'HCD', 'Journey Mapping', 'Medicare Advantage'],
    image: imgCaseStudyPresby,
    bg: '#f5f0eb',
    metric: { value: '74→83%', label: 'CAHPS score improvement target' },
  },
  {
    id: 'mayo-clinic',
    num: '02',
    org: 'Mayo Clinic',
    role: 'Director of User Experience',
    project: 'Clinical Research — Trial Navigator',
    desc: 'Led focused discovery to understand and reduce friction across complex clinical trial workflows, laying groundwork for a more connected, scalable experience for study teams.',
    tags: ['Discovery', 'Workflow Design', 'Clinical Research', 'Systems Design'],
    image: imgCaseStudyMayo,
    bg: '#edf0f5',
    metric: null as { value: string; label: string } | null,
  },
];

function CaseStudiesSection() {
  return (
    <section
      style={{
        background: '#fff',
        backgroundImage: gridLight,
        padding: '80px 40px 80px clamp(40px, 8vw, 120px)',
      }}
    >
      <h2
        style={{
          fontFamily: playfair,
          fontSize: 32,
          fontWeight: 900,
          color: INK,
          letterSpacing: '0.3px',
          lineHeight: 0.855,
          marginBottom: 52,
        }}
      >
        Case Studies
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }} className="al-case-row">
        {caseStudyEntries.map((cs, i) => (
          <Link
            key={cs.id}
            to={`/case-studies/${cs.id}`}
            className="no-underline group"
            style={{ display: 'flex' }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image with gradient overlay */}
              <div style={{ position: 'relative', height: 220, overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={cs.image}
                  alt={cs.project}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 50%)',
                  }}
                />
                {/* Number overlay */}
                <span
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 20,
                    fontFamily: lato,
                    fontWeight: 900,
                    fontSize: 48,
                    lineHeight: 1,
                    color: 'rgba(0,0,0,0.06)',
                  }}
                >
                  {cs.num}
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Org name */}
                <div
                  style={{
                    fontFamily: lato,
                    fontSize: 12,
                    color: MUTED,
                    marginBottom: 12,
                  }}
                >
                  {cs.org}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {cs.tags.slice(0, 3).map((t, ti) => {
                    const tagColors = [
                      { bg: 'rgba(224,97,74,0.1)', text: CORAL },
                      { bg: 'rgba(224,97,74,0.1)', text: CORAL },
                      { bg: 'rgba(200,160,0,0.1)', text: '#b89600' },
                    ];
                    const tc = tagColors[ti] || tagColors[0];
                    return (
                      <span
                        key={t}
                        style={{
                          fontFamily: lato,
                          fontSize: 12,
                          fontWeight: 500,
                          background: tc.bg,
                          color: tc.text,
                          padding: '6px 14px',
                          borderRadius: 9999,
                          whiteSpace: 'nowrap',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: lato,
                    fontWeight: 900,
                    fontSize: 20,
                    color: INK,
                    letterSpacing: '-0.2px',
                    lineHeight: 1.3,
                    marginBottom: 10,
                  }}
                >
                  {cs.project}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: lato,
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#6b6b7b',
                    marginBottom: cs.metric ? 20 : 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                    flex: 1,
                  }}
                >
                  {cs.desc}
                </p>

                {/* Metric callout */}
                {cs.metric && (
                  <div
                    style={{
                      background: 'rgba(224,97,74,0.06)',
                      borderLeft: `3px solid ${CORAL}`,
                      borderRadius: 4,
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: lato,
                        fontWeight: 900,
                        fontSize: 24,
                        color: CORAL,
                        letterSpacing: '-0.48px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {cs.metric.value}
                    </span>
                    <span
                      style={{
                        fontFamily: lato,
                        fontSize: 12,
                        color: '#6b6b7b',
                        lineHeight: 1.3,
                      }}
                    >
                      {cs.metric.label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. EXPERIENCE + SKILLS — Two-column layout
   ═══════════════════════════════════════════ */
const experience = [
  { org: 'Radiology Partners', role: 'Director of User Experience', date: 'Feb 2025 \u2013 Oct 2025' },
  { org: 'Presbyterian Health & Services', role: 'Portfolio Manager of Strategy and Experience', date: 'Jul 2023 \u2013 Feb 2025' },
  { org: 'Mayo Clinic', role: 'Director of User Experience', date: '2021 \u2013 2023' },
  { org: 'TRA Radiology', role: 'Lead Product Designer & Manager (Consultant)', date: '2020 \u2013 2021' },
  { org: 'Lumedic (Providence)', role: 'Product Design Manager', date: '2019 \u2013 2020' },
  { org: 'Providence Health & Services', role: 'Principal Product Manager & Designer', date: '2017 \u2013 2019' },
  { org: 'SMITH', role: 'Senior UX Content Strategist', date: '2016 \u2013 2017' },
  { org: 'iHealthHome', role: 'Lead User Experience Designer', date: '2015 \u2013 2016' },
];

const skillGroups: { label: string; tags: string[] }[] = [
  { label: 'Design', tags: ['Accessibility', 'Atomic Design', 'Design Systems', 'Interaction Design', 'Information Architecture', 'Sitemaps', 'Typography', 'Prototyping', 'Systems Thinking', 'Mobile Design', 'Web Design', 'Wireframing', 'Intranet Design', 'Visual Design'] },
  { label: 'Research', tags: ['Archetypes', 'Personas', 'Jobs to be Done', 'Service Blueprints', 'Field Studies', 'Competitive Analysis & Market Research', 'Journey Maps', 'Task Analysis', 'Tree Testing', 'Card Sorts', 'Usability Testing', 'Surveys', 'NPS / SUS / SEQ', 'User Interviews', 'Moderated & Unmoderated Testing'] },
  { label: 'Product & Ops', tags: ['Planning & Estimation', 'Product Requirements', 'Team Capacity Planning', 'Design Sprints', 'Dual Track Design', 'User Stories', 'User Story Mapping', 'Roadmaps', 'Release Planning', 'UX Kanban'] },
  { label: 'Methodologies', tags: ['Agile', 'Business Model Canvas', 'Design Thinking', 'Double Diamond', 'Lean UX', 'Human Centered Design', 'Value Proposition Design'] },
];

function ExperienceSection() {
  return (
    <section
      style={{
        background: '#fff',
        backgroundImage: gridLight,
        padding: '80px 40px 80px clamp(40px, 8vw, 120px)',
      }}
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}
        className="al-exp-skills-grid"
      >
        {/* Left — Experience */}
        <div>
          <SectionLabel>Experience</SectionLabel>
          <h2 style={{ fontFamily: playfair, fontWeight: 900, fontSize: 32, lineHeight: 0.855, color: INK, marginBottom: 36 }}>
            Career History
          </h2>
          <div style={{ fontFamily: lato, fontSize: 14, fontWeight: 300, lineHeight: '22px', color: INK }}>
            {experience.map((exp, i) => (
              <div
                key={exp.org}
                style={{
                  paddingBottom: i < experience.length - 1 ? 18 : 0,
                  marginBottom: i < experience.length - 1 ? 18 : 0,
                  borderBottom: i < experience.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                }}
              >
                <div style={{ fontWeight: 700, color: INK, marginBottom: 2 }}>{exp.org}</div>
                <div style={{ color: '#555' }}>
                  {exp.role} &middot;{' '}
                  <span style={{ fontStyle: 'italic', color: MUTED }}>{exp.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Skills */}
        <div>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 style={{ fontFamily: playfair, fontWeight: 900, fontSize: 32, lineHeight: 0.855, color: INK, marginBottom: 36 }}>
            Skills
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {skillGroups.map((group) => (
              <div key={group.label}>
                <div style={{ fontFamily: lato, fontSize: 15, fontWeight: 700, color: INK, marginBottom: 10 }}>
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: outfit,
                        fontSize: 12,
                        fontWeight: 400,
                        background: INK,
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: 20,
                        whiteSpace: 'nowrap',
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
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. TOOLS — Dark grid
   ═══════════════════════════════════════════ */
const toolData = [
  { name: 'Figma', isSvg: true },
  { name: 'Jira', src: imgFigmaIcon },
  { name: 'Aha!', src: imgAhaIcon },
  { name: 'Notion', src: imgNotionIcon },
  { name: 'Axure', src: imgAxureIcon },
  { name: 'Optimal', src: imgRpIcon },
  { name: 'UserTesting', src: imgUserTestingIcon },
  { name: 'Airtable', src: imgAirtableIcon },
  { name: 'Dovetail', src: imgDovetailIcon },
];

function ToolsSection() {
  return (
    <section
      style={{
        background: INK,
        backgroundImage: gridDark,
        padding: '64px clamp(40px, 8vw, 120px)',
      }}
    >
      <h2 style={{ fontFamily: playfair, fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 40 }}>Tools</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {toolData.map((tool) => (
          <div
            key={tool.name}
            className="transition-all duration-200"
            style={{
              width: 88,
              height: 88,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 5,
              border: '1px solid rgba(255,255,255,0.06)',
              fontFamily: outfit,
              fontSize: 10,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: MUTED,
              cursor: 'default',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
          >
            {tool.isSvg ? (
              <svg width="22" height="32" viewBox="0 0 32 48" fill="none">
                <path d={svgPaths.p2f47fb00} fill="#0ACF83" />
                <path d={svgPaths.p1d9b0d00} fill="#A259FF" />
                <path d={svgPaths.p2052d100} fill="#F24E1E" />
                <path d={svgPaths.pde5e680} fill="#FF7262" />
                <path d={svgPaths.p23117880} fill="#1ABCFE" />
              </svg>
            ) : (
              <img src={tool.src} alt={tool.name} style={{ maxWidth: 28, maxHeight: 28, objectFit: 'contain' }} />
            )}
            {tool.name}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7. PROCESS — Dark section with maps
   ═══════════════════════════════════════════ */
function ProcessSection() {
  return (
    <section
      style={{
        background: INK,
        backgroundImage: gridDark,
        padding: '64px clamp(40px, 8vw, 120px)',
      }}
    >
      <h2 style={{ fontFamily: playfair, fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 12 }}>Process</h2>
      <p
        style={{
          fontFamily: lato,
          fontSize: 14,
          fontWeight: 300,
          lineHeight: 1.75,
          color: MUTED,
          maxWidth: 460,
          marginBottom: 40,
        }}
      >
        From research to delivery — my design process adapts to each engagement while maintaining rigour at every stage.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-7/12 overflow-hidden">
          <img src={imgProcessMap2} alt="Design process map" className="w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-5/12 overflow-hidden">
          <img src={imgProcessMap1} alt="Detailed process view" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   8. FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer
      style={{
        background: INK,
        backgroundImage: gridDark,
        padding: '64px clamp(40px, 8vw, 120px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: 40,
      }}
    >
      <div>
        <div style={{ fontFamily: playfair, fontSize: 44, fontWeight: 900, color: '#fff', lineHeight: 0.9 }}>
          Amy
          <br />
          leNoir
        </div>
        <div style={{ fontFamily: outfit, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED, marginTop: 20 }}>
          Experience Design Leader &middot; Available for VP / Director roles
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 20 }}>
        <div style={{ display: 'flex', gap: 28 }}>
          {['LinkedIn', 'Resume', 'Contact'].map((l) => (
            <a
              key={l}
              href="#"
              className="no-underline transition-colors duration-200"
              style={{
                fontFamily: outfit,
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: MUTED,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
            >
              {l}
            </a>
          ))}
        </div>
        <div style={{ fontFamily: outfit, fontSize: 10, color: MUTED, letterSpacing: '0.08em' }}>&copy; 2026 amylenoir.com</div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   RESPONSIVE OVERRIDES (injected as style tag)
   ═══════════════════════════════════════════ */
const responsiveCSS = `
  @media (max-width: 768px) {
    .al-about-grid { grid-template-columns: 1fr !important; }
    .al-case-row { grid-template-columns: 1fr !important; }
    .al-exp-skills-grid { grid-template-columns: 1fr !important; }
    .al-stats-grid { grid-template-columns: 1fr 1fr !important; }
  }
`;

/* ═══════════════════════════════════════════
   PAGE EXPORT
   ═══════════════════════════════════════════ */
export function HomePageV3() {
  return (
    <div style={{ fontFamily: lato, background: INK, color: '#fff', WebkitFontSmoothing: 'antialiased' }}>
      <style>{responsiveCSS}</style>
      <HeroSection />
      <AboutSection />
      <ChapterDivider />
      <CaseStudiesSection />
      <ExperienceSection />
      <ToolsSection />
      <ProcessSection />
      <Footer />
    </div>
  );
}