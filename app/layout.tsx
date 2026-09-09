import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import './variants.css';
import './versao-c.css';
import './copy-revisions.css';
import { VariantSwitch } from '@/components/design/variant-switch';
const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(
    'https://ifh-desafio-nova-carreira.felipehurta283171.chatgpt.site',
  ),
  title: 'Desafio Perícia Médica Lucrativa | Instituto Felipe Hurtado',
  description:
    'Cinco noites ao vivo para entender a perícia particular e construir uma nova perspectiva para sua carreira médica. 04 a 08 de outubro, às 20h.',
  icons: { icon: '/favicon.svg' },
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={geist.variable}>
        <noscript>
          <style>{`.blur-fade{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
        <VariantSwitch />
        {children}
      </body>
    </html>
  );
}
