import { Chain } from "@/types";

export const chains: Chain[] = [

  {
    id: 421614,
    name: "Arbitrum Sepolia",
    logo: "/chain/arbitrum.png",
    contracts: {
      lendingPool: "0x0a97cC170B77362Fd29edC650D0BFf009B7b30eD",
      factory: "0xB1fa9e45fBd6668d287FcAfE7ed9f37F7F24a8Ed",
      position: "0x616ea99db493b2200b62f13a15675954C0647C8e",
      protocol: "",
      isHealthy: "",
      blockExplorer: "https://sepolia.arbiscan.io",
    },
  },
  {
    id: 84532,
    name: "Base Sepolia",
    logo: "/chain/base.png",
    contracts: {
      lendingPool: "",
      factory: "",
      position: "",
      protocol: "",
      isHealthy: "",
      blockExplorer: "https://sepolia.basescan.org",
    },
  },
  {
    id: 1114,
    name: "Core Testnet 2",
    logo: "/chain/core-logo.png",
    contracts: {
      lendingPool: "0xb268f61c7dF38E14574fdC8b042f9Ad25ea0839A",
      factory: "0x92b3f4D2312a108998a8E0fF91B90e6aB7AC97bE",
      position: "0x1902BeEC99317B5d1D6E9d3bD9498B8d539365D2",
      protocol: "0xd36e48bb0Fe86b3E6A8B0012C00591650023a50d",
      isHealthy: "0x0D07e289995A13f7685FeE5E75E654ddD1059d93",
      blockExplorer: "https://scan.test2.btcs.network",
    },
  },

];
