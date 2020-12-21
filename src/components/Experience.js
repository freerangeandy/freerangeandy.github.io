import React from 'react'

const Experience = (props) => {
  const degree = props.degree ? (<p>{props.degree}</p>) : null
  const title = props.title ? (<p>{props.title}</p>) : null

  return (
    <article>
      <h5>{props.name}</h5>
      <p>{props.location}</p>
      {title}
      {degree}
      <p>{props.date.start} - {props.date.end}</p>
    </article>
  )
}

export default Experience
