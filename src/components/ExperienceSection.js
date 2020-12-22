import React from 'react'
import {
  Grid,
  Segment
} from 'semantic-ui-react'
import Experience from './Experience'

const ExperienceSection = (props) => {
  return (
    <Segment vertical>
      <h2 style={{ textAlign:'center', marginTop:'1em' }}>Experience</h2>
      <Grid columns='equal' centered divided>
        <Grid.Row>
          <Grid.Column>
            <Segment
              basic
              style={{ float:'right'}}
            >
              <h3>Work</h3>
              <Experience
                name="Waltham Public Schools"
                location="Waltham, MA"
                title="High School Math Teacher"
                date={{ start: "Oct. 2018", end: "Mar. 2019" }}
              />
              <Experience
                name="Somerville Public Schools"
                location="Somerville, MA"
                title="High School Math Teacher"
                date={{ start: "Feb. 2017", end: "June 2018" }}
              />
              <Experience
                name="Variable Annuity Life Insurance Company (VALIC)"
                location="Boston, MA"
                title="Programmer Analyst"
                date={{ start: "Feb. 2008", end: "Apr. 2015" }}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment
              basic
              style={{ marginLeft:'10%'}}
            >
              <h3>Education</h3>
              <Experience
                name="Launch Academy"
                title="Apprentice Full-Stack Developer"
                location="Boston, MA"
                date={{ start: "Dec. 2019", end: "May 2020" }}
              />
              <Experience
                name="Massachusetts Institute of Technology"
                location="Cambridge, MA"
                degree="Bachelor of Science - Mathematics"
                date={{ start: "Sept. 2003", end: "June 2007" }}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ExperienceSection
