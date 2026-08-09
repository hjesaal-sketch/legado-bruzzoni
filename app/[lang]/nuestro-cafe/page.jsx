import { getDictionary } from '@/app/lib/dictionary';
import { SectionTitle } from '@/app/components/SectionTitle';
import { Button } from '@/app/components/Button';
import { BadgeDevelopment } from '@/app/components/BadgeDevelopment';

export default async function NuestroCafePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="section-padding container-custom">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title={dict.nuestroCafe.title}
            subtitle={dict.nuestroCafe.subtitle}
            align="center"
          />

          <div className="mt-12 space-y-6 text-lg leading-relaxed">
            <p>{dict.nuestroCafe.content_1}</p>
            <p>{dict.nuestroCafe.content_2}</p>
          </div>

          <div className="mt-16 bg-brown/5 p-8 md:p-12 rounded-lg text-center border-2 border-brown/20">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brown mb-4">
              {dict.nuestroCafe.brand_title}
            </h3>
            <p className="text-lg text-silver max-w-2xl mx-auto">
              {dict.nuestroCafe.brand_subtitle}
            </p>
          </div>

          <div className="mt-12 bg-cream p-8 rounded-lg border-l-4 border-gold">
            <h4 className="text-3xl font-serif font-bold text-brown mb-2">
              {dict.nuestroCafe.donAntonio_title}
            </h4>
            <p className="text-lg italic font-serif text-silver">
              {dict.nuestroCafe.donAntonio_desc}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title={dict.nuestroCafe.process_title}
              align="center"
            />

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {dict.nuestroCafe.process_steps.map((step, index) => (
                <div key={index} className="bg-cream p-4 rounded-lg">
                  <span className="text-2xl font-serif font-bold text-brown">0{index + 1}</span>
                  <p className="text-sm mt-2 text-silver">{step}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <BadgeDevelopment text={dict.common.badge_development} />
              <p className="text-sm text-silver mt-2">{dict.nuestroCafe.process_note}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}