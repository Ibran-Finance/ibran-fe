export const getBlockExplorerUrl = (chainId: number, txHash: string) => {
  const explorers = {
    1114: "https://scan.test2.btcs.network", // core Testnet
  };

  const baseUrl =
    explorers[chainId as keyof typeof explorers] ||
    "https://scan.test2.btcs.network";
  return `${baseUrl}/tx/${txHash}`;
};
