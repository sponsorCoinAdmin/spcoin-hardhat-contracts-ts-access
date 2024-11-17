// const { LOG_MODE } = require("./lib.js/hardhatSetup/hhConnectSetup");
// const { LOG_MODE } = require("./hardhatSetup/hhConnectSetup");
const { dateInMilliseconds, dateInSeconds, second, minute, hour, day, week, year, month , millennium } = require("../../prod/lib/utils/dateTime"); 
// const { SpCoinRewardsMethods } = require("../../prod/lib/spCoinRewardsMethods"); 
// const { SpCoinAddMethods } = require("../../prod/lib/spCoinRewardsMethods"); 

describe("spCoinContract", function () {
    // beforeEach(async () => {
    //   await initSPCoinTestConnect();
    // });
  
    it("2. VALIDATE ADD TRANSACTION RATES", async function () {
   
  await spCoinAddMethods.addBackDatedSponsorship(
    SPONSOR_ACCOUNT_SIGNERS[0],   // DEPOSIT ACCOUNT
    RECIPIENT_ACCOUNT_KEYS[1], 
    RECIPIENT_RATES[9],
    "100", 
    dateInSeconds() - year
  );
  
/*
  await spCoinRewardsMethods.updateAccountStakingRewards( SPONSOR_ACCOUNT_KEYS[0] );

  // console.log("********************************************************************************");
  console.log("\n\n*** AFTER CREATE ******************************************************************************************************\n\n");
  // console.log("********************************************************************************");

  let getBody = true;
  let spCoinRecords = await spCoinReadMethods.getSPCoinHeaderRecord(getBody);

  spCoinLogger.logJSONTree(spCoinRecords);

*/
    });
  /**/
  });