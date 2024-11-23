import hre from "hardhat";
import { deployWETH9Contract, deployContract } from "../../../unit_JS/lib.js/hardhatSetup/deployContract";
import fs from 'fs';
let ethers:any = hre.ethers;

// load ABI from build artifacts
export async function getDeployedArtifactsAbi(symbol:string){
    console.log(`EXECUTING: getDeployedArtifactsAbi(${symbol})`)
    let contractDeployed = await deployContract(symbol);
    const address = contractDeployed.address;
    // console.log(`contractDeployed.address = ${contractDeployed.address}`)
    // console.log(`contractDeployed = ${JSON.stringify(contractDeployed, null, 2)}`)
    const fsPromises = fs.promises;
    const HARDHAT_ARTIFACTS_HOME = "artifacts/contracts/";
    const ABI_FILE_PATH=`${HARDHAT_ARTIFACTS_HOME}${symbol}.sol/${symbol}.json`
    console.log(`ABI_FILE_PATH = ${ABI_FILE_PATH}`);
    const data = await fsPromises.readFile(ABI_FILE_PATH, 'utf8');
    const abi = JSON.parse(data)['abi'];
    return { address, abi };
}

export async function geWethContract(signer:any) {
    let WETH9ContractDeployed = await deployWETH9Contract();
    const weth9_Address = WETH9ContractDeployed.address;
    const weth9ABI = await getDeployedArtifactsAbi("WETH9");
    const signedWeth = new ethers.Contract(weth9_Address, weth9ABI, signer);
  return signedWeth;
  }
  
  