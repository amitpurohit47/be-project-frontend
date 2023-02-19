import React, { useContext, useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { LandContext } from "../context/LandContext";
import NewUserForm from "./NewUserForm";
import OpenNewUserRequests from "./OpenNewUserRequests";

const User = () => {
  const { isUser, openNewUserRequests } = useContext(LandContext);
  const [showRequests, setShowRequests] = useState(false);
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {

    const temp = [...openNewUserRequests];
    temp.reverse();
    if (
      temp.length &&
      temp[0].approved === false
    ) {
      setShowRequests(true);
    } 
    if (
      temp.length &&
      temp[0].processed === false
    ) {
      setShowForm(true);
    }
  }, [openNewUserRequests]);

  return (
    <Container>
      {!isUser ? (
        <Container>
          <p>You are not a registered user. Please register.</p>
          {showForm && !showRequests && <NewUserForm />}
          {showRequests && <OpenNewUserRequests openNewUserRequests={openNewUserRequests} />}
        </Container>
      ) : null}
    </Container>
  );
};

export default User;
