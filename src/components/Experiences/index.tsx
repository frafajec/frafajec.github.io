import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Header from 'components/Header';
import Section from './Section';
import Tile from './Tile';

import styles from './styles';

// ------------------------------------------------------------
interface IExperiencesProps extends WithStyles<typeof styles> {
  readonly id: string;
}
interface IExperiencesState {}

// ------------------------------------------------------------
class Experiences extends React.Component<IExperiencesProps, IExperiencesState> {
  render() {
    const { classes, id } = this.props;
    return (
      <div id={id} className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Header
              title={'Experiences'}
              quote={'“Failure is the condiment that gives success its flavor.” ― Truman Capote'}
              withUnderline={false}
            />
            <Section title="Work">
              <Tile
                name="Rockpaper"
                date="2018 - Present"
                title="Founder & CTO"
                desc={`Startup world at its finest.<br />
                From though, idea, team, many iterations, all the way to a live product. It becomes almost impossible
                to describe the learnings of such an endeavour.</br></br>
                Overall, besides the skills gained, successes and failures experienced, and wearing many hats - 
                biggest value was working with the motivated, charming, and super-skilled team aiming for greatness.
                </br></br>I consider this journey a personal highlight of my career and could talk about it for days!`}
                location="Seattle, US"
                url="https://www.therockpaper.com"
                urlText="therockpaper.com"
              />
              <Tile
                name="Parkside"
                date="2016 - Present"
                title="Engineering Lead | Technical consultant"
                desc={`Leading teams of engineers & designers across different agile projects with different clients 
                through cutting-edge projects and challenges.<br />
                Each project with their own challenge and ambitions - this required careful planning of roadmap,
                resources, features & technologies while maintaining stable and happy teams.<br />
                Internally, company is experiencing growth which also required hiring and introducing new people, 
                adding new practices and changing existing ones all while keeping the company culture at highest
                priority.`}
                location="Graz, Austria"
                url="https://www.parkside.at"
                urlText="parkside.at"
              />
              <Tile
                name="Info3"
                date="2014 - 2016"
                title="Full-Stack Developer"
                desc={`Working on developing customized ERP systems and Web apps tailored to clients needs.<br />
                Custom client solutions required taking detailed specification from client and establishing trust based
                relationship. Also, working with bigger companies, this was a good introduction into corporate 
                structures & learning the value of a good meeting.`}
                location="Varazdin, Croatia"
                url="http://www.info3.hr"
                urlText="info3.hr"
              />
              <Tile
                name="Freelance"
                date="2011 - 2014"
                title="Web projects"
                desc={`Working on lean projects for money or glory! 
                  With various technologies and clients, this thought me the value of speed and precision in the 
                  world of web.`}
                location="Worldwide"
              />
            </Section>
            {/* <hr className={classes.delimiter} />
            <Section title="Education">
              <Tile
                name="Technical University Graz"
                date="2013 - 2014"
                title="Computer Science"
                desc="General knowledge in IT world and modern approaches towards growing problems and new technologies in play."
                location="Graz, Austria"
                url="http://www.tugraz.at"
                urlText="tugraz.at"
              />
              <Tile
                name="Faculty of Organization and Informatics"
                date="2011 - 2014"
                title="Information Systems"
                desc="Foundation of informatics and economics with social and organisational aspects."
                location="Varazdin, Croatia"
                url="http://www.foi.hr"
                urlText="foi.hr"
              />
              <Tile
                name="Mathematical Gymnasium"
                date="2010 - 2015"
                title="General education"
                desc="Foundation for science and IT background."
                location="Varazdin, Croatia"
              />
            </Section> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Experiences);
