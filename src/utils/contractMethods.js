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
    console.log(error);
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

export const getManager = async () => {
  try {
    const landContract = getLandContract();
    const manager = await landContract.manager();
    return manager.toLowerCase();
  } catch (error) {
    console.log(error);
  }
};

export const getLandOfficer = async () => {
  try {
    const landContract = getLandContract();
    const landOfficer = await landContract.landOfficer();
    return landOfficer.toLowerCase();
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (address) => {
  try {
    const landContract = getLandContract();
    const userInfo = await landContract.getUserInfo(address);
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};

export const checkUser = async (address) => {
  try {
    const userInfo = await getUserInfo(address);
    const int = parseInt(userInfo.userAddress);
    return int !== 0;
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const requestNewUser = async (aadhar, nominee) => {
  try {
    const landContract = getLandContract();
    const tx = await landContract.requestNewUser(aadhar, nominee);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.log(error);
  }
};

export const getAllNewUserRequests = async () => {
  try {
    const landContract = getLandContract();
    const requests = await landContract.getNewUserRequests();
    return requests;
  } catch (error) {
    console.log(error);
  }
};
