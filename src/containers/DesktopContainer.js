import React, { Fragment, useState } from 'react'
import { Segment, Ref } from 'semantic-ui-react'
import AboutMeSection from '../components/AboutMeSection'
import MenuBar from '../components/MenuBar'
import MenuActiveBreakpoint from './hoc/MenuActiveBreakpoint'

const DesktopContainer = (props) => {
  const [fixed, setFixed] = useState(false)
  const Media = props.mediaWrapper

  return (
    <Media greaterThan='mobile'>
      <MenuActiveBreakpoint
        setActiveItem={setActiveItem}
        setFixed={setFixed}
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
      </MenuActiveBreakpoint>
      {props.children}
    </Media>
  )
}

export default DesktopContainer
