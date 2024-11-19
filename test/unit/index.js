// import { HhClassMethods } from "./lib.js/hardhatSetup/hhClassMethods";

import { dateInMilliseconds, dateInSeconds, second, minute, hour, day, week, year, month, millennium } from "../../prod/lib/utils/dateTime"; 
import { SpCoinClassMethods } from "../../prod/lib/spCoinClassMethods"; 
import { deploySpCoinContract } from "./lib.js/hardhatSetup/deployContract";
import { HhClassMethods } from "./lib.js/hardhatSetup/hhClassMethods";

let spCoinContractDeployed;
let spCoinClassMethods;
let spCoinAddMethods;
let spCoinRewardsMethods;
let spCoinReadMethods;
let hhClassMethods;
let spCoinLogger;
let SPONSOR_ACCOUNT_SIGNERS;
let SPONSOR_ACCOUNT_KEYS;
let RECIPIENT_ACCOUNT_KEYS; 
let RECIPIENT_RATES;
let BURN_ACCOUNT;

describe("spCoinContract", function () {
  beforeEach(async () => {
    spCoinContractDeployed = await deploySpCoinContract();
    spCoinClassMethods = new SpCoinClassMethods(spCoinContractDeployed);
    spCoinAddMethods = spCoinClassMethods.spCoinAddMethods;
    spCoinRewardsMethods = spCoinClassMethods.spCoinRewardsMethods;
    spCoinReadMethods = spCoinClassMethods.spCoinReadMethods;
    spCoinLogger = spCoinClassMethods.spCoinLogger;
    hhClassMethods = new HhClassMethods();
    await hhClassMethods.initHHAccounts()
    hhClassMethods.dump()
    SPONSOR_ACCOUNT_SIGNERS = hhClassMethods.SPONSOR_ACCOUNT_SIGNERS;
    RECIPIENT_ACCOUNT_KEYS = hhClassMethods.RECIPIENT_ACCOUNT_KEYS;
    SPONSOR_ACCOUNT_KEYS = hhClassMethods.SPONSOR_ACCOUNT_KEYS;
    RECIPIENT_RATES = hhClassMethods.RECIPIENT_RATES;
    BURN_ACCOUNT = hhClassMethods.BURN_ACCOUNT;
  });

 it("2. <JAVA SCRIPT> VALIDATE ADD TRANSACTION RATES", async function () {

  
  await spCoinAddMethods.addBackDatedSponsorship(
    SPONSOR_ACCOUNT_SIGNERS[0],   // DEPOSIT ACCOUNT
    RECIPIENT_ACCOUNT_KEYS[1], 
    RECIPIENT_RATES[9],
    "100", 
    dateInSeconds() - year
  );

  await spCoinRewardsMethods.updateAccountStakingRewards( SPONSOR_ACCOUNT_KEYS[0] );

  // console.log("********************************************************************************");
  console.log("\n\n*** AFTER CREATE ******************************************************************************************************\n\n");
  // console.log("********************************************************************************");

  let getBody = true;
  let spCoinRecords = await spCoinReadMethods.getSPCoinHeaderRecord(getBody);

  spCoinLogger.logJSONTree(spCoinRecords);

 
  });
/**/
});