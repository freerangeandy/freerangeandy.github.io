import React, { useState } from 'react'
import { Segment, Menu, Sidebar, Ref } from 'semantic-ui-react'
import AboutMeSection from '../components/AboutMeSection'
import TopMenu from '../components/TopMenu'
import SideMenu from '../components/SideMenu'
import MenuActiveBreakpoint from './hoc/MenuActiveBreakpoint'

const MobileContainer = (props) => {
  const [fixed, setFixed] = useState(false)
  const [opened, setOpened] = useState(false)
  const Media = props.mediaWrapper

  const handleSidebarHide = (e) => {
    if(e && !e.target.classList.contains("no-close")){
      setOpened(false)
    }
  }
  const handleSidebarToggle = () => { setOpened(!opened) }

  return (
    <Media at='mobile'>
      <Sidebar.Pushable style={{ transform: 'none' }}>
        <SideMenu
          opened={opened}
          handleSidebarHide={handleSidebarHide}
          handleSidebarToggle={handleSidebarToggle}
          activeItem={props.activeItem}
          setActiveItem={props.setActiveItem}
          aboutMeRef={props.aboutMeRef}
          experienceRef={props.experienceRef}
          projectsRef={props.projectsRef}
        />

        <Sidebar.Pusher dimmed={opened}>
          <MenuActiveBreakpoint
            setActiveItem={props.setActiveItem}
            setFixed={setFixed}
          >
            <Ref innerRef={props.aboutMeRef}>
              <Segment
                vertical
                inverted
                color="violet"
                style={{ minHeight: 350, padding: '0 0 1em 0'}}
              >
                {fixed ? (<h2 style={{ height: '2.3em' }}></h2>) : null}
                <TopMenu
                  fixed={fixed}
                  handleSidebarToggle={handleSidebarToggle}
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
