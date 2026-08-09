import { getDictionary } from '../../lib/dictionary';
import { SectionTitle } from '../../components/SectionTitle';

export default async function ElProyectoPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <section className="section-padding container-custom">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title={dict.elProyecto.title}
          subtitle={dict.elProyecto.subtitle}
          align="center"
        />

        <div className="mt-12 space-y-8">
          <div className="space-y-4 text-lg leading-relaxed">
            <p>{dict.elProyecto.content_1}</p>
            <p>{dict.elProyecto.content_2}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-cream p-6 rounded-lg text-center">
              <span className="text-4xl font-serif font-bold text-brown">01</span>
              <h4 className="text-xl font-bold mt-2">{dict.elProyecto.pillar_1}</h4>
              <p className="text-silver text-sm mt-2">{dict.elProyecto.pillar_1_desc}</p>
            </div>
            <div className="bg-cream p-6 rounded-lg text-center">
              <span className="text-4xl font-serif font-bold text-brown">02</span>
              <h4 className="text-xl font-bold mt-2">{dict.elProyecto.pillar_2}</h4>
              <p className="text-silver text-sm mt-2">{dict.elProyecto.pillar_2_desc}</p>
            </div>
            <div className="bg-cream p-6 rounded-lg text-center">
              <span className="text-4xl font-serif font-bold text-brown">03</span>
              <h4 className="text-xl font-bold mt-2">{dict.elProyecto.pillar_3}</h4>
              <p className="text-silver text-sm mt-2">{dict.elProyecto.pillar_3_desc}</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-brown/5 rounded-lg border-l-4 border-brown">
            <p className="text-lg italic font-serif text-brown">
              "{dict.elProyecto.quote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}