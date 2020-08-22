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
                title="Co-Founder & CTO"
                desc="Creating a startup world with all its charms!"
                location="Seattle, US"
                url="https://www.therockpaper.com"
                urlText="therockpaper.com"
              />
              <Tile
                name="Parkside"
                date="2016 - Present"
                title="Web Developer & Team Lead"
                desc="Leading teams of engineers across different projects with different clients through cutting-edge projects and challenges."
                location="Graz, Austria"
                url="https://www.parkside.at"
                urlText="parkside.at"
              />
              <Tile
                name="Info3"
                date="2014 - 2016"
                title="Full-Stack Developer"
                desc="Working on developing customized ERP systems and Web apps tailored to clients needs."
                location="Varazdin, Croatia"
                url="http://www.info3.hr"
                urlText="info3.hr"
              />
              <Tile
                name="Freelance"
                date="2011 - Present"
                title="Web projects"
                desc="Working on lean projects for money or glory!"
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
