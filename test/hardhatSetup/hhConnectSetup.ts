import { initHHAccounts } from "./hhTestAccounts";
import { deploySpCoinContract } from "./deployContract";
import { spCoinConnectMethods } from "../../prod/spCoinMethods";

const sPCoinTestConnect = async () => {
  const spCoinContractDeployed = await deploySpCoinContract();
  return spCoinContractDeployed;
}

const initSPCoinHHTest = async () => {
  const hhTestElements = await initHHAccounts();
  const SPONSOR_ACCOUNT_SIGNERS = hhTestElements.signers;
  const SPONSOR_ACCOUNT_KEYS = hhTestElements.accounts;
  const RECIPIENT_ACCOUNT_KEYS = hhTestElements.accounts;
  const AGENT_ACCOUNT_KEYS = hhTestElements.accounts;
  const TRANSACTION_QTY = hhTestElements.rates;
  const RECIPIENT_RATES = hhTestElements.rates;
  const AGENT_RATES = hhTestElements.rates;
  const BURN_ACCOUNT = hhTestElements.burnAddress;
}

const initSPCoinTestConnect = async () => {
  const spCoinContractDeployed = await sPCoinTestConnect();
  await spCoinConnectMethods(spCoinContractDeployed);
  // await spCoinConnectMethods.spCoinAddMethods2(spCoinContractDeployed);
  // await spCoinConnectMethods.spCoinDeleteMethods2(spCoinContractDeployed);
  // await spCoinConnectMethods.spCoinERC20Methods2(spCoinContractDeployed);
  // await spCoinConnectMethods.spCoinLogger2(spCoinContractDeployed);
  // await spCoinConnectMethods.spCoinReadMethods2(spCoinContractDeployed);
  // await spCoinConnectMethods.spCoinRewardsMethods2(spCoinContractDeployed);
  // await spCoinConnectMethods.spCoinStakingMethods2(spCoinContractDeployed);
  await initSPCoinHHTest();
};

export {
  initSPCoinTestConnect
}