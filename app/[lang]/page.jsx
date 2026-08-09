import { getDictionary } from '../../../lib/dictionary';
import { Hero } from '../../../components/Hero';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { ImageCard } from '../../../components/ImageCard';

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  const features = [
    {
      title: dict.home.features.cafe.title,
      description: dict.home.features.cafe.description,
      image: '/images/cafe-cultivo.jpg',
      badge: null,
    },
    {
      title: dict.home.features.naturaleza.title,
      description: dict.home.features.naturaleza.description,
      image: '/images/hero-bg.jpg',
      badge: null,
    },
    {
      title: dict.home.features.historia.title,
      description: dict.home.features.historia.description,
      image: '/images/historia-familia.jpg',
      badge: null,
    },
    {
      title: dict.home.features.experiencias.title,
      description: dict.home.features.experiencias.description,
      image: '/images/turismo-senderismo.jpg',
      badge: dict.common.badge_development,
    },
  ];

  return (
    <>
      <Hero
        lang={lang}
        title={dict.hero.title}
        subtitle={dict.hero.subtitle}
        ctaText={dict.hero.cta}
        ctaLink={`/${lang}/la-hacienda`}
        image="/images/hero-bg.jpg"
      />

      <section className="section-padding container-custom">
        <SectionTitle 
          title={dict.home.features.title}
          subtitle={dict.home.features.subtitle}
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <ImageCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            href={`/${lang}/la-hacienda`}
            variant="primary"
          >
            {dict.home.cta}
          </Button>
        </div>
      </section>

      <section className="bg-brown/5 py-16">
        <div className="container-custom text-center">
          <blockquote className="text-xl md:text-2xl italic font-serif text-brown max-w-3xl mx-auto">
            "{dict.home.quote}"
          </blockquote>
          <p className="mt-4 text-silver font-semibold">— {dict.home.quote_author}</p>
        </div>
      </section>
    </>
  );
}