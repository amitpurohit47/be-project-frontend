import React, { useContext, useState } from "react";
import { CryptoContext } from "../../../context/CryptoContext";
import { addWillWithDuration, showError } from "../../../utils/contractMethods";
import { storeFiles } from "../../../utils/web3.storage";
import { toast } from "react-toastify";
import Loader from "../../utils/Loader";
import { sendEmail } from "../../../utils/Email"; 

const CreateCryptoContract = ({ setisWillCreated }) => {
  const [willName, setwillName] = useState("");
  const [amount, setamount] = useState("");
  const [deadline, setdeadline] = useState(0);
  const [email, setemail] = useState("");
  const [file, setfile] = useState(null);
  const [nominees, setnominees] = useState([""]);
  const [nomineesEmail, setnomineesEmail] = useState([
    {
      nominee: "",
      nomineeEmail: "",
      file: null,
    },
  ]);
  const [loading, setloading] = useState(false);

  const { currentAccount } = useContext(CryptoContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const cid = await storeFiles(file);
      const ipfsLink = `https://${cid}.ipfs.w3s.link/${file[0].name}`;
      // const ipfsLink = "";
      const duration = parseInt(deadline);
      const nomineesPromise = Promise.allSettled(
        nomineesEmail.map(async (nominee) => {
          const id = await storeFiles(nominee.file);
          const link = `https://${id}.ipfs.w3s.link/${nominee.file[0].name}`;
          return link;
        })
      );
      const nomineesResults = await nomineesPromise;
      const nomineeAadhar = nomineesResults
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);
      // console.log(nomineeAadhar);
      const contractCreatorA = ["0x4704FD648f343bE8f3DF2Ce91463D2d16423CFc8", "aditya@gmail.com", "yash gaikawad", "123243216545"]
      const emailA = ["adi@gmail.com"]
      const nameA = ["rutuja"]
      const adharA = ["2375567875454"]
      const tx = await addWillWithDuration(
        willName,
        ipfsLink,
        nominees,
        nomineeAadhar,
        amount,
        duration,
        contractCreatorA,
        emailA,
        nameA,
        adharA
      );
      if (tx) {
        nomineesEmail.forEach((mail) =>
          sendEmail(
            mail.nomineeEmail,
            `You have been added as a nominee by ${currentAccount} for Crypto Assets. You can claim the assets using valid proof or the assets will be transferred to you automatically`,
            "Nominee Addition"
          )
        );
        sendEmail(
          email,
          `Your Will of ${amount} Eth is created successfully`,
          "Will Creation"
        );
        toast.success("Will Added Successfully");
        setisWillCreated(true);
      }
    } catch (error) {
      showError(error);
    }
    setnominees([""]);
    setnomineesEmail([
      {
        nominee: "",
        nomineeEmail: "",
        file: null
      },
    ]);
    setamount("");
    setfile(null);
    setwillName("");
    setdeadline(0);
    setloading(false);
  };

  return (
    <div className="relative mt-4">
      {loading && (
        <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-slate-100 bg-opacity-20">
          <Loader />
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#f4f4f4] rounded shadow-md pr-6 pb-6 h-[225px]">
          <h1 className="mt-8 text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
            Will Contract
          </h1>
          <div className="p-4">
            <p className="text-xl mb-2 font-bold">
              Enter Will Name{" "}
              <span className="italic text-slate-500 text-xs">
                Add Name of the Will you wish to make
              </span>
            </p>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Enter Will Name"
              type="text"
              name="willName"
              value={willName}
              onChange={(e) => setwillName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="bg-[#f4f4f4] rounded shadow-md pr-6 pb-6 h-[225px]">
          <div className="p-4">
            <p className="text-xl mb-2 font-bold">
              Your User Address{" "}
              <span className="italic text-slate-500 text-xs">
                Your public crypto account address
              </span>
            </p>
            <p>{currentAccount}</p>
          </div>
          <div className="p-4">
            <p className="text-xl mb-2 font-bold">
              Enter Your Email{" "}
              <span className="italic text-slate-500 text-xs">
                To inform you about your will creation
              </span>
            </p>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Enter Your Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-[#f4f4f4] rounded shadow-md pr-6 pb-6 h-[225px]">
          <div className="p-4">
            <p className="text-xl mb-2 font-bold">
              Enter Amount in Eth{" "}
              <span className="italic text-slate-500 text-xs">
                Amount of Eth to Deposit in Will
              </span>
            </p>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Enter Amount in Eth"
              type="text"
              name="amount"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              required
            />
          </div>
          <div className="p-4">
            <p className="text-xl mb-2 font-bold">
              Upload Aadhar{" "}
              <span className="italic text-slate-500 text-xs">
                Used to verify your identity during claim
              </span>
            </p>
            <input
              type="file"
              className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                      "
              onChange={(e) => setfile(e.target.files)}
              required
            />
          </div>
        </div>
        <div className="bg-[#f4f4f4] rounded shadow-md pr-6 pb-6 h-[225px]">
          <div className="p-4">
            <p className="text-xl mb-2 font-bold">
              Enter Execution Duration of Will{" "}
            </p>
            <select
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              value={deadline}
              onChange={(e) => setdeadline(e.target.value)}
            >
              <option value={60 * 5}>5 minutes</option>
              <option value={60 * 15}>15 minutes</option>
              <option value={60 * 60 * 24 * 30 * 3}>3 Months</option>
              <option value={60 * 60 * 24 * 30 * 6}>6 Months</option>
              <option value={60 * 60 * 24 * 30 * 12}>1 Year</option>
              <option value={60 * 60 * 24 * 30 * 60}>5 Years</option>
              <option value={60 * 60 * 24 * 30 * 120}>10 Years</option>
              <option value={60 * 60 * 24 * 30 * 180}>15 Years</option>
              <option value={60 * 60 * 24 * 30 * 240}>20 Years</option>
            </select>
            <ul className="list-disc text-slate-500 text-sm italic p-4">
              <li>
                Specifies time period after which Contract will be executed
              </li>
              <li>
                After specified period contract amount will be transferred to
                nominees equally
              </li>
              <li>
                Carefully Check duration since it cannot be changed once will is
                created
              </li>
            </ul>
          </div>
        </div>
        {nomineesEmail.map((nominee, i) => (
          <div
            className="bg-[#f4f4f4] rounded shadow-md pr-6 pb-6 h-[340px]"
            key={`nominee${i}`}
          >
            <div className="px-4 pt-4">
              <p className="text-xl mb-2 font-bold">
                Enter Nominee {i + 1} Address
                <span className="italic text-slate-500 text-xs">
                  {" "}
                  Public address to transfer will amount
                </span>
              </p>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Enter Nominee Address"
                type="text"
                name="nominee address"
                value={nominee.nominee}
                required
                onChange={(e) => {
                  const newNominees = [...nominees];
                  const newNomineesEmail = [...nomineesEmail];
                  newNominees[i] = e.target.value;
                  newNomineesEmail[i].nominee = e.target.value;
                  setnominees(newNominees);
                  setnomineesEmail(newNomineesEmail);
                }}
              />
            </div>
            <div className="px-4 pt-2">
              <p className="text-xl mb-2 font-bold">
                Enter Nominee {i + 1} Email
                <span className="italic text-slate-500 text-xs">
                  {" "}
                  Intimate Nominee of Will Creation
                </span>
              </p>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Enter Nominee Email"
                type="email"
                name="nominee email"
                value={nomineesEmail[i].nomineeEmail}
                onChange={(e) => {
                  const newNomineesEmail = [...nomineesEmail];
                  newNomineesEmail[i].nomineeEmail = e.target.value;
                  setnomineesEmail(newNomineesEmail);
                }}
              />
            </div>
            <div className="p-4">
              <p className="text-xl mb-2 font-bold">
                Upload Aadhar{" "}
                <span className="italic text-slate-500 text-xs">
                  Used to verify your identity for will creation
                </span>
              </p>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                      "
                onChange={(e) => {
                  const noms = [...nomineesEmail];
                  noms[i].file = e.target.files;
                  setnomineesEmail(noms);
                }}
                required
              />
            </div>
            <p
              className="px-4 py-1 border-2 border-violet-700 rounded-full ml-4 mt-2 w-fit cursor-pointer text-violet-700 font-bold"
              onClick={() => {
                const newNominees = [...nominees];
                const newNomineesEmail = [...nomineesEmail];
                newNominees.push("");
                newNomineesEmail.push({
                  nominee: "",
                  nomineeEmail: "",
                  file: null,
                });
                setnominees(newNominees);
                setnomineesEmail(newNomineesEmail);
              }}
            >
              ⨁ Add Nominee
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button
          className="cursor-pointer px-6 py-2 bg-[#220F68] text-white rounded-full font-bold mr-4 text-xl"
          onClick={handleSubmit}
        >
          Create Will
        </button>
        <button
          className="cursor-pointer px-6 py-2 border-2 border-red-500 text-red-500 rounded-full font-bold text-xl"
          onClick={() => {
            setamount("");
            setdeadline(0);
            // setfile(null);
            setemail("");
            setnominees([]);
            setnomineesEmail([
              {
                nominee: "",
                nomineeEmail: "",
              },
            ]);
            setwillName("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CreateCryptoContract;
