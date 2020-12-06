import React from 'react';

// ----------------------------------------
function ProfileDetailsRow({ title = '', text = '' }) {
  return (
    <div className="mx-3">
      <strong className="text-blueish mr-1 font-light">{title}</strong>
      <span className="italic">{text}</span>
    </div>
  );
}

function ProfileDetails() {
  return (
    <div className="m-4 hidden lg:flex flex-row">
      <ProfileDetailsRow title="Name" text="Filip Rafajec" />
      <ProfileDetailsRow title="Age" text={String(new Date().getFullYear() - 1992)} />
      <ProfileDetailsRow title="Location" text="Graz, Austria" />
    </div>
  );
}

// ----------------------------------------
export default function Profile() {
  return (
    <div id="profile" className="py-5 mt-2 lg:mt-8 px-6 lg:px-14">
      <div className="flex flex-col">
        <div className="text-center">
          <h2 className="pt-4 pb-3 text-6xl text-blueish">Profile</h2>
          <p className="mb-7 text-xl italic">”We become what we think about.” - Earl Nightingale</p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col">
          <div className="w-full inline-flex lg:flex flex-col items-center justify-center">
            <picture>
              <source srcSet={require('./pi480.jpg?webp')} type="image/webp" />
              <img
                className="object-cover h-full w-52"
                style={{ borderRadius: 150 }}
                src={require('./pi480.jpg')}
                alt="Hero"
                loading="lazy"
              />
            </picture>
            <ProfileDetails />
          </div>
          <div className="w-full inline-block xs:px-4 md:px-8 lg:px-16">
            <h3 className="mt-5 hidden lg:block text-3xl font-light text-blueish">About me</h3>
            <p className="mb-6 pt-8 text-sm font-light">
              Hi! I'm Filip and at the moment I am a leader, team coordinator, and technical
              consultant! Currently, I am focusing on my technical skills in the web domain,
              learning ins and outs of leading a company, its teams, and driving technical
              excellence forward.
              <br />
              <br />
              I am specialized in web software development with all its charms - conceptualizing,
              planning, executing, and consulting along the way.
              <br />
              <br /> My passion is leadership - driving individuals and teams to do their best in
              both personal and professional aspects. I strongly believe that path to successful
              team, project, company is the happiness and motivation of its members - with that
              anything can be achieved.
              <br />
              <br /> If I got you interested, don't hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
