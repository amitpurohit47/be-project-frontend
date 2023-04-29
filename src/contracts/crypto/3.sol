// SPDX-License-Identifier: MIT

pragma solidity >=0.8.2 <0.9.0;

contract CryptoWillContract {
    struct UserWills {
        string willName;
        address userAddress;
        uint amount;
        address payable[] nomineeAddress;
        bool completed;
        uint deadLine;
        string IpfsAdharLink;
        string[] IpfsNomineeAdharLink;
    }
    //default value of processed is false, i.e. officer does not processed it
    struct ClaimRequests {
        address nomineeAddress;
        address userAddress;
        string note;
        string IpfsClaimLink;
        bool processed;
        bool isApproved;
    }

    struct ClaimOfficer {
        address officerAddress;
        string officerName;
        string officerAdharNo;
    }

    mapping(address => UserWills) public willRepository;
    ClaimRequests[] public claimRepository;
    address[] public userRepository;
    ClaimOfficer[] public claimOfficers;
    address public contractOwner;

    event printLog(string message);

    constructor(address contractOwnerAddress) {
        contractOwner = contractOwnerAddress;
    }

    modifier restrictedOfficer() {
        for (uint i = 0; i < claimOfficers.length; i++) {
            if (claimOfficers[i].officerAddress == msg.sender) {
                _;
                break;
            }
        }
    }

    modifier restrictedContractOwner() {
        require(msg.sender == contractOwner, "You are not contract owner");
        _;
    }

    function getTotalCollection() public view returns (uint) {
        return address(this).balance;
    }

    function getWill(
        address userAddress
    ) public view returns (UserWills memory) {
        return willRepository[userAddress];
    }

    function getClaimRepository() public view returns (ClaimRequests[] memory) {
        return claimRepository;
    }

    function getClaimRepositoryLength() public view returns (uint) {
        return claimRepository.length;
    }

    function getUserRepository() public view returns (address[] memory) {
        return userRepository;
    }

    function getClaimOfficers() public view returns (ClaimOfficer[] memory) {
        return claimOfficers;
    }

    function getClaimOfficersLength() public view returns (uint) {
        return claimOfficers.length;
    }

    function addOfficer(
        address officerAddressArg,
        string memory officerNameArg,
        string memory officerAdharArg
    ) public restrictedContractOwner {
        bool flag = false;
        for (uint i = 0; i < claimOfficers.length; i++) {
            //i.e. user already exists
            if (claimOfficers[i].officerAddress == officerAddressArg) {
                flag = true;
                break;
            }
        }
        require(flag == false, "officer already exists");
        ClaimOfficer memory newOfficer = ClaimOfficer({
            officerAddress: officerAddressArg,
            officerName: officerNameArg,
            officerAdharNo: officerAdharArg
        });
        claimOfficers.push(newOfficer);
    }

    function addWill(
        string memory willNameArg,
        string memory IpfsAdharLinkArg,
        string[] memory IpfsNomineeAdharLinkArg,
        address payable[] memory nomineeAddressArg
    ) public payable {
        require(
            willRepository[msg.sender].userAddress == address(0),
            "will already created"
        );
        require(msg.value > 0, "value should be grater than 0");
        UserWills memory user = UserWills({
            willName: willNameArg,
            userAddress: msg.sender,
            amount: msg.value,
            completed: false,
            nomineeAddress: nomineeAddressArg,
            deadLine: 0,
            IpfsAdharLink: IpfsAdharLinkArg,
            IpfsNomineeAdharLink: IpfsNomineeAdharLinkArg
        });

        willRepository[msg.sender] = user;
        userRepository.push(msg.sender);
        emit printLog("New user 'will' successfully added");
    }

    //add deadline in seconds
    function addWillWithDuration(
        string memory willNameArg,
        string memory IpfsAdharLinkArg,
        string[] memory IpfsNomineeAdharLinkArg,
        address payable[] memory nomineeAddressArg,
        uint deadLineArg
    ) public payable {
        require(
            willRepository[msg.sender].userAddress == address(0),
            "will already created"
        );
        require(msg.value > 0, "value should be grater than 0");
        UserWills memory user = UserWills({
            willName: willNameArg,
            userAddress: msg.sender,
            amount: msg.value,
            completed: false,
            nomineeAddress: nomineeAddressArg,
            deadLine: deadLineArg + block.timestamp,
            IpfsAdharLink: IpfsAdharLinkArg,
            IpfsNomineeAdharLink: IpfsNomineeAdharLinkArg
        });
        willRepository[msg.sender] = user;
        userRepository.push(msg.sender);
        emit printLog("New user 'will' successfully added");
    }

    function autoExecuteWill() public payable {
        for (uint i = 0; i < userRepository.length; i++) {
            if (
                willRepository[userRepository[i]].deadLine < block.timestamp &&
                willRepository[userRepository[i]].completed == false &&
                willRepository[userRepository[i]].deadLine != 0
            ) {
                uint nomineeAddressLength = willRepository[userRepository[i]]
                    .nomineeAddress
                    .length;
                uint totalAmount = willRepository[userRepository[i]].amount /
                    nomineeAddressLength;
                //transfering assets to all nominees
                for (uint j = 0; j < nomineeAddressLength; j++) {
                    willRepository[userRepository[i]]
                        .nomineeAddress[j]
                        .transfer(totalAmount);
                }
                willRepository[userRepository[i]].completed = true;
            }
        }
        emit printLog("Will executed automaticaly");
    }

    function executeWillThroughOfficer(
        address userAddress,
        string memory noteArg,
        bool isApproved,
        uint i
    ) public payable restrictedOfficer {
        claimRepository[i].note = noteArg;
        claimRepository[i].isApproved = isApproved;
        willRepository[userAddress].completed = isApproved;
        if (isApproved == true) {
            uint nomineeAddressLength = willRepository[
                claimRepository[i].userAddress
            ].nomineeAddress.length;
            uint totalAmount = willRepository[userAddress].amount /
                nomineeAddressLength;

            //transfering assets to all nominees
            for (uint j = 0; j < nomineeAddressLength; j++) {
                willRepository[userAddress].nomineeAddress[j].transfer(
                    totalAmount
                );
            }
            emit printLog("Will executed through officer");
        } else {
            emit printLog("officer decline the execution");
        }

        claimRepository[i].processed = true;
    }

    function claimRequest(
        address userAddress,
        string memory IpfsClaimLink
    ) public {
        ClaimRequests memory newRequest = ClaimRequests(
            msg.sender,
            userAddress,
            " ",
            IpfsClaimLink,
            false,
            false
        );
        claimRepository.push(newRequest);
        emit printLog("new claim request added");
    }

    function revokeContract(address payable userAddress) public {
        require(willRepository[msg.sender].amount > 0, "Will already executed");
        userAddress.transfer(willRepository[msg.sender].amount);
        willRepository[msg.sender].completed = true;
        emit printLog("user revoked his claim");
    }
}

//added officer info like name and adhar no.
//aditya officer : 0xB756B13677145DAEEce244cecC68CFB7dE1B666D
//contract address: 0x8C740cb438FD698846777F2f107306971F6c0a0b