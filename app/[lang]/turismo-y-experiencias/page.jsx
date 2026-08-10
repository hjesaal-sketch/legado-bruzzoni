import { getDictionary } from '@/app/lib/dictionary';
import { SectionTitle } from '@/app/components/SectionTitle';
import { BadgeDevelopment } from '@/app/components/BadgeDevelopment';
import { ImageCard } from '@/app/components/ImageCard';

export const dynamic = 'force-dynamic';
export default async function TurismoExperienciasPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  const experiences = [
    {
      title: dict.turismo.experiences.cafe,
      description: dict.turismo.experiences.cafe_desc,
      image: '/images/cafe-cultivo.jpg',
      badge: dict.common.badge_development,
    },
    {
      title: dict.turismo.experiences.senderismo,
      description: dict.turismo.experiences.senderismo_desc,
      image: '/images/turismo-senderismo.jpg',
      badge: dict.common.badge_development,
    },
    {
      title: dict.turismo.experiences.trail,
      description: dict.turismo.experiences.trail_desc,
      image: '/images/turismo-senderismo.jpg',
      badge: dict.common.badge_development,
    },
    {
      title: dict.turismo.experiences.ciclismo,
      description: dict.turismo.experiences.ciclismo_desc,
      image: '/images/turismo-senderismo.jpg',
      badge: dict.common.badge_development,
    },
    {
      title: dict.turismo.experiences.aves,
      description: dict.turismo.experiences.aves_desc,
      image: '/images/turismo-aves.jpg',
      badge: dict.common.badge_development,
    },
    {
      title: dict.turismo.experiences.astronomia,
      description: dict.turismo.experiences.astronomia_desc,
      image: '/images/turismo-astronomia.jpg',
      badge: dict.common.badge_development,
    },
    {
      title: dict.turismo.experiences.bienestar,
      description: dict.turismo.experiences.bienestar_desc,
      image: '/images/hero-bg.jpg',
      badge: dict.common.badge_development,
    },
    {
      title: dict.turismo.experiences.historia,
      description: dict.turismo.experiences.historia_desc,
      image: '/images/historia-familia.jpg',
      badge: dict.common.badge_development,
    },
  ];

  return (
    <>
      <section className="section-padding container-custom">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title={dict.turismo.title}
            subtitle={dict.turismo.subtitle}
            align="center"
          />

          <div className="mt-8 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            <p>{dict.turismo.content}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <SectionTitle 
            title={dict.turismo.experiences_title}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {experiences.map((exp, index) => (
              <ImageCard
                key={index}
                image={exp.image}
                title={exp.title}
                description={exp.description}
                badge={exp.badge}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding container-custom">
        <div className="max-w-3xl mx-auto text-center bg-brown/5 p-8 md:p-12 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-brown mb-4">
            {dict.turismo.construction_title}
          </h3>
          <p className="text-lg text-silver">{dict.turismo.construction_desc}</p>
          <div className="mt-6">
            <BadgeDevelopment text={dict.common.badge_development} />
          </div>
        </div>
      </section>
    </>
  );
}