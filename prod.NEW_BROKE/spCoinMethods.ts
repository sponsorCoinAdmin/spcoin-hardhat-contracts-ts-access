import { SpCoinAddMethods } from "./lib/spCoinAddMethods";
import { SpCoinLogger, LOG_MODE } from "./lib/utils/logging";
import { SpCoinERC20Methods } from "./lib/spCoinTransferMethods";
import { SpCoinDeleteMethods } from "./lib/spCoinDeleteMethods";
import { SpCoinReadMethods } from "./lib/SpCoinReadMethods";
import { SpCoinRewardsMethods } from "./lib/spCoinRewardsMethods"; 
import { SpCoinStakingMethods } from "./lib/spCoinStakingMethods"; 
import { second, minute, hour, day, week, year, month, millennium } from "./lib/spCoinStakingMethods"; 

const spCoinAddMethods = (spCoinContractDeployed:any) => { return new SpCoinAddMethods(spCoinContractDeployed) };
const spCoinDeleteMethods = (spCoinContractDeployed:any) => {  new SpCoinDeleteMethods(spCoinContractDeployed) };
const spCoinERC20Methods = (spCoinContractDeployed:any) => {  new SpCoinERC20Methods(spCoinContractDeployed) };
const spCoinLogger = (spCoinContractDeployed:any) => {  new SpCoinLogger(spCoinContractDeployed) };
const spCoinReadMethods = (spCoinContractDeployed:any) => {  new SpCoinReadMethods(spCoinContractDeployed) };
const spCoinRewardsMethods = (spCoinContractDeployed:any) => {  new SpCoinRewardsMethods(spCoinContractDeployed) };
const spCoinStakingMethods = (spCoinContractDeployed:any) => {  new SpCoinStakingMethods(spCoinContractDeployed) };

const spCoinConnectMethods = async (spCoinContractDeployed:any) => {
  const spCoinAddMethods = new SpCoinAddMethods(spCoinContractDeployed);
  const spCoinDeleteMethods = new SpCoinDeleteMethods(spCoinContractDeployed);
  const spCoinERC20Methods = new SpCoinERC20Methods(spCoinContractDeployed);
  const spCoinLogger = new SpCoinLogger(spCoinContractDeployed);
  const spCoinReadMethods = new SpCoinReadMethods(spCoinContractDeployed);
  const spCoinRewardsMethods = new SpCoinRewardsMethods(spCoinContractDeployed);
  const spCoinStakingMethods = new SpCoinStakingMethods(spCoinContractDeployed);
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

export {
  spCoinConnectMethods,
  spCoinAddMethods,
  spCoinDeleteMethods,
  spCoinERC20Methods,
  spCoinLogger,
  spCoinReadMethods,
  spCoinRewardsMethods,
  spCoinStakingMethods
}
