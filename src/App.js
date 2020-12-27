import React, { Fragment, useState, useRef } from 'react'
import {
  Segment,
  Container
} from 'semantic-ui-react'
import HeaderSection from './components/HeaderSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import content from './content.json'

const App = (props) => {
  const aboutMeRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const [activeItem, setActiveItem] = useState("aboutMe")

  return (
    <Fragment>
      <HeaderSection
        aboutMeRef={aboutMeRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <ExperienceSection
        experienceRef={experienceRef}
        setActiveItem={setActiveItem}
        items={content.experience}
      />
      <ProjectsSection
        projectsRef={projectsRef}
        items={content.projects}
      />
      <Segment vertical inverted color="violet">
        <Container>

        </Container>
      </Segment>
    </Fragment>
  )
}

export default App
