import hre from "hardhat";
import {expect} from 'chai';
import {assert} from 'chai';
// import { WETH9ClassMethods } from "../../WETH9-access-modules/lib/WETH9ClassMethods"; 
import { deployWETH9Contract } from "./lib.ts/hardhatSetup/deployContract";
import { HhClassMethods } from "./lib.ts/hardhatSetup/hhClassMethods";

let WETH9ContractDeployed:any;
let hhClassMethods:any;
let signer:any;
let provider = hre.ethers.getDefaultProvider("mainnet");
let ethers:any = hre.ethers;

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

  it("2. <TYPE SCRIPT> GET SIGNER BALANCE_OF and TEST ACCOUNT[5] BALANCE_OF", async function () {
    const initialBalance:bigint = 10000000000000000000000n;
    const account5 = hhClassMethods.SPONSOR_ACCOUNT_SIGNERS[5];
    const signerBalance:bigint = await ethers.provider.getBalance(signer.address);
    const account5Balance:bigint = await ethers.provider.getBalance(account5);

    // All Accounts have been given an ETH Balance of 10000000000000000000000 the signer account balance is less
    // because gas was used for initial setup of hard hat
    console.log(`1. signer(${signer.address}) Balance = ${signerBalance}`);
    console.log(`2. account[5](${account5}) Balance = ${account5Balance}`);

    assert.isTrue(signerBalance < initialBalance, `ERROR: signerBalance(${signerBalance}) Not Less Than initialBalance(${initialBalance})` );
    assert.equal(account5Balance, initialBalance);
  });

  xit("3. <TYPE SCRIPT> GET SIGNER BALANCE_OF", async function () {
    // console.log(`WETH9ContractDeployed = ${JSON.stringify(WETH9ContractDeployed,null,2
    // hhClassMethods.dump()

    const signedWeth = WETH9ContractDeployed.connect(signer)

    let account5 = hhClassMethods.SPONSOR_ACCOUNT_SIGNERS[5];
    let signerBalance = await ethers.provider.getBalance(signer.address);
    let account5Balance = await ethers.provider.getBalance(account5);

    console.log(`1. signer(${signer.address}) Balance = ${signerBalance}`);
    signerBalance = await ethers.provider.getBalance(signer.address);
    console.log(`2. signer(${signer.address}) Balance = ${signerBalance}`);
    console.log(`account[5](${account5}) Balance = ${account5Balance}`);
    // await this.WETH9ContractDeployed.connect(this.signer).deposit(account5, 1);

    let val = await signedWeth.deposit({value: ethers.utils.parseEther("2")})
    val = await signedWeth.deposit({value: 2})
    console.log(`val = ${JSON.stringify(val,null,2)}`);
    // await this.WETH9ContractDeployed.deposit(account5, 1);
    signerBalance = await ethers.provider.getBalance(signer.address);
    console.log(`1. signer(${signer.address}) Balance = ${signerBalance}`);

    signerBalance = await ethers.provider.getBalance(signer.address);
    console.log(`2. signer(${signer.address}) Balance = ${signerBalance}`);

    let signerWethBalance = await signedWeth.balanceOf(signer.address)
    console.log(`3. signer($signerWethBalance}) Balance = ${signerWethBalance}`);

    // let xxx = signerWethBalance+1
    // assert.equal(xxx, signerWethBalance);
  });   
/**/
});


/*
constructor(_WETH9ContractDeployed) {
  this.WETH9ContractDeployed = _WETH9ContractDeployed;
  WETH9Logger = new WETH9Logger(_WETH9ContractDeployed)
  this.setSigner(_WETH9ContractDeployed.signer);
}

setSigner(_signer) {
  this.signer = _signer;
}
*/