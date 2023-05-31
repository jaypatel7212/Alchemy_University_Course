// add the game address here and update the contract name if necessary
const gameAddr = "0x0B306BF915C4d645ff596e518fAf3F9669b97016";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    // await game.setx(20);
    // await game.sety(30);
    // const tx1 = await game.setX(20);
    // await tx1.wait();
    // const tx2 = await game.setY(30);
    // await tx2.wait();

    // const tx3 = await game.win(45);
    await game.giveMeAllowance(11000);
    await game.mint(10000);
    const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
