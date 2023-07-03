const { ethers } = require("hardhat");

async function proposalVote() {
  const [owner] = await ethers.getSigners();

  const MyGovernor = await ethers.getContractFactory("MyGovernor");
  const governor = await MyGovernor.attach("0xfAa17868124811501935980D38C63E729DEeb2c6");

  const proposalId = "1811806410877767615091963164551706011409281757480816259003340422202879760101";
  const tx = await governor.castVote(proposalId, 1);   
  
  console.log("Vote casted for proposal ID:", proposalId);
}

proposalVote().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});