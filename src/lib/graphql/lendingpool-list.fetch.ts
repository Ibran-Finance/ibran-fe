import { graphClient } from "./client";
import { queryLendingPool } from "./lendingpool-list.query";

export type LendingPoolCreated = {
  id: string;
  borrowToken: `0x${string}`;
  collateralToken: `0x${string}`;
  ltv: string;
};

export async function fetchLendingPools(): Promise<LendingPoolCreated[]> {
  try {
    const query = queryLendingPool();
    const data = await graphClient.request<{ lendingPools: { items: LendingPoolCreated[] } }>(query);
    return data?.lendingPools?.items ?? [];
  } catch (error) {
    console.error("Error fetching lending pools:", error);
    return [];
  }
}


