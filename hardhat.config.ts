import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy-ethers";
import "hardhat-deploy";
import "hardhat-typechain";
import "@typechain/ethers-v5";
import "@nomiclabs/hardhat-etherscan";

import * as dotenv from "dotenv";

dotenv.config();

const secret: string = process.env.PRIVATE_KEY as string;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.24",
                // settings: {
                //     optimizer: {
                //         enabled: true,
                //         runs: 1000,
                //     },
                // },
            },
        ],
    },
    networks: {
        hardhat: {
            gas: 15000000,
            gasPrice: 875000000,
            blockGasLimit: 15000000,
            allowUnlimitedContractSize: true,
        },
        areonTestnet: {
            url: "https://testnet-rpc.areon.network",
            chainId: 462,
            accounts: [secret],
            gas: "auto",
            gasPrice: 1500000000, // 1.5 gwei
            gasMultiplier: 1.5,
        },
        areonMainnet: {
            url: "https://mainnet-rpc.areon.network",
            chainId: 463,
            accounts: [secret],
            gas: "auto",
            gasPrice: 1500000000, // 1.5 gwei
            gasMultiplier: 1.5,
        },
        // rinkeby: {
        //   url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
        //   accounts: [secret],
        // },
        // ropsten: {
        //   url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
        //   accounts: [secret],
        // },
        // mainnet: {
        //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
        //   accounts: [secret],
        // },
        coverage: {
            url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
        },
    }
};
export default config;
