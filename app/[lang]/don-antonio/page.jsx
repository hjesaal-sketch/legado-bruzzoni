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
            Don Antonio Bruzzoni Delfino
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 font-light">
            De Cogoleto a las montañas de Venezuela
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
                Antonio Bruzzoni Delfino nació aproximadamente en 1854 en Cogoleto, Liguria, Italia. Fue hijo de Lázaro Bruzzoni y Benedetta Delfino.
              </p>
              <p>
                A finales del siglo XIX, con apenas dieciocho años, emprendió un viaje hacia Venezuela, dejando atrás su tierra natal para iniciar una nueva etapa de vida. Según la tradición familiar, pudo haber viajado acompañado por un hermano conocido como "Yumin", cuya historia posterior permanece como una parte pendiente de investigar dentro del relato familiar.
              </p>
              <p>
                En Venezuela, Antonio encontró una tierra donde establecerse. Con esfuerzo, disciplina y capacidad para asumir riesgos, fue desarrollando un patrimonio agrícola en las montañas de Aragua, una región donde el cultivo del café tenía profundas raíces históricas.
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
              title="Familia"
              subtitle="Junto a Tomasa Silva Silva"
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
                  Antonio compartió su vida con Tomasa Silva Silva, venezolana, hija de Juan Silva y Andrea Silva. Juntos formaron una familia marcada por el esfuerzo, la perseverancia y también por las dificultades propias de su época.
                </p>
                <p>
                  Siete de sus hijos alcanzaron edades mayores y permitieron la continuidad del apellido y la historia familiar:
                </p>
                <p className="font-serif text-brown font-semibold">
                  María Magdalena, Carmen, Modesta, Eugenio, Carlina Antonia, Teodora María y Luis.
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
            title="Un legado que trasciende"
            subtitle="Más que un patrimonio, una forma de vida"
            align="center"
          />

          <div className="mt-8 space-y-4 text-lg leading-relaxed">
            <p>
              La memoria familiar describe a Antonio como una persona trabajadora, cariñosa y dedicada a sus hijos. Entre los recuerdos transmitidos destaca la imagen de Antonio leyendo mientras sus hijos se sentaban a su alrededor para escucharlo.
            </p>
            <p className="text-brown font-serif text-xl italic">
              Porque construir un legado no consiste únicamente en levantar propiedades. Consiste también en transmitir valores.
            </p>
          </div>

          <div className="mt-12 bg-brown/5 p-8 md:p-12 rounded-lg border-l-4 border-brown text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-brown">
              "Un legado no se conserva únicamente recordándolo. Un legado se conserva actuando."
            </p>
            <p className="mt-3 text-silver">— Don Antonio Bruzzoni Delfino</p>
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