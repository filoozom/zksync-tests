const { getDefaultProvider } = require("ethers");
const { Wallet, Provider } = require("zksync-web3");

// Lib
const { getWallet } = require("./get-wallet");

// Config
const token = "0x6842745bCDBa872C64CeE14C5036EF7AECD587ab";

// Get wallet and contract
const zkSyncProvider = new Provider("https://zksync2-testnet.zksync.dev");
const ethereumProvider = getDefaultProvider("goerli");
const wallet = new Wallet(
  getWallet().privateKey,
  zkSyncProvider,
  ethereumProvider
);

// Deposit tokens
(async () => {
  // Not extremely precise but will probably do
  const amount = BigInt(Number(process.argv[2]) * 1e18);
  const tx = await wallet.deposit({
    token,
    amount,
    approveERC20: true,
  });
  console.log(await tx.wait());
})();
