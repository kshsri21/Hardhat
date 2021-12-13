/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "Tv277_RjwkXDuii_WGiG_X8RL-T56yyG";
const ROPSTEN_PRIVATE_KEY =
  "03b0f6f55ffbb14f947243799cdb21854527ee5efe87d0ae7c5613b3bee7d0b6";
module.exports = {
  solidity: "0.8.9",

  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
// * @type import('hardhat/config').HardhatUserConfig
//  */
// require("@nomiclabs/hardhat-waffle");

// const ALCHEMY_API_KEY =
//   "https://eth-ropsten.alchemyapi.io/v2/Tv277_RjwkXDuii_WGiG_X8RL-T56yyG";
// const ROPSTEN_PRIVATE_KEY =
//   "03b0f6f55ffbb14f947243799cdb21854527ee5efe87d0ae7c5613b3bee7d0b6";
// // module.exports = {
// //   solidity: "0.8.9",

// //   networks: {
// //     ropsten: {
// //       url: "https://eth-ropsten.alchemyapi.io/v2/Tv277_RjwkXDuii_WGiG_X8RL-T56yyG",
// //       accounts: [
// //         "03b0f6f55ffbb14f947243799cdb21854527ee5efe87d0ae7c5613b3bee7d0b6",
// //       ],
// //     },
// //   },
// // };
// // //0x89002c933dd68b737b7836d0656858Ef0f2A4aCa
// // //0x2E854489Bd80B357e6F9f9A3Ba0626457B0A36C8
// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */

// require("@nomiclabs/hardhat-ethers");

// module.exports = {
//   solidity: "0.8.7",
//   defaultNetwork: "ropsten",
//   networks: {
//     hardhat: {},
//     ropsten: {
//       url: ALCHEMY_API_KEY,
//       accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
//     },
//   },
// };
