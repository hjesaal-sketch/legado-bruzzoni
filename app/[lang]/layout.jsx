import '../globals.css';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'Hacienda Bruzzoni',
  description: 'Honrar el pasado. Construir el futuro. Café, naturaleza, historia y experiencias en las montañas de Venezuela.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}