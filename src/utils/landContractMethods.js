import { ethers } from "ethers";
import { landContractABI, landContractAddress } from "./constants";
import { showError } from "./contractMethods";

const { ethereum } = window;

export const getLandContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const landContract = new ethers.Contract(
    landContractAddress,
    landContractABI,
    signer
  );

  return landContract;
};

export const getContactOwner = async () => {
  try {
    const landContract = getLandContract();
    const government = await landContract.contractOwner();
    return government;
  } catch (error) {
    showError(error);
  }
};

export const getClaimRequests = async () => {
  try {
    const landContract = getLandContract();
    const claimRequests = await landContract.getClaimRepository();
    return claimRequests;
  } catch (error) {
    showError(error);
  }
};

export const getUserWill = async (userAddress) => {
  try {
    const landContract = getLandContract();
    const userWill = await landContract.getWill(userAddress);
    return userWill;
  } catch (error) {
    showError(error);
  }
};

export const getOfficers = async () => {
  try {
    const landContract = getLandContract();
    const officers = await landContract.getClaimOfficers();
    return officers;
  } catch (error) {
    showError(error);
  }
};

export const addWill = async (
  willName,
  aadharLink,
  nomineeAadhar,
  landPhoto,
  landDoc,
  nominees
) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.addWill(
      willName,
      aadharLink,
      nomineeAadhar,
      landPhoto,
      landDoc,
      nominees,
      {
        gasLimit: 2000000,
      }
    );
    await tx.wait();
    return tx.hash;
  } catch (error) {
    showError(error);
  }
};

export const addWillWithDuration = async (
  willName,
  aadharLink,
  nomineeAadhar,
  landPhoto,
  landDoc,
  nominee,
  duration
) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.addWillWithDuration(
      willName,
      aadharLink,
      nomineeAadhar,
      landPhoto,
      landDoc,
      nominee,
      duration,
      {
        gasLimit: 2000000,
      }
    );
    await tx.wait();
    return tx.hash;
  } catch (error) {
    showError(error);
  }
};

export const executeWillThroughOfficer = async (
  userAddress,
  note,
  approved,
  index
) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.executeWillThroughOfficer(
      userAddress,
      note,
      approved,
      index,
      {
        gasLimit: 2000000,
      }
    );
    await tx.wait();
    return tx.hash;
  } catch (error) {
    showError(error);
  }
};

export const revokeWill = async (userAddress) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.revokeClaim(userAddress, {
      gasLimit: 2000000,
    });
    await tx.wait();
    return tx.hash;
  } catch (error) {
    showError(error);
  }
};

export const claimRequest = async (userAddress, claimDocument) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.claimRequest(userAddress, claimDocument, {
      gasLimit: 2000000,
    });
    await tx.wait();
    return tx.hash;
  } catch (error) {
    showError(error);
  }
};

export const addOfficer = async (officer) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.addOfficer(officer, {
      gasLimit: 2000000,
    });
    await tx.wait();
    return tx.hash;
  } catch (error) {
    showError(error);
  }
};
