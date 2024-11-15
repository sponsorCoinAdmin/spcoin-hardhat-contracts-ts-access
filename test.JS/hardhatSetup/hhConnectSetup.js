const { expect } = require("chai");
const { initHHAccounts } = require("./hhTestAccounts");
const { deploySpCoinContract } = require("./deployContract");
const { spCoinConnectMethods } = require("../../prod/spCoinMethods");

const sPCoinTestConnect = async () => {
  spCoinContractDeployed = await deploySpCoinContract();
  return spCoinContractDeployed;
}

const initSPCoinHHTest = async () => {
  hhTestElements = await initHHAccounts();
  SPONSOR_ACCOUNT_SIGNERS = hhTestElements.signers;
  SPONSOR_ACCOUNT_KEYS = RECIPIENT_ACCOUNT_KEYS = AGENT_ACCOUNT_KEYS = hhTestElements.accounts;
  TRANSACTION_QTY = RECIPIENT_RATES = AGENT_RATES = hhTestElements.rates;
  BURN_ACCOUNT = hhTestElements.burnAddress;
}

const initSPCoinTestConnect = async () => {
  spCoinContractDeployed = await sPCoinTestConnect();
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

module.exports = {
  initSPCoinTestConnect
}