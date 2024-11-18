const { hhClassMethods } = require("./hhClassMethods");
const { deploySpCoinContract } = require("./deployContract");
const { initSpCoinAccessMethods } = require("../../../../prod/spCoinMethods");

const sPCoinTestConnect = async () => {
  const spCoinContractDeployed = await deploySpCoinContract();
  return spCoinContractDeployed;
}

const initSPCoinHHTest = async () => {
  hhClassMethods = new HhClassMethods();
  await hhClassMethods.initSPCoinHHTest()
  hhClassMethods.dump()
  SPONSOR_ACCOUNT_SIGNERS = hhClassMethods.SPONSOR_ACCOUNT_SIGNERS;
  RECIPIENT_ACCOUNT_KEYS = hhClassMethods.RECIPIENT_ACCOUNT_KEYS;
  SPONSOR_ACCOUNT_KEYS = hhClassMethods.SPONSOR_ACCOUNT_KEYS;
  RECIPIENT_RATES = hhClassMethods.RECIPIENT_RATES;
  BURN_ACCOUNT = hhClassMethods.BURN_ACCOUNT;
}

const initSPCoinTestConnect = async () => {
  const spCoinContractDeployed = await sPCoinTestConnect();
  await initSpCoinAccessMethods(spCoinContractDeployed);
  await initSPCoinHHTest();
};

module.exports = {
  sPCoinTestConnect,
  initSPCoinHHTest,
  initSPCoinTestConnect
}