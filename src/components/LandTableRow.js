import React from "react";
import { Table } from "semantic-ui-react";

const LandTableRow = ({ request, index }) => {
//   const [landLink, setlandLink] = useState("");

//   useEffect(() => {
//     const generateLink = async () => {
//       const cid = request.land;
//       try {
//         const files = await retrieveFiles(cid);
//         if (files.length === 0) {
//           return toast.error("File not found");
//         }
//         const file = files[0];
//         const link = `https://${cid}.ipfs.w3s.link/${file.name}`;
//         setlandLink(link);
//       } catch (error) {
//         toast.error(error.message);
//         console.error(error);
//       }
//     };

//     generateLink();
//   }, [request.land]);

  return (
    <Table.Row>
      <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell>
        <a href={`https://${request.land}.ipfs.w3s.link`} target="_blank" rel="noreferrer">
          View Land
        </a>
      </Table.Cell>
      <Table.Cell>
        {!request.processed
          ? "Processing"
          : request.approved
          ? "Approved"
          : "Not Approved"}
      </Table.Cell>
      <Table.Cell>{request.note}</Table.Cell>
    </Table.Row>
  );
};

export default LandTableRow;
