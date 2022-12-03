const { ethers } = require("hardhat");

async function main() {
  const chainBattleFactory = await ethers.getContractFactory("ChainBattles");
  const chainBattleContract = await chainBattleFactory.deploy();

  console.log("deployed contract at:" + chainBattleContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });