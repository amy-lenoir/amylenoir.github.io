import { Link, useLocation } from 'react-router';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import LinkedinLogo from '../../imports/Linkedin';
import { caseStudies } from './caseStudyData';

/* ── Font shortcuts (match V3 hero) ── */
const lato = "'Lato', sans-serif";
const outfit = "'Outfit', sans-serif";

const MUTED = '#7a7a7a';
const CORAL = '#E0614A';

const navItems = [
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Healthcare', path: '/healthcare' },
  { label: 'AI Vibe Projects', path: '/ai-vibe-projects' },
  { label: 'About', path: '#' },
  { label: 'Resume', path: 'https://drive.google.com/file/d/130qhiOXhYgXzX87CU3hJYp58bYGUcbAm/view?usp=sharing', external: true },
];

export function Header() {
  const location = useLocation();
  const [showCaseStudiesDropdown, setShowCaseStudiesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileCaseStudiesOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCaseStudiesDropdown(false);
      }
    }

    if (showCaseStudiesDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCaseStudiesDropdown]);

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: outfit,
    fontWeight: 500,
    fontSize: '0.6875rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: active ? CORAL : MUTED,
    transition: 'color 0.2s',
  });

  return (
    <header
      className="sticky top-0 z-50 px-0 py-4"
      style={{
        background: 'rgba(11, 11, 11, 0.92)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mx-auto flex max-w-[72rem] items-center justify-between px-8">
        {/* Wordmark */}
        <Link
          to="/"
          className="no-underline"
          style={{
            fontFamily: lato,
            fontWeight: 900,
            fontSize: '1.125rem',
            letterSpacing: '0.4px',
            textTransform: 'uppercase',
            color: '#fff',
          }}
        >
          LENOIR
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center bg-transparent border-none cursor-pointer"
          style={{ color: '#fff', width: 36, height: 36 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex list-none gap-7 items-center">
          {navItems.map((item) => {
            const isActive =
              item.path !== '#' &&
              (location.pathname === item.path || location.pathname.startsWith(item.path + '/'));
            
            // Special handling for Case Studies dropdown
            if (item.label === 'Case Studies') {
              return (
                <li 
                  key={item.label}
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    onClick={() => setShowCaseStudiesDropdown(!showCaseStudiesDropdown)}
                    className="no-underline inline-flex items-center gap-1 cursor-pointer bg-transparent border-none"
                    style={linkStyle(isActive)}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = MUTED;
                    }}
                  >
                    {item.label}
                    <ChevronDown 
                      size={12} 
                      style={{ 
                        transition: 'transform 0.2s',
                        transform: showCaseStudiesDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
                      }} 
                    />
                  </button>
                  
                  {/* Dropdown */}
                  {showCaseStudiesDropdown && (
                    <div
                      className="absolute top-full left-0 mt-3"
                      style={{
                        minWidth: '360px',
                        background: 'rgba(18, 18, 18, 0.98)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '0.5rem',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                        padding: '0.5rem',
                      }}
                    >
                      {caseStudies.map((cs) => (
                        <Link
                          key={cs.id}
                          to={`/case-studies/${cs.id}`}
                          className="no-underline block"
                          onClick={() => setShowCaseStudiesDropdown(false)}
                          style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '0.375rem',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(232, 85, 58, 0.08)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <span
                              style={{
                                fontFamily: lato,
                                fontWeight: 900,
                                fontSize: '1rem',
                                color: 'rgba(255,255,255,0.15)',
                                lineHeight: 1,
                                minWidth: '24px',
                              }}
                            >
                              {cs.num}
                            </span>
                            <div className="flex-1">
                              <div
                                style={{
                                  fontFamily: lato,
                                  fontWeight: 700,
                                  fontSize: '0.875rem',
                                  color: '#fff',
                                  marginBottom: '0.25rem',
                                  lineHeight: 1.3,
                                }}
                              >
                                {cs.title}
                              </div>
                              <div
                                style={{
                                  fontFamily: outfit,
                                  fontSize: '0.6875rem',
                                  color: MUTED,
                                  lineHeight: 1.4,
                                }}
                              >
                                {cs.company}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}

                      {/* Divider */}
                      <div
                        style={{
                          height: 1,
                          background: 'rgba(255,255,255,0.06)',
                          margin: '0.375rem 0',
                        }}
                      />

                      {/* View All link */}
                      <Link
                        to="/case-studies"
                        className="no-underline block"
                        onClick={() => setShowCaseStudiesDropdown(false)}
                        style={{
                          padding: '0.625rem 1rem',
                          borderRadius: '0.375rem',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(232, 85, 58, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <span
                          style={{
                            fontFamily: outfit,
                            fontWeight: 600,
                            fontSize: '0.6875rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: CORAL,
                          }}
                        >
                          View All →
                        </span>
                      </Link>
                    </div>
                  )}
                </li>
              );
            }
            
            return (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                    style={linkStyle(false)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                  >
                    {item.label}
                  </a>
                ) : item.path === '#' ? (
                  <a
                    href="#"
                    className="no-underline"
                    style={linkStyle(false)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="no-underline"
                    style={linkStyle(isActive)}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = MUTED;
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}

          {/* LinkedIn button */}
          <li>
            <a
              href="https://www.linkedin.com/in/amylenoir/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-flex items-center justify-center"
              style={{
                width: 24,
                height: 24,
                borderRadius: 4,
                overflow: 'hidden',
                opacity: 0.7,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
            >
              <LinkedinLogo />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden"
          style={{
            background: 'rgba(11, 11, 11, 0.98)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <ul className="list-none flex flex-col px-8 py-4 gap-1">
            {navItems.map((item) => {
              const isActive =
                item.path !== '#' &&
                (location.pathname === item.path || location.pathname.startsWith(item.path + '/'));

              if (item.label === 'Case Studies') {
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => setMobileCaseStudiesOpen(!mobileCaseStudiesOpen)}
                      className="w-full flex items-center justify-between bg-transparent border-none cursor-pointer py-3"
                      style={{
                        ...linkStyle(isActive),
                        fontSize: '0.8125rem',
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        style={{
                          transition: 'transform 0.2s',
                          transform: mobileCaseStudiesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>
                    {mobileCaseStudiesOpen && (
                      <div
                        className="ml-4 mb-2 flex flex-col gap-1"
                        style={{
                          borderLeft: '1px solid rgba(255,255,255,0.08)',
                          paddingLeft: '1rem',
                        }}
                      >
                        {caseStudies.map((cs) => (
                          <Link
                            key={cs.id}
                            to={`/case-studies/${cs.id}`}
                            className="no-underline block py-2"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                              fontFamily: lato,
                              fontWeight: 600,
                              fontSize: '0.8125rem',
                              color: '#fff',
                              lineHeight: 1.4,
                            }}
                          >
                            {cs.title}
                            <span
                              className="block mt-0.5"
                              style={{
                                fontFamily: outfit,
                                fontSize: '0.6875rem',
                                color: MUTED,
                                fontWeight: 400,
                              }}
                            >
                              {cs.company}
                            </span>
                          </Link>
                        ))}
                        <Link
                          to="/case-studies"
                          className="no-underline block py-2"
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            fontFamily: outfit,
                            fontWeight: 600,
                            fontSize: '0.6875rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: CORAL,
                          }}
                        >
                          View All →
                        </Link>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline block py-3"
                      style={{ ...linkStyle(false), fontSize: '0.8125rem' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : item.path === '#' ? (
                    <a
                      href="#"
                      className="no-underline block py-3"
                      style={{ ...linkStyle(false), fontSize: '0.8125rem' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="no-underline block py-3"
                      style={{ ...linkStyle(isActive), fontSize: '0.8125rem' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}

            {/* LinkedIn */}
            <li className="pt-3 mt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <a
                href="https://www.linkedin.com/in/amylenoir/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline inline-flex items-center gap-2"
                style={{
                  fontFamily: outfit,
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: MUTED,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span style={{ width: 20, height: 20 }}><LinkedinLogo /></span>
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}