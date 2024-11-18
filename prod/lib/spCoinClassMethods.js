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
    this.spCoinAddMethods = new SpCoinAddMethods(this.spCoinContractDeployed);
    this.spCoinDeleteMethods = new SpCoinDeleteMethods(this.spCoinContractDeployed);
    this.spCoinERC20Methods = new SpCoinERC20Methods(this.spCoinContractDeployed);
    this.spCoinLogger = new SpCoinLogger(this.spCoinContractDeployed);
    this.spCoinReadMethods = new SpCoinReadMethods(this.spCoinContractDeployed);
    this.spCoinRewardsMethods = new SpCoinRewardsMethods(this.spCoinContractDeployed);
    this.spCoinStakingMethods = new SpCoinStakingMethods(this.spCoinContractDeployed);
  }

  methods = () => {
    return {
      spCoinContractDeployed : this.spCoinContractDeployed,
      spCoinAddMethods       : this.spCoinAddMethods,
      spCoinDeleteMethods    : this.spCoinDeleteMethods,
      spCoinERC20Methods     : this.spCoinERC20Methods,
      spCoinLogger           : this.spCoinLogger,
      spCoinReadMethods      : this.spCoinReadMethods,
      spCoinRewardsMethods   : this.spCoinRewardsMethods,
      spCoinStakingMethods   : this.spCoinStakingMethods
    }
  }
}

module.exports = {
  SpCoinClassMethods,
  SpCoinAddMethods,
  SpCoinDeleteMethods,
  SpCoinERC20Methods,
  SpCoinLogger,
  SpCoinReadMethods,
  SpCoinRewardsMethods,
  SpCoinStakingMethods
}