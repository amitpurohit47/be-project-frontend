import React, { useContext } from 'react'
import { Container } from 'semantic-ui-react';
import { LandContext } from '../context/LandContext'
import NewUserForm from './NewUserForm';

const User = () => {

    const {isUser} = useContext(LandContext);

  return (
    <Container>
        {!isUser ? 
            <Container>
                <p>You are not a registered user. Please register.</p>
                <NewUserForm />
            </Container>
        : null}
    </Container>
  )
}

export default User