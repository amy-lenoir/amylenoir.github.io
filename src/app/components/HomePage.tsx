import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { caseStudies } from './caseStudyData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* ── V3 Figma assets (for hero logos) ── */
import imgMayoLogo from 'figma:asset/6acd1a2994cea933774ca495b0c47d201789f99a.png';
import imgAmyPhoto from 'figma:asset/cd26205b522a89615e913af5c319e0666e80e2e3.png';
import svgLogos from '../../imports/svg-yr5gx5on3s';

/* ── V3 Font Styles ── */
const lato = "'Lato', sans-serif";
const playfair = "'Playfair Display', serif";
const outfit = "'Outfit', sans-serif";

/* ── Grid texture ── */
const gridDark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`;

/* ── Colors ── */
const INK = '#0b0b0b';
const MUTED = '#7a7a7a';
const CORAL_COLOR = '#E0614A';
const TEAL_COLOR = '#5DDDD5';
const GOLD_COLOR = '#FFD054';
const LIME_COLOR = '#B8E86B';

/* ── Cycling manifesto slides ── */
const manifestoSlides: { stat: string; label: string; phrase: string; color: string; accent: string }[] = [
  { stat: '$60M', label: 'hidden in a star rating', phrase: 'Design is not decoration. It\'s aggressive business strategy.', color: GOLD_COLOR, accent: CORAL_COLOR },
  { stat: '13', label: 'clinical domains deep', phrase: 'We must understand the plumbing to fix what\'s broken.', color: TEAL_COLOR, accent: LIME_COLOR },
  { stat: '100+', label: 'practitioners mentored', phrase: 'Just say what everyone is already thinking.', color: CORAL_COLOR, accent: GOLD_COLOR },
  { stat: '6', label: 'health systems transformed', phrase: 'Frame the right problem before designing the answer.', color: LIME_COLOR, accent: TEAL_COLOR },
];

/* ── About tab data ── */
const aboutTabs = [
  {
    value: '25+',
    label: 'Years Experience',
    bg: '#0b0b0b',
    content: {
      paragraphs: [
        <>Through my work, I bridge the gap between <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>problem definition</strong> and <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>solution development</strong> — helping organizations determine which solutions to implement and the optimal path for getting there.</>,
        <>Passionate about <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>research-driven innovation</strong> and committed to continuous learning across industry trends and emerging technologies. Proven track record influencing organizations through <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>product design</strong> and design thinking, <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>building teams</strong>, and shipping innovative digital products from inception to launch.</>,
      ],
    },
  },
  {
    value: '15',
    label: 'Teams Led',
    bg: '#1a1a1a',
    content: {
      paragraphs: [
        <>Directly managed and mentored <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>100+ practitioners</strong> — including product designers, UX researchers, front-end developers, project managers, content strategists, and design technologists — across <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>15 cross-functional teams</strong>.</>,
        <>Built squads spanning <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>Agile, Lean UX, and dual-track discovery</strong> methodologies — embedding design within product triads, clinical advisory pods, and platform engineering crews to ship at the pace healthcare demands.</>,
        <>Championed <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>design ops and team culture</strong> — establishing critique rituals, career ladders, and shared design-system governance that scaled quality across orgs from 2-person startups to 22+ member enterprise groups.</>,
      ],
    },
  },
  {
    value: '6',
    label: 'Health Systems',
    bg: '#2a2a2a',
    content: {
      paragraphs: [
        <>Embedded across <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>6 major health systems</strong> — including Presbyterian, Mayo Clinic, Providence, and Radiology Partners — spanning payer, provider, and clinical research contexts.</>,
        <>Each engagement deepened expertise in <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>regulatory environments</strong>, clinical workflows, and the organizational dynamics unique to healthcare delivery and administration.</>,
      ],
    },
  },
  {
    value: '13',
    label: 'Healthcare Domains',
    bg: CORAL_COLOR,
    content: {
      paragraphs: [
        <>Delivered design solutions across <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>13 healthcare domains</strong> including cardiology, oncology, radiology, clinical trials, population health, and revenue cycle management.</>,
        <>This breadth enables a <strong style={{ color: '#fff', fontFamily: lato, fontWeight: 700 }}>systems-level perspective</strong> — understanding how patient journeys, clinician workflows, and business operations intersect across specialties and care settings.</>,
      ],
    },
  },
];

/* ── Geometric accent ── */
function GeoAccent({ className = '' }: { className?: string }) {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, opacity: 0.2 }}>
      
    </div>
  );
}

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
        fontFamily: lato,
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

/* ══════════════════════════════════════════════
   HERO SECTION
   ══════════════════════════════════════════════ */
function HeroSection() {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % manifestoSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = manifestoSlides[slideIdx];

  return (
    <section
      style={{
        background: INK,
        backgroundImage: gridDark,
        minHeight: '88vh',
        padding: '40px 40px 64px clamp(40px, 8vw, 120px)',
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

      {/* Cycling manifesto stats */}
      <div
        className="hidden md:block"
        aria-hidden="true"
        style={{ marginTop: 36, maxWidth: 480 }}
      >
        {/* Progress dots */}
        <div className="flex gap-2 mb-5">
          {manifestoSlides.map((s, i) => (
            <motion.div
              key={i}
              style={{
                width: i === slideIdx ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === slideIdx ? s.color : 'rgba(255,255,255,0.15)',
              }}
              animate={{
                width: i === slideIdx ? 20 : 6,
                background: i === slideIdx ? s.color : 'rgba(255,255,255,0.15)',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* Stat + label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIdx}
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Big stat number */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 2 }}>
              <span
                style={{
                  fontFamily: lato,
                  fontWeight: 900,
                  fontSize: 104,
                  lineHeight: 1,
                  color: slide.color,
                  letterSpacing: '-0.04em',
                  textShadow: `0 0 60px ${slide.color}44`,
                }}
              >
                {slide.stat}
              </span>
              <span
                style={{
                  fontFamily: outfit,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  alignSelf: 'flex-end',
                  paddingBottom: 14,
                }}
              >
                {slide.label}
              </span>
            </div>

            {/* Handwritten phrase — delayed entrance with sparkles */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
              style={{ position: 'relative', margin: '6px 0 0 0' }}
            >
              <p
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontWeight: 700,
                  fontSize: 30,
                  lineHeight: 1.4,
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0,
                }}
              >
                {slide.phrase}
              </p>
              {/* Sparkles */}
              {[
                { top: '-6px', left: '-10px', delay: 0.8, size: 14 },
                { top: '4px', right: '-14px', delay: 1.1, size: 10 },
                { bottom: '-4px', left: '38%', delay: 1.4, size: 12 },
                { top: '-8px', right: '20%', delay: 1.7, size: 8 },
                { bottom: '2px', right: '5%', delay: 2.0, size: 10 },
              ].map((sp, i) => (
                <motion.svg
                  key={`sparkle-${slideIdx}-${i}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    position: 'absolute',
                    width: sp.size,
                    height: sp.size,
                    top: sp.top,
                    left: (sp as any).left,
                    right: (sp as any).right,
                    bottom: (sp as any).bottom,
                    pointerEvents: 'none',
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: -30 }}
                  animate={{
                    opacity: [0, 1, 0.7, 0],
                    scale: [0, 1.2, 0.9, 0],
                    rotate: [-30, 10, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: sp.delay,
                    ease: 'easeOut',
                    repeat: Infinity,
                    repeatDelay: 2.5,
                  }}
                >
                  <path
                    d="M12 2L13.5 8.5L20 7L14.5 11L18 17L12 13.5L6 17L9.5 11L4 7L10.5 8.5L12 2Z"
                    fill={slide.color}
                    fillOpacity={0.6}
                  />
                </motion.svg>
              ))}
            </motion.div>

            {/* Accent underline */}
            <motion.div
              style={{
                height: 2,
                borderRadius: 1,
                marginTop: 12,
                background: `linear-gradient(90deg, ${slide.accent}, transparent)`,
              }}
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Company logos strip */}
      <div
        style={{
          marginTop: 60,
          paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 44,
          flexWrap: 'wrap' as const,
          width: '100%',
        }}
      >
        {/* Radiology Partners */}
        <motion.div
          className="relative shrink-0 cursor-pointer"
          style={{ height: 20, width: 155, opacity: 0.35 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ opacity: 0.7, scale: 1.05 }}
        >
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 24.3793">
            {[svgLogos.p303793f0,svgLogos.p19091580,svgLogos.p3fe51d00,svgLogos.p1750f100,svgLogos.p6283000,svgLogos.p3c96cb80,svgLogos.p2a2cb00,svgLogos.p13319d80,svgLogos.p19b2f100,svgLogos.p1ac77970,svgLogos.pd308400,svgLogos.pb9f5ff0,svgLogos.p51b7a00,svgLogos.p46cf7f0,svgLogos.p333c7c80,svgLogos.p21f6e080,svgLogos.p12e98f80,svgLogos.pd584f80,svgLogos.p1503dc00,svgLogos.p7dfd400,svgLogos.pab61100,svgLogos.p1c254300,svgLogos.p31766171].map((d,i)=><path key={i} d={d} fill="white"/>)}
          </svg>
        </motion.div>
        {/* Presbyterian */}
        <motion.div
          className="relative shrink-0 cursor-pointer"
          style={{ height: 20, width: 140, opacity: 0.35 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ opacity: 0.7, scale: 1.05 }}
        >
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 177.459 19.631">
            {[svgLogos.p2d19ce80,svgLogos.p38b37200,svgLogos.p20b7c500,svgLogos.p3fc29980,svgLogos.p2d751b00,svgLogos.p472d00,svgLogos.p70f3e00,svgLogos.pecb1100,svgLogos.p1ae48780,svgLogos.pe028700,svgLogos.p27189640,svgLogos.p7a27c80,svgLogos.p341a6700,svgLogos.p3e79c000,svgLogos.p3e14e340,svgLogos.p2c229900].map((d,i)=><path key={i} d={d} fill="white"/>)}
          </svg>
        </motion.div>
        {/* Mayo Clinic */}
        <motion.img
          src={imgMayoLogo}
          alt="Mayo Clinic"
          className="w-auto object-contain cursor-pointer"
          style={{ height: 42, opacity: 0.35 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ opacity: 0.7, scale: 1.05 }}
        />
        {/* Providence */}
        <motion.div
          className="relative shrink-0 cursor-pointer"
          style={{ height: 20, width: 115, opacity: 0.35 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ opacity: 0.7, scale: 1.05 }}
        >
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 145 26">
            <g clipPath="url(#v1ProvClip)">
              <path d={svgLogos.p2654c200} fill="white" />
              <path d={svgLogos.p1ff2a500} fill="white" />
            </g>
            <defs><clipPath id="v1ProvClip"><rect fill="white" height="26" width="145" /></clipPath></defs>
          </svg>
        </motion.div>
        {/* iHealthHome */}
        <motion.div
          className="relative shrink-0 cursor-pointer"
          style={{ width: 48, height: 48, opacity: 0.35 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ opacity: 0.7, scale: 1.05 }}
        >
          <svg className="block" fill="none" viewBox="0 0 58.1029 60.3295" style={{ position: 'absolute', inset: '1.29% 3.14% 1.41% 3.14%', width: '93.72%', height: '97.3%' }}>
            {[svgLogos.p3d2e8f40,svgLogos.p22cda080,svgLogos.p3ecbf6c0,svgLogos.p22212300,svgLogos.p70af900,svgLogos.p1964e300,svgLogos.p16c39700].map((d,i)=><path key={i} d={d} fill="white"/>)}
          </svg>
        </motion.div>
        {/* Lumedic */}
        <motion.div
          className="relative shrink-0 cursor-pointer"
          style={{ height: 24, width: 108, opacity: 0.35 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ opacity: 0.7, scale: 1.05 }}
        >
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
        </motion.div>
      </div>


    </section>
  );
}

