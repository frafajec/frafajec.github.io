import React from 'react';

import ContactRow from './ContactRow';

// ----------------------------------------
export default function Contact() {
  return (
    <div id="contact" className="py-5 mt-2 lg:mt-8 px-6 lg:px-14">
      <div className="text-center">
        <h2 className="pt-4 pb-3 text-6xl text-blueish">Contact</h2>
        <p className="mb-7 text-xl italic">
          “Failure is the condiment that gives success its flavor.” ― Truman Capote
        </p>
      </div>
      <ContactRow />
    </div>
  );
}
