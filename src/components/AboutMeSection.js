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
      <List link horizontal>
        <List.Item as='a' href="https://www.linkedin.com/in/andrew-lee-1701d/" target='#'>
          <List.Content>
            <Icon link name='linkedin' /> LinkedIn
          </List.Content>
        </List.Item>
        <List.Item as='a' href="https://www.github.com/freerangeandy" target='#'>
          <List.Content>
            <Icon link name='github' /> GitHub
          </List.Content>
        </List.Item>
      </List>
      <p style={{ marginTop:'0.5em' }}>
        Experienced software engineer <Icon name='cog' /> High school math teacher <Icon name='cog' /> Boot camp graduate<br/>
        Currently looking for a role as a <i>full-stack</i> or <i>front-end software developer</i>.
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
              <List.Item>
                <List.Content>JavaScript</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>ReactJS</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Ruby</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Python</List.Content>
              </List.Item>
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
