import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../Section';
import Tile from './Tile';

import './Experiences.scssm';

// ------------------------------------------------------------------------------------------------
const ExperiencesProps = {
  id: PropTypes.string.isRequired,
};

export default function Experiences({ id }) {
  return (
    <div styleName="Experiences" id={id} className="homepage-page">
      <h2>Experiences</h2>
      <p>“Failure is the condiment that gives success its flavor.” ― Truman Capote</p>

      <hr />

      <div styleName="content">
        <Section title="Education">
          <Tile
            name="Technical University Graz"
            date="2013 - 2014"
            title="Computer Science"
            desc="General knowledge in IT world and modern approaches towards growing problems and new technologies in play."
            location="Graz, Austria"
            url="www.tugraz.at"
          />
          <Tile
            name="Faculty of Organization and Informatics"
            date="2011 - 2014"
            title="Information Systems"
            desc="Foundation of informatics and economics with social and organisational aspects."
            location="Varazdin, Croatia"
            url="www.foi.hr"
          />
          <Tile
            name="Mathematical Gymnasium"
            date="2010 - 2015"
            title="General education"
            desc="Foundation for science."
            location="Varazdin, Croatia"
          />
        </Section>
        <Section title="Work">
          <Tile
            name="Parkside"
            date="2016 - Present"
            title="Web Developer & Project Manager"
            desc="Leading team of engineers through cutting-edge web projects and challenges."
            location="Graz, Austria"
          />
          <Tile
            name="Info3"
            date="2014 - 2016"
            title="Full-Stack Developer"
            desc="Worked with ERP systems and developing Web apps."
            location="Varazdin, Croatia"
          />
          <Tile
            name="Freelance"
            date="2011 - Present"
            title="Web projects"
            desc="Working on lean project for money or glory!"
            location="Worldwide"
          />
        </Section>
      </div>
    </div>
  );
}
Experiences.propTypes = ExperiencesProps;
