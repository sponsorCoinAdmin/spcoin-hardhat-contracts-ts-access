const { SpCoinLogger, LOG_MODE } = require("./lib/utils/logging");
const { SpCoinERC20Methods } = require("./lib/spCoinTransferMethods");
const { SpCoinDeleteMethods } = require("./lib/spCoinDeleteMethods");
const { SpCoinAddMethods } = require("./lib/spCoinAddMethods");
const { SpCoinReadMethods } = require("./lib/SpCoinReadMethods");
const { SpCoinRewardsMethods } = require("./lib/spCoinRewardsMethods"); 
const { SpCoinStakingMethods } = require("./lib/spCoinStakingMethods"); 
const { second, minute, hour, day, week, year, month , millennium } = require("./lib/spCoinStakingMethods");

let spCoinAddMethods;
let spCoinDeleteMethods;
let spCoinERC20Methods;
let spCoinLogger;
let spCoinReadMethods;
let spCoinRewardsMethods;
let spCoinStakingMethods;

const initSpCoinAccessMethods = async (spCoinContractDeployed) => {
  spCoinAddMethods = new SpCoinAddMethods(spCoinContractDeployed);
  spCoinDeleteMethods = new SpCoinDeleteMethods(spCoinContractDeployed);
  spCoinERC20Methods = new SpCoinERC20Methods(spCoinContractDeployed);
  spCoinLogger = new SpCoinLogger(spCoinContractDeployed);
  spCoinReadMethods = new SpCoinReadMethods(spCoinContractDeployed);
  spCoinRewardsMethods = new SpCoinRewardsMethods(spCoinContractDeployed);
  spCoinStakingMethods = new SpCoinStakingMethods(spCoinContractDeployed);
}

module.exports = {
  initSpCoinAccessMethods,
  spCoinAddMethods,
  spCoinDeleteMethods,
  spCoinERC20Methods,
  spCoinLogger,
  spCoinReadMethods,
  spCoinRewardsMethods,
  spCoinStakingMethods

};