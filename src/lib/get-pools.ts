import { enrichPoolWithTokenInfo } from "./pair-token-address";
import { fetchLendingPools } from "./graphql/lendingpool-list.fetch";

// Using real GraphQL API data instead of mock pools
export async function getPools(chainId?: number) {
  try {
    const defaultChainId = chainId || 1114;
    
    console.log("Fetching real lending pools from GraphQL API");
    
    // Fetch real lending pools from the API
    const realPools = await fetchLendingPools();
    
    if (!realPools || realPools.length === 0) {
      console.warn("No lending pools found from API");
      return [];
    }
    
    console.log(`Found ${realPools.length} lending pools from API`);
    
    // Map real pools to the expected format and enrich with token info
    const mappedRealPools = realPools.map((pool) => ({
      id: pool.id, // Use id directly as the pool ID
      collateralToken: pool.collateralToken,
      borrowToken: pool.borrowToken,
      ltv: pool.ltv,
    }));
    
    const enrichedPools = mappedRealPools.map((pool) =>
      enrichPoolWithTokenInfo(pool, defaultChainId)
    );

    return enrichedPools;
  } catch (error) {
    console.error("Error in getPools:", error);
    return [];
  }
}