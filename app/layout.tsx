import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/all.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/base.css';
import './styles/paginas/categorias.css';
import './styles/botones.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Script from 'next/script';
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/1f5f4c1901.js"
        crossOrigin="anonymous"
      />
      <body>{children}</body>
    </html>
  );
}
