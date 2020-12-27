import React from 'react'
import {
  Container,
  Icon,
  List,
  Grid,
  Segment
} from 'semantic-ui-react'

const AboutMeSection = (props) => {
  return (
    <Container textAlign='center'>
      <h1 style={{ marginBottom:'0' }}>Andy Lee</h1>
      <List inverted link horizontal>
        <List.Item as='a' href="https://www.linkedin.com/in/andrew-lee-1701d/" target='#'>
          <Icon name='linkedin' /> LinkedIn
        </List.Item>
        <List.Item as='a' href="https://www.github.com/freerangeandy" target='#'>
          <Icon name='github' /> GitHub
        </List.Item>
      </List>
      <p style={{ marginTop:'0.5em' }}>
        Experienced programmer &nbsp;&nbsp;<Icon name='cog' />&nbsp; Math educator &nbsp;&nbsp;<Icon name='cog' />&nbsp; Boot camp graduate<br/>
        Currently looking for a role as a <i>full-stack</i> or <i>front-end software developer</i>
      </p>
      <Grid centered relaxed>
        <Grid.Row>
          <Grid.Column width={4}>
            <Segment
              inverted
              color='violet'
              style={{ textAlign:'left', marginLeft:'15%'}}
            >
              <h3>Skills</h3>
              <List bulleted>
                <List.Item>JavaScript</List.Item>
                <List.Item>ReactJS</List.Item>
                <List.Item>Ruby on Rails</List.Item>
                <List.Item>Python</List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment
              inverted
              color='violet'
              style={{ textAlign:'left',  marginLeft:'15%'}}
            >
              <h3>Interests</h3>
              <List>
                <List.Item>
                  <Icon link name='lab' />
                  <List.Content>&nbsp;STEM Education</List.Content>
                </List.Item>
                <List.Item>
                  <Icon link name='leaf' />
                  <List.Content>Sustainable Tech</List.Content>
                </List.Item>
                <List.Item>
                  <Icon link name='subway' />
                  <List.Content>&nbsp;Public Policy</List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
export default AboutMeSection
