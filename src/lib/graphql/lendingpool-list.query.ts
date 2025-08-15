import { gql } from "graphql-request";

export const queryLendingPool = () => {
  return gql`
    query {
      lendingPools {
        items {
          id
          collateralToken
          borrowToken
          ltv
        }
      }
    }
  `;
};
