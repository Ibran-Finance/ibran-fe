import React from "react";
import { Address, formatUnits } from "viem";
import { EnrichedPool } from "@/lib/pair-token-address";
import { tokens } from "@/constants/tokenAddress";
import { defaultChain } from "@/lib/get-default-chain";
import { useReadAddressPosition } from "@/hooks/read/useReadPositionAddress";
import { useReadPositionBalance } from "@/hooks/read/useReadPositionBalance";
import { useTokenCalculator } from "@/hooks/read/useTokenCalculator";

export function useTotalCollateralInUsdt(pool: EnrichedPool | null) {
  const lendingPoolAddress = (pool?.id as `0x${string}`) ||
    ("0x0000000000000000000000000000000000000000" as `0x${string}`);

  const { addressPosition } = useReadAddressPosition(lendingPoolAddress);
  const positionAddress = (addressPosition as `0x${string}`) ||
    ("0x0000000000000000000000000000000000000000" as `0x${string}`);

  const usdtToken = tokens.find((t) => t.symbol === "USDT");
  const usdtAddress = (usdtToken?.addresses?.[defaultChain] as Address) ||
    ("0x0000000000000000000000000000000000000000" as Address);

  // Note: tokens is a constant-length array; calling hooks in a map is safe as long as the array length and order remain constant.
  const amountsInUsdt = tokens.map((token) => {
    const tokenAddress = token.addresses[defaultChain] as `0x${string}`;
    const { positionBalance } = useReadPositionBalance(
      tokenAddress,
      positionAddress
    );

    const parsedBalance = positionBalance
      ? Number(formatUnits(positionBalance as bigint, token.decimals))
      : 0;

    const { price } = useTokenCalculator(
      tokenAddress as Address,
      usdtAddress,
      parsedBalance,
      positionAddress as Address,
      { refetchIntervalMs: 5000, staleTimeMs: 3000 }
    );

    return Number.isFinite(price) ? price : 0;
  });

  const totalInUsdt = React.useMemo(
    () => amountsInUsdt.reduce((acc, v) => acc + (Number.isFinite(v) ? v : 0), 0),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    amountsInUsdt
  );

  return { totalInUsdt };
}


