const { SpCoinAddMethods } = require("./lib/spCoinAddMethods");
const { SpCoinLogger, LOG_MODE } = require("./lib/utils/logging");
const { SpCoinERC20Methods } = require("./lib/spCoinTransferMethods");
const { SpCoinDeleteMethods } = require("./lib/spCoinDeleteMethods");
const { SpCoinReadMethods } = require("./lib/SpCoinReadMethods");
const { SpCoinRewardsMethods } = require("./lib/spCoinRewardsMethods"); 
const { SpCoinStakingMethods } = require("./lib/spCoinStakingMethods"); 
const { second, minute, hour, day, week, year, month , millennium } = require("./lib/spCoinStakingMethods"); 

// const spCoinAddMethods = (spCoinContractDeployed) => { return new SpCoinAddMethods(spCoinContractDeployed) };
// const spCoinDeleteMethods = (spCoinContractDeployed) => {  new SpCoinDeleteMethods(spCoinContractDeployed) };
// const spCoinERC20Methods = (spCoinContractDeployed) => {  new SpCoinERC20Methods(spCoinContractDeployed) };
// const spCoinLogger = (spCoinContractDeployed) => {  new SpCoinLogger(spCoinContractDeployed) };
// const spCoinReadMethods = (spCoinContractDeployed) => {  new SpCoinReadMethods(spCoinContractDeployed) };
// const spCoinRewardsMethods = (spCoinContractDeployed) => {  new SpCoinRewardsMethods(spCoinContractDeployed) };
// const spCoinStakingMethods = (spCoinContractDeployed) => {  new SpCoinStakingMethods(spCoinContractDeployed) };

const spCoinConnectMethods = async (spCoinContractDeployed) => {
  spCoinAddMethods = new SpCoinAddMethods(spCoinContractDeployed);
  spCoinDeleteMethods = new SpCoinDeleteMethods(spCoinContractDeployed);
  spCoinERC20Methods = new SpCoinERC20Methods(spCoinContractDeployed);
  spCoinLogger = new SpCoinLogger(spCoinContractDeployed);
  spCoinReadMethods = new SpCoinReadMethods(spCoinContractDeployed);
  spCoinRewardsMethods = new SpCoinRewardsMethods(spCoinContractDeployed);
  spCoinStakingMethods = new SpCoinStakingMethods(spCoinContractDeployed);
}


// const spCoinConnectMethods = async (spCoinContractDeployed) => {
//   spCoinAddMethods(spCoinContractDeployed);
//   spCoinDeleteMethods(spCoinContractDeployed);
//   spCoinERC20Methods(spCoinContractDeployed);
//   spCoinLogger(spCoinContractDeployed);
//   spCoinReadMethods(spCoinContractDeployed);
//   spCoinRewardsMethods(spCoinContractDeployed);
//   spCoinStakingMethods(spCoinContractDeployed);
// }

module.exports = {
  spCoinConnectMethods,
  // spCoinAddMethods,
  // spCoinDeleteMethods,
  // spCoinERC20Methods,
  // spCoinLogger,
  // spCoinReadMethods,
  // spCoinRewardsMethods,
  // spCoinStakingMethods
}
