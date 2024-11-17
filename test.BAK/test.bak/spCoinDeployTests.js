const { initSPCoinTestConnect } = require("../test/hardhatSetup/hhConnectSetup");

describe("spCoinContract", function () {
  beforeEach(async () => {
    await initSPCoinTestConnect();
  });

/**
    it("Deployment ~ Validating ERC20 standard parameter settings", async function () {
        // setLogMode(LOG_MODE.LOG, true);
        // setLogMode(LOG_MODE.LOG_DETAIL, true);
        // setLogMode(LOG_MODE.LOG_TEST_HEADER, true);
        // setLogMode(LOG_MODE.LOG_FUNCTION_HEADER, true);
        // setLogMode(LOG_MODE.LOG_SETUP, true);
        logTestHeader("ACCOUNT DEPLOYMENT");
        let testName        = "recipientTestCoin";
        let testSymbol      = "SPTest";
        let testDecimals    = 3;
        let testTotalSupply = 10 * 10**testDecimals;
        let testMsgSender   = TEST_HH_ACCOUNT_LIST[0];
       spCoinLogger.log("**** BEFORE ACCOUNT DEPLOYMENT");
        await spCoinContractDeployed.initToken(testName,  testSymbol, testDecimals, testTotalSupply);
       spCoinLogger.log("JS => Name      = " + await spCoinContractDeployed.name());
       spCoinLogger.log("JS => Symbol    = " + await spCoinContractDeployed.symbol());
       spCoinLogger.log("JS => Decimals  = " + await spCoinContractDeployed.decimals());
       spCoinLogger.log("JS => balanceOf = " + await spCoinContractDeployed.balanceOf(testMsgSender));
        expect(await spCoinContractDeployed.msgSender()).to.equal(testMsgSender);

        let solName = await spCoinContractDeployed.name();
        let solSymbol = await spCoinContractDeployed.symbol();
        let solBalanceOf = (await spCoinContractDeployed.balanceOf(testMsgSender)).toNumber();
        let solDecimals = (await spCoinContractDeployed.decimals()).toNumber();
        
        expect(solName).to.equal(testName);
        expect(solSymbol).to.equal(testSymbol);
        expect(solBalanceOf).to.equal(testTotalSupply);
        expect(solDecimals).to.equal(testDecimals);
    });
/**/

    it("Account Insertion Validation", async function () {
        logTestHeader("TEST ACCOUNT INSERTION");
        let accountKey = TEST_HH_ACCOUNT_LIST[0];
        let recCount = await getAccountListSize();
        expect(recCount).to.equal(0);
        spCoinLogger.logDetail("JS => ** Before Inserted Record Count = " + recCount);
        let isAccountInserted = await spCoinContractDeployed.isAccountInserted(accountKey);
        spCoinLogger.logDetail("JS => Address "+ accountKey + " Before Inserted Record Found = " + isAccountInserted);
        await spCoinContractDeployed.addAccountRecord(accountKey);
        isAccountInserted = await spCoinContractDeployed.isAccountInserted(accountKey);
        spCoinLogger.logDetail("JS => Address "+ accountKey + " After Inserted Record Found = " + isAccountInserted);
        recCount = (await getAccountListSize());
        spCoinLogger.logDetail("JS => ** After Inserted Record Count = " + await recCount);        
        expect(recCount).to.equal(1);
    });

/**/

    it("Insertion 20 Hardhat Account for Validation", async function () {
        logTestHeader("ADD MORE HARDHAT ACCOUNTS")
        await addAccountRecords(TEST_HH_ACCOUNT_LIST);

        spCoinLogger.logDetail("JS => *** RETRIEVE ALL INSERTED RECORDS FROM THE BLOCKCHAIN ***")
        let sPCoinAccountList = await getAccountList();
        let testRecCount = TEST_HH_ACCOUNT_LIST.length;
        let insertedRecCount = sPCoinAccountList.length;
        expect(testRecCount).to.equal(insertedRecCount);

        for(idx = 0; idx < insertedRecCount; idx++) {
            expect(TEST_HH_ACCOUNT_LIST[idx].toLowerCase()).to.equal(sPCoinAccountList[idx].toLowerCase());
            let accountKey = sPCoinAccountList[idx];
            spCoinLogger.logDetail("JS => Address Retrieved from Block Chain at Index " + idx + "  = "+ accountKey );
        }
    });

    /**/

    it("Insert 4 Recipient Coin Records 1 count, 1 recipient and 2 Agent", async function () {
        logTestHeader("TEST MORE HARDHAT RECIPIENT RECORD INSERTIONS")

        spCoinLogger.logDetail("JS => *** Insert Recipient to AccountRecord[2] as AccountRecord[5] ***")
        await spCoinAddMethods.addTestNetworkRecipientAgents(6, 10, [1, 2]);
        let insertCount = (await getAccountListSize());
        expect(insertCount).to.equal(4);
    });
    /**/
});
