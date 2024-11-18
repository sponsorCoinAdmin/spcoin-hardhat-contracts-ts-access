const { SpCoinLogger, LOG_MODE } = require("./utils/logging");
const { SpCoinERC20Methods } = require("./spCoinTransferMethods");
const { SpCoinDeleteMethods } = require("./spCoinDeleteMethods");
const { SpCoinAddMethods } = require("./spCoinAddMethods");
const { SpCoinReadMethods } = require("./SpCoinReadMethods");
const { SpCoinRewardsMethods } = require("./spCoinRewardsMethods"); 
const { SpCoinStakingMethods } = require("./spCoinStakingMethods"); 
const { second, minute, hour, day, week, year, month , millennium } = require("./spCoinStakingMethods");


class SpCoinClassMethods {
  constructor(_spCoinContractDeployed) {
    this.spCoinContractDeployed = _spCoinContractDeployed;
    this.spCoinAddMethods = new SpCoinAddMethods(spCoinContractDeployed);
    this.spCoinDeleteMethods = new SpCoinDeleteMethods(spCoinContractDeployed);
    this.spCoinERC20Methods = new SpCoinERC20Methods(spCoinContractDeployed);
    this.spCoinLogger = new SpCoinLogger(spCoinContractDeployed);
    this.spCoinReadMethods = new SpCoinReadMethods(spCoinContractDeployed);
    this.spCoinRewardsMethods = new SpCoinRewardsMethods(spCoinContractDeployed);
    this.spCoinStakingMethods = new SpCoinStakingMethods(spCoinContractDeployed);
  }
}

module.exports = {
  SpCoinClassMethods,
  // spCoinAddMethods,
  // spCoinDeleteMethods,
  // spCoinERC20Methods,
  // spCoinLogger,
  // spCoinReadMethods,
  // spCoinRewardsMethods,
  // spCoinStakingMethods
}