import React, { Fragment, useState } from 'react'
import {
  Visibility,
  Segment,
  Container,
  Menu,
  Sidebar,
  Button,
  Icon,
  Ref
} from 'semantic-ui-react'
import AboutMeSection from '../components/AboutMeSection'

const MobileContainer = (props) => {
  const [opened, setOpened] = useState(false)
  const pdfFile = require('../../assets/cv.pdf')
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
    <Media as={Sidebar.Pushable} at='mobile'>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          inverted
          onHide={handleSidebarHide}
          vertical
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
          <Ref innerRef={props.aboutMeRef}>
            <Segment
              vertical
              inverted
              color="violet"
              style={{ minHeight: 350, padding: '0 0 1em 0'}}
            >
              <Menu
                inverted
                secondary
                size="large"
              >
                <Menu.Item
                  position="left"
                  onClick={handleSidebarToggle}
                >
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" href={pdfFile} target="blank" inverted>
                    Resumé
                  </Button>
                </Menu.Item>
              </Menu>
              <AboutMeSection />
            </Segment>
          </Ref>
          {props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}

export default MobileContainer
