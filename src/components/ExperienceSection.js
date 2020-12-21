import React from 'react'
import {
  Container,
  Grid,
  Segment
} from 'semantic-ui-react'

const ExperienceSection = (props) => {
  return (
    <Segment vertical>
      <h2 style={{ textAlign:'center', marginTop:'1em' }}>Experience</h2>
      <Grid columns='equal' divided>
        <Grid.Row>
          <Grid.Column>
            <Container text>
              <h3>Education</h3>
              <article>
                <h5>Massachusetts Institute of Technology</h5>
                <p>Cambridge, MA</p>
                <p>Bachelor of Science - Mathematics</p>
                <p>Sept. 2003 - June 2007</p>
              </article>
              <article>
                <h5>Launch Academy</h5>
                <p>Boston, MA</p>
                <p>Dec. 2019 - May 2020</p>
              </article>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container text>
              <h3>Work</h3>
              <article>
                <h5>Waltham Public Schools</h5>
                <p>Waltham, MA</p>
                <p>High School Math Teacher</p>
                <p>Oct. 2018 - Mar. 2019</p>
              </article>
              <article>
                <h5>Somerville Public Schools</h5>
                <p>Somerville, MA</p>
                <p>High School Math Teacher</p>
                <p>Feb. 2017 - June 2018</p>
              </article>
              <article>
                <h5>Variable Annuity Life Insurance Company (VALIC)</h5>
                <p>Boston, MA</p>
                <p>Programmer Analyst</p>
                <p>Feb. 2008 - Apr. 2015</p>
              </article>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ExperienceSection
