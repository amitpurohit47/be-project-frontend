import React from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'
import NewLandRequests from './NewLandRequests'
import NewUserRequests from './NewUserRequests'

const Officer = () => {
  return (
    <Container>
      <Header as={"h4"}>New User Requests</Header>
      <NewUserRequests />
      <Divider />
      <Header as={"h4"}>New Land Requests</Header>
      <NewLandRequests />
    </Container>
  )
}

export default Officer