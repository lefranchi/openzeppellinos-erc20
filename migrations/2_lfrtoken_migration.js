const LFRToken = artifacts.require("LFRToken");

module.exports = function (deployer) {
  deployer.deploy(LFRToken);
};
