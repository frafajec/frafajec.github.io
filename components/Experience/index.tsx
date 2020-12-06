import React from 'react';

// ----------------------------------------
interface IExperienceRowProps {
  company: string;
  duration: string;
  title: string;
  location: string;
  url?: string;
  urlText?: string;
  children?: React.ReactNode;
}
function ExperienceRow({
  company,
  duration,
  title,
  location,
  url,
  urlText,
  children,
}: IExperienceRowProps) {
  return (
    <div className="py-2.5 mb-2 lg:mb-5 flex flex-col lg:flex-row">
      <div className="flex flex-row items-center lg:flex-col w-auto lg:w-48 lg:pl-5">
        <span className="mr-2 lg:mr-0 lg:my-2 text-lg text-blueish font-medium">{company}</span>
        <span className="text-sm">{duration}</span>
      </div>
      <div className="flex flex-col lg:px-4 w-auto max-w-lg">
        <span className="text-lg font-medium my-2">{title}</span>
        <span className="font-light text-sm lg:mb-2">{children}</span>
        <div className="flex flex-row -ml-1 mt-3">
          <div className="flex flex-row items-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 mr-1 text-blueish"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="">{location}</span>
          </div>
          {url && urlText && (
            <a
              href={url}
              className="flex flex-row items-center mr-3 transition-colors hover:text-blueish"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 mr-1 text-blueish"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
              <span>{urlText}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------
export default function Experience() {
  return (
    <div id="experience" className="py-5 mt-2 lg:mt-8 xs:px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="pt-4 pb-3 text-6xl text-blueish">Experience</h2>
        <p className="mb-7 text-xl italic">“The future depends on what you do today.” ― Ghandi</p>
      </div>

      <div className="flex flex-col md:items-center px-8">
        <ExperienceRow
          company="Rockpaper"
          duration="2018 - Present"
          title="Founder & CTO"
          location="Seattle, US"
          url="https://therockpaper.com"
          urlText="therockpaper.com"
        >
          Startup world at its finest.
          <br />
          From though, idea, team, many iterations, all the way to a live product. It becomes almost
          impossible to describe the learnings of such an endeavour.
          <br />
          <br />
          Overall, besides the skills gained, successes and failures experienced, and wearing many
          hats - biggest value was working with the motivated, charming, and super-skilled team
          aiming for greatness.
          <br />
          <br />I consider this journey a personal highlight of my career and could talk about it
          for days!
        </ExperienceRow>
        <hr className="w-2/5 lg:hidden border-0 border-t border-blueish border-opacity-60 my-2 sm:my-4 lg:my-8 mx-auto" />
        <ExperienceRow
          company="Parkside"
          duration="2016 - Present"
          title="Engineering Lead | Technical consultant"
          location="Graz, Austria"
          url="https://www.parkside.at/"
          urlText="parkside.at"
        >
          Leading teams of engineers &amp; designers across different agile projects with different
          clients through cutting-edge projects and challenges.
          <br />
          Each project with their own challenge and ambitions - this required careful planning of
          roadmap, resources, features &amp; technologies while maintaining stable and happy teams.
          <br />
          Internally, company is experiencing growth which also required hiring and introducing new
          people, adding new practices and changing existing ones all while keeping the company
          culture at highest priority.
        </ExperienceRow>
        <hr className="w-2/5 lg:hidden border-0 border-t border-blueish border-opacity-60 my-2 sm:my-4 lg:my-8 mx-auto" />
        <ExperienceRow
          company="Info3"
          duration="2014 - 2016"
          title="Full-Stack Developer"
          location="Varazdin, Croatia"
          url="http://www.info3.hr/"
          urlText="info3.hr"
        >
          Working on developing customized ERP systems and Web apps tailored to clients needs.
          <br />
          Custom client solutions required taking detailed specification from client and
          establishing trust based relationship. Also, working with bigger companies, this was a
          good introduction into corporate structures &amp; learning the value of a good meeting.
        </ExperienceRow>
        <hr className="w-2/5 lg:hidden border-0 border-t border-blueish border-opacity-60 my-2 sm:my-4 lg:my-8 mx-auto" />
        <ExperienceRow
          company="Freelance"
          duration="2011 - 2014"
          title="Web projects"
          location="Worldwide"
        >
          Working on lean projects for money or glory! With various technologies and clients, this
          thought me the value of speed and precision in the world of web.
        </ExperienceRow>
      </div>
    </div>
  );
}
