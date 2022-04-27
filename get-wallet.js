const { readFileSync } = require("fs");
const { Wallet } = require("ethers");

const getWallet = () => {
  const json = JSON.parse(readFileSync("wallet.json"));
  return Wallet.fromMnemonic(json.phrase, json.path, json.locale);
};

module.exports = {
  getWallet,
};

if (require.main === module) {
  const wallet = getWallet();
  console.log("Address:", wallet.address);
  console.log("Private key:", wallet.privateKey);
}
