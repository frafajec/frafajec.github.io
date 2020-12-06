import React from 'react';
import cn from 'classnames';

// ----------------------------------------
interface IContactLink {
  name: string;
  url: string;
  isNav?: boolean;
  children: React.ReactNode;
}
function ContactLink({ name = '', url = '', isNav = false, children }: IContactLink) {
  return (
    <a
      className="inline-flex items-center no-underline text-white transition-colors ml-1 p-3.5 hover:text-blueish"
      href={url}
      target="_blank"
      rel="external noreferrer"
      aria-label={name}
    >
      {children}
      <span className={cn({ ['hidden md:block']: isNav })}>{name}</span>
    </a>
  );
}

// ----------------------------------------
export default function ContactRow({ isNav = false }) {
  return (
    <div
      className={cn('flex justify-evenly items-center', {
        ['flex-row']: isNav,
        ['flex-col sm:flex-row']: !isNav,
      })}
    >
      <ContactLink
        isNav={isNav}
        name="filip.rafajec@gmail.com"
        url="mailto:filip.rafajec@gmail.com"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </ContactLink>
      <ContactLink isNav={isNav} name="in/frafajec" url="https://linkedin.com/in/frafajec">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </ContactLink>
      <ContactLink isNav={isNav} name="frafajec" url="https://github.com/frafajec">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
        </svg>
      </ContactLink>
    </div>
  );
}
