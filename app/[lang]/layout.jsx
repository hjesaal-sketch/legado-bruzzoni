import '../globals.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Hacienda Bruzzoni',
  description: 'Honrar el pasado. Construir el futuro. Café, naturaleza, historia y experiencias en las montañas de Venezuela.',
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}