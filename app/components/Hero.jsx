import Link from 'next/link';
import { Button } from './Button';

export function Hero({ lang, title, subtitle, ctaText, ctaLink, image }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container-custom text-center text-cream">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-cream/90 font-light">
          {subtitle}
        </p>
        <Button href={ctaLink} variant="primary" size="large">
          {ctaText}
        </Button>
      </div>
    </section>
  );
}