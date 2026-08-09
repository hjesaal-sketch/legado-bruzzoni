import { getDictionary } from '../../lib/dictionary';
import { SectionTitle } from '../../components/SectionTitle';
import { Button } from '../../components/Button';

export default async function LaHaciendaPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="section-padding container-custom">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title={dict.laHacienda.title}
            subtitle={dict.laHacienda.subtitle}
            align="center"
          />
          
          <div className="mt-12 space-y-8 text-lg leading-relaxed">
            <p>{dict.laHacienda.content_1}</p>
            <p>{dict.laHacienda.content_2}</p>
            <p>{dict.laHacienda.content_3}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-cream p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-brown mb-3">San José (Bucaral)</h3>
              <p className="text-silver mb-2">{dict.laHacienda.sanJose_area}</p>
              <p className="text-silver mb-6">{dict.laHacienda.sanJose_desc}</p>
              <Button href={`/${lang}/san-jose`} variant="outline" size="small">
                {dict.common.read_more}
              </Button>
            </div>

            <div className="bg-cream p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-brown mb-3">La Siberia</h3>
              <p className="text-silver mb-2">{dict.laHacienda.laSiberia_area}</p>
              <p className="text-silver mb-6">{dict.laHacienda.laSiberia_desc}</p>
              <Button href={`/${lang}/la-siberia`} variant="outline" size="small">
                {dict.common.read_more}
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href={`/${lang}/nuestra-historia`} variant="primary">
              {dict.laHacienda.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}