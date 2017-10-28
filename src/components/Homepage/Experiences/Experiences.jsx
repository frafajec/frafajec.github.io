import React from 'react';

import Section from '../../Section';
import Tile from './Tile';

import './Experiences.scssm';

// ------------------------------------------------------------------------------------------------
export default function Experiences() {
  return (
    <div styleName="Experiences">
      <h2>Experiences</h2>
      <p>Hello there!</p>

      <hr />

      <div styleName="content">
        <Section title="Education">
          <Tile
            name="State University"
            date="2013 - 2014"
            title="Machine learning"
            desc="I have learned here a lot of things, who would know what not..."
            location="Graz, Austria"
            url="todo be url"
          />
          <Tile
            name="Somewhere"
            date="June 2011 - July 2014"
            title="Workaround"
            desc="Bla bla bla bla bla bla adadsadasdasd asdasd ad asdasdsdas dasd sadas a dasd sa ddsda"
          />
          <Tile
            name="Home"
            date="2010 - 2015"
            title="Peronal projects"
            desc="I have learned here a lot of things, who would know what not... adasd asdad asd asd asdasasdasd a a dsad as"
            location="Test location"
          />
        </Section>
        <Section title="Work">
          <Tile
            name="Parkside"
            date="June 2011 - July 2014"
            title="Workaround"
            desc="Bla bla bla bla bla bla adadsadasdasd asdasd ad asdasdsdas dasd sadas a dasd sa ddsda"
            location="Graz, Austria"
          />
          <Tile
            name="Info3"
            date="2013 - 2014"
            title="Machine learning"
            desc="I have learned here a lot of things, who would know what not..."
            location="Varazdin, Croatia"
          />
          <Tile name="Freelance" date="2011 - 2013" title="Web projects" desc="bla bla" location="Worldwide" />
        </Section>
      </div>
    </div>
  );
}
