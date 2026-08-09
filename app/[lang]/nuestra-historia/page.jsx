import { getDictionary } from '@/app/lib/dictionary';
import { SectionTitle } from '@/app/components/SectionTitle';

export default async function NuestraHistoriaPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <section className="section-padding container-custom">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title={dict.nuestraHistoria.title}
          subtitle={dict.nuestraHistoria.subtitle}
          align="center"
        />

        <div className="mt-12 space-y-6 text-lg leading-relaxed">
          <p>{dict.nuestraHistoria.content_1}</p>
          <p>{dict.nuestraHistoria.content_2}</p>
          <p>{dict.nuestraHistoria.content_3}</p>
          <p>{dict.nuestraHistoria.content_4}</p>
        </div>

        <div className="mt-12 bg-brown/5 p-8 rounded-lg border-l-4 border-brown">
          <h3 className="text-2xl font-serif font-bold text-brown mb-4">
            {dict.nuestraHistoria.quote_title}
          </h3>
          <p className="text-lg italic font-serif text-brown">
            "{dict.nuestraHistoria.quote}"
          </p>
        </div>
      </div>
    </section>
  );
}