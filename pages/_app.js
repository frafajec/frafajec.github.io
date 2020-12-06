import React from 'react';

import Layout from '../components/Layout';
import '../styles/index.css';

// ----------------------------------------
export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component key={router.route} {...pageProps} />
    </Layout>
  );
}
