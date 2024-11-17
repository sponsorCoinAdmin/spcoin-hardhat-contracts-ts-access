const { expect } = require("chai");
const { initHHAccounts } = require("./hhTestAccounts");
const { deploySpCoinContract } = require("./deployContract");
const { } = require("../../../../prod/spCoinMethods");

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
  await initSPCoinHHTest();
};

module.exports = {
  sPCoinTestConnect,
  initSPCoinHHTest,
  initSPCoinTestConnect
}