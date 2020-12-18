import React, { Fragment } from 'react'
import {
  Segment,
  Grid,
  Container
} from 'semantic-ui-react'
import HeaderSection from './components/HeaderSection'

const App = (props) => {

  return (
    <Fragment>
    <HeaderSection />
    <Segment vertical>
        <h3>Experience</h3>
        <Grid columns='equal' divided>
          <Grid.Row>
            <Grid.Column>
              <Container text>
                <h4>Education</h4>
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
                <h4>Work</h4>
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
    <Segment vertical>
      <Container text>
        <h3>Projects</h3>
        <article>
          <h4>Tab Loom</h4>
          <p>Virtual sketchbook for creating guitar tablature</p>
          <a href="https://tab-loom.herokuapp.com/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/tab-loom">GitHub</a>
        </article>
        <article>
          <h4>MyCalculator</h4>
          <p>Scientific Calculator with media-responsive layout</p>
          <a href="https://my-calculator-d4e79.firebaseapp.com/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/mycalculator">GitHub</a>
        </article>
        <article>
          <h4>Many City Weather</h4>
          <p>Hourly weather forecast comparison between cities</p>
          <a href="https://freerangeandy.github.io/many-city-weather/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/many-city-weather">GitHub</a>
        </article>
        <article>
          <h4>Flippie Bird</h4>
          <p>Arcade game inspired by Flappy Bird</p>
          <a href="https://freerangeandy.github.io/flippie-bird/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/flippie-bird/">GitHub</a>
        </article>
        <article>
          <h4>Cell Blocks</h4>
          <p>Cellular automata sandbox (Conway's Game of Life)</p>
          <a href="https://freerangeandy.github.io/cell-blocks/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/cell-blocks">GitHub</a>
        </article>
        <article>
          <h4>Fantasy Football Reality 2020</h4>
          <p>Compare weekly fantasy football projections vs. actual results</p>
          <a href="https://ff-reality.herokuapp.com/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/ff-reality">GitHub</a>
        </article>
      </Container>
    </Segment>
    <Segment vertical inverted color="violet">
      <Container>
        <h3>Contact</h3>
        <a href="mailto:andy_lee@alum.mit.edu">Email</a><br />
        <a href="https://www.linkedin.com/in/andrew-lee-1701d/">LinkedIn</a>
      </Container>
    </Segment>
    </Fragment>
  )
}

export default App
