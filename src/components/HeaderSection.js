import React, { useState } from 'react'
import {
  Visibility,
  Segment,
  Container,
  Ref
} from 'semantic-ui-react'
import AboutMeSection from './AboutMeSection'
import MenuBar from './MenuBar'

const HeaderSection = (props) => {
  const [fixed, setFixed] = useState(false)

  return (
    <Visibility
      once={false}
      onBottomPassed={() => setFixed(true)}
      onBottomPassedReverse={() => setFixed(false)}
    >
      <Segment
        vertical
        inverted
        color="violet"
        style={{ minHeight: 350, padding: '0 0 1em 0'}}
      >
        <MenuBar
          fixed={fixed}
          aboutMeRef={props.aboutMeRef}
          experienceRef={props.experienceRef}
          projectsRef={props.projectsRef}
        />
        <Ref innerRef={props.aboutMeRef}>
          <AboutMeSection />
        </Ref>
      </Segment>
    </Visibility>
  )
}

export default HeaderSection
