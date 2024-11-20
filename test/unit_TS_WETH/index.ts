import { dateInMilliseconds, dateInSeconds, second, minute, hour, day, week, year, month, millennium } from "../../spcoin-access-modules/lib/utils/dateTime"; 
// import { SpCoinClassMethods } from "../../spcoin-access-modules/lib/spCoinClassMethods"; 
import { SpCoinClassMethods } from "../../spcoin-access-modules/spCoin_JS_Methods"; 
import { deployWETH9Contract } from "./lib.ts/hardhatSetup/deployContract";
import { HhClassMethods } from "./lib.ts/hardhatSetup/hhClassMethods";

let wethContractDeployed:any;

describe("wethContract", function () {
  beforeEach(async () => {
    wethContractDeployed = await deployWETH9Contract();
  });

 it("2. <JAVA SCRIPT> VALIDATE WETH CONTRACT DEPLOYED", async function () {

  console.log(`wethContractDeployed = ${JSON.stringify(wethContractDeployed,null,2)}`)
   });
/**/
});