const Pragnen_19IT002 = artifacts.require("./Pragnen_19IT002.sol");
const PragnenTokenSale = artifacts.require("./PragnenTokenSale.sol");
const tokenPrice = 1000000000000000;

module.exports = function(deployer) {
  deployer.deploy(Pragnen_19IT002,1000000).then(()=>{
    return deployer.deploy(PragnenTokenSale,Pragnen_19IT002.address,tokenPrice);
  });
};



