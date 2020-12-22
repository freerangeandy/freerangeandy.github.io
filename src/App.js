import React, { Fragment } from 'react'
import {
  Segment,
  Container
} from 'semantic-ui-react'
import HeaderSection from './components/HeaderSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'

const App = (props) => {

  return (
    <Fragment>
    <HeaderSection />
    <ExperienceSection />
    <ProjectsSection />
    <Segment vertical inverted color="violet">
      <Container>

      </Container>
    </Segment>
    </Fragment>
  )
}

export default App
