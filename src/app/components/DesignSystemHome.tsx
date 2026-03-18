import { HeroSection } from './HeroSection';
import { ColorPalette } from './ColorPalette';
import { TypographySection } from './Typography';
import { ComponentsSection } from './ComponentsSection';
import { AccentSections } from './AccentSections';
import { LightModeSection } from './LightModeSection';
import { Footer } from './Footer';

export function DesignSystemHome() {
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
      <HeroSection />
      <ColorPalette />
      <TypographySection />
      <ComponentsSection />
      <AccentSections />
      <LightModeSection />
      <Footer />
    </div>
  );
}
