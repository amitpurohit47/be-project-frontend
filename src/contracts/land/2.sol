// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract CryptoWillContract {

    struct Land {
        uint landId;
        address landOwner;
        string landPhotoLink;
        string IpfsLandDocLink;
    }

    struct UserWills {
        string willName;
        address userAddress;
        address nomineeAddress;
        bool completed;
        uint deadLine;
        string IpfsAdharLink;
        string IpfsNomineeAdharLink;
        Land land;
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

    mapping(address => UserWills) public willRepository;
    ClaimRequests[] public claimRepository;
    Land[] public lands;
    mapping(uint => Land) public landRepository;
    address[] public userRepository;
    address[] public claimOfficers;
    address public contractOwner;
    uint public autoLandId = 10001;

    event printLog(string message);

    constructor(address contractOwnerAddress) {
        contractOwner = contractOwnerAddress;
    }

    modifier restrictedOfficer() {
        for (uint i = 0; i < claimOfficers.length; i++) {
            if (claimOfficers[i] == msg.sender) {
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

    function getWill(address userAddress) public view returns(UserWills memory) {
        return willRepository[userAddress];
    }

    function getClaimRepository() public view returns(ClaimRequests[] memory) {
        return claimRepository;
    }

    function getClaimRepositoryLength() public view returns(uint) {
        return claimRepository.length;
    }

    function getUserRepository() public view returns(address[] memory) {
        return userRepository;
    }

    function getClaimOfficers() public view returns(address[] memory) {
        return claimOfficers;
    }

    function getClaimOfficersLength() public view returns(uint) {
        return claimOfficers.length;
    }

    function getLands() public view returns(Land[] memory) {
        return lands;
    }

    function getLandsLength() public view returns(uint) {
        return lands.length;
    }

    function addOfficer(address officerAddress) public restrictedContractOwner {
        bool flag = false;
        for(uint i = 0; i < claimOfficers.length; i++) {
            //i.e. user already exists
            if(claimOfficers[i] == officerAddress){
                flag = true;
                break;
            } 
        }
        require(flag == false, "officer already exists");
        claimOfficers.push(officerAddress);
    }

    function addWill(
        string memory willNameArg,
        string memory IpfsAdharLinkArg,
        string memory IpfsNomineeAdharLinkArg,
        string memory landPhotoLinkArg,
        string memory IpfsLandDocLinkArg,
        address nomineeAddressArg
    ) public payable {
        require(willRepository[msg.sender].userAddress == address(0), "will already created");
        Land memory newLand = Land({
            landId: autoLandId,
            landOwner: msg.sender,
            landPhotoLink: landPhotoLinkArg,
            IpfsLandDocLink: IpfsLandDocLinkArg
        });

        landRepository[autoLandId] = newLand;
        lands.push(newLand);

        UserWills memory user = UserWills({
            willName: willNameArg,
            userAddress: msg.sender,
            completed: false,
            nomineeAddress: nomineeAddressArg,
            deadLine: 0,
            IpfsAdharLink: IpfsAdharLinkArg,
            IpfsNomineeAdharLink : IpfsNomineeAdharLinkArg,
            land: newLand
        });

        willRepository[msg.sender] = user;
        userRepository.push(msg.sender);

        autoLandId = autoLandId + 1;
        emit printLog("New user 'will' successfully added");
    }

    //add deadline in seconds
    function addWillWithDuration(
        string memory willNameArg,
        string memory IpfsAdharLinkArg,
        string memory IpfsNomineeAdharLinkArg,
        string memory landPhotoLinkArg,
        string memory IpfsLandDocLinkArg,
        address nomineeAddressArg,
        uint deadLineArg
    ) public payable {
        require(willRepository[msg.sender].userAddress == address(0), "will already created");
       
        Land memory newLand = Land({
            landId: autoLandId,
            landOwner: msg.sender,
            landPhotoLink: landPhotoLinkArg,
            IpfsLandDocLink: IpfsLandDocLinkArg
        });

        landRepository[autoLandId] = newLand;
        lands.push(newLand);

        UserWills memory user = UserWills({
            willName: willNameArg,
            userAddress: msg.sender,
            completed: false,
            nomineeAddress: nomineeAddressArg,
            deadLine: deadLineArg + block.timestamp,
            IpfsAdharLink: IpfsAdharLinkArg,
            IpfsNomineeAdharLink: IpfsNomineeAdharLinkArg,
            land: newLand
        });

        willRepository[msg.sender] = user;
        userRepository.push(msg.sender);

        autoLandId = autoLandId + 1;
        emit printLog("New user 'will' successfully added");
    }

    function autoExecuteWill() public payable {
        for (uint i = 0; i < userRepository.length; i++) {
            if (
                willRepository[userRepository[i]].deadLine < block.timestamp &&
                willRepository[userRepository[i]].completed == false &&
                willRepository[userRepository[i]].deadLine != 0
            ) {
                //transfering assets to all nominees
                
                willRepository[userRepository[i]]
                    .land.landOwner = willRepository[userRepository[i]].nomineeAddress;

                landRepository[willRepository[userRepository[i]]
                    .land.landId].landOwner = willRepository[userRepository[i]].nomineeAddress;
                
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
            willRepository[userRepository[i]]
                .land.landOwner = willRepository[claimRepository[i].userAddress].nomineeAddress;

            landRepository[willRepository[claimRepository[i].userAddress]
                .land.landId].landOwner = willRepository[claimRepository[i].userAddress].nomineeAddress;
            
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
}

//same as previous only below changes
//contract-address: 0xF0fac94E862E14aAD7A327071bcD81Fb41F98A0D
//government = amit