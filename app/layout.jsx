import './globals.css';

export const metadata = {
  title: 'Hacienda Bruzzoni',
  description: 'Honrar el pasado. Construir el futuro. Café, naturaleza, historia y experiencias en las montañas de Venezuela.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}