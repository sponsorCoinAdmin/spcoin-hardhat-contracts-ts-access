import hre from "hardhat";

let spCoinContractDeployed;

export const deploySpCoinContract = async () => {
  spCoinContractDeployed = await deployContract("SPCoin");
  return spCoinContractDeployed;
}

export const deployWETH9Contract = async () => {
  let weth9ContractDeployed = await deployContract("WETH9");
  return weth9ContractDeployed;
}

export const deployContract = async (symbol:any) => {
  //setLogMode(LOG_MODE.LOG_SETUP, true);
  // console.log("AAAA spCoinContractDeployed = await spCoinContract.deploy() AAAAAAAAAAAAAAAAAAAAAA");

  let contract = await hre.ethers.getContractFactory(symbol);
  const contractDeployed = await contract.deploy();
  await contractDeployed.deployed();
//  console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
  return contractDeployed;
}

