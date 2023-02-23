import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Card, Table } from "semantic-ui-react";
import { LandContext } from "../context/LandContext";
import { getOpenAddLandRequest, getUserLands } from "../utils/contractMethods";
import AddLandForm from "./AddLandForm";
import LandTableRow from "./LandTableRow";

const UserDashboard = () => {
  const { currentAccount } = useContext(LandContext);
  const [requests, setrequests] = useState([]);
  const [lands, setLands] = useState([]);

  useEffect(() => {
    const getRequests = async () => {
      try {
        const req = await getOpenAddLandRequest(currentAccount);
        const reqRev = [...req].reverse();
        setrequests(reqRev);
      } catch (error) {
        toast.error(error.message);
        console.error(error);
      }
    };
    const getLands = async () => {
      try {
        const lnds = await getUserLands(currentAccount);
        setLands(lnds);
      } catch (error) {
        toast.error(error.message);
        console.error(error);
      }
    };
    getRequests();
    getLands();
  }, [currentAccount]);

  return (
    <Container>
      <Container style={{ margin: "20px" }}>
        {lands.length ? (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Land no.</Table.HeaderCell>
                <Table.HeaderCell>Land Document</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {lands.map((land, i) => (
                <Table.Row key={`landno${i}`}>
                  <Table.Cell>{i + 1}</Table.Cell>
                  <Table.Cell>
                    <a href={`https://${land}.ipfs.w3s.link`}>View Land</a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p>No Lands owned</p>
        )}
      </Container>
      <Container>
        <Card fluid style={{ padding: "20px" }}>
          <AddLandForm />
        </Card>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Request no.</Table.HeaderCell>
              <Table.HeaderCell>Land Document</Table.HeaderCell>
              <Table.HeaderCell>Request Status</Table.HeaderCell>
              <Table.HeaderCell>Request Note</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {requests.map((request, i) => (
              <LandTableRow request={request} index={i} key={`landno${i}`} />
            ))}
          </Table.Body>
        </Table>
      </Container>
    </Container>
  );
};

export default UserDashboard;
