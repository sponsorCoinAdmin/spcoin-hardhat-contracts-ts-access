const { SpCoinLogger, LOG_MODE } = require("./lib/utils/logging");
const { SpCoinERC20Methods } = require("./lib/spCoinTransferMethods");
const { SpCoinDeleteMethods } = require("./lib/spCoinDeleteMethods");
const { SpCoinAddMethods } = require("./lib/spCoinAddMethods");
const { SpCoinReadMethods } = require("./lib/SpCoinReadMethods");
const { SpCoinRewardsMethods } = require("./lib/spCoinRewardsMethods"); 
const { SpCoinStakingMethods } = require("./lib/spCoinStakingMethods"); 
const { second, minute, hour, day, week, year, month , millennium } = require("./lib/spCoinStakingMethods"); 

const spCoinAddMethods2 = (spCoinContractDeployed) => { return new SpCoinAddMethods(spCoinContractDeployed) };
const spCoinDeleteMethods2 = (spCoinContractDeployed) => {  new SpCoinDeleteMethods(spCoinContractDeployed) };
const spCoinERC20Methods2 = (spCoinContractDeployed) => {  new SpCoinERC20Methods(spCoinContractDeployed) };
const spCoinLogger2 = (spCoinContractDeployed) => {  new SpCoinLogger(spCoinContractDeployed) };
const spCoinReadMethods2 = (spCoinContractDeployed) => {  new SpCoinReadMethods(spCoinContractDeployed) };
const spCoinRewardsMethods2 = (spCoinContractDeployed) => {  new SpCoinRewardsMethods(spCoinContractDeployed) };
const spCoinStakingMethods2 = (spCoinContractDeployed) => {  new SpCoinStakingMethods(spCoinContractDeployed) };

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
  spCoinAddMethods2,
  spCoinDeleteMethods2,
  spCoinERC20Methods2,
  spCoinLogger2,
  spCoinReadMethods2,
  spCoinRewardsMethods2,
  spCoinStakingMethods2
}
