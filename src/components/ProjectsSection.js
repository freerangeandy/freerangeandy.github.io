import React from 'react'
import {
  Segment,
  Card,
  Ref
} from 'semantic-ui-react'
import Project from './Project'
import screenshots from '../../assets/screenshots/*.png'

const ProjectSection = (props) => {
  const populateProject = (item,idx) => (
    <Project
      key={idx}
      name={item.name}
      description={item.description}
      screenshot={screenshots[item.screenshot]}
      siteurl={item.siteurl}
      gitrepo={item.gitrepo}
      labels={item.labels}
    />
  )

  const projects = props.items.map(populateProject)

  return (
    <Segment
      vertical
      inverted
      color="violet"
      style={{ padding: '0 10%' }}
    >
      <Ref innerRef={props.projectsRef}>
        <h2 style={{ height:'1.3em' }}></h2>
      </Ref>
      <h2 style={{ textAlign:'center' }}>Projects</h2>
      <Card.Group itemsPerRow={3} doubling stackable>
        {projects}
      </Card.Group>
    </Segment>
  )
}

export default ProjectSection
