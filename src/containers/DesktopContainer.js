import React, { Fragment, useState } from 'react'
import {
  Visibility,
  Segment,
  Ref
} from 'semantic-ui-react'
import AboutMeSection from '../components/AboutMeSection'
import MenuBar from '../components/MenuBar'

const DesktopContainer = (props) => {
  const [fixed, setFixed] = useState(false)
  const Media = props.mediaWrapper

  const onBottomPassed = () => {
    props.setActiveItem("experience")
    setFixed(true)
  }

  const onBottomPassedReverse = () => {
    props.setActiveItem("aboutMe")
    setFixed(false)
  }

  return (
    <Media greaterThan='mobile'>
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
              isMobile={false}
            />
            <AboutMeSection />
          </Segment>
        </Ref>
      </Visibility>
      {props.children}
    </Media>
  )
}

export default DesktopContainer
