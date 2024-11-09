let spCoinContractDeployed;

deploySpCoinContract = async () => {
  spCoinContractDeployed = await deployContract("SPCoin");
  return spCoinContractDeployed;
}

deployContract = async (symbol) => {
  //setLogMode(LOG_MODE.LOG_SETUP, true);
  // console.log("AAAA spCoinContractDeployed = await spCoinContract.deploy() AAAAAAAAAAAAAAAAAAAAAA");

  let spCoinContract = await hre.ethers.getContractFactory(symbol);
  spCoinContractDeployed = await spCoinContract.deploy();
  await spCoinContractDeployed.deployed();
//  console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
  return spCoinContractDeployed;
}

module.exports = {
  deployContract,
  deploySpCoinContract,
  spCoinContractDeployed
}
