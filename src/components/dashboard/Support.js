import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../utils/Loader";
import { sendEmail } from "../../utils/Email";

const Support = () => {
  const [loading, setloading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userWalletAddress, setUserWalletAddress] = useState("");

  function hasWhiteSpace(s) {
    return /\s/g.test(s);
  }

  function validateEmail(email) {
    // regular expression to match the email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const sendEmailFunc = () => {
    if (userEmail === "" || userMessage === "" || userWalletAddress === "") {
      toast.error("Please fill all fields");
      return;
    } else if (
      userWalletAddress.length !== 42 ||
      hasWhiteSpace(userWalletAddress) === true
    ) {
      toast.error(
        "address should contain 42 chars. and \n should not contain space character in it"
      );
      return;
    } else if (validateEmail(userEmail) === false) {
      toast.error("Please insert valid email");
      return;
    }
    setloading(true);
    try {
      const userMessageString =
        userEmail +
        ", with wallet address " +
        userWalletAddress +
        ", send you the following message:\n\n" +
        userMessage;
      sendEmail(
        "adityasonawane2222@gmail.com",
        userMessageString,
        "user feedback-query"
      );

      sendEmail(
        userEmail,
        "Thank You for your feedback-query, we received your email, we will look into this issue and get back to you as soon as possible.",
        "CryptoBridge conformation email"
      );
      setloading(false);
      toast.success("Email successfully send");
    } catch (error) {
      setloading(false);
      console.log("email-error :" + error);
      toast.error("Try back after some time..");
    }
  };

  const clearStates = () => {
    setUserMessage("");
    setUserWalletAddress("");
    setUserEmail("");
  };

  return loading ? (
    <div className="w-full p-8 flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div className="relative mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#f4f4f4] rounded shadow-md pr-6 pb-6 h-[225px]">
          <h1 className="mt-8 text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
            Contact Us
          </h1>
          <div className="p-4">
            <p className="text-xl mb-2 font-bold">
              Enter Your Email{" "}
              <span className="italic text-slate-500 text-xs">
                For further communication
              </span>
            </p>

            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Enter Your Email"
              type="email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value.toLowerCase())}
              required
            />
          </div>
        </div>
        <div className="bg-[#f4f4f4] rounded shadow-md pr-6 pb-6 h-[225px]">
          <div className="p-4">
            <p className="text-xl mb-2 font-bold">
              Enter Your Wallet Address{" "}
              <span className="italic text-slate-500 text-xs">
                For extra support
              </span>
            </p>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Enter Your Wallet Address"
              type="text"
              name="willName"
              value={userWalletAddress}
              onChange={(e) =>
                setUserWalletAddress(e.target.value.toLowerCase())
              }
              required
            />
            <ul className="list-disc text-slate-500 text-sm italic p-4">
              <li>Verify that your wallet address is correct.</li>
              <li>Wallet address should contain 42 character</li>
              <li>Don not insert any space in the address value</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#f4f4f4] rounded shadow-md pr-6 pb-6 h-[225px]">
          <div className="p-4">
            <p className="text-xl mb-2 font-bold">Enter Message </p>
            <textarea
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Enter Your Query"
              name="email"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value.toLowerCase())}
              required
            />
            <ul className="list-disc text-slate-500 text-sm italic p-4">
              <li>Specify query faced by you</li>
              <li>Do not insert empty message.</li>
              <li>Please include module name in which you faced the query</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          className="cursor-pointer px-6 py-2 bg-[#220F68] text-white rounded-full font-bold mr-4 text-xl"
          onClick={sendEmailFunc}
        >
          Send Email
        </button>
        <button
          className="cursor-pointer px-6 py-2 border-2 border-red-500 text-red-500 rounded-full font-bold text-xl"
          onClick={clearStates}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Support;
