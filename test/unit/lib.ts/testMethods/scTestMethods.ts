// import { TEST_HH_ACCOUNT_LIST } from "../hardhatSetup/hhTestAccounts";
// const {} = require("../../prod/lib/spCoinAddMethods");
import { initSpCoinAccessMethods } from "../../../../prod/spCoin_TS_Methods";
const {} = require("../../../../prod/lib/spCoinAddMethods");
// const {} = require("../../../../prod/lib/");
// const {} = require("../../../prod/lib/spCoinReadMethods");
const {} = require("../../../../prod/lib/utils/logging");
let hhTestElements:any = undefined;


const { HhClassMethods } = require("../../lib.js/hardhatSetup/hhClassMethods");
// const spCoinDeleteMethods = new SpCoinDeleteMethods(spCoinContractDeployed);
// const spCoinERC20Methods = new SpCoinERC20Methods(spCoinContractDeployed);
// const spCoinLogger = new SpCoinLogger(spCoinContractDeployed);
// const spCoinReadMethods = new SpCoinReadMethods(spCoinContractDeployed);
// const spCoinRewardsMethods = new SpCoinRewardsMethods(spCoinContractDeployed);
// const spCoinStakingMethods = new SpCoinStakingMethods(spCoinContractDeployed);


const getTestHHAccountKey = async (idx:number) => {

  


  if (hhTestElements === undefined) {
     hhTestElements = await initHHAccounts();
  }
  const signers = hhTestElements.signers;
  const accounts = hhTestElements.accounts;
  const rates = hhTestElements.rates;
  return accounts[idx];
}

//////////////////////////// TEST ACCOUNT METHODS ////////////////////////////

const addTestNetworkAccount = async (_accountIdx:number) => {
  logFunctionHeader("addTestNetworkAccount = async (" + _accountIdx + ")");
  let accountKey = await getTestHHAccountKey(_accountIdx);
  logDetail("JS => For Adding Account Record: " + accountKey );
  await addAccountRecord(accountKey);
  logExitFunction();
};

// const addTestNetworkAccount = async (_testHHAccountIdx) => {
//   logFunctionHeader("async (" + _testHHAccountIdx+ ")");
//   let accountKey = await getTestHHAccountKey(_testHHAccountIdx);
//   await addAccountRecord(accountKey);
//   return accountKey;
//   logExitFunction();
// };


const addTestNetworkAccounts = async (_AccountList:any) => {
  logFunctionHeader("addTestNetworkAccounts = async (" + _AccountList + ")");
  let testHHAccountList = await getTestHHAccountListKeys(_AccountList);
  logDetail("JS => For Adding Account Records: " + testHHAccountList );
  await addAccountRecords(testHHAccountList);
  logExitFunction();
};

//////////////////////////// TEST RECIPIENT METHODS ////////////////////////////

const addTestNetworkRecipient = async (_accountIdx:number, _recipientIdx:any) => {
  logFunctionHeader("addTestNetworkRecipient = async (" + _accountIdx + ", " + _recipientIdx + ")");

  let accountKey = await getTestHHAccountKey(_accountIdx);
  let recipientKey = await getTestHHAccountKey(_recipientIdx);  
  logDetail("JS => For Account: " + accountKey + " Inserting Recipient Records");
  logDetail(recipientKey);
  await addRecipient(recipientKey);
  logExitFunction();
};

const addTestNetworkRecipients = async (_accountIdx:number, _recipientAccountListIdx:number) => {
  logFunctionHeader("addTestNetworkRecipients = async (" + _accountIdx + ", " + _recipientAccountListIdx + ")");

  let accountKey = await getTestHHAccountKey(_accountIdx);
  let recipientAccountList = await getTestHHAccountListKeys(_recipientAccountListIdx);
  logDetail("JS => For Account: " + accountKey + " Inserting Recipient Records:");
  logDetail(recipientAccountList);
  await addRecipients(accountKey, recipientAccountList);
  logExitFunction();
};

//////////////////////////// TEST AGENT METHODS ////////////////////////////

const addTestNetworkRecipientAgents = async (_recipientIdx:number, _recipientRateKey:any, _agentListIdx:number ) => {
  logFunctionHeader("async (" + _recipientIdx + "," + _agentListIdx+ ")");
  let recipientKey = await getTestHHAccountKey(_recipientIdx);
  let agentAccountList = await getTestHHAccountListKeys(_agentListIdx);
  await addAgents(recipientKey, _recipientRateKey, agentAccountList);
  return recipientKey;
  logExitFunction();
};

const getTestHHAccountListKeys = async (testAccountIdxArr:any) => {
  logFunctionHeader("await getTestHHAccountListKeys (" + testAccountIdxArr + ")");
  let AccountListKeys = [];
  for (let i = 0; i < testAccountIdxArr.length; i++) {
    AccountListKeys.push(await getTestHHAccountKey(testAccountIdxArr[i]));
  }
  logExitFunction();
  return AccountListKeys;
};

const getTestHHAccountRecord = async (testHHAccountIdx:any) => {
  testHHAccountKey = await getTestHHAccountKey(testHHAccountIdx);
  testHHAccountRecord = getAccountRecord(testHHAccountKey);
  return testHHAccountRecord;
}

const logTestHHAccountRecord = async (testHHAccountIdx:any) => {
  testHHAccountKey = await getTestHHAccountKey(testHHAccountIdx);
  testHHAccountRecord = logJSONAccount(testHHAccountKey);
  logExitFunction();
  return testHHAccountRecord;
}

///////////////////////////// DELETE METHODS ///////////////////////////////

const deleteTestNetworkAccount = async (_testHHAccountIdx:any) => {
  logFunctionHeader("async (" + _testHHAccountIdx+ ")");
  let accountKey = await getTestHHAccountKey(_testHHAccountIdx);
  await deleteAccountRecord(accountKey);
  logExitFunction();
  return accountKey;
};

const deleteTestNetworkAccounts = async (_testHHAccountArr:any) => {
  logFunctionHeader("async (" + _testHHAccountArr+ ")");
  testHHAccountList = await getTestHHAccountListKeys(_testHHAccountArr);
  await deleteAccountRecords(testHHAccountList);
  logExitFunction();
};

/////////////////////////// TEST UN-RECIPIENT METHODS //////////////////////////


const deleteTestNetworkRecipients = async (_testHHAccountIdx:any) => {
  logFunctionHeader("async (" + _testHHAccountIdx+ ")");
  let accountKey = await getTestHHAccountKey(_testHHAccountIdx);
  await (accountKey);
  logExitFunction();
  return accountKey;
};

/*
deleteTestNetworkRecipientAgents = async (_testHHAccountIdx) => {
  logFunctionHeader("async (" + _testHHAccountIdx+ ")");
  let accountKey = await getTestHHAccountKey(_testHHAccountIdx);
  await deleteAgentAccountReferences(accountKey);
    logExitFunction();
  return accountKey;
};
*/

module.exports = {
  getTestHHAccountListKeys,
  addTestNetworkAccount,
  addTestNetworkAccounts,
  addTestNetworkRecipient,
  addTestNetworkRecipients,
  addTestNetworkRecipientAgents,
  deleteTestNetworkAccount,
  getTestHHAccountKey,
  getTestHHAccountRecord,
  logTestHHAccountRecord
}
