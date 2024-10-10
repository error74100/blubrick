import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Moxen House',
  description: 'Moxen House를 소개합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="App">
          <Header />

          <main className="main">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
