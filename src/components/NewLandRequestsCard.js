import React, { useState } from "react";
import { TextArea, Card, Dropdown, Button } from "semantic-ui-react";
import { verifyNewLand } from "../utils/contractMethods";
import { toast } from "react-toastify";

const NewLandRequestsCard = ({ request, requestInd, setloading }) => {
  // console.log(request);
  const [approved, setApproved] = useState(false);
  const [note, setNote] = useState("");

  const verifyRequest = async (reqInd, approved, note) => {
    try {
      setloading(true);
      await verifyNewLand(reqInd, approved, note);
      toast.success("Land verified successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
      setTimeout(() => window.location.reload(), 2000);
    }
  };

  const options = [
    {
      key: "Approved",
      value: "Approved",
      text: "Approved",
    },
    {
      key: "NotApproved",
      value: "NotApproved",
      text: "Not Approved",
    },
  ];

  return (
    !request.processed &&
    <Card fluid>
      <Card.Content>
        <Card.Header style={{ marginBottom: "20px" }}>
          Request ID: {requestInd + 1}
        </Card.Header>
        <Card.Meta style={{ marginBottom: "20px" }}>
          User Address: {request.owner}
        </Card.Meta>
        <Card.Description style={{ marginBottom: "20px" }}>
          <a href={`https://${request.land}.ipfs.w3s.link`} target="_blank" rel="noreferrer">
            Land Document
          </a>
        </Card.Description>
        <Dropdown
          placeholder="Select status"
          selection
          options={options}
          onChange={(event, data) => setApproved(data.value === "Approved")}
          style={{ marginBottom: "20px" }}
        />
        <TextArea
          placeholder="Enter note"
          style={{ width: "100%", height: "100px", resize: "none" }}
          onChange={(event, data) => setNote(data.value)}
        />
      </Card.Content>
      <Card.Content extra>
        <Button
          primary
          onClick={() => verifyRequest(requestInd, approved, note)}
        >
          Verify
        </Button>
      </Card.Content>
    </Card>
  );
};

export default NewLandRequestsCard;
