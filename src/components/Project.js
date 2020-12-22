import React from 'react'
import {
  Card
} from 'semantic-ui-react'

const Project = (props) => {
  return (
    <Card>
      <Card.Header style={{ padding: '0.5em' }}>
        <h4>{props.name}</h4>
      </Card.Header>
      <Card.Content description={props.description} />
      <Card.Content extra>
      <a href={props.siteurl}>Live</a>&nbsp;
      <a href={props.gitrepo}>GitHub</a>
      </Card.Content>
    </Card>
  )
}

export default Project
