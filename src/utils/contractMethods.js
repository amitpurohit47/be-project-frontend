import { ethers } from "ethers";
import { toast } from "react-toastify";
import { contractABI, contractAddress } from "../utils/constants";

const { ethereum } = window;

export const connectWallet = async () => {
  try {
    if (!ethereum) return toast.error("Please Install Metamask!");

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const getLandContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const landContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return landContract;
};

export const getAddress = async () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  console.log(address);
};

export const getManager = async () => {
  try {
    const landContract = getLandContract();
    const manager = await landContract.manager();
    return manager.toLowerCase();
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const getLandOfficer = async () => {
  try {
    const landContract = getLandContract();
    const landOfficer = await landContract.landOfficer();
    return landOfficer.toLowerCase();
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const getUserInfo = async (address) => {
  try {
    const landContract = getLandContract();
    const userInfo = await landContract.userInfo(address);
    return userInfo;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const checkUser = async (address) => {
  try {
    const userInfo = await getUserInfo(address);
    const int = parseInt(userInfo.userAddress);
    return int !== 0;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const getAllUserNewUserRequests = async (address) => {
  try {
    const landContract = getLandContract();
    const openNewUserRequests = await landContract.getOpenNewUserRequests(
      address
    );
    return openNewUserRequests;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const requestNewUser = async (aadhar, nominee) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.requestNewUser(aadhar, nominee);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const getAllNewUserRequests = async () => {
  try {
    const landContract = getLandContract();
    const requests = await landContract.getNewUserRequests();
    return requests;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const getOpenNewUserRequests = async (address) => {
  try {
    const landContract = getLandContract();
    const requests = await landContract.getOpenNewUserRequests(address);
    return requests;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const verifyNewUser = async (reqInd, approved, note) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.verifyNewUser(reqInd, approved, note, {
      gasLimit: 2000000,
    });
    await tx.wait();
    return tx.hash;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const requestNewLand = async (cid) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.requestNewLand(cid);
    tx.wait();
    return tx.hash;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const getUserLands = async (address) => {
  try {
    const landContract = getLandContract();
    const requests = await landContract.getUserLands(address);
    return requests;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const getOpenAddLandRequest = async (address) => {
  try {
    const landContract = getLandContract();
    const requests = await landContract.getOpenAddLandRequest(address);
    return requests;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const getAllAddLandRequests = async () => {
  try {
    const landContract = getLandContract();
    const requests = await landContract.getAddLandRequests();
    return requests;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};

export const verifyNewLand = async (reqInd, approved, note) => {
  try {
    const landContract = getLandContract();
    console.log(reqInd, approved, note);
    const tx = await landContract.verifyAddLandRequest(reqInd, approved, note, {
      gasLimit: 2000000,
    });
    await tx.wait();
    return tx.hash;
  } catch (error) {
    toast.error("Oops! Therse was some error!");
    console.error(error);
  }
};
