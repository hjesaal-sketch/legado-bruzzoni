import { getDictionary } from '../../lib/dictionary';
import { SectionTitle } from '../../components/SectionTitle';
import { Button } from '../../components/Button';

export default async function ContactoPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <section className="section-padding container-custom">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title={dict.contacto.title}
          subtitle={dict.contacto.subtitle}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-brown mb-2">
                  {dict.contacto.form.name}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:outline-none focus:border-brown bg-cream/50"
                  placeholder={dict.contacto.form.name_placeholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brown mb-2">
                  {dict.contacto.form.email}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:outline-none focus:border-brown bg-cream/50"
                  placeholder={dict.contacto.form.email_placeholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brown mb-2">
                  {dict.contacto.form.message}
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:outline-none focus:border-brown bg-cream/50"
                  placeholder={dict.contacto.form.message_placeholder}
                ></textarea>
              </div>
              <Button type="submit" variant="primary">
                {dict.contacto.form.submit}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-brown mb-2">
                {dict.contacto.info.title}
              </h3>
              <p className="text-silver">{dict.contacto.info.description}</p>
            </div>

            <div className="bg-cream p-6 rounded-lg">
              <h4 className="font-semibold text-brown">{dict.contacto.info.location}</h4>
              <p className="text-silver text-sm mt-1">
                {dict.contacto.info.coordinates}
              </p>
            </div>

            <div className="bg-cream p-6 rounded-lg">
              <h4 className="font-semibold text-brown">{dict.contacto.info.interests}</h4>
              <ul className="text-silver text-sm mt-2 space-y-1">
                {dict.contacto.info.interests_list.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}