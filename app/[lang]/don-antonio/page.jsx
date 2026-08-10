import { getDictionary } from '@/app/lib/dictionary';
import { SectionTitle } from '@/app/components/SectionTitle';
import { Button } from '@/app/components/Button';

export const dynamic = 'force-dynamic';
export default async function DonAntonioPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/don-antonio-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container-custom text-center text-cream">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {dict.donAntonio.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 font-light">
            {dict.donAntonio.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Biografía */}
      <section className="section-padding container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Retrato */}
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg bg-brown/5">
                <img
                  src="/images/don-antonio-retrato.png"
                  alt="Retrato de Antonio Bruzzoni Delfino"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Texto biográfico */}
            <div className="md:col-span-2 space-y-4 text-lg leading-relaxed">
              <p>
                {dict.donAntonio.biografia.content_1}
              </p>
              <p>
                {dict.donAntonio.biografia.content_2}
              </p>
              <p>
                {dict.donAntonio.biografia.content_3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Familia */}
      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title={dict.donAntonio.familia.title}
              subtitle={dict.donAntonio.familia.subtitle}
              align="center"
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/images/familia-bruzzoni.jpg"
                  alt="Familia Bruzzoni"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  {dict.donAntonio.familia.content_1}
                </p>
                <p>
                  {dict.donAntonio.familia.content_2}
                </p>
                <p className="font-serif text-brown dark:text-gold font-semibold">
                  {dict.donAntonio.familia.hijos}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legado */}
      <section className="section-padding container-custom">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title={dict.donAntonio.legado.title}
            subtitle={dict.donAntonio.legado.subtitle}
            align="center"
          />

          <div className="mt-8 space-y-4 text-lg leading-relaxed">
            <p>
              {dict.donAntonio.legado.content_1}
            </p>
            <p className="text-brown dark:text-gold font-serif text-xl italic">
              {dict.donAntonio.legado.content_2}
            </p>
          </div>

          <div className="mt-12 bg-brown/5 dark:bg-gold/5 p-8 md:p-12 rounded-lg border-l-4 border-brown dark:border-gold text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-brown dark:text-gold">
              {dict.donAntonio.legado.cita}
            </p>
            <p className="mt-3 text-silver dark:text-cream/70">— Don Antonio Bruzzoni Delfino</p>
          </div>

          <div className="text-center mt-8">
            <Button href={`/${lang}/la-hacienda`} variant="outline">
              {dict.common.back}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}