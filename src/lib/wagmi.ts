import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { coreTestnet2, arbitrumSepolia, baseSepolia } from "viem/chains";
export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [coreTestnet2, arbitrumSepolia, baseSepolia],
});