/* ══════════════════════════════════════════════
   FEATURED WORK
   ══════════════════════════════════════════════ */
function FeaturedWork() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <section className="ds-bg-grid-dark" style={{ background: 'var(--ds-surface)', padding: '7.5rem 0' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div
              className="mb-4"
              style={{
                fontFamily: outfit,
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ds-coral)',
              }}
            >
              Selected Work
            </div>
            <h2
              style={{
                fontFamily: playfair,
                fontWeight: 900,
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: 'var(--ds-ink)',
              }}
            >
              Featured Case Studies
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="no-underline inline-flex items-center gap-2 transition-colors duration-200"
            style={{
              fontFamily: lato,
              fontWeight: 600,
              fontSize: '0.875rem',
              color: 'var(--ds-coral)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ds-coral-400)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ds-coral)')}
          >
            View all case studies
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
          {featured.map((cs) => (
            <Link
              key={cs.id}
              to={`/case-studies/${cs.id}`}
              className="no-underline group"
            >
              <div
                className="overflow-hidden cursor-pointer transition-all duration-300"
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
                <div className="relative overflow-hidden" style={{ height: 220 }}>
                  <ImageWithFallback
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ filter: 'brightness(0.7) saturate(0.8)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, var(--ds-surface-raised) 0%, transparent 50%)',
                    }}
                  />
                  <span
                    className="absolute top-4 right-4"
                    style={{
                      fontFamily: lato,
                      fontWeight: 900,
                      fontSize: '3rem',
                      color: 'rgba(255,255,255,0.08)',
                      lineHeight: 1,
                    }}
                  >
                    {cs.num}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div
                    className="mb-2"
                    style={{ fontSize: '0.75rem', color: 'var(--ds-ink-muted)', fontFamily: lato }}
                  >
                    {cs.company}
                  </div>
                  <div className="flex gap-2 flex-wrap mb-3">
                    {cs.tags.map((t, i) => (
                      <Tag key={i} variant={t.variant}>{t.label}</Tag>
                    ))}
                  </div>
                  <div
                    className="mb-3"
                    style={{
                      fontFamily: lato,
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
                    className="mb-5"
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      color: 'var(--ds-ink-secondary)',
                      fontFamily: lato,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {cs.description}
                  </div>

                  {/* Metric */}
                  <div
                    className="inline-flex items-center gap-3"
                    style={{
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(232, 85, 58, 0.08)',
                      borderRadius: '0.25rem',
                      borderLeft: '3px solid var(--ds-coral)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: lato,
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
                        color: 'var(--ds-ink-secondary)',
                        lineHeight: 1.3,
                        whiteSpace: 'pre-line',
                        fontFamily: lato,
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
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SOCIAL PROOF
   ══════════════════════════════════════════════ */
function SocialProof() {
  const companies = [
    'Presbyterian Healthcare',
    'Optum',
    'UnitedHealth Group',
    'Cerner',
    'Epic Systems',
    'Humana',
  ];

  return (
    null
  );
}

/* ── Experience + Skills data (from V3) ── */
const experienceData = [
  { org: 'Radiology Partners', role: 'Director of User Experience', date: 'Feb 2025 \u2013 Oct 2025', skills: ['Design Strategy', 'AI-Assisted Radiology', 'Design Systems', 'Team Leadership', 'Stakeholder Management'] },
  { org: 'Presbyterian Health & Services', role: 'Portfolio Manager of Strategy and Experience', date: 'Jul 2023 \u2013 Feb 2025', skills: ['Portfolio Strategy', 'Service Design', 'Cardiology UX', 'Design Ops', 'Roadmapping'] },
  { org: 'Mayo Clinic', role: 'Director of User Experience', date: '2021 \u2013 2023', skills: ['Oncology UX', 'Clinical Trials', 'User Research', 'Accessibility', 'Team Building'] },
  { org: 'TRA Radiology', role: 'Lead Product Designer & Manager (Consultant)', date: '2020 \u2013 2021', skills: ['Product Design', 'Radiology Workflows', 'Prototyping', 'Usability Testing'] },
  { org: 'Lumedic (Providence)', role: 'Product Design Manager', date: '2019 \u2013 2020', skills: ['Blockchain Health', 'Mobile Design', 'Lean UX', 'Interaction Design'] },
  { org: 'Providence Health & Services', role: 'Principal Product Manager & Designer', date: '2017 \u2013 2019', skills: ['Telehealth', 'Revenue Cycle', 'Information Architecture', 'Agile', 'Design Thinking'] },
  { org: 'SMITH', role: 'Senior UX Content Strategist', date: '2016 \u2013 2017', skills: ['Content Strategy', 'UX Writing', 'Wireframing', 'Competitive Analysis'] },
  { org: 'iHealthHome', role: 'Lead User Experience Designer', date: '2015 \u2013 2016', skills: ['Home Health UX', 'Mobile Design', 'User Interviews', 'Visual Design'] },
];

const skillGroups: { label: string; tags: string[] }[] = [
  { label: 'Design', tags: ['Accessibility', 'Atomic Design', 'Design Systems', 'Interaction Design', 'Information Architecture', 'Sitemaps', 'Typography', 'Prototyping', 'Systems Thinking', 'Mobile Design', 'Web Design', 'Wireframing', 'Intranet Design', 'Visual Design'] },
  { label: 'Research', tags: ['Archetypes', 'Personas', 'Jobs to be Done', 'Service Blueprints', 'Field Studies', 'Competitive Analysis & Market Research', 'Journey Maps', 'Task Analysis', 'Tree Testing', 'Card Sorts', 'Usability Testing', 'Surveys', 'NPS / SUS / SEQ', 'User Interviews', 'Moderated & Unmoderated Testing'] },
  { label: 'Product & Ops', tags: ['Planning & Estimation', 'Product Requirements', 'Team Capacity Planning', 'Design Sprints', 'Dual Track Design', 'User Stories', 'User Story Mapping', 'Roadmaps', 'Release Planning', 'UX Kanban'] },
  { label: 'Methodologies', tags: ['Agile', 'Business Model Canvas', 'Design Thinking', 'Double Diamond', 'Lean UX', 'Human Centered Design', 'Value Proposition Design'] },
];

/* ── Shared helpers for tab content panels ── */
function SectionLabel({ text, muted }: { text: string; muted: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
      <span style={{ width: 20, height: 1, background: muted, display: 'block' }} />
      <span
        style={{
          fontFamily: outfit,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '1.6px',
          textTransform: 'uppercase',
          color: muted,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function Paragraphs({ items, color }: { items: React.ReactNode[]; color: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {items.map((p, i) => (
        <p
          key={i}
          style={{
            fontFamily: lato,
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.85,
            color,
            margin: 0,
          }}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

function HealthcareExpertiseHeader({ muted, linkColor }: { muted: string; linkColor: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
      <span
        style={{
          fontFamily: outfit,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '1.6px',
          textTransform: 'uppercase',
          color: muted,
        }}
      >
        Healthcare Expertise
      </span>
      <Link
        to="/healthcare"
        className="no-underline inline-flex items-center gap-1 transition-opacity duration-200"
        style={{
          fontFamily: outfit,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: linkColor,
          opacity: 0.85,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
      >
        View all
        <ArrowRight size={11} />
      </Link>
    </div>
  );
}

function HighlightGrid({ onCoral }: { onCoral: boolean }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {healthcareHighlights.map((h, i) => (
        <div
          key={i}
          style={{
            padding: '14px 16px',
            borderRadius: 8,
            background: onCoral ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.03)',
            border: `1px solid ${onCoral ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)'}`,
            transition: 'background 0.2s ease, border-color 0.2s ease',
          }}
        >
          <p
            style={{
              fontFamily: lato,
              fontWeight: 700,
              fontSize: 13,
              color: onCoral ? '#fff' : h.accentAccessible,
              margin: '0 0 3px 0',
              lineHeight: 1.3,
            }}
          >
            {h.name}
          </p>
          <p
            style={{
              fontFamily: lato,
              fontWeight: 300,
              fontSize: 11,
              lineHeight: 1.5,
              color: onCoral ? 'rgba(255,255,255,0.7)' : '#999',
              margin: 0,
            }}
          >
            {h.context}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Tab 0: 25+ Years Experience ── */
function TabContentExperience() {
  const muted = '#999';
  const body = '#b0b0b0';
  const rule = 'rgba(255,255,255,0.08)';
  return (
    <div className="mx-auto" style={{ maxWidth: 1100 }}>
      <SectionLabel text="About" muted={muted} />
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        <div className="flex-1 min-w-0" style={{ flexBasis: '50%' }}>
          <Paragraphs items={aboutTabs[0].content.paragraphs} color={body} />
        </div>
        <div className="flex-1 min-w-0 flex items-center justify-center" style={{ flexBasis: '50%' }}>
          <div style={{ width: 380, height: 380 }}>
            <div
              className="overflow-hidden"
              style={{ borderRadius: 190, width: '100%', height: '100%', position: 'relative' }}
            >
              <img src={imgAmyPhoto} alt="Amy leNoir" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      {/* Experience + Skills — two-column layout (dark-adapted from V3) */}
      <div style={{ marginTop: 56, paddingTop: 32, borderTop: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="al-exp-skills-grid">
          {/* Left — Experience */}
          <div>
            <SectionLabel text="Experience" muted={muted} />
            
            <div style={{ fontFamily: lato, fontSize: 14, fontWeight: 300, lineHeight: '22px', color: '#b0b0b0' }}>
              {experienceData.map((exp, i) => (
                <div
                  key={exp.org}
                  style={{
                    paddingBottom: i < experienceData.length - 1 ? 18 : 0,
                    marginBottom: i < experienceData.length - 1 ? 18 : 0,
                    borderBottom: i < experienceData.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: 2 }}>{exp.org}</div>
                  <div style={{ color: '#999' }}>
                    {exp.role} &middot;{' '}
                    <span style={{ fontStyle: 'italic', color: '#777' }}>{exp.date}</span>
                  </div>
                  {exp.skills && exp.skills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            fontFamily: outfit,
                            fontSize: 12,
                            fontWeight: 400,
                            background: 'rgba(255,255,255,0.04)',
                            color: '#999',
                            padding: '4px 8px',
                            borderRadius: 4,
                            whiteSpace: 'nowrap',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills */}
          <div>
            <SectionLabel text="Capabilities" muted={muted} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <div style={{ fontFamily: lato, fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
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
                          background: 'rgba(255,255,255,0.06)',
                          color: '#ccc',
                          padding: '6px 12px',
                          borderRadius: 20,
                          whiteSpace: 'nowrap',
                          border: '1px solid rgba(255,255,255,0.08)',
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
    </div>
  );
}

/* ── Tab 1: 15 Teams Led ── */
function TabContentTeams() {
  const muted = '#999';
  const body = '#b0b0b0';
  const rule = 'rgba(255,255,255,0.08)';
  return (
    <div className="mx-auto" style={{ maxWidth: 1100 }}>
      <SectionLabel text="Leadership" muted={muted} />
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        <div className="flex-1 min-w-0" style={{ flexBasis: '50%' }}>
          <Paragraphs items={aboutTabs[1].content.paragraphs} color={body} />
        </div>
        <div className="flex-1 min-w-0" style={{ flexBasis: '50%' }}>
          <LeadershipPrinciples onCoral={false} />
        </div>
      </div>
      <div style={{ marginTop: 56, paddingTop: 32, borderTop: `1px solid ${rule}` }}>
        <HealthcareExpertiseHeader muted={muted} linkColor={CORAL_COLOR} />
        <HighlightGrid onCoral={false} />
      </div>
    </div>
  );
}

/* ── Tab 2: 6 Health Systems ── */
function TabContentSystems() {
  const muted = '#999';
  const body = '#b0b0b0';
  const rule = 'rgba(255,255,255,0.08)';
  return (
    <div className="mx-auto" style={{ maxWidth: 1100 }}>
      <SectionLabel text="About" muted={muted} />
      <div>
        <Paragraphs items={aboutTabs[2].content.paragraphs} color={body} />
      </div>
      <div style={{ marginTop: 56, paddingTop: 32, borderTop: `1px solid ${rule}` }}>
        <HealthcareExpertiseHeader muted={muted} linkColor={CORAL_COLOR} />
        <HighlightGrid onCoral={false} />
      </div>
    </div>
  );
}

/* ── Tab 3: 13 Healthcare Domains (coral) ── */
function TabContentDomains() {
  const muted = 'rgba(255,255,255,0.55)';
  const body = 'rgba(255,255,255,0.78)';
  const rule = 'rgba(255,255,255,0.25)';
  return (
    <div className="mx-auto" style={{ maxWidth: 1100 }}>
      <SectionLabel text="About" muted={muted} />
      <div>
        <Paragraphs items={aboutTabs[3].content.paragraphs} color={body} />
      </div>
      <div style={{ marginTop: 56, paddingTop: 32, borderTop: `1px solid ${rule}` }}>
        <HealthcareExpertiseHeader muted={muted} linkColor="#fff" />
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left column: Health Systems / Companies */}
          <div className="flex-1 min-w-0" style={{ flexBasis: '45%' }}>
            <p
              style={{
                fontFamily: outfit,
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '1.6px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                margin: '0 0 16px 0',
              }}
            >
              Health Systems
            </p>
            <div className="flex flex-col gap-2">
              {healthcareCompanies.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                  style={{
                    padding: '10px 14px',
                    borderRadius: 8,
                    background: 'rgba(255,255,255,0.10)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 32, height: 32, borderRadius: 6, background: 'rgba(255,255,255,0.15)' }}
                  >
                    <span style={{ fontSize: 14 }}>{c.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p style={{ fontFamily: lato, fontWeight: 700, fontSize: 13, color: '#fff', margin: 0, lineHeight: 1.3 }}>
                      {c.name}
                    </p>
                    <p style={{ fontFamily: lato, fontWeight: 300, fontSize: 11, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.4 }}>
                      {c.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Domain expertise tags + differentiators */}
          <div className="flex-1 min-w-0" style={{ flexBasis: '55%' }}>
            <p
              style={{
                fontFamily: outfit,
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '1.6px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                margin: '0 0 16px 0',
              }}
            >
              Clinical Domains
            </p>
            <div className="flex flex-wrap gap-2">
              {healthcareHighlights.map((h, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '7px 14px',
                    borderRadius: 20,
                    fontFamily: lato,
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: '0.01em',
                    color: '#fff',
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'background 0.15s ease',
                  }}
                >
                  {h.name}
                </span>
              ))}
            </div>

            <p
              style={{
                fontFamily: outfit,
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '1.6px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                margin: '28px 0 12px 0',
              }}
            >
              Key Differentiators
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {healthcareDifferentiators.map((d, i) => (
                <div
                  key={i}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 8,
                    background: 'rgba(255,255,255,0.08)',
                    borderLeft: '3px solid rgba(255,255,255,0.4)',
                  }}
                >
                  <p style={{ fontFamily: lato, fontWeight: 700, fontSize: 12, color: '#fff', margin: 0, lineHeight: 1.4 }}>
                    {d.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Tab content lookup ── */
const tabContentComponents = [TabContentExperience, TabContentTeams, TabContentSystems, TabContentDomains];

function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = aboutTabs[activeTab];
  const TabContent = tabContentComponents[activeTab];

  return (
    <section
      style={{
        background: INK,
        backgroundImage: gridDark,
        position: 'relative',
      }}
    >
      {/* Stat tab boxes */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
        }}
      >
        {aboutTabs.map((t, i) => {
          const isActive = activeTab === i;
          return (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="text-left transition-all duration-200"
              style={{
                background: t.bg,
                padding: '32px 28px',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                outline: 'none',
                opacity: isActive ? 1 : 0.6,
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.opacity = '0.85';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.opacity = '0.6';
              }}
            >
              {/* Active indicator */}
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 28,
                    right: 28,
                    height: 2,
                    background: i === 3 ? '#fff' : CORAL_COLOR,
                  }}
                />
              )}
              <p
                style={{
                  fontFamily: playfair,
                  fontWeight: 900,
                  fontSize: 38,
                  lineHeight: '38px',
                  color: '#fff',
                  margin: '0 0 6px 0',
                }}
              >
                {t.value}
              </p>
              <p
                style={{
                  fontFamily: outfit,
                  fontWeight: 400,
                  fontSize: 10,
                  lineHeight: '15px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.88)',
                  margin: 0,
                }}
              >
                {t.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Tab content — each tab renders its own independent panel */}
      <div
        style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(40px, 8vw, 90px)',
          background: tab.bg,
          transition: 'background 0.3s ease',
        }}
      >
        <TabContent />
      </div>
    </section>
  );
}

/* ── Leadership Principles ── */
const principles = [
  {
    title: 'Radical Candor',
    desc: 'Just say what everyone is already thinking — don\'t dance around the facts. Real work happens faster.',
  },
  {
    title: 'Balance Your Passion & Play',
    desc: 'If you\'re happy and healthy, you\'ll enjoy your work and co-workers more.',
  },
  {
    title: 'Reasonably Evidence-Based',
    desc: 'Research is always key, but use the 80/20 rule.',
  },
  {
    title: 'Take Thrifty Risks, Fail Early',
    desc: 'Try out risky ideas early at low cost and learn.',
  },
  {
    title: 'Have a Vision, Backcast',
    desc: 'Put a stake in the sand — everyone moving in the same direction towards a common goal.',
  },
  {
    title: 'Do One Thing Really Well',
    desc: 'Nail the core concept before adding to it.',
  },
];

function LeadershipPrinciples({ onCoral }: { onCoral: boolean }) {
  const borderColor = onCoral ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)';
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}
    >
      <p
        style={{
          fontFamily: outfit,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '1.6px',
          textTransform: 'uppercase',
          color: onCoral ? 'rgba(255,255,255,0.55)' : '#999',
          margin: '0 0 20px 0',
        }}
      >
        Leadership Principles
      </p>
      {principles.map((p, i) => (
        <div
          key={i}
          style={{
            padding: '14px 0',
            borderTop: i === 0 ? `1px solid ${borderColor}` : 'none',
            borderBottom: `1px solid ${borderColor}`,
          }}
        >
          <p
            style={{
              fontFamily: lato,
              fontWeight: 700,
              fontSize: 14,
              color: '#fff',
              margin: '0 0 4px 0',
              lineHeight: 1.3,
            }}
          >
            {p.title}
          </p>
          <p
            style={{
              fontFamily: lato,
              fontWeight: 300,
              fontSize: 13,
              lineHeight: 1.6,
              color: onCoral ? 'rgba(255,255,255,0.7)' : '#b0b0b0',
              margin: 0,
            }}
          >
            {p.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Healthcare Highlights ── */
const healthcareHighlights = [
  {
    name: 'Cardiology',
    context: 'Presbyterian',
    accentAccessible: '#FF8A7A', // coral – 4.6:1 on #0b0b0b
  },
  {
    name: 'Radiology & AI',
    context: 'Radiology Partners',
    accentAccessible: '#5DDDD5', // teal – 4.7:1 on #0b0b0b
  },
  {
    name: 'Oncology',
    context: 'Mayo Clinic',
    accentAccessible: '#5DDDD5',
  },
  {
    name: 'Telehealth',
    context: 'Providence',
    accentAccessible: '#B8E86B', // lime – 4.8:1 on #0b0b0b
  },
  {
    name: 'Clinical Trials',
    context: 'SQAG',
    accentAccessible: '#FFD054', // gold – 4.7:1 on #0b0b0b
  },
  {
    name: 'Revenue Cycle',
    context: 'Providence',
    accentAccessible: '#FFD054',
  },
  {
    name: 'Medicare / Medicaid',
    context: 'Presbyterian',
    accentAccessible: '#FF8A7A',
  },
  {
    name: 'Home Health',
    context: 'Startup',
    accentAccessible: '#B8E86B',
  },
  {
    name: 'Service Design',
    context: 'Cross-system workflows',
    accentAccessible: '#5DDDD5',
  },
];

/* ── Healthcare Companies ── */
const healthcareCompanies = [
  {
    name: 'Presbyterian',
    role: 'Health System  Payer + Provider',
    icon: '🏥',
  },
  {
    name: 'Mayo Clinic',
    role: 'Academic Medical Center',
    icon: '🔬',
  },
  {
    name: 'Providence St. Joseph',
    role: 'Health System · Digital Innovation',
    icon: '⚕️',
  },
  {
    name: 'Radiology Partners',
    role: 'Provider-Facing SaaS · AI',
    icon: '🧠',
  },
  {
    name: 'SQAG',
    role: 'Health Tech Startup · Clinical Trials',
    icon: '🚀',
  },
];

/* ── Healthcare Differentiators ── */
const healthcareDifferentiators = [
  {
    title: 'Deep domain research',
    color: '#FF8A7A',
  },
  {
    title: 'Clinician-in-the-loop AI',
    color: '#5DDDD5',
  },
  {
    title: 'Service design for complex systems',
    color: '#FFD054',
  },
  {
    title: 'HIPAA & authenticated experiences',
    color: '#B8E86B',
  },
  {
    title: 'Healthcare digital maturity assessment',
    color: '#FF8A7A',
  },
];

/* ══════════════════════════════════════════════
   CTA SECTION
   ══════════════════════════════════════════════ */
function CTASection() {
  return (
    <section
      className="ds-bg-grid-accent relative"
      style={{ background: 'var(--ds-coral)', padding: '6rem 0' }}
    >
      <div className="mx-auto max-w-[72rem] px-8 text-center">
        <h2
          className="mb-4"
          style={{
            fontFamily: playfair,
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: '#fff',
          }}
        >
          Let's build something together.
        </h2>
        <p
          className="mx-auto mb-8"
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '32rem',
            fontFamily: lato,
          }}
        >
          I'm open to leadership roles in healthcare design, product strategy, and experience transformation.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#"
            className="no-underline inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
            style={{
              fontFamily: lato,
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.04em',
              padding: '0.875rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
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
            className="no-underline inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
            style={{
              fontFamily: lato,
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.04em',
              padding: '0.875rem 2rem',
              borderRadius: '0.5rem',
              background: 'transparent',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fff';
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════ */
function HomeFooter() {
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
          style={{ fontSize: '0.875rem', color: 'var(--ds-ink-muted)', fontFamily: lato }}
        >
          Amy leNoir &mdash; Portfolio
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--ds-ink-muted)', fontFamily: lato }}>
          <Link to="/case-studies" className="no-underline" style={{ color: 'var(--ds-coral)' }}>
            Case Studies
          </Link>
          {' '}&middot;{' '}
          <a href="#" className="no-underline" style={{ color: 'var(--ds-coral)' }}>Healthcare</a>
          {' '}&middot;{' '}
          <a href="#" className="no-underline" style={{ color: 'var(--ds-coral)' }}>About</a>
          {' '}&middot;{' '}
          <a href="#" className="no-underline" style={{ color: 'var(--ds-coral)' }}>Contact</a>
        </p>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════
   HOME PAGE
   ════════════════════════════════════════════ */
export function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: lato,
        background: 'var(--ds-canvas)',
        color: 'var(--ds-ink-inverse)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <HeroSection />
      <AboutSection />
      <FeaturedWork />
      <SocialProof />
      <CTASection />
      <HomeFooter />
    </div>
  );
}