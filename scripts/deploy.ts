import { ethers } from "hardhat";

// This is a script for deploying your contracts. You can adapt it to deploy
const main = async () => {

    const Contract = await ethers.getContractFactory("CoinPays");
  
    const deployed = await Contract.deploy("CoinPays", "CPY", 18, 100000000);
  
    await deployed.deployed();
  
    console.log("Contract deployed to:", deployed.address);
  
  }
  
  main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });