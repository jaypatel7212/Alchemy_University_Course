const { ethers } = require("hardhat");
const { parseEther } = ethers.utils;

async function proposalCreation() {
  const [owner] = await ethers.getSigners();

  const MyGovernor = await ethers.getContractFactory("MyGovernor");
  const governor = await MyGovernor.attach("0xfAa17868124811501935980D38C63E729DEeb2c6");

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.attach("0x82d04aFabcE16B82bE18596529f8acE7931f7df0");

  const tx = await governor.propose(
    [token.address],
    [0],
    [token.interface.encodeFunctionData("mint", [owner.address, parseEther("25000")])],
    "Give the owner more tokens!"
  );
  const receipt = await tx.wait();
  const event = receipt.events.find(x => x.event === 'ProposalCreated');
  const { proposalId } = event.args;

  console.log("Proposal created with ID:", proposalId.toString());
}

proposalCreation().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});