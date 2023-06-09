
const hre = require("hardhat");

async function main() {

  const Contract = await hre.ethers.getContractFactory("Contract");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log(`Contract was deployed to ${contract.address}`
  );  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
