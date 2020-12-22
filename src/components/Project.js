import React from 'react'
import {
  Card
} from 'semantic-ui-react'

const Project = (props) => {
  return (
    <article>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a href={props.siteurl}>Live</a>&nbsp;
      <a href={props.gitrepo}>GitHub</a>
    </article>
  )
}

export default Project
