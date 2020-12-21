import React from 'react'
import {
  Container,
  Grid,
  Segment
} from 'semantic-ui-react'
import Experience from './Experience'

const ExperienceSection = (props) => {
  return (
    <Segment vertical>
      <h2 style={{ textAlign:'center', marginTop:'1em' }}>Experience</h2>
      <Grid columns='equal' divided>
        <Grid.Row>
          <Grid.Column>
            <Container text>
              <h3>Education</h3>
              <Experience
                name="Massachusetts Institute of Technology"
                location="Cambridge, MA"
                degree="Bachelor of Science - Mathematics"
                date={{ start: "Sept. 2003", end: "June 2007" }}
              />
              <Experience
                name="Launch Academy"
                location="Boston, MA"
                date={{ start: "Dec. 2019", end: "May 2020" }}
              />
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container text>
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
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ExperienceSection
