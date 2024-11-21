import { dateInMilliseconds, dateInSeconds, second, minute, hour, day, week, year, month, millennium } from "../../spcoin-access-modules/lib/utils/dateTime"; 
// import { SpCoinClassMethods } from "../../spcoin-access-modules/lib/spCoinClassMethods"; 
import { deploySpCoinContract } from "./lib.ts/hardhatSetup/deployContract";
import { HhClassMethods } from "./lib.ts/hardhatSetup/hhClassMethods";

let spCoinContractDeployed:any;
let hhClassMethods:any;

describe("spCoin Contract Deployed", function () {
  beforeEach(async () => {
    spCoinContractDeployed = await deploySpCoinContract();
    hhClassMethods = new HhClassMethods();
    await hhClassMethods.initHHAccounts()
  });

  it("2. <JAVA SCRIPT> VALIDATE SPCOIN CONTRACT DEPLOYED", async function () {
    // console.log(`spCoinContractDeployed = ${JSON.stringify(spCoinContractDeployed,null,2
    hhClassMethods.dump()
   });
/**/
});