import hre from "hardhat";
import { deployWETH9Contract, deployContract } from "./deployContract";
import fs from 'fs';
let ethers:any = hre.ethers;

// load ABI from build artifacts
export async function getDeployedArtifactsAbiAddress(symbol:string){
    console.log(`EXECUTING: getDeployedArtifactsAbiAddress(${symbol})`)
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

export async function getWeth9Contract(signer:any) {
    const signedWeth = getNewContract(signer, "WETH9");
    return signedWeth;
}
  
export async function getSpCoinContract(signer:any) {
    const signedWeth = getNewContract(signer, "SPCoin");
    return signedWeth;
}
  
export async function getNewContract(signer:any, symbol:string) {
    await deployContract(symbol);
    const signedWeth = getDeployedContract(signer, symbol);
    return signedWeth;
}

export async function getDeployedContract(signer:any, symbol:string) {
    const { address, abi } = await getDeployedArtifactsAbiAddress(symbol);
    const signedWeth = new ethers.Contract(address, abi, signer);
    return signedWeth;
}
