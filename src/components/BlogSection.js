import React from 'react'
import {
  Segment,
  Card,
  Ref
} from 'semantic-ui-react'

const BlogSection = (props) => {

  return (
    <Segment
      vertical
      inverted
      color="violet"
      style={{ padding: '0 10%' }}
    >
      <Ref innerRef={props.blogRef}>
        <h2 style={{ height:'1.3em' }}></h2>
      </Ref>
      <h2 style={{ textAlign:'center' }}>Blog</h2>

    </Segment>
  )
}

export default BlogSection
