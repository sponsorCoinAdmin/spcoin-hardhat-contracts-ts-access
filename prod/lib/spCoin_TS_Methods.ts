import { SpCoinLogger } from "./lib/utils/logging.js";
import { SpCoinERC20Methods } from "./lib/spCoinTransferMethods";
import { SpCoinDeleteMethods } from "./lib/spCoinDeleteMethods";
import { SpCoinAddMethods } from "./lib/spCoinAddMethods";
import { SpCoinReadMethods } from "./lib/SpCoinReadMethods";
import { SpCoinRewardsMethods } from "./lib/spCoinRewardsMethods"; 
import { SpCoinStakingMethods } from "./lib/spCoinStakingMethods"; 
import { second, minute, hour, day, week, year, month, millennium } from "./lib/spCoinStakingMethods"; 


type SpCoinConnectMethods = {
  spCoinAddMethods:SpCoinAddMethods,
  spCoinDeleteMethods:SpCoinDeleteMethods,
  spCoinERC20Methods:SpCoinERC20Methods,
  spCoinLogger:SpCoinLogger,
  spCoinReadMethods:SpCoinReadMethods,
  spCoinRewardsMethods:SpCoinRewardsMethods,
  spCoinStakingMethods:SpCoinStakingMethods
}

 const spCoinConnectMethods = async (spCoinContractDeployed:any) => {
  const spCoinAddMethods:SpCoinAddMethods = new SpCoinAddMethods(spCoinContractDeployed);
  const spCoinDeleteMethods:SpCoinDeleteMethods  = new SpCoinDeleteMethods(spCoinContractDeployed);
  const spCoinERC20Methods:SpCoinERC20Methods  = new SpCoinERC20Methods(spCoinContractDeployed);
  const spCoinLogger:SpCoinLogger  = new SpCoinLogger(spCoinContractDeployed);
  const spCoinReadMethods:SpCoinReadMethods  = new SpCoinReadMethods(spCoinContractDeployed);
  const spCoinRewardsMethods:SpCoinRewardsMethods  = new SpCoinRewardsMethods(spCoinContractDeployed);
  const spCoinStakingMethods:SpCoinStakingMethods  = new SpCoinStakingMethods(spCoinContractDeployed);
}

export {
  spCoinConnectMethods
}