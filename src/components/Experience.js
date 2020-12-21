import React from 'react'
import { List, Icon } from 'semantic-ui-react'

const Experience = (props) => {
  const indent = { style: { marginLeft: '1.4em' }}
  const degree = props.degree ? (<List.Item {...indent}>{props.degree}</List.Item>) : null
  const title = props.title ? (<List.Item {...indent}>{props.title}</List.Item>) : null

  return (
    <List>
      <List.Item><h5>{props.name}</h5></List.Item>
      <List.Item>
        <Icon name='map marker alternate' /> {props.location}
      </List.Item>
      {title}
      {degree}
      <List.Item {...indent}>
        {props.date.start} &mdash; {props.date.end}
      </List.Item>
    </List>
  )
}

export default Experience
