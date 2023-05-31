
const hre = require("hardhat");

const CONTRACT_ADDR ="0x2fc5dA502D72E644BA41158f8bb9a035970Fa5De";

async function main() {

  const contract = await hre.ethers.getContractAt("Contract",CONTRACT_ADDR);

  console.log(await contract.x());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
