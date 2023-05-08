import React from "react";
import create from "../../assets/images/create.svg";
import distribute from "../../assets/images/distribute.svg";
import manage from "../../assets/images/manage.svg";
import protect from "../../assets/images/protect.svg";
import bg from "../../assets/images/bg.webp";
// import metamask from "../../assets/images/metamask.png";
import InstallMetamask from "./InstallMetamask";
// import Products from "./Products";

const About = () => {
  return (
    <div className="w-4/5 mx-auto mb-8 text-center" id="about">
      <h1 className="text-white font-bold text-center text-5xl mb-8">
        About CryptoBridge
      </h1>
      <p
        className="text-white text-center text-2xl mb-4"
        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
      >
        Our platform provides a secure and convenient way to secure the transfer
        of your digital assets such as cryptocurrencies, digitalized land
        documents, vehicle documents, and other assets to your loved ones in a
        matter of minutes. We prioritize security and privacy, ensuring that
        your assets are protected throughout the transfer process.
      </p>
      <p
        className="text-white text-center text-2xl mb-16"
        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
      >
        At our core, we are committed to providing the highest level of customer
        satisfaction. We believe in transparency, efficiency, and a commitment
        to excellence in everything we do. With our platform, you can enjoy
        peace of mind knowing that your assets are in safe hands.
      </p>
      <iframe
        width="797"
        height="498"
        src="https://www.youtube.com/embed/BcSxl-1dNl0"
        title="BE project"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="my-8 mx-auto"
      ></iframe>
      {/* <p
        className="text-white text-center text-2xl mb-4"
        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
      >
        Metamask Wallet is required for using our App
      </p>
      <p
        className="text-white text-center text-2xl mb-4"
        style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
      >
        In Case you don't have Metamask Wallet and want to Know more about it
      </p>
      <button className="bg-white rounded-md mx-auto mb-8">
        <a href="https://metamask.io" target="_blank" rel={"noreferrer"} className="flex px-4 py-2 font-bold">
          <img
            src={metamask}
            alt="metamask"
            height={25}
            width={25}
            className="mr-1"
          />{" "}
          Install Metamask
        </a>
      </button> */}
      <div className="grid grid-cols-3 grid-rows-4 relative gap-4 z-10 mb-16">
        <div className="col-start-1 col-end-2 row-start-2 row-end-4 flex flex-col items-center relative min-w-[380px] p-8 rounded-2xl border border-solid bg-white z-10">
          <div className="h-[80px] w-[80px] mb-4 bg-[#ebf0fe] flex justify-center items-center rounded-xl">
            <img src={create} alt="create" />
          </div>
          <span className="text-slate-500">Step 1</span>
          <h5
            className="text-xl font-bold text-center"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            Create Digital Assets
          </h5>
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-3 flex flex-col items-center relative min-w-[380px] p-8 rounded-2xl border border-solid bg-white z-10">
          <div className="h-[80px] w-[80px] mb-4 bg-[#ebf0fe] flex justify-center items-center rounded-xl">
            <img src={distribute} alt="distribute" />
          </div>
          <span className="text-slate-500">Step 2</span>
          <h5
            className="text-xl font-bold text-center"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            Add Assets and Nominees to our Platform
          </h5>
        </div>
        <div className="col-start-3 col-end-4 row-start-2 row-end-4 flex flex-col items-center relative min-w-[380px] p-8 rounded-2xl border border-solid bg-white z-10">
          <div className="h-[80px] w-[80px] mb-4 bg-[#ebf0fe] flex justify-center items-center rounded-xl">
            <img src={manage} alt="manage" />
          </div>
          <span className="text-slate-500">Step 3</span>
          <h5
            className="text-xl font-bold text-center"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            Nominees Claim Assets and Officer Reviews Claims
          </h5>
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-5 flex flex-col items-center relative min-w-[380px] p-8 rounded-2xl border border-solid bg-white z-10">
          <div className="h-[80px] w-[80px] mb-4 bg-[#ebf0fe] flex justify-center items-center rounded-xl">
            <img src={protect} alt="protect" />
          </div>
          <span className="text-slate-500">Step 4</span>
          <h5
            className="text-xl font-bold text-center"
            style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
          >
            Funds Distributed to Nominees Automatically or through Officer
          </h5>
        </div>
        <img
          src={bg}
          alt="bg"
          className="absolute max-w-full max-h-full top-4 bottom-0 right-0 left-48 z-0"
        />
      </div>
      {/* <Products /> */}
      <InstallMetamask />
    </div>
  );
};

export default About;
