const { ethers } = require("hardhat");
const { toUtf8Bytes, keccak256, parseEther } = ethers.utils;

async function executeProposal() {
  const [owner] = await ethers.getSigners();

  const MyGovernor = await ethers.getContractFactory("MyGovernor");
  const governor = await MyGovernor.attach("0xfAa17868124811501935980D38C63E729DEeb2c6");
    
  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.attach("0x82d04aFabcE16B82bE18596529f8acE7931f7df0");
 
  const proposalId = "1811806410877767615091963164551706011409281757480816259003340422202879760101"; 
  const gasLimit = 500000;
//   console.log("error---");
  await governor.execute(
    [token.address],
    [0],
    [token.interface.encodeFunctionData("mint", [owner.address, parseEther("25000")])],
    keccak256(toUtf8Bytes("Give the owner more tokens!")),
    { gasLimit }
  );

  console.log("Proposal executed successfully.");
}

executeProposal().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
