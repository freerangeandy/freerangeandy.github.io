import React from 'react'
import { List } from 'semantic-ui-react'

const Experience = (props) => {
  const degree = props.degree ? (<List.Item>{props.degree}</List.Item>) : null
  const title = props.title ? (<List.Item>{props.title}</List.Item>) : null

  return (
    <List>
      <h5>{props.name}</h5>
      <List.Item>{props.location}</List.Item>
      {title}
      {degree}
      <List.Item>{props.date.start} - {props.date.end}</List.Item>
    </List>
  )
}

export default Experience
