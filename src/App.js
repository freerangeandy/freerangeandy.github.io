import React, { Fragment, useRef } from 'react'
import {
  Segment,
  Container,
  Ref
} from 'semantic-ui-react'
import HeaderSection from './components/HeaderSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'

const App = (props) => {
  const aboutMeRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)

  return (
    <Fragment>
      <HeaderSection
        aboutMeRef={aboutMeRef} 
        experienceRef={experienceRef}
        projectsRef={projectsRef}
      />
      <Ref innerRef={experienceRef}>
        <ExperienceSection />
      </Ref>
      <Ref innerRef={projectsRef}>
        <ProjectsSection />
      </Ref>
      <Segment vertical inverted color="violet">
        <Container>

        </Container>
      </Segment>
    </Fragment>
  )
}

export default App
