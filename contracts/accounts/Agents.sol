// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
/// @title ERC20 Contract
import "./Sponsors.sol";
import "../utils/StructSerialization.sol";

contract Agents is Sponsors {
        constructor(){
    }

    /// @notice insert sponsors Agent
    /// @param _patreonKey public Sponsor Coin Account Key
    /// @param _sponsorKey public account key to get sponsor array
    /// @param _agentKey new sponsor to add to account list
    function addSponsorAgent(address _patreonKey, address _sponsorKey, address _agentKey)
            public onlyOwnerOrRootAdmin(msg.sender) 
            nonRedundantAgent ( _patreonKey, _sponsorKey, _agentKey) {
        addPatreonSponsor(_patreonKey, _sponsorKey);
        addAccountRecord(_agentKey);

        AccountStruct storage accountSponsorRec = accountMap[_sponsorKey];
        AccountStruct storage accountAgentRec = accountMap[_agentKey];
        SponsorStruct storage patreonSponsorRec = getPatreonSponsorRecByKeys(_patreonKey, _sponsorKey);
        AgentStruct storage  sponsorChildAgentRec = getAgentRecordByKeys(_patreonKey, _sponsorKey, _agentKey);
        if (!sponsorChildAgentRec.inserted) {
            sponsorChildAgentRec.index = patreonSponsorRec.accountChildAgentKeys.length;
            sponsorChildAgentRec.insertionTime = block.timestamp;
            sponsorChildAgentRec.agentAccountKey    = _agentKey;
            sponsorChildAgentRec.inserted = true;
            patreonSponsorRec.accountChildAgentKeys.push(_agentKey);
            accountSponsorRec.accountChildAgentKeys.push(_agentKey);
            accountAgentRec.accountParentSponsorKeys.push(_agentKey);
        }
    }

    /// @notice Remove all sponsorship relationships for Patreon and Sponsor accounts
    /// @param _patreonKey Patreon key containing the Sponsor relationship
    /// @param _sponsorKey Sponsor to be removed from the Sponsor relationship
    function deletePatreonSponsor(address _patreonKey, address _sponsorKey)  
    public onlyOwnerOrRootAdmin(_patreonKey)
           accountExists(_patreonKey)
           nonRedundantSponsor ( _patreonKey,  _sponsorKey) {
        
            console.log("*** Agent.sol deletePatreon(", _patreonKey, ", ", _sponsorKey);
            console.log("*** Patraon : ", _patreonKey);
            console.log("*** Sponsor : ", _sponsorKey);

        // ToDo: create modifies to ensure sponsor relationship exists.

        // Delete Sponsors Agent Nested records 
        //   ToDo: For each Agent Account Record Record Unlink the Parent Sponsor Account

        // Unlink the Patreon Relationship account from Sponsor Account Record
        AccountStruct storage sponsorAccountRec = accountMap[_sponsorKey];
        //   ToDo: For each Agent Account Record Record Unlink the Parent Sponsor Account
        address[] storage accountParentPatreonKeys = sponsorAccountRec.accountParentPatreonKeys;
        deleteAccountFromArray(_patreonKey, accountParentPatreonKeys);

        // Unlink the Sponsor Relationship account from Patreon Account Record
        AccountStruct storage patreonAccountRec = accountMap[_patreonKey];
        address[] storage childSponsorKeys = patreonAccountRec.accountChildSponsorKeys;


        // UnLink Sponsor Agents beore we unLink the Sponsors relationship
        mapping(address => SponsorStruct) storage sponsorMap = patreonAccountRec.sponsorMap;

        deleteAgentsFromSponsor(_sponsorKey, sponsorMap);

        console.log("*** BEFORE deleteAccountFromArray childSponsorKeys(", _sponsorKey, ")");
        if (deleteAccountFromArray(_sponsorKey, childSponsorKeys)) {
            delete sponsorMap[_sponsorKey];
        }
    }

    function deleteAgentsFromSponsor (address _sponsorKey,
        mapping(address => SponsorStruct) storage sponsorMap) internal {          
        console.log("deleteAllAgentsFromChildSponsor(_sponsorKey, sponsorMap)");
        mapping(address => AgentStruct) storage agentMap = sponsorMap[_sponsorKey].agentMap;
        address[] storage accountChildAgentKeys = sponsorMap[_sponsorKey].accountChildAgentKeys;

        uint i = accountChildAgentKeys.length - 1;
        console.log("*** BEFORE AGENT DELETE accountChildAgentKeys.length = ", accountChildAgentKeys.length);
        for (i; i >= 0; i--) {
            AgentStruct storage agentStruct = agentMap[accountChildAgentKeys[i]];  
            console.log("***** Deleting accountChildAgentKeys ", agentStruct.agentAccountKey);
            delete agentMap[accountChildAgentKeys[i]];
            delete accountChildAgentKeys[i];
            accountChildAgentKeys.pop();
            if (i == 0)
               break;
        }
        console.log("*** AFTER AGENT DELETE accountChildAgentKeys.length = ", accountChildAgentKeys.length);
    }

    /// @notice determines if agent address is inserted in account.sponsor.agent.map
    /// @param _patreonKey public account key validate Insertion
    /// @param _sponsorKey public sponsor account key validate Insertion
    /// @param _agentKey public agent account key validate Insertion
    function isAgentInserted(address _patreonKey,address _sponsorKey,address _agentKey) public onlyOwnerOrRootAdmin(_patreonKey) view returns (bool) {
        return getAgentRecordByKeys(_patreonKey, _sponsorKey, _agentKey).inserted;
    }

    function getAgentIndex(address _patreonKey, address _sponsorKey, address _agentKey) public onlyOwnerOrRootAdmin(_patreonKey) view returns (uint) {
        if (isAgentInserted(_patreonKey, _sponsorKey, _agentKey)) {
            //uint256 agentIndex = accountMap[_patreonKey].sponsorMap[_sponsorKey].agentMap[_agentKey].index;
            // console.log(_patreonKey, _sponsorKey, _agentKey);
            // console.log("Index = ", agentIndex);
            return accountMap[_patreonKey].sponsorMap[_sponsorKey].agentMap[_agentKey].index;
        }
        else
            return 0;
        }

    function getAgentInsertionTime(address _patreonKey, address _sponsorKey, address _agentKey) public onlyOwnerOrRootAdmin(_patreonKey) view returns (uint) {
        if (isAgentInserted(_patreonKey, _sponsorKey, _agentKey))
            return accountMap[_patreonKey].sponsorMap[_sponsorKey].agentMap[_agentKey].insertionTime;
        else
            return 0;
    }
    /////////////////// DELETE AGENT METHODS ////////////////////////

    /// @notice delete sponsors Agent
    /// @param _patreonKey public Sponsor Coin Account Key
    /// @param _sponsorKey public account key to get sponsor array
    /// @param _agentKey new sponsor to add to account list
    function deleteSponsorAgent(address _patreonKey, address _sponsorKey, address _agentKey)
            public onlyOwnerOrRootAdmin(msg.sender) 
            agentExists ( _patreonKey, _sponsorKey, _agentKey) {
        // addPatreonSponsor(_patreonKey, _sponsorKey);
        // addAccountRecord(_agentKey);

        // AccountStruct storage accountSponsorRec = accountMap[_sponsorKey];
        // AccountStruct storage accountAgentRec = accountMap[_agentKey];
        // SponsorStruct storage patreonSponsorRec = getPatreonSponsorRecByKeys(_patreonKey, _sponsorKey);
        // AgentStruct storage  sponsorChildAgentRec = getAgentRecordByKeys(_patreonKey, _sponsorKey, _agentKey);
        // if (!sponsorChildAgentRec.inserted) {
        //     sponsorChildAgentRec.index = patreonSponsorRec.accountChildAgentKeys.length;
        //     sponsorChildAgentRec.insertionTime = block.timestamp;
        //     sponsorChildAgentRec.agentAccountKey    = _agentKey;
        //     sponsorChildAgentRec.inserted = true;
        //     patreonSponsorRec.accountChildAgentKeys.push(_agentKey);
        //     accountSponsorRec.accountChildAgentKeys.push(_agentKey);
        //     accountAgentRec.accountParentSponsorKeys.push(_agentKey);
        // }
    }

    modifier agentExists (address _patreonKey, address _sponsorKey, address _agentKey) {
        require (isAgentInserted(_patreonKey, _sponsorKey, _agentKey) , "_agentKey not found)");
        _;
    }

}
