import { ethers } from 'hardhat';

let spCoinContractDeployed;
let weth9ContractDeployed;

const deploySpCoinContract = async () => {
  spCoinContractDeployed = await deployContract("SPCoin");
  return spCoinContractDeployed;
}

const deployWETH9Contract = async () => {
  weth9ContractDeployed = await deployContract("WETH9");
  return weth9ContractDeployed;
}

const deployContract = async (symbol:string) => {
  //setLogMode(LOG_MODE.LOG_SETUP, true);
  // console.log("AAAA spCoinContractDeployed = await spCoinContract.deploy() AAAAAAAAAAAAAAAAAAAAAA");

  let contract = await ethers.getContractFactory(symbol);
  const contractDeployed = await contract.deploy();
  // console.log(`AAAAAAAAAAA contractDeployed = ${JSON.stringify(contractDeployed,null,2)}`);
  await contractDeployed.deployed();
//  console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");
  return contractDeployed;
}

export {
  deployContract,
  deploySpCoinContract,
  deployWETH9Contract,
  spCoinContractDeployed,
  weth9ContractDeployed
}
