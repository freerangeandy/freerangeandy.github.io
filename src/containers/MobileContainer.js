import React, { Fragment, useState } from 'react'
import {
  Segment,
  Menu,
  Sidebar,
  Ref
} from 'semantic-ui-react'
import AboutMeSection from '../components/AboutMeSection'
import TopMenu from '../components/TopMenu'
import MenuActiveBreakpoint from './hoc/MenuActiveBreakpoint'

const MobileContainer = (props) => {
  const [fixed, setFixed] = useState(false)
  const [opened, setOpened] = useState(false)
  const Media = props.mediaWrapper

  const sectionRef = {
    "aboutMe": props.aboutMeRef,
    "experience": props.experienceRef,
    "projects": props.projectsRef
  }

  const handleSidebarHide = () => { setOpened(false) }
  const handleSidebarToggle = () => { setOpened(true) }
  const handleMenuClick = (name) => {
    sectionRef[name].current.scrollIntoView()
    props.setActiveItem(name)
  }

  return (
    <Media at='mobile'>
      <Sidebar.Pushable style={{ transform: 'none' }}>
        <Sidebar
          as={Menu}
          animation='overlay'
          inverted
          onHide={handleSidebarHide}
          vertical
          width='thin'
          visible={opened}
        >
          <Menu.Item
            name="aboutMe"
            active={props.activeItem == "aboutMe"}
            onClick={() => handleMenuClick("aboutMe")}
          >
            About Me
          </Menu.Item>
          <Menu.Item
            name="experience"
            active={props.activeItem == "experience"}
            onClick={() => handleMenuClick("experience")}
          >
            Experience
          </Menu.Item>
          <Menu.Item
            name="projects"
            active={props.activeItem == "projects"}
            onClick={() => handleMenuClick("projects")}
          >
            Projects
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={opened}>
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
                <TopMenu
                  fixed={fixed}
                  aboutMeRef={props.aboutMeRef}
                  experienceRef={props.experienceRef}
                  projectsRef={props.projectsRef}
                  activeItem={props.activeItem}
                  setActiveItem={props.setActiveItem}
                  isMobile={true}
                />
                <AboutMeSection />
              </Segment>
            </Ref>
          </MenuActiveBreakpoint>
          {props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}

export default MobileContainer
