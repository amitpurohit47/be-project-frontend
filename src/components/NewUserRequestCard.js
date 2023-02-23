import React, { useEffect, useState } from "react";
import { TextArea, Card, Dropdown, Button } from "semantic-ui-react";
import { retrieveFiles } from "../utils/web3.storage";
import { verifyNewUser } from "../utils/contractMethods";
import { toast } from "react-toastify";

const NewUserRequestCard = ({ request, requestInd, setloading }) => {
  // console.log(request);
  const [approved, setApproved] = useState(false);
  const [note, setNote] = useState("");
  const [aadharLink, setaadharLink] = useState("");

  const verifyRequest = async (reqInd, approved, note) => {
    try {
      setloading(true);
      await verifyNewUser(reqInd, approved, note);
      toast.success("User verified successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    const generateLink = async () => {
      const cid = request.aadhar;
      try {
        const files = await retrieveFiles(cid);
        if (files.length === 0) {
          return toast.error("File not found");
        }
        const file = files[0];
        const link = `https://${cid}.ipfs.w3s.link/${file.name}`;
        setaadharLink(link);
      } catch (error) {
        toast.error(error.message);
      }
    };

    generateLink();
  }, [request.aadhar]);

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
          User Address: {request.userAddress}
        </Card.Meta>
        <Card.Meta style={{ marginBottom: "20px" }}>
          Nominee: {request.nominee}
        </Card.Meta>
        <Card.Description style={{ marginBottom: "20px" }}>
          <a href={aadharLink} target="_blank" rel="noreferrer">
            Aadhar Link
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

export default NewUserRequestCard;
