// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
/// @title ERC20 Contract
import "./StakingManager.sol";

contract RewardsManager {

    constructor() {
    }

/*
    function updateAccountStakingRewards( address _sourceKey )
    public view returns (string memory rewardsString){
        // console.log("updateAccountStakingRewards(", toString(_sourceKey), ")");
        AccountStruct storage account = accountMap[_sourceKey];
        address[] storage recipientKeys = account.recipientAccountList;             // If Sponsor List of Recipient Accounts
        mapping(address => RecipientStruct) storage recipientMap = account.recipientMap;
        // console.log("recipientKeys.length = ",recipientKeys.length);
        rewardsString = concat("RECIPIENT_KEYS_LENGTH:", toString(recipientKeys.length));
        for (uint idx = 0; idx < recipientKeys.length; idx++) {
            rewardsString = concat(rewardsString, "\nRECIPIENT_IDX:", toString(idx));
            rewardsString = concat(rewardsString, "\nRECIPIENT_KEY:", toString(recipientKeys[idx]));
            address recipientKey = recipientKeys[idx];
            string memory tmpRewards;
            uint256 rewards;
            (rewards, tmpRewards) =  updateRecipientRateListRewards(recipientMap[recipientKey]);
            rewardsString = concat(rewardsString, "\n", tmpRewards);
        }
        // console.log("SOL 1.0 -------------------------------------------");
        // console.log(rewardsString);
        // console.log("SOL 1.1 -------------------------------------------");
        return rewardsString ;
    }

    function updateRecipientRateListRewards( RecipientStruct storage recipientRecord )
    internal view returns (uint rewards, string memory rewardsString) {
        // console.log("updateRecipientRateListRewards(recipientRecord)");
        uint256[] storage recipientRateList = recipientRecord.recipientRateList;
        mapping(uint256 => RecipientRateStruct) storage recipientRateMap = recipientRecord.recipientRateMap;
        rewardsString = concat("RECIPIENT_RATE_LIST_LENGTH:", toString(recipientRateList.length));
        for (uint idx = 0; idx < recipientRateList.length; idx++) {
            // rewardsString = concat(rewardsString, "\nRECIPIENT_RATE:", toString(idx));
            uint256 recipientMapIdx = recipientRateList[idx];
            string memory tmpRewards;
            (rewards, tmpRewards) =  updateRecipientRateRewards(recipientRateMap[recipientMapIdx]);
            rewardsString = concat(rewardsString, "\n", tmpRewards);
        }
        return (rewards, rewardsString) ;
    }

    function updateRecipientRateRewards( RecipientRateStruct storage _recipientRateRecord )
    internal view returns (uint rewards, string memory rewardsString) {
        // console.log("updateRecipientRateListRewards(_recipientRateRecord)");
        uint256 currentTimeStamp = block.timestamp;
        uint256 stakedSPCoins    = _recipientRateRecord.stakedSPCoins;
        uint256 lastUpdateTime   = _recipientRateRecord.lastUpdateTime;
        uint256 recipientRate    = _recipientRateRecord.recipientRate;
        (rewards, rewardsString) = calculateStakingRewardsResponseString( stakedSPCoins, lastUpdateTime, currentTimeStamp, recipientRate );
        return (rewards, rewardsString) ;
    }

    function calculateStakingRewardsResponseString( uint256 _stakedSPCoins, uint256 _lastUpdateTime, uint256 currentTimeStamp, uint256 recipientRate )
    public pure returns (uint rewards, string memory rewardsString) {
        // console.log("updateRecipientRateListRewards(_stakedSPCoins, lastUpdate, currentTimeStamp)");
        uint256 timeDiff = _lastUpdateTime > currentTimeStamp ? 0 : currentTimeStamp - _lastUpdateTime;
        uint256 timeRateMultiplier = ( timeDiff * _stakedSPCoins * recipientRate ) / 100;
        rewards = timeRateMultiplier/year;
        // uint timeRateMultiplier = getAnnualTimeMultiplier(currentTimeStamp*decimals, lastUpdate);

        rewardsString = "RECORD_BREAK\n";
        rewardsString = concat(rewardsString, "CURRENT_TIME_STAMP:",           toString(currentTimeStamp));
        rewardsString = concat(rewardsString, "\nLAST_UPDATE_TIME:",           toString(_lastUpdateTime));
        rewardsString = concat(rewardsString, "\nRECIPIENT_RATE:",             toString(recipientRate));
        rewardsString = concat(rewardsString, "\nTIME_DIFFERENCE:",            toString(timeDiff));
        rewardsString = concat(rewardsString, "\nSTAKED_SPONSOR_COINS:",       toString(_stakedSPCoins));
        rewardsString = concat(rewardsString, "\nTIME_RATE_MULTIPLIER:",       toString(timeRateMultiplier));
        rewardsString = concat(rewardsString, "\nYEAR_IN_SECONDS:",            toString(year));
        rewardsString = concat(rewardsString, "\nCALCULATED_STAKING_REWARDS:", toString(rewards));
        return (rewards, rewardsString) ;
    }
*/

}
