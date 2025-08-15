import { useReadContract } from "wagmi";
import { mockErc20Abi } from "@/lib/abis/mockErc20Abi";

export const useReadPositionBalance = (
  tokenAddress: string,
  addressPosition: string
) => {
  const {
    data: positionBalance,
    isLoading: isLoadingPositionBalance,
    refetch: refetchPositionBalance,
  } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: mockErc20Abi,
    functionName: "balanceOf",
    args: [addressPosition as `0x${string}`],
  });

  console.log("position balance",positionBalance);
  console.log("tokenAddess",tokenAddress);
  console.log("position address",addressPosition);
  return {
    positionBalance,
    isLoadingPositionBalance,
    refetchPositionBalance,
  };
};
