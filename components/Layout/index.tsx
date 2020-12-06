import React, { ReactNode } from 'react';
import Head from 'next/head';

import Nav from './Nav';
import Footer from './Footer';

// ----------------------------------------
type LayoutProps = { children?: ReactNode };

// ----------------------------------------
export default function Layout({ children }: LayoutProps) {
  return (
    <div className={'min-h-screen bg-mat flex flex-col'}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
