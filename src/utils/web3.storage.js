import { Web3Storage } from "web3.storage";

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGM1NWMxOGYyRjVBMjZiYjE5QmU0Y2E4Q0Q5NTc3Mjg3NTM0NjNmNTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY2OTc2OTY0MTYsIm5hbWUiOiJiZS1wcm9qZWN0In0.ekje6WuVLHjdy1pdW4071MaCjUbQp4aPU91o0GzvRUw";
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export const storeFiles = async (files) => {

  try {
    const client = makeStorageClient();
    const cid = await client.put(files);
    // console.log("stored files with cid:", cid);
    return cid;
  } catch (error) {
    console.log(error.message);
  }
};

export const retrieveFiles = async (cid) => {
  try {
    const client = makeStorageClient();
    const res = await client.get(cid);
    // console.log(`Got a response! [${res.status}] ${res.statusText}`);
    if (!res.ok) {
      throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`);
    }
  
    // unpack File objects from the response
    const files = await res.files();
    return files;
    
  } catch (error) {
    console.log(error.message);
  }
};
