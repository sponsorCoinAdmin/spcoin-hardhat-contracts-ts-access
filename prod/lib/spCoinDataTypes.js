class AccountStruct {
  constructor() {
    this.index;
    this.accountKey;
    this.balanceOf;
    this.insertionTime;
    this.verified;
    this.accountSponsorKeys;
    this.accountSponsorRecords;
    this.accountAgentKeys;
    this.accountPatreonKeys;
    this.accountParentSponsorKeys;
    this.KYC;
  }
}

class SponsorStruct {
  constructor() {
    this.index;
    this.sponsorAccountKey;
    this.insertionTime;
    this.verified;
    this.rates;
    this.verified;
    this.accountAgentKeys;
    this.agentRecordList;
  }
}

class AgentStruct {
  constructor() {
    this.index;
    this.agentAccountKey;
    this.insertionTime;
    this.verified;
    this.rates;
  }
}

class RateHeaderStruct {
  constructor() {
    this.insertionTime;
    this.lastUpdateTime;
    this.totalQuantity;
    this.transactions;
  }
}

class TransactionStruct {
  constructor() {
    this.insertionTime;
    this.quantity;
  }
}

module.exports = {
  AccountStruct,
  SponsorStruct,
  AgentStruct,
  RateHeaderStruct,
  TransactionStruct
};