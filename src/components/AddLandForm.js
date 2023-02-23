import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { requestNewLand } from "../utils/contractMethods";
import { toast } from "react-toastify";
import { storeFiles } from "../utils/web3.storage";

const AddLandForm = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const cid = await storeFiles(file);
      await requestNewLand(cid);
      setIsLoading(false);
      setFile(null);
      toast.success("Request submitted successfully!");
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Upload Land Paper</label>
        <input type="file" onChange={(e) => setFile(e.target.files)} />
      </Form.Field>
      <Button type="submit" loading={isLoading}>
        Submit
      </Button>
    </Form>
  );
};

export default AddLandForm;
