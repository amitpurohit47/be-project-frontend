import React from "react";
import ClaimCrypto from "./ClaimCrypto";
import CreateCryptoContract from "./CreateCryptoContract";
import NomineeClaimRequests from "./NomineeClaimRequests";
import OfficerClaimRequests from "./OfficerClaimRequests";
import ViewCryptoContract from "./ViewCryptoContract";

const Crypto = () => {
  
  return (
    <div>
      <ClaimCrypto />
      <OfficerClaimRequests />
      <NomineeClaimRequests />
      <ViewCryptoContract />
      <CreateCryptoContract />
    </div>
  );
};

export default Crypto;
