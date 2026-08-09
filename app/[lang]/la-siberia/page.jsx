import { getDictionary } from '@/app/lib/dictionary';
import { SectionTitle } from '@/app/components/SectionTitle';
import { Button } from '@/app/components/Button';

export default async function LaSiberiaPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <section className="section-padding container-custom">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title={dict.laSiberia.title}
          subtitle={dict.laSiberia.subtitle}
          align="center"
        />

        <div className="mt-12 space-y-6 text-lg leading-relaxed">
          <p>{dict.laSiberia.content_1}</p>
          <p>{dict.laSiberia.content_2}</p>
          <p>{dict.laSiberia.content_3}</p>
        </div>

        <div className="mt-8">
          <Button href={`/${lang}/la-hacienda`} variant="primary">
            {dict.common.back}
          </Button>
        </div>
      </div>
    </section>
  );
}