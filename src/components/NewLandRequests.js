import React, { useEffect, useState } from "react";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import { getAllAddLandRequests } from "../utils/contractMethods";
import NewLandRequestsCard from "./NewLandRequestsCard";

const NewLandRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      const req = await getAllAddLandRequests();
      const revReq = [...req].reverse();
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
        <NewLandRequestsCard
          request={request}
          key={`newUserCard${index}`}
          requestInd={requests.length - index - 1}
          setloading={setloading}
        />
      ))}
    </Container>
  );
};

export default NewLandRequests;
