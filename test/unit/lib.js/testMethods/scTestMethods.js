// const { TEST_HH_ACCOUNT_LIST } = require("../hardhatSetup/hhTestAccounts");
// const {SpCoinAddMethods} = require("../../../../prod/lib/spCoinAddMethods");
// const {SpCoinReadMethods} = require("../../../../prod/lib/spCoinReadMethods");
// const {SpCoinLogger, LOG_MODE} = require("../../../../prod/lib/utils/logging");
const { HhClassMethods } = require("../hardhatSetup/hhClassMethods");

let hhTestElements = undefined;

const getTestHHAccountKey = async (idx) => {

  hhClassMethods = new HhClassMethods();
  await hhClassMethods.initHHAccounts();
  hhClassMethods.dump();
  SPONSOR_ACCOUNT_SIGNERS = hhClassMethods.SPONSOR_ACCOUNT_SIGNERS;
  RECIPIENT_ACCOUNT_KEYS = hhClassMethods.RECIPIENT_ACCOUNT_KEYS;
  SPONSOR_ACCOUNT_KEYS = hhClassMethods.SPONSOR_ACCOUNT_KEYS;
  RECIPIENT_RATES = hhClassMethods.RECIPIENT_RATES;
  BURN_ACCOUNT = hhClassMethods.BURN_ACCOUNT;

  const accounts = hhTestElements.accounts;

  return accounts[idx];
}

//////////////////////////// TEST ACCOUNT METHODS ////////////////////////////

const addTestNetworkAccount = async (_accountIdx) => {
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


const addTestNetworkAccounts = async (_AccountList) => {
  logFunctionHeader("addTestNetworkAccounts = async (" + _AccountList + ")");
  let testHHAccountList = await getTestHHAccountListKeys(_AccountList);
  logDetail("JS => For Adding Account Records: " + testHHAccountList );
  await addAccountRecords(testHHAccountList);
  logExitFunction();
};

//////////////////////////// TEST RECIPIENT METHODS ////////////////////////////

const addTestNetworkRecipient = async (_accountIdx, _recipientIdx) => {
  logFunctionHeader("addTestNetworkRecipient = async (" + _accountIdx + ", " + _recipientIdx + ")");

  let accountKey = await getTestHHAccountKey(_accountIdx);
  let recipientKey = await getTestHHAccountKey(_recipientIdx);  
  logDetail("JS => For Account: " + accountKey + " Inserting Recipient Records");
  logDetail(recipientKey);
  await addRecipient(recipientKey);
  logExitFunction();
};

const addTestNetworkRecipients = async (_accountIdx, _recipientAccountListIdx) => {
  logFunctionHeader("addTestNetworkRecipients = async (" + _accountIdx + ", " + _recipientAccountListIdx + ")");

  let accountKey = await getTestHHAccountKey(_accountIdx);
  let recipientAccountList = await getTestHHAccountListKeys(_recipientAccountListIdx);
  logDetail("JS => For Account: " + accountKey + " Inserting Recipient Records:");
  logDetail(recipientAccountList);
  await addRecipients(accountKey, recipientAccountList);
  logExitFunction();
};

//////////////////////////// TEST AGENT METHODS ////////////////////////////

const addTestNetworkRecipientAgents = async (_recipientIdx, _recipientRateKey, _agentListIdx ) => {
  logFunctionHeader("async (" + _recipientIdx + "," + _agentListIdx+ ")");
  let recipientKey = await getTestHHAccountKey(_recipientIdx);
  let agentAccountList = await getTestHHAccountListKeys(_agentListIdx);
  await addAgents(recipientKey, _recipientRateKey, agentAccountList);
  return recipientKey;
  logExitFunction();
};

const getTestHHAccountListKeys = async (testAccountIdxArr) => {
  logFunctionHeader("await getTestHHAccountListKeys (" + testAccountIdxArr + ")");
  let AccountListKeys = [];
  for (let i = 0; i < testAccountIdxArr.length; i++) {
    AccountListKeys.push(await getTestHHAccountKey(testAccountIdxArr[i]));
  }
  logExitFunction();
  return AccountListKeys;
};

const getTestHHAccountRecord = async (testHHAccountIdx) => {
  testHHAccountKey = await getTestHHAccountKey(testHHAccountIdx);
  testHHAccountRecord = getAccountRecord(testHHAccountKey);
  return testHHAccountRecord;
}

const logTestHHAccountRecord = async (testHHAccountIdx) => {
  testHHAccountKey = await getTestHHAccountKey(testHHAccountIdx);
  testHHAccountRecord = logJSONAccount(testHHAccountKey);
  logExitFunction();
  return testHHAccountRecord;
}

///////////////////////////// DELETE METHODS ///////////////////////////////

const deleteTestNetworkAccount = async (_testHHAccountIdx) => {
  logFunctionHeader("async (" + _testHHAccountIdx+ ")");
  let accountKey = await getTestHHAccountKey(_testHHAccountIdx);
  await deleteAccountRecord(accountKey);
  logExitFunction();
  return accountKey;
};

const deleteTestNetworkAccounts = async (_testHHAccountArr) => {
  logFunctionHeader("async (" + _testHHAccountArr+ ")");
  testHHAccountList = await getTestHHAccountListKeys(_testHHAccountArr);
  await deleteAccountRecords(testHHAccountList);
  logExitFunction();
};

/////////////////////////// TEST UN-RECIPIENT METHODS //////////////////////////


const deleteTestNetworkRecipients = async (_testHHAccountIdx) => {
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
