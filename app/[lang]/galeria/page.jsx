import { getDictionary } from '../../../lib/dictionary';
import { SectionTitle } from '../../../components/SectionTitle';
import { ImageCard } from '../../../components/ImageCard';

export default async function GaleriaPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  const images = [
    { src: '/images/hero-bg.jpg', alt: 'Paisaje de montaña' },
    { src: '/images/historia-familia.jpg', alt: 'Historia familiar' },
    { src: '/images/cafe-cultivo.jpg', alt: 'Cultivo de café' },
    { src: '/images/san-jose.jpg', alt: 'San José' },
    { src: '/images/la-siberia.jpg', alt: 'La Siberia' },
    { src: '/images/turismo-senderismo.jpg', alt: 'Senderismo' },
    { src: '/images/turismo-aves.jpg', alt: 'Observación de aves' },
    { src: '/images/turismo-astronomia.jpg', alt: 'Astronomía' },
  ];

  return (
    <section className="section-padding container-custom">
      <SectionTitle 
        title={dict.galeria.title}
        subtitle={dict.galeria.subtitle}
        align="center"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-brown/10">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-silver text-sm">{dict.galeria.note}</p>
      </div>
    </section>
  );
}