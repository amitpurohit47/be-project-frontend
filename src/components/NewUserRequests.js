import React, { useEffect, useState } from "react";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import { getAllNewUserRequests } from "../utils/contractMethods";
import NewUserRequestCard from "./NewUserRequestCard";

const NewUserRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      const req = await getAllNewUserRequests();
      const revReq = req.reverse();
      setRequests(revReq);
    };
    fetchRequests();
  }, []);
  // console.log(requests);

  return (
    <Container>
      <Dimmer active={loading} inverted>
        <Loader content="Processing Request..." />
      </Dimmer>
      {requests.map((request, index) => (
        <NewUserRequestCard
          request={request}
          key={`newUserCard${index}`}
          requestInd={requests.length - index - 1}
          setloading={setloading}
        />
      ))}
    </Container>
  );
};

export default NewUserRequests;
