import React from "react";
import metamaskLogo from "../../assets/images/metamask.png";
import ss0 from "../../assets/images/ss0.png";
import ss1 from "../../assets/images/ss1.png";
import ss2 from "../../assets/images/ss2.png";
import ss3 from "../../assets/images/ss3.png";
import ss4 from "../../assets/images/ss4.png";
import ss5 from "../../assets/images/ss5.png";
import ss6 from "../../assets/images/ss6.png";
import ss7 from "../../assets/images/ss7.png";
import ss8 from "../../assets/images/ss8.png";
import ss9 from "../../assets/images/ss9.png";

const InstallMetamask = () => {
  return (
    <div
      className="bg-white p-8 rounded-lg shadow-md my-16 text-left"
      id="metamask"
    >
      <img
        src={metamaskLogo}
        alt="metamask logo"
        className="w-20 mx-auto mb-4"
      />
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        How to Install Metamask
      </h2>
      <div style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
        <div className="mb-4">
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 1:</p>
          <p className="ml-6 font-semibold text-lg">
            Go to{" "}
            <a
              href="https://chrome.google.com/webstore/category/extensions"
              target="_blank"
              rel="noreferrer"
            >
              Chrome Web Store Extensions Section
            </a>
            .
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 2:</p>
          <p className="ml-6 font-semibold text-lg">Search MetaMask.</p>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 3:</p>
          <p className="ml-6 font-semibold text-lg">
            Check the number of downloads to make sure that the legitimate
            MetaMask is being installed, as hackers might try to make clones of
            it.{" "}
          </p>
          <img className="my-4 max-h-[500px]" src={ss0} alt="ss0" />
        </div>
        <div className="mb-4">
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 4:</p>
          <p className="ml-6 font-semibold text-lg">
            Click the Add to Chrome button.
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 5:</p>
          <p className="ml-6 font-semibold text-lg">
            Once installation is complete this page will be displayed. Click on
            the Get Started button.
          </p>
          <img className="my-4 max-h-[500px]" src={ss1} alt="ss1" />
        </div>
        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 6:</p>
          <p className="ml-6 font-semibold text-lg">
            This is the first time creating a wallet, so click the Create a
            Wallet button. If there is already a wallet then import the already
            created using the Import Wallet button.
          </p>
          <img className="my-4 max-h-[500px]" src={ss2} alt="ss2" />
        </div>
        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 7:</p>
          <p className="ml-6 font-semibold text-lg">
            Click I Agree button to allow data to be collected to help improve
            MetaMask or else click the No Thanks button. The wallet can still be
            created even if the user will click on the No Thanks button.
          </p>
          <img className="my-4 max-h-[500px]" src={ss3} alt="ss3" />
        </div>
        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 8:</p>
          <p className="ml-6 font-semibold text-lg">
            Create a password for your wallet. This password is to be entered
            every time the browser is launched and wants to use MetaMask. A new
            password needs to be created if chrome is uninstalled or if there is
            a switching of browsers. In that case, go through the Import Wallet
            button. This is because MetaMask stores the keys in the browser.
            Agree to Terms of Use.
          </p>
          <img className="my-4 max-h-[500px]" src={ss4} alt="ss4" />
        </div>
        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 9:</p>
          <p className="ml-6 font-semibold text-lg">
            Click on the dark area which says Click here to reveal secret words
            to get your secret phrase.
          </p>
        </div>
        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 10:</p>
          <p className="ml-6 font-semibold text-lg">
            This is the most important step. Back up your secret phrase
            properly. Do not store your secret phrase on your computer. Please
            read everything on this screen until you understand it completely
            before proceeding. The secret phrase is the only way to access your
            wallet if you forget your password. Once done click the Next button.
          </p>
          <img className="my-4 max-h-[500px]" src={ss5} alt="ss5" />
        </div>
        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 11:</p>
          <p className="ml-6 font-semibold text-lg">
            Click the buttons respective to the order of the words in your seed
            phrase. In other words, type the seed phrase using the button on the
            screen. If done correctly the Confirm button should turn blue.
          </p>
          <img className="my-4 max-h-[500px]" src={ss6} alt="ss6" />
        </div>
        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 12:</p>
          <p className="ml-6 font-semibold text-lg">
            Click the Confirm button. Please follow the tips mentioned.
          </p>
          <img className="my-4 max-h-[500px]" src={ss7} alt="ss" />
        </div>
        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 13:</p>
          <p className="ml-6 font-semibold text-lg">
            One can see the balance and copy the address of the account by
            clicking on the Account 1 area.
          </p>
          <img className="my-4 max-h-[500px]" src={ss8} alt="ss" />
        </div>
        <div>
          <p className="mb-2 text-gray-600 font-bold text-2xl">Step 14:</p>
          <p className="ml-6 font-semibold text-lg">
            One can access MetaMask in the browser by clicking the Foxface icon
            on the top right. If the Foxface icon is not visible, then click on
            the puzzle piece icon right next to it.
          </p>
          <img className="my-4 max-h-[500px]" src={ss9} alt="ss" />
        </div>
        <p className="text-gray-600 text-2xl mt-4 text-center">
          If you have any issues or questions, check out the{" "}
          <a
            href="https://metamask.zendesk.com/hc/en-us"
            className="italic text-[#6da3ff] underline"
            target="_blank"
            rel="noreferrer"
          >
            Metamask support page
          </a>{" "}
          for more information.
        </p>
      </div>
    </div>
  );
};

export default InstallMetamask;
