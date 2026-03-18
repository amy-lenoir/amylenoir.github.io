import { Link } from 'react-router';
import {
  Sparkles,
  Palette,
  ArrowRight,
  Layers,
  Code2,
  Paintbrush,
  ExternalLink,
  Users,
  Bird,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import kirisNoirImage from 'figma:asset/fc79bdcc28affc19601876df1fcbe6c2d9b6da23.png';

/* ─────────────────────────────────────────────
   PALETTE
   ───────────────────────────────────────────── */
const P = {
  coral: '#e0614a',
  coralDark: '#c4503c',
  coralLight: '#f4a99b',
  teal: '#1ba8a0',
  tealDark: '#158a83',
  gold: '#e8b400',
  lime: '#8bc34a',
  ink: '#0b0b0b',
  inkSoft: '#161616',
  inkMid: '#1e1e1e',
  muted: '#7a7a7a',
  mutedLight: '#999',
  white: '#ffffff',
  border: 'rgba(255,255,255,0.06)',
  borderLight: 'rgba(255,255,255,0.1)',
};

const lato = "'Lato', sans-serif";
const outfit = "'Outfit', sans-serif";

/* ─────────────────────────────────────────────
   PROJECT DATA
   ───────────────────────────────────────────── */
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  image: string;
  status: 'Live' | 'In Progress' | 'Coming Soon';
  externalUrl?: string;
}

