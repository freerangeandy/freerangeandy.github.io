import React, { Fragment } from 'react'
import {
  Segment,
  Grid,
  Container
} from 'semantic-ui-react'
import HeaderSection from './components/HeaderSection'
import ExperienceSection from './components/ExperienceSection'

const App = (props) => {

  return (
    <Fragment>
    <HeaderSection />
    <ExperienceSection />
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

      </Container>
    </Segment>
    </Fragment>
  )
}

export default App
