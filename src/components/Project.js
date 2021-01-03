import React from 'react'
import {
  Card,
  Icon,
  Label,
  Header,
  Image
} from 'semantic-ui-react'

const getLabelColor = (label) => {
  const nonTechLabels = ["Game", "Hackathon", "Team project"]
  return nonTechLabels.includes(label) ? "green" : "blue"
}

const Project = (props) => {
  const screenshot = props.screenshot ? (
      <a href={props.siteurl} rel="noopener noreferrer" target="_blank">
        <Image alt={`${props.name} screenshot`} src={props.screenshot} />
      </a>
    ) : null
  const labels = props.labels ? props.labels.map((label,idx) => (
    <Label
      horizontal
      key={idx}
      color={getLabelColor(label)}
      style={{ marginBottom:'0.2em' }}
    >
      {label}
    </Label>
  )) : null

  return (
    <Card>
      <Card.Header style={{ padding: '0.5em' }}>
        <Header as='h5'>
          {props.name}&nbsp;&nbsp;&nbsp;
          <a href={props.siteurl} rel="noopener noreferrer" target="_blank">
            <Icon link name='external' />
          </a>
          <a href={props.gitrepo} rel="noopener noreferrer" target="_blank">
            <Icon link name='github' />
          </a>
        </Header>
      </Card.Header>
      {screenshot}
      <Card.Content description={props.description} />
      <Card.Content style={{ padding:'0.5em' }}>
        {labels}
      </Card.Content>
    </Card>
  )
}

export default Project