const projects: Project[] = [
  {
    id: 'design-system-theming',
    title: 'AI Vibe Design Systems',
    subtitle: 'Theming Tailwind',
    description:
      'Exploring how AI-assisted workflows can accelerate the creation of robust, token-driven design systems in Tailwind CSS v4 — from color palettes and typography scales to component variants and dark mode, all generated through conversational prompting and iterative refinement.',
    tags: ['Tailwind v4', 'Design Tokens', 'AI Prompting', 'CSS Variables', 'Component Theming'],
    accent: P.coral,
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1732017968601-f46d9badf229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsd2luZCUyMENTUyUyMGRlc2lnbiUyMHN5c3RlbSUyMGNvZGUlMjBlZGl0b3J8ZW58MXx8fHwxNzczNjg1NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'In Progress',
  },
  {
    id: 'patient-coalition',
    title: 'The Patient Coalition',
    subtitle: 'Coming Soon',
    description:
      'More details to come. A vibe-coded project exploring new approaches to patient advocacy and engagement.',
    tags: ['Healthcare', 'Patient Advocacy', 'AI-Assisted', 'Vibe Coded'],
    accent: P.teal,
    icon: Users,
    image: 'https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwaGVhbHRoY2FyZSUyMGRpZ2l0YWwlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NzM2ODc1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'Coming Soon',
  },
  {
    id: 'kirisnoir-breeding',
    title: 'KirisNoir Breeding',
    subtitle: 'Figma Sites App',
    description:
      'A vibe-coded Figma Sites application for a boutique cat breeding program — showcasing brand identity, kitten galleries, and breeder information built entirely through AI-assisted design and development.',
    tags: ['Figma Sites', 'Branding', 'Vibe Coded', 'AI-Assisted'],
    accent: P.gold,
    icon: Bird,
    image: kirisNoirImage,
    status: 'Live',
    externalUrl: 'https://kirisnoirbreeding.figma.site',
  },
];

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: P.ink,
        padding: 'clamp(5rem, 10vw, 7rem) 0 clamp(3rem, 6vw, 4.5rem)',
      }}
    >
      {/* grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* coral glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-30%',
          right: '-10%',
          width: '60%',
          height: '120%',
          background: `radial-gradient(ellipse at center, ${P.coral}12 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[72rem] px-8">
        {/* label */}
        <div
          className="mb-5 inline-flex items-center gap-2"
          style={{
            fontFamily: outfit,
            fontWeight: 600,
            fontSize: '0.6875rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase' as const,
            color: P.coral,
          }}
        >
          <Sparkles size={14} />
          AI Vibe Projects
        </div>

        {/* heading */}
        <h1
          style={{
            fontFamily: lato,
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            lineHeight: 1.1,
            color: P.white,
            letterSpacing: '-0.02em',
            maxWidth: '42rem',
            marginBottom: '1.25rem',
          }}
        >
          Building with AI
        </h1>

        {/* description */}
        <p
          style={{
            fontFamily: lato,
            fontWeight: 400,
            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
            lineHeight: 1.7,
            color: P.mutedLight,
            maxWidth: '38rem',
            marginBottom: '2rem',
          }}
        >
          Hands-on experiments in AI-assisted design and development — from generating
          design systems with conversational prompting to building full production
          interfaces through vibe coding. Each project documents what actually works,
          what breaks, and what I learned.
        </p>

        {/* stat pills */}
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Vibe Coded', value: 'This Portfolio', accent: P.coral },
            { label: 'Focus', value: 'Design × AI', accent: P.teal },
            { label: 'Stack', value: 'React + Tailwind', accent: P.gold },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2"
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${s.accent}30`,
              }}
            >
              <span
                style={{
                  fontFamily: lato,
                  fontWeight: 900,
                  fontSize: '0.875rem',
                  color: s.accent,
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: outfit,
                  fontSize: '0.625rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase' as const,
                  color: P.muted,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROJECT CARD
   ───────────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const statusColor =
    project.status === 'Live'
      ? P.lime
      : project.status === 'In Progress'
        ? P.gold
        : P.muted;

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        background: P.inkSoft,
        borderRadius: 12,
        border: `1px solid ${P.border}`,
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.accent}40`;
        e.currentTarget.style.boxShadow = `0 8px 40px ${project.accent}10`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = P.border;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* image + overlay */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{
            transition: 'transform 0.5s ease, filter 0.5s ease',
            filter: 'brightness(0.7)',
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
            (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
            (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.8)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
            (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.7)';
          }}
        />

        {/* status badge */}
        <div
          className="absolute top-4 right-4"
          style={{
            fontFamily: outfit,
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            color: statusColor,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            padding: '0.3rem 0.75rem',
            borderRadius: 6,
            border: `1px solid ${statusColor}30`,
          }}
        >
          <span
            className="inline-block mr-1.5"
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: statusColor,
              verticalAlign: 'middle',
            }}
          />
          {project.status}
        </div>

        {/* gradient overlay */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${P.inkSoft}, transparent)`,
          }}
        />
      </div>

      {/* content */}
      <div className="p-6">
        {/* icon + title row */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="shrink-0 flex items-center justify-center"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: `${project.accent}18`,
              border: `1px solid ${project.accent}30`,
            }}
          >
            <Icon size={20} style={{ color: project.accent }} />
          </div>
          <div className="min-w-0">
            <h3
              style={{
                fontFamily: lato,
                fontWeight: 900,
                fontSize: '1.125rem',
                lineHeight: 1.25,
                color: P.white,
                marginBottom: 2,
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                fontFamily: outfit,
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: project.accent,
                fontWeight: 600,
              }}
            >
              {project.subtitle}
            </span>
          </div>
        </div>

        {/* description */}
        <p
          style={{
            fontFamily: lato,
            fontSize: '0.875rem',
            lineHeight: 1.7,
            color: P.mutedLight,
            marginBottom: '1.25rem',
          }}
        >
          {project.description}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center"
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0.24px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: `${project.accent}1e`,
                color: project.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA row */}
        {project.externalUrl ? (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 no-underline"
            style={{
              fontFamily: outfit,
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase' as const,
              color: project.accent,
              cursor: 'pointer',
            }}
          >
            View Project
            <ExternalLink
              size={13}
              style={{ transition: 'transform 0.2s' }}
              className="group-hover:translate-x-1"
            />
          </a>
        ) : (
          <div
            className="flex items-center gap-2"
            style={{
              fontFamily: outfit,
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase' as const,
              color: project.accent,
              cursor: 'default',
            }}
          >
            View Project
            <ArrowRight
              size={13}
              style={{ transition: 'transform 0.2s' }}
              className="group-hover:translate-x-1"
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WHAT I'M EXPLORING — secondary content
   ───────────────────────────────────────────── */
const explorations = [
  {
    icon: Layers,
    title: 'Token-first architecture',
    desc: 'Generating CSS custom property systems that scale from a single prompt.',
  },
  {
    icon: Code2,
    title: 'Vibe coding workflows',
    desc: 'Documenting the prompting patterns that produce production-quality code.',
  },
  {
    icon: Paintbrush,
    title: 'Design–dev convergence',
    desc: 'Collapsing the gap between Figma intent and shipped pixels using AI.',
  },
];

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */
export function AIVibeProjectsPage() {
  return (
    <div style={{ background: P.ink, minHeight: '100vh' }}>
      <Hero />

      {/* ── Projects grid ── */}
      <section
        className="mx-auto max-w-[72rem] px-8"
        style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {/* section label */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="inline-flex items-center justify-center shrink-0"
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              fontFamily: lato,
              fontWeight: 900,
              fontSize: '0.8125rem',
              background: 'rgba(255,255,255,0.15)',
              color: P.white,
            }}
          >
            01
          </span>
          <h2
            style={{
              fontFamily: lato,
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              color: P.white,
              lineHeight: 1.2,
            }}
          >
            Projects
          </h2>
        </div>

        {/* grid — two-up on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}

          {/* placeholder "coming soon" card */}
          <div
            className="flex flex-col items-center justify-center text-center"
            style={{
              background: 'rgba(255,255,255,0.02)',
              borderRadius: 12,
              border: '1px dashed rgba(255,255,255,0.1)',
              padding: '3rem 2rem',
              minHeight: 320,
            }}
          >
            <Sparkles size={28} style={{ color: P.muted, marginBottom: 12 }} />
            <span
              style={{
                fontFamily: lato,
                fontWeight: 900,
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: 6,
              }}
            >
              More projects coming
            </span>
            <span
              style={{
                fontFamily: outfit,
                fontSize: '0.75rem',
                color: P.muted,
                maxWidth: 240,
                lineHeight: 1.5,
              }}
            >
              New AI vibe experiments are always in progress. Check back soon.
            </span>
          </div>
        </div>
      </section>

      {/* ── What I'm Exploring ── */}
      <section
        className="mx-auto max-w-[72rem] px-8"
        style={{ paddingTop: 'clamp(1rem, 3vw, 2rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}
      >
        <div className="flex items-center gap-3 mb-10">
          <span
            className="inline-flex items-center justify-center shrink-0"
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              fontFamily: lato,
              fontWeight: 900,
              fontSize: '0.8125rem',
              background: 'rgba(255,255,255,0.15)',
              color: P.white,
            }}
          >
            02
          </span>
          <h2
            style={{
              fontFamily: lato,
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              color: P.white,
              lineHeight: 1.2,
            }}
          >
            What I'm Exploring
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {explorations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 10,
                  border: `1px solid ${P.border}`,
                  padding: '1.75rem',
                  transition: 'border-color 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${P.teal}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = P.border;
                }}
              >
                <Icon
                  size={20}
                  style={{ color: P.teal, marginBottom: 14 }}
                />
                <h4
                  style={{
                    fontFamily: lato,
                    fontWeight: 900,
                    fontSize: '0.9375rem',
                    color: P.white,
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: lato,
                    fontSize: '0.8125rem',
                    lineHeight: 1.65,
                    color: P.mutedLight,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}