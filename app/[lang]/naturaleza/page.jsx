import { getDictionary } from '@/app/lib/dictionary';
import { SectionTitle } from '@/app/components/SectionTitle';

export default async function NaturalezaPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <section className="section-padding container-custom">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title={dict.naturaleza.title}
          subtitle={dict.naturaleza.subtitle}
          align="center"
        />

        <div className="mt-12 space-y-6 text-lg leading-relaxed">
          <p>{dict.naturaleza.content_1}</p>
          <p>{dict.naturaleza.content_2}</p>
        </div>

        <div className="mt-8 bg-brown/5 p-8 rounded-lg border-l-4 border-brown">
          <h3 className="text-2xl font-serif font-bold text-brown mb-3">
            {dict.naturaleza.principle_title}
          </h3>
          <p className="text-xl italic font-serif text-brown">
            "{dict.naturaleza.principle}"
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {dict.naturaleza.values.map((value, index) => (
            <div key={index} className="bg-cream p-4 rounded-lg">
              <span className="text-2xl">🌱</span>
              <p className="text-sm font-semibold mt-2 text-brown">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}