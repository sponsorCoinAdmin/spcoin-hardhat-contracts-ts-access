const dumpList = (_prefix, _arr) => {
    spCoinLogger.logFunctionHeader("dumpList = async(" + _prefix + ", _arr)");
    let maxCount = _arr.length;
//   spCoinLogger.logDetail("JS => DUMPING " + maxCount + " RECORDS");
    for(idx = 0; idx < maxCount; idx++) {
        let element = _arr[idx];
       spCoinLogger.log(_prefix + idx + ": " + element );
      }
    spCoinLogger.logExitFunction();
}

module.exports = {
    dumpList
}