require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    goerli: {
      url: process.env.API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  }

};