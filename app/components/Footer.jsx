import Link from 'next/link';

export function Footer({ lang }) {
  return (
    <footer className="bg-black text-cream py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="/images/logo-bruzzoni.png" 
                alt="Hacienda Bruzzoni" 
                className="h-9 w-9"
              />
              <h3 className="font-serif text-2xl font-bold text-gold">
                Hacienda Bruzzoni
              </h3>
            </div>
            <p className="text-silver text-sm italic">
              Honrar el pasado. Construir el futuro.
            </p>
          </div>

          {/* Tagline */}
          <div>
            <p className="text-sm text-silver">
              Café · Naturaleza · Historia · Experiencias
            </p>
          </div>

          {/* Credits */}
          <div className="text-right">
            <p className="text-xs text-silver">
              Desarrollo: <span className="text-cream">Eos Connecting - Henry Esaá</span>
            </p>
            <p className="text-xs text-silver mt-1">
              © {new Date().getFullYear()} Hacienda Bruzzoni — Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}