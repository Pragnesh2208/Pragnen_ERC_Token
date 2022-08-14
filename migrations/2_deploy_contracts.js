var Pragnen_19IT002 = artifacts.require("./Pragnen_19IT002.sol");

module.exports = function(deployer) {
  deployer.deploy(Pragnen_19IT002, 1000000);
  
//   .then(function() {
//     // Token price is 0.001 Ether
//     var tokenPrice = 1000000000000000;
//     return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
//   });
};