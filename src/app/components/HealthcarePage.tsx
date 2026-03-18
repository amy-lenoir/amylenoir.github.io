import { useState } from 'react';
import { Link } from 'react-router';
import {
  Heart,
  Zap,
  Scan,
  Ribbon,
  Video,
  Home,
  FlaskConical,
  ShieldCheck,
  DollarSign,
  BrainCircuit,
  Building2,
  GraduationCap,
  Rocket,
  Landmark,
  Monitor,
  Globe,
  Briefcase,
  Stethoscope,
  Bone,
  Wifi,
  TestTubeDiagonal,
  Lightbulb,
  Quote,
  ArrowRight,
  ClipboardList,
  Activity,
  ChevronRight,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   PALETTE — warm coral editorial system
   ───────────────────────────────────────────── */
const P = {
  coral: '#e0614a',
  coralDark: '#c4503c',
  coralLight: '#f4a99b',
  coralPale: '#fdf0ed',
  coralSoft: '#fbe5e0',
  teal: '#1ba8a0',
  tealPale: '#e6f7f6',
  gold: '#e8b400',
  goldPale: '#fdf8e6',
  lime: '#8bc34a',
  limePale: '#f0f8e6',
  ink: '#1e1e1e',
  inkSoft: '#3d3d3d',
  inkMuted: '#777',
  white: '#ffffff',
  cream: '#faf8f6',
  warmGray: '#f5f2ef',
  border: 'rgba(0,0,0,0.08)',
  borderDark: 'rgba(0,0,0,0.12)',
};

/* ────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const subspecialties = [
  {
    icon: Heart,
    name: 'Cardiology',
    context: 'Presbyterian Health Services',
    experience:
      'Service design, patient access, referral workflows, CAHPS improvement, patient follow-up workflows, subspecialty triage, referral coordination, provider access',
    accent: P.coral,
  },
  {
    icon: Zap,
    name: 'Primary Care',
    context: 'Presbyterian Health Services',
    experience: 'Referral coordination, provider access, Medicare Clinics',
    accent: P.coral,
  },
  {
    icon: Scan,
    name: 'Radiology',
    context: 'Radiology Partners',
    experience: 'AI integration, report generation, provider-facing tools',
    accent: P.teal,
  },
  {
    icon: Ribbon,
    name: 'Oncology',
    context: 'Mayo Clinic',
    experience: 'Cancer center website redesign, patient platform',
    accent: P.teal,
  },
  {
    icon: Bone,
    name: 'Orthopedics & Rehabilitation',
    context: 'Presbyterian Health Services',
    experience: 'Outpatient clinic operations, health tech piloting',
    accent: P.gold,
  },
  {
    icon: Video,
    name: 'Telehealth (Low-Acuity)',
    context: 'Providence St. Joseph Health',
    experience: 'Virtual care product design, scheduling',
    accent: P.lime,
  },
  {
    icon: Home,
    name: 'Home Health',
    context: 'Startup',
    experience: 'Zero-to-one product development',
    accent: P.lime,
  },
  {
    icon: FlaskConical,
    name: 'Pharma & Clinical Trials',
    context: 'Mayo Clinic',
    experience:
      'Digital biomarker (grip strength dynamometer), clinical trial device management',
    accent: P.teal,
  },
  {
    icon: ShieldCheck,
    name: 'Medicare / Medicaid',
    context: 'Presbyterian Health Services',
    experience: 'Payer-side CX, pharmacy cost analysis, scheduling, provider panels',
    accent: P.coral,
  },
  {
    icon: DollarSign,
    name: 'Revenue Cycle',
    context: 'Lumedic',
    experience: 'Blockchain exploration for payer systems, service design for denials',
    accent: P.gold,
  },
  {
    icon: BrainCircuit,
    name: 'AI in Healthcare',
    context: 'Radiology Partners',
    experience:
      'AI model evaluation, clinician-in-the-loop workflows, data quality assessment',
    accent: P.teal,
  },
  {
    icon: ClipboardList,
    name: 'Clinical Research',
    context: 'Mayo Clinic',
    experience:
      'Service design for clinical trial workflows, digital product strategy (Research Shield), end-to-end study startup experience design',
    accent: P.gold,
  },
];

const orgTypes = [
  { icon: Building2, name: 'Large Health Systems', detail: 'Mayo Clinic, Presbyterian Health Services', accent: P.coral },
  { icon: GraduationCap, name: 'Academic Medical Centers', detail: 'Mayo Clinic', accent: P.teal },
  { icon: Rocket, name: 'Health Tech Startups', detail: 'iHealthHome, Lumedic', accent: P.gold },
  { icon: Landmark, name: 'Payer Organizations', detail: 'Presbyterian Health Plan, Lumedic', accent: P.lime },
  { icon: Monitor, name: 'Provider-Facing SaaS', detail: 'AI-driven radiology tools', accent: P.teal },
  { icon: Globe, name: 'B2C Health Platforms', detail: 'Mayo Clinic Patient Platform, Providence Patient App', accent: P.coral },
  { icon: Briefcase, name: 'Consulting / Digital Transformation', detail: 'Providence St. Joseph Health (blockchain & RevCycle), TRA Radiology, Mayo Clinic', accent: P.gold },
];

const differentiators = [
  {
    title: 'Deep domain research',
    desc: "I go deep into each subspecialty's problem space, earning trust from C-level clinicians and department directors who seek my guidance on complex operational and product challenges.",
  },
  {
    title: 'Clinician-in-the-loop AI',
    desc: 'Experience evaluating AI model readiness, training data quality (including population-specific gaps), and provider adoption challenges.',
  },
  {
    title: 'Service design for complex systems',
    desc: 'Mapping cross-functional workflows in highly siloed, matrixed organizations.',
  },
  {
    title: 'HIPAA & authenticated experiences',
    desc: 'Deep understanding of compliance requirements and their impact on product design and analytics.',
  },
  {
    title: 'Healthcare digital maturity assessment',
    desc: "Ability to evaluate an organization's readiness for digital transformation and set realistic expectations.",
  },
];

const settings = [
  { icon: Stethoscope, label: 'Inpatient & outpatient clinics' },
  { icon: Activity, label: 'Ambulatory care' },
  { icon: Wifi, label: 'Remote patient monitoring' },
  { icon: Video, label: 'Virtual / Telehealth visits' },
  { icon: TestTubeDiagonal, label: 'Clinical trials' },
  { icon: ShieldCheck, label: 'Health plan / payer operations' },
];

const heroPills = [
  'Cardiology',
  'Primary Care',
  'Radiology',
  'Oncology',
  'Orthopedics',
  'Telehealth',
  'Clinical Trials',
  'Medicare/Medicaid',
  'AI in Healthcare',
  'Clinical Research',
  'Rev Cycle',
  'Payer Side',
  'Provider',
  'Scheduling',
  'Referrals',
];

/* ─────────────────────────────────────────────
   SHARED — section heading with numbered badge
   ───────────────────────────────────────────── */
function SectionHead({
  num,
  title,
  dark = false,
}: {
  num: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span
        className="inline-flex items-center justify-center shrink-0"
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          fontFamily: '"Lato", sans-serif',
          fontWeight: 900,
          fontSize: '0.8125rem',
          background: dark ? 'rgba(255,255,255,0.15)' : P.coral,
          color: P.white,
        }}
      >
        {num}
      </span>
      <h2
        style={{
          fontFamily: '"Lato", sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase' as const,
          color: dark ? P.white : P.ink,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ══════════════════════════════════════════════
   HERO — bold coral, Figma-inspired
   ══════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: P.coral, padding: 'clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,6rem)' }}
    >
      {/* subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '150px 150px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[72rem] px-8">
        {/* label */}
        <div
          className="mb-6"
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 400,
            fontSize: '0.625rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          Domain Expertise
        </div>

        {/* title */}
        <h1
          className="mb-8"
          style={{
            fontFamily: '"Lato", sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 3.75rem)',
            lineHeight: 0.92,
            letterSpacing: '0.01em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '44rem',
          }}
        >
          Healthcare
          <br />
          Experience
        </h1>

        {/* description */}
        <p
          className="mb-10"
          style={{
            fontFamily: '"Lato", sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '36rem',
          }}
        >
          With nearly two decades in healthcare product and experience design, this page
          captures the breadth of clinical domains, organizational types, and healthcare
          subspecialties where I have hands-on experience.
        </p>

        {/* big stats */}
        <div className="flex gap-12 flex-wrap mb-12">
          {[
            { value: '12', label: 'Subspecialties' },
            { value: '7', label: 'Org Types' },
            { value: '~20', label: 'Years' },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: '"Lato", sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(3rem, 5vw, 4rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: P.white,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 500,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: 6,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* pills */}
        <div className="flex flex-wrap gap-2">
          {heroPills.map((pill) => (
            <span
              key={pill}
              style={{
                fontFamily: '"Lato", sans-serif',
                fontWeight: 400,
                fontSize: '0.75rem',
                lineHeight: '1.125rem',
                color: P.white,
                background: 'rgba(255,255,255,0.15)',
                borderRadius: 20,
                padding: '5px 12px',
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   KEY DIFFERENTIATORS
   ══════════════════════════════════════════════ */
function DifferentiatorsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: P.teal, padding: 'clamp(3rem,6vw,5rem) 0' }}
    >
      {/* subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '150px 150px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[72rem] px-8">
        <SectionHead num="1" title="Key Differentiators" dark />

        {/* Callout */}
        <div
          className="mb-10 flex items-start gap-3"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderLeft: '4px solid rgba(255,255,255,0.4)',
            borderRadius: '0 10px 10px 0',
            padding: '1.5rem 1.75rem',
          }}
        >
          <Lightbulb
            size={20}
            style={{ color: P.gold, marginTop: 2, flexShrink: 0 }}
          />
          <div>
            <div
              style={{
                fontFamily: '"Lato", sans-serif',
                fontWeight: 900,
                fontSize: '0.9375rem',
                color: P.white,
                marginBottom: 4,
              }}
            >
              Clinical roots inform design instincts.
            </div>
            <div
              style={{
                fontFamily: '"Lato", sans-serif',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              I bring a rare combination of clinical operations knowledge and design
              leadership to every healthcare product challenge.
            </div>
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
          {differentiators.map((d, i) => {
            const accents = [P.coral, P.gold, P.lime, P.coralLight, P.gold];
            const c = accents[i % accents.length];
            return (
              <div
                key={i}
                className="relative overflow-hidden transition-all duration-300 cursor-default group"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: '1.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{ height: 3, background: c }}
                />
                <div
                  className="mb-2"
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 500,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.08em',
                    color: c,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  className="mb-2"
                  style={{
                    fontFamily: '"Lato", sans-serif',
                    fontWeight: 900,
                    fontSize: '0.9375rem',
                    color: P.white,
                    lineHeight: 1.35,
                  }}
                >
                  {d.title}
                </div>
                <div
                  style={{
                    fontFamily: '"Lato", sans-serif',
                    fontSize: '0.8125rem',
                    lineHeight: 1.65,
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {d.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   ORG TYPES
   ══════════════════════════════════════════════ */
function OrgTypesSection() {
  return (
    <section style={{ background: P.white, padding: 'clamp(3rem,6vw,5rem) 0' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHead num="2" title="Organization Types" />

        <div
          className="grid gap-px overflow-hidden"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            background: P.border,
            borderRadius: 10,
            border: `1px solid ${P.border}`,
          }}
        >
          {orgTypes.map((org) => {
            const Icon = org.icon;
            return (
              <div
                key={org.name}
                className="flex items-start gap-4 transition-all duration-200"
                style={{ background: P.white, padding: '1.5rem' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = P.cream)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = P.white)
                }
              >
                <div
                  className="shrink-0 flex items-center justify-center rounded-lg"
                  style={{
                    width: 38,
                    height: 38,
                    background: `${org.accent}14`,
                  }}
                >
                  <Icon size={18} style={{ color: org.accent }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: '"Lato", sans-serif',
                      fontWeight: 900,
                      fontSize: '0.875rem',
                      color: P.ink,
                      lineHeight: 1.3,
                      marginBottom: 3,
                    }}
                  >
                    {org.name}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Lato", sans-serif',
                      fontSize: '0.8125rem',
                      lineHeight: 1.5,
                      color: P.inkMuted,
                    }}
                  >
                    {org.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   HEALTHCARE SETTINGS
   ══════════════════════════════════════════════ */
function SettingsSection() {
  return (
    <section
      style={{
        background: P.coralPale,
        padding: 'clamp(3rem,6vw,5rem) 0',
        borderTop: `1px solid ${P.coralSoft}`,
        borderBottom: `1px solid ${P.coralSoft}`,
      }}
    >
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHead num="3" title="Healthcare Settings" />

        <div className="flex flex-wrap gap-3">
          {settings.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex items-center gap-2.5 transition-all duration-200"
                style={{
                  background: P.white,
                  border: `1px solid ${P.border}`,
                  borderRadius: 8,
                  padding: '0.625rem 1rem',
                  fontFamily: '"Lato", sans-serif',
                  fontSize: '0.875rem',
                  color: P.inkSoft,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = P.coral;
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(224,97,74,0.10)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = P.border;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon size={15} style={{ color: P.coral, flexShrink: 0 }} />
                {s.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SUBSPECIALTIES — expandable cards
   ══════════════════════════════════════════════ */
function SubspecialtiesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section style={{ background: P.cream, padding: 'clamp(3rem,6vw,5rem) 0' }}>
      <div className="mx-auto max-w-[72rem] px-8">
        <SectionHead num="4" title="Healthcare Subspecialties" />

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
        >
          {subspecialties.map((s) => {
            const Icon = s.icon;
            const isOpen = expanded === s.name;

            return (
              <div
                key={s.name}
                className="relative overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  background: P.white,
                  border: `1px solid ${isOpen ? s.accent : P.border}`,
                  borderRadius: 10,
                  padding: '1.5rem',
                  boxShadow: isOpen
                    ? `0 8px 24px ${s.accent}18`
                    : 'none',
                }}
                onClick={() => setExpanded(isOpen ? null : s.name)}
                onMouseEnter={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.borderColor = `${s.accent}66`;
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = `0 4px 12px ${s.accent}10`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.borderColor = P.border;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {/* accent bar */}
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: isOpen ? 3 : 2,
                    background: s.accent,
                    opacity: isOpen ? 1 : 0.4,
                    transition: 'all 0.3s',
                  }}
                />

                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 flex items-center justify-center rounded-lg"
                    style={{
                      width: 38,
                      height: 38,
                      background: `${s.accent}12`,
                      transition: 'background 0.2s',
                    }}
                  >
                    <Icon size={18} style={{ color: s.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div
                        style={{
                          fontFamily: '"Lato", sans-serif',
                          fontWeight: 900,
                          fontSize: '0.9375rem',
                          color: P.ink,
                          lineHeight: 1.3,
                        }}
                      >
                        {s.name}
                      </div>
                      <ChevronRight
                        size={14}
                        style={{
                          color: P.inkMuted,
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s',
                          flexShrink: 0,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontWeight: 500,
                        fontSize: '0.6875rem',
                        letterSpacing: '0.04em',
                        color: s.accent,
                        marginTop: 2,
                      }}
                    >
                      {s.context}
                    </div>

                    {/* expandable content */}
                    <div
                      style={{
                        maxHeight: isOpen ? 200 : 0,
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.35s ease, opacity 0.3s ease',
                        marginTop: isOpen ? 10 : 0,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: '"Lato", sans-serif',
                          fontSize: '0.8125rem',
                          lineHeight: 1.6,
                          color: P.inkMuted,
                          borderTop: `1px solid ${P.border}`,
                          paddingTop: 10,
                        }}
                      >
                        {s.experience}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   QUOTE + CTA
   ══════════════════════════════════════════════ */
function QuoteSection() {
  return (
    <section
      style={{
        background: P.coral,
        padding: 'clamp(3rem,6vw,5rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtle noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '150px 150px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[72rem] px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Quote
            size={40}
            style={{ color: 'rgba(255,255,255,0.2)', margin: '0 auto 1.5rem' }}
          />
          <div
            style={{
              fontFamily: '"Lato", sans-serif',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.92)',
              marginBottom: '1.25rem',
            }}
          >
            "When I get into a subspecialty — cardiology, radiology, whatever it is — I go
            deep. I research. I understand the problem space. That's my superpower."
          </div>
          <div
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            — Amy leNoir
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 no-underline transition-all duration-200"
            style={{
              fontFamily: '"Lato", sans-serif',
              fontWeight: 900,
              fontSize: '0.8125rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              color: P.coral,
              background: P.white,
              padding: '0.8125rem 1.75rem',
              borderRadius: 6,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = P.cream;
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = P.white;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            View Case Studies
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════ */
function PageFooter() {
  return (
    <footer
      className="text-center py-10"
      style={{
        background: P.warmGray,
        borderTop: `1px solid ${P.border}`,
      }}
    >
      <div className="mx-auto max-w-[72rem] px-8">
        <p
          className="mb-2"
          style={{
            fontSize: '0.8125rem',
            color: P.inkMuted,
            fontFamily: '"Lato", sans-serif',
          }}
        >
          Amy leNoir — Portfolio
        </p>
        <p
          style={{
            fontSize: '0.8125rem',
            color: P.inkMuted,
            fontFamily: '"Lato", sans-serif',
          }}
        >
          <Link to="/case-studies" className="no-underline" style={{ color: P.coral }}>
            Case Studies
          </Link>
          {' '}&middot;{' '}
          <Link to="/healthcare" className="no-underline" style={{ color: P.coral }}>
            Healthcare
          </Link>
          {' '}&middot;{' '}
          <a href="#" className="no-underline" style={{ color: P.coral }}>
            About
          </a>
          {' '}&middot;{' '}
          <a href="#" className="no-underline" style={{ color: P.coral }}>
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   PAGE EXPORT
   ══════════════════════════════════════════════ */
export function HealthcarePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: '"Lato", sans-serif',
        background: P.cream,
        color: P.ink,
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <Hero />
      <DifferentiatorsSection />
      <OrgTypesSection />
      <SettingsSection />
      <SubspecialtiesSection />
      <QuoteSection />
      <PageFooter />
    </div>
  );
}