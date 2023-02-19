import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Table } from "semantic-ui-react";
import { retrieveFiles } from "../utils/web3.storage";

const OpenNewUserRequests = ({ openNewUserRequests }) => {
  const [requests, setRequests] = useState(openNewUserRequests);

  useEffect(() => {
    const getFiles = async (cid) => {
      try {
        const files = await retrieveFiles(cid);
        if (files.length === 0) return toast.error("File not found");
        return files[0];
      } catch (error) {
        toast.error(error.message);
      }
    };

    const generateLink = async () => {
      const req = await Promise.all(
        openNewUserRequests.map(async (request) => {
          const file = await getFiles(request.aadhar);
          return {
            ...request,
            aadharLink: `https://${request.aadhar}.ipfs.w3s.link/${file.name}`,
          };
        })
      );
      setRequests(req);
    };

    generateLink();
    openNewUserRequests.reverse();
  }, [openNewUserRequests]);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Request no.</Table.HeaderCell>
          <Table.HeaderCell>Nominee</Table.HeaderCell>
          <Table.HeaderCell>Aadhar link</Table.HeaderCell>
          <Table.HeaderCell>Request Status</Table.HeaderCell>
          <Table.HeaderCell>Request Note</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {requests.map((request, i) => (
          <Table.Row key={`request${i + 1}`}>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{request.nominee}</Table.Cell>
            <Table.Cell>
              <a href={request.aadharLink} target="_blank" rel="noreferrer">
                View Aadhar
              </a>
            </Table.Cell>
            <Table.Cell>
              {!request.processed ? "Processing" : "Not Approved"}
            </Table.Cell>
            <Table.Cell>{ request.note ? request.note : "NA"}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default OpenNewUserRequests;
