import React, { useState } from "react";
import { toast } from "react-toastify";
import { addWill, showError } from "../../utils/contractMethods";
import { storeFiles } from "../../utils/web3.storage";
import Loader from "../utils/Loader";
import PrimaryButton from "../utils/PrimaryButton";

const CreateContract = () => {
  const [nominees, setnominees] = useState([""]);
  const [amount, setamount] = useState("");
  const [file, setfile] = useState(null);
  const [willName, setwillName] = useState("");
  const [years, setyears] = useState(0);
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const cid = await storeFiles(file);
      const ipfsLink = `https://${cid}.ipfs.w3s.link/${file[0].name}`;
      // const ipfsLink = "";
      const duration = parseInt(years);
      const tx = await addWill(willName, ipfsLink, nominees, amount);
      if ( tx ) toast.success("Will Added Successfully");
    } catch (error) {
      showError(error);
    }
    setnominees([""]);
    setamount("");
    setfile(null);
    setwillName("");
    setyears(0);
    setloading(false);
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
              Add list of Nominees(Address) you want to transfer your will
            </li>
            <li className="mb-2">
              If you wish you can add the time period after which you wish to
              automatically transfer your crypto
            </li>
            <li className="mb-2">Upload Aadhar card in PDF format</li>
            <li className="mb-2">
              Verify Information carefully before creating contract
            </li>
            <li className="mb-2">
              Contract once deployed cannot be revoked in any case
            </li>
            <li className="mb-2">
              Contract will be executed once the deadline is met or nominees
              claim using proof of death
            </li>
          </ul>
        </div>
        {loading ? (
          <div
            style={{ background: "rgb(4, 0, 77)" }}
            className="flex items-center justify-center shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
          >
            <Loader />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
            style={{ background: "rgb(4, 0, 77)" }}
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="willname"
              >
                Will Name
              </label>
              <input
                className="shadow appearance-none border-none outline-none rounded w-full py-2 px-3 text-white mb-3 leading-tight"
                id="willname"
                type="text"
                placeholder="Will Name"
                style={{ background: "rgb(59, 42, 142)" }}
                value={willName}
                onChange={(e) => setwillName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="amount"
              >
                Amount in Ether
              </label>
              <input
                className="shadow appearance-none border-none outline-none rounded w-full py-2 px-3 text-white mb-3 leading-tight"
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
                Nominee Address
              </label>
              {nominees.map((nominee, i) => (
                <input
                  className="shadow appearance-none border-none outline-none rounded w-full py-2 px-3 text-white mb-3 leading-tight"
                  id={`nominee${i}`}
                  key={`nominee${i}`}
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
                Time Period of Will
              </label>
              <div className="relative inline-block w-full">
                <select
                  className="block appearance-none border-none outline-none w-full text-white py-2 px-3 pr-8 rounded leading-tight"
                  style={{ background: "rgb(59, 42, 142)" }}
                  id="years"
                  value={years}
                  onChange={(e) => setyears(e.target.value)}
                >
                  <option value="">Select a time period</option>
                  <option value={2 * 60}>2 minutes</option>
                  <option value={3 * 30 * 24 * 60 * 60}>3 months</option>
                  <option value={6 * 30 * 24 * 60 * 60}>6 months</option>
                  <option value={1 * 365 * 24 * 60 * 60}>1 year</option>
                  <option value={5 * 365 * 24 * 60 * 60}>5 years</option>
                  <option value={10 * 365 * 24 * 60 * 60}>10 years</option>
                  <option value={20 * 365 * 24 * 60 * 60}>20 years</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 fill-current text-white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="aadhar-card-pdf"
                className="block text-white text-sm font-bold mb-2"
              >
                Aadhar Card PDF:
              </label>
              <input
                type="file"
                id="aadhar-card-pdf"
                name="aadharCardPdf"
                className="appearance-none border-none outline-none text-white rounded w-full py-2 px-3 leading-tight"
                style={{ background: "rgb(59, 42, 142)" }}
                required
                onChange={(e) => setfile(e.target.files)}
              />
            </div>
            <div className="flex items-center justify-between">
              <PrimaryButton>Create</PrimaryButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateContract;
