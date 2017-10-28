import React from 'react';

import Section, { SectionColumn } from '../../Section';
import StarRating from './StarRating';

import './Abilities.scssm';

// ------------------------------------------------------------------------------------------------
export default function Abilities() {
  return (
    <div styleName="Abilities">
      <h2>Abilities</h2>
      <p>Hello there!</p>

      <hr />

      <div styleName="content">
        <Section subTitle="Skills">
          <SectionColumn>
            <StarRating text={'Vanilla JavaScript'} rating={5} />
            <StarRating text={'React'} rating={5} />
            <StarRating text={'Redux'} rating={5} />
            <StarRating text={'SCSS / Animations'} rating={5} />
            <StarRating text={'Sagas'} rating={4} />
            <StarRating text={'NodeJS'} rating={3} />
            <StarRating text={'AngularJS'} rating={3} />
          </SectionColumn>
          <SectionColumn>
            <StarRating text={'Team leadership'} rating={5} />
            <StarRating text={'Team organisation'} rating={5} />
            <StarRating text={'Agile / Sprinting'} rating={5} />
            <StarRating text={'Python / Django'} rating={4} />
            <StarRating text={'WebGL / Regl'} rating={1} />
          </SectionColumn>
        </Section>

        <Section subTitle="Languages">
          <SectionColumn>
            <StarRating text={'Croatian (Mother tongue)'} rating={5} />
            <StarRating text={'English (Daily use)'} rating={5} />
          </SectionColumn>
          <SectionColumn>
            <StarRating text={'German (Professional)'} rating={4} />
            <StarRating text={'Spanish (Narcos)'} rating={1} />
          </SectionColumn>
        </Section>

        <Section subTitle="Tools">
          <SectionColumn>
            <StarRating text={'Mac'} rating={5} />
            <StarRating text={'Git / Git flow'} rating={5} />
            <StarRating text={'Atlassian / Jira'} rating={5} />
            <StarRating text={'Browsers (+ Legacy)'} rating={5} />
            <StarRating text={'i18n (Transifex)'} rating={5} />
          </SectionColumn>
          <SectionColumn>
            <StarRating text={'VSCode'} rating={5} />
            <StarRating text={'Buildkite'} rating={4} />
            <StarRating text={'Shell'} rating={4} />
            <StarRating text={'Photoshop'} rating={3} />
            <StarRating text={'Subversion'} rating={3} />
          </SectionColumn>
        </Section>
      </div>
    </div>
  );
}
