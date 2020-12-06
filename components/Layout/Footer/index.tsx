import React from 'react';

// ----------------------------------------
type FooterNavItemProps = {
  readonly name: string;
  readonly url: string;
};
const FooterNavItem = ({ name, url }: FooterNavItemProps) => (
  <div className="inline-block uppercase inline-block font-medium text-xs p-3.5 transition-colors hover:text-blueish">
    <a href={url}>{name}</a>
  </div>
);

// ----------------------------------------
const Footer = () => (
  <footer className="py-4 mb-10">
    <div className="lg:w-full max-w-5xl mx-4 sm:mx-8 lg:mx-auto md:px-8 flex justify-between flex-col items-center lg:flex-row">
      {/* left */}
      <div className="m-3 flex items-center">
        <FooterNavItem name="To top" url="/#top" />
        <FooterNavItem name="Contact" url="/#contact" />
        <FooterNavItem name="Profile" url="/#profile" />
      </div>
      {/* right */}
      <div className="m-3 flex items-center md:justify-end">
        © {new Date().getFullYear()}, made with
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 mx-1 text-blueish"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
        by{' '}
        <a
          className="no-underline text-blueish ml-1"
          href="https://linkedin.com/in/frafajec"
          target="_blank"
          rel="external noreferrer"
        >
          Filip Rafajec
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
