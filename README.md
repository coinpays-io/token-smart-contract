# Getting Started
Recommended Node version is 16.0.0 and above.

### Available commands

```bash
# install dependencies
$ npm install

# build for production
$ npm run build

# clean, build, run tests
$ npm run rebuild

# run tests
$ npm run test

# compute tests coverage
$ npm run coverage

# eslint automatically fix problems
$ npm run lint

# run pretty-quick on .ts , .tsx files
$ npm run lint-quick
```

# Project Structure
This a template hardhat typescript project composed of contracts, tests, and deploy instructions that provides a great starting point for developers to quickly get up and running and deploying smart contracts on the Ethereum blockchain.

## Contracts

Solidity smart contracts are found in `./contracts/`

## Deploy
Deploy script can be found in the `deploy.ts` folder.

Rename `./.env.example` to `./.env` in the project root.
To add the private key of a deployer account, assign the following variables
```
PRIVATE_KEY=...
```
example:
```bash
$ npm run deploy -- areonTestnet
```
