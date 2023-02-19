import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { requestNewUser } from "../utils/contractMethods";
import { toast } from "react-toastify";
import { storeFiles } from "../utils/web3.storage";

const NewUserForm = () => {
  const [nomineeAddress, setNomineeAddress] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const tx = localStorage.getItem("requestNewUser");

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const cid = await storeFiles(file);
      const tx = await requestNewUser(cid, nomineeAddress);
      localStorage.setItem("requestNewUser", tx);
      console.log(tx);
      setIsLoading(false);
      setNomineeAddress("");
      setFile(null);
      toast.success("Request submitted successfully!");
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return !tx ? (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Nominee Address</label>
        <input
          type="text"
          placeholder="Nominee Address"
          value={nomineeAddress}
          onChange={(e) => setNomineeAddress(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Aadhar Card</label>
        <input type="file" onChange={(e) => setFile(e.target.files)} />
      </Form.Field>
      <Button type="submit" loading={isLoading}>
        Submit
      </Button>
    </Form>
  ) : (
    <p>We are processing your request</p>
  );
};

export default NewUserForm;
