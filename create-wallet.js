const { writeFileSync, existsSync } = require("fs");
const { Wallet } = require("ethers");

if (existsSync("wallet.json")) {
  console.log("Wallet already exists");
  process.exit(-1);
}

const wallet = Wallet.createRandom();
writeFileSync("wallet.json", JSON.stringify(wallet.mnemonic));
