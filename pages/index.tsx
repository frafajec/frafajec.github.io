import React from 'react';
import Head from 'next/head';

import Hr from '../components/Hr';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Experience from '../components/Experience';

// ----------------------------------------
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Filip Rafajec | Personal site</title>
        <meta name="description" content="Welcome to my personal page!"></meta>
      </Head>

      <Hero />
      <div className="bg-accent max-w-5xl relative rounded-md -mt-14 mx-2 xs:mx-4 sm:mx-8 lg:mx-auto lg:pt-9 pb-14">
        <Profile />
        <Hr />
        <Contact />
        <Hr />
        <Experience />
      </div>
    </>
  );
}
