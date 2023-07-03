const { ethers } = require("hardhat");

async function delegateVotes() {
  const [owner] = await ethers.getSigners();

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.attach("0x82d04aFabcE16B82bE18596529f8acE7931f7df0");

  await token.delegate(owner.address);

  console.log("Votes delegated to owner.");
}

delegateVotes().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});