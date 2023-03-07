import React, { useState } from "react";
import { toast } from "react-toastify";
import PrimaryButton from "../utils/PrimaryButton";

const CreateContract = () => {
  const [nominees, setnominees] = useState([""]);
  const [amount, setamount] = useState("");
  const [file, setfile] = useState(null);
  const [willName, setwillName] = useState("");
  const [years, setyears] = useState("");

  const handleSubmit = async (e) => {
    try {
    } catch (error) {
      console.log(error);
      toast.error("Oops! There was an error");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundColor: "rgba(34,15,104,255)",
      }}
    >
      <div className="flex items-center justify-center w-4/5">
        <div>
          <h1 className="text-4xl text-white font-bold mb-4">Instructions</h1>
          <ul className="list-disc text-white text-2xl">
            <li className="mb-2">Add Name of the Will you wish to make</li>
            <li className="mb-2">
              Enter the amount in ether to deposit in the will
            </li>
            <li className="mb-2">
              Add list of Nominees you want to transfer your will
            </li>
            <li className="mb-2">
              If you wish you can add the time period after which you wish to
              automatically transfer your crypto
            </li>
            <li className="mb-2">Upload Aadhar card in PDF format</li>
            <li className="mb-2">Verify Information carefully before creating contract</li>
            <li className="mb-2">Contract once deployed cannot be revoked in any case</li>
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className="shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
          style={{ background: "rgb(4, 0, 77)" }}
        >
          <div class="mb-4">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="willname"
            >
              Will Name*
            </label>
            <input
              class="shadow appearance-none border-none outline-none rounded w-full py-2 px-3 text-white mb-3 leading-tight"
              id="willname"
              type="text"
              placeholder="Will Name"
              style={{ background: "rgb(59, 42, 142)" }}
              value={willName}
              onChange={(e) => setwillName(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2" for="amount">
              Amount in Ether*
            </label>
            <input
              class="shadow appearance-none border-none outline-none rounded w-full py-2 px-3 text-white mb-3 leading-tight"
              id="amount"
              type="text"
              placeholder="Amount in ether"
              style={{ background: "rgb(59, 42, 142)" }}
              required
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor={`nominee0`}
              className="block text-white text-sm font-bold mb-2"
            >
              Nominees*
            </label>
            {nominees.map((nominee, i) => (
              <input
                class="shadow appearance-none border-none outline-none rounded w-full py-2 px-3 text-white mb-3 leading-tight"
                id={`nominee${i}`}
                type="text"
                placeholder={`Nominee ${i + 1}`}
                style={{ background: "rgb(59, 42, 142)" }}
                value={nominee}
                onChange={(e) => {
                  const newNominees = [...nominees];
                  newNominees[i] = e.target.value;
                  setnominees(newNominees);
                }}
              />
            ))}
            <p
              className="text-white text-sm cursor-pointer font-bold"
              onClick={() => {
                const newNominees = [...nominees];
                newNominees.push("");
                setnominees(newNominees);
              }}
            >
              + Add a Nominee
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="years"
              className="block text-white text-sm font-bold mb-2"
            >
              Time Period of Will in Years(Optional)
            </label>
            <input
              type="text"
              name="years"
              id="years"
              className="appearance-none border-none outline-none text-white rounded w-full py-2 px-3 leading-tight"
              style={{ background: "rgb(59, 42, 142)" }}
              value={years}
              onChange={(e) => setyears(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="aadhar-card-pdf"
              className="block text-white text-sm font-bold mb-2"
            >
              Aadhar Card PDF*:
            </label>
            <input
              type="file"
              id="aadhar-card-pdf"
              name="aadharCardPdf"
              className="appearance-none border-none outline-none text-white rounded w-full py-2 px-3 leading-tight"
              style={{ background: "rgb(59, 42, 142)" }}
              required
              value={file}
              onChange={(e) => setfile(e.target.files[0])}
            />
          </div>
          <div class="flex items-center justify-between">
            <PrimaryButton>Create</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContract;
