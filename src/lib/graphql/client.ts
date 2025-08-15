import { GraphQLClient } from "graphql-request";

// Ponder API endpoint for lending pool data
const PONDER_API_ENDPOINT = "https://ponder-core-production.up.railway.app/";

export const graphClient = new GraphQLClient(PONDER_API_ENDPOINT);


