import { initHHAccounts } from "./hhTestAccounts";
import { deploySpCoinContract } from "./deployContract";
// import { initSpCoinAccessMethods } from "../../prod/spCoinMethods";

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
  // await initSpCoinAccessMethods(spCoinContractDeployed);
  // await initSpCoinAccessMethods.spCoinAddMethods2(spCoinContractDeployed);
  // await initSpCoinAccessMethods.spCoinDeleteMethods2(spCoinContractDeployed);
  // await initSpCoinAccessMethods.spCoinERC20Methods2(spCoinContractDeployed);
  // await initSpCoinAccessMethods.spCoinLogger2(spCoinContractDeployed);
  // await initSpCoinAccessMethods.spCoinReadMethods2(spCoinContractDeployed);
  // await initSpCoinAccessMethods.spCoinRewardsMethods2(spCoinContractDeployed);
  // await initSpCoinAccessMethods.spCoinStakingMethods2(spCoinContractDeployed);
  // await initSPCoinHHTest();
  return spCoinContractDeployed;
};

function testConnect () {
    console.log("TestConnect() call Works");
}

export {
  initSPCoinTestConnect,
}