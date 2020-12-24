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

  const onBottomPassed = () => {
    props.setActiveItem("experience")
    setFixed(true)
  }

  const onBottomPassedReverse = () => {
    props.setActiveItem("aboutMe")
    setFixed(false)
  }

  return (
    <Visibility
      once={false}
      onBottomPassed={onBottomPassed}
      onBottomPassedReverse={onBottomPassedReverse}
    >
      <Ref innerRef={props.aboutMeRef}>
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
            activeItem={props.activeItem}
            setActiveItem={props.setActiveItem}
          />
          <AboutMeSection />
        </Segment>
      </Ref>
    </Visibility>
  )
}

export default HeaderSection
