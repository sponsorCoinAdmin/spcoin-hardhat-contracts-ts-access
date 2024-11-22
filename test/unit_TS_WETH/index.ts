import hre from "hardhat";
import {expect} from 'chai';
import {assert} from 'chai';
// import { WETH9ClassMethods } from "../../WETH9-access-modules/lib/WETH9ClassMethods"; 
import { deployWETH9Contract } from "./lib.ts/hardhatSetup/deployContract";
import { HhClassMethods } from "./lib.ts/hardhatSetup/hhClassMethods";


// \Users\Robin\OneDrive\Dev\gitRepo\sponsorCoin\WIP\artifacts\contracts\WETH9.sol\WETH9.json

import fs from 'fs';
const fsPromises = fs.promises;


let WETH9ContractDeployed:any;
let hhClassMethods:any;
let signer:any;
let provider = hre.ethers.getDefaultProvider("mainnet");
let ethers:any = hre.ethers;

// load ABI from build artifacts
async function getDeployedArtifactsAbi(contractName:string){
  const HARDHAT_ARTIFACTS_HOME = "artifacts/contracts/";
  const ABI_FILE_PATH=`${HARDHAT_ARTIFACTS_HOME}${contractName}.sol/${contractName}.json`
  console.log(`ABI_FILE_PATH = ${ABI_FILE_PATH}`);
  const data = await fsPromises.readFile(ABI_FILE_PATH, 'utf8');
  const abi = JSON.parse(data)['abi'];
  return abi;
}


describe("WETH9 Contract Deployed", function () {
  beforeEach(async () => {
    WETH9ContractDeployed = await deployWETH9Contract();
    signer = WETH9ContractDeployed.signer;
    hhClassMethods = new HhClassMethods();
    await hhClassMethods.initHHAccounts()
  });

  xit("1. <TYPE SCRIPT> VALIDATE HARDHAT IS ACTIVE WITH ACCOUNTS", async function () {
    hhClassMethods.dump()
    console.log(`signer.address = ${signer.address}`)
    // console.log("provider = " + JSON.stringify(provider,null,2));

    // Validate 20 HardHat Accounts created
    assert.equal(hhClassMethods.SPONSOR_ACCOUNT_SIGNERS.length, 20);
    // Validate Active signer Account is Account 0
    assert.equal(hhClassMethods.SPONSOR_ACCOUNT_SIGNERS[0], WETH9ContractDeployed.signer.address.toLowerCase());
    // Validate the Last Account
    assert.equal(hhClassMethods.SPONSOR_ACCOUNT_SIGNERS[19], "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199");
  });

  xit("2. <TYPE SCRIPT> VALIDATE DEPLOYED CONTRACT BY GETTING SIGNER and TEST ACCOUNT[5] BALANCE_OF", async function () {
    const initialBalance:bigint = 10000000000000000000000n;
    const account5 = hhClassMethods.SPONSOR_ACCOUNT_SIGNERS[5];
    const signerBalance:bigint = await ethers.provider.getBalance(signer.address);
    const account5Balance:bigint = await ethers.provider.getBalance(account5);

    // All Accounts have been given an ETH Balance of 10000000000000000000000 except the signer account.
    // The signer account (account[0]) balance is less because gas was used for initial setup of hard hat.
    console.log(`1. signer(${signer.address}) Balance = ${signerBalance}`);
    console.log(`2. account[5](${account5}) Balance = ${account5Balance}`);

    assert.isTrue(signerBalance < initialBalance, `ERROR: signerBalance(${signerBalance}) Not Less Than initialBalance(${initialBalance})` );
    assert.equal(account5Balance, initialBalance);
  });

  xit("3. <TYPE SCRIPT> Wrap ETH Using Deployed WETH Contract with Sinner account[0]", async function () {
    const signedWeth = WETH9ContractDeployed.connect(signer);
    const wrapEthAmount = ethers.utils.parseEther("2");
    const wrapWeiAmount = "5";

    let beforeEthBalance:bigint = await ethers.provider.getBalance(signer.address);
    let signerWethBalance = await signedWeth.balanceOf(signer.address)

    console.log(`1. BEFORE WRAP: signer(${signer.address}) ETH Balance = ${beforeEthBalance}`);
    console.log(`2. BEFORE WRAP WETH9Contract signer($signerWethBalance}) WETH Balance = ${signerWethBalance}`);

    let tx = await signedWeth.deposit({value: wrapEthAmount})
    // console.log(`tx = ${JSON.stringify(tx,null,2)}`);
    tx = await signedWeth.deposit({value: wrapWeiAmount})
    // console.log(`tx = ${JSON.stringify(tx,null,2)}`);

    signerWethBalance = await signedWeth.balanceOf(signer.address)
    const afterEthBalance = await ethers.provider.getBalance(signer.address);

    console.log(`3. AFTER WRAP WETH9Contract signer($signerWethBalance}) WETH Balance = ${signerWethBalance}`);
    console.log(`4. AFTER WRAP: signer(${signer.address}) ETH Balance = ${afterEthBalance}`);
    console.log(`5. AFTER WRAP: Gas Fees = ${(beforeEthBalance - afterEthBalance) - signerWethBalance}`);
  });

  it("4. <TYPE SCRIPT> Wrap ETH Using Deployed WETH Contract with Sinner account[0]", async function () {
    const weth9_Address = WETH9ContractDeployed.address;
    const weth9ABI = await getDeployedArtifactsAbi("WETH9");
    const signedWeth = new ethers.Contract(weth9_Address, weth9ABI, signer);

    const wrapEthAmount = ethers.utils.parseEther("2");
    const wrapWeiAmount = "5";

    let beforeEthBalance:bigint = await ethers.provider.getBalance(signer.address);
    let signerWethBalance = await signedWeth.balanceOf(signer.address)

    console.log(`1. BEFORE WRAP: signer(${signer.address}) ETH Balance = ${beforeEthBalance}`);
    console.log(`2. BEFORE WRAP WETH9Contract signer($signerWethBalance}) WETH Balance = ${signerWethBalance}`);

    let tx = await signedWeth.deposit({value: wrapEthAmount})
    // console.log(`tx = ${JSON.stringify(tx,null,2)}`);
    tx = await signedWeth.deposit({value: wrapWeiAmount})
    // console.log(`tx = ${JSON.stringify(tx,null,2)}`);

    signerWethBalance = await signedWeth.balanceOf(signer.address)
    const afterEthBalance = await ethers.provider.getBalance(signer.address);

    console.log(`3. AFTER WRAP WETH9Contract signer($signerWethBalance}) WETH Balance = ${signerWethBalance}`);
    console.log(`4. AFTER WRAP: signer(${signer.address}) ETH Balance = ${afterEthBalance}`);
    console.log(`5. AFTER WRAP: Gas Fees = ${(beforeEthBalance - afterEthBalance) - signerWethBalance}`);
  });

  
/**/
});
