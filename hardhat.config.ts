import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          }
        }
      },
      {
        version: "0.4.18"
      },
    ],
    // version:  "0.8.18",
  },
  networks: {
    hardhat: {
      hardfork: "merge",
      // If you want to do some forking set `enabled` to true. 
      // It is highly recommended to set forking block number, otherwise the latest one will be used each time
      // which can lead into inconsistency of tests
      forking: {
        url: process.env.MAINNET_RPC_URL || "",
        // blockNumber:
        enabled: false,
      },
      chainId: 31337,
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};

export default config;
