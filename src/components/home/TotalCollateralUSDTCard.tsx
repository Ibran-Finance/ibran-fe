import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { EnrichedPool } from "@/lib/pair-token-address";
import { useReadAddressPosition } from "@/hooks/read/useReadPositionAddress";
import { useReadPositionBalance } from "@/hooks/read/useReadPositionBalance";
import { useTokenCalculator } from "@/hooks/read/useTokenCalculator";
import { tokens } from "@/constants/tokenAddress";
import { defaultChain } from "@/lib/get-default-chain";
import { Address, formatUnits } from "viem";

interface TotalCollateralUSDTCardProps {
  pool: EnrichedPool | null;
}

export const TotalCollateralUSDTCard: React.FC<TotalCollateralUSDTCardProps> = ({ pool }) => {
  // Guard: pool must be selected to derive lending pool address
  const lendingPoolAddress = (pool?.id as `0x${string}`) || "0x0000000000000000000000000000000000000000";

  // Resolve user's position address for the selected pool
  const { addressPosition } = useReadAddressPosition(lendingPoolAddress);
  const positionAddress = (addressPosition as `0x${string}`) || "0x0000000000000000000000000000000000000000";

  // Resolve USDT address for the active chain
  const usdtToken = tokens.find((t) => t.symbol === "USDT");
  const usdtAddress = (usdtToken?.addresses?.[defaultChain] as Address) || ("0x0000000000000000000000000000000000000000" as Address);

  // For each supported token, read position balance and convert to USDT
  const tokenEntries = React.useMemo(() => tokens, []);

  const balances = tokenEntries.map((token) => {
    const tokenAddress = token.addresses[defaultChain] as `0x${string}`;
    const { positionBalance } = useReadPositionBalance(tokenAddress, positionAddress);

    // Parse BigInt balance into decimal number with proper token decimals
    const parsed = positionBalance ? Number(formatUnits(positionBalance as bigint, token.decimals)) : 0;

    const { price: amountOutInUsdt } = useTokenCalculator(
      tokenAddress as Address,
      usdtAddress,
      parsed,
      positionAddress as Address,
      { refetchIntervalMs: 5000, staleTimeMs: 3000 }
    );

    return {
      symbol: token.symbol,
      amountParsed: parsed,
      amountInUsdt: amountOutInUsdt || 0,
    };
  });

  const totalInUsdt = balances.reduce((acc, b) => acc + (Number.isFinite(b.amountInUsdt) ? b.amountInUsdt : 0), 0);

  // Loading state: if no pool selected
  if (!pool) {
    return (
      <Card className="border border-cyan-800 py-2 w-full max-w-full bg-gray-900 text-gray-100 shadow-xl">
        <CardContent className="w-full flex flex-row mx-auto px-6 py-3 justify-between items-center">
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm font-medium">Your Total Collateral (USDT)</span>
            <span className="text-white font-bold text-lg">-</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-cyan-800 py-2 w-full max-w-full bg-gray-900 text-gray-100 shadow-xl">
      <CardContent className="w-full flex flex-row mx-auto px-6 py-3 justify-between items-center">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm font-medium">Your Total Collateral (USDT)</span>
          <span className="text-white font-bold text-lg">{totalInUsdt.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
};
