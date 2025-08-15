import { Token } from "@/types";

export const tokens: Token[] = [
  {
    name: "WETH",
    symbol: "WETH",
    logo: "/token/weth.png",
    decimals: 18,
    addresses: {
      1114: "0x21077433B716F12e6aC2218184DC8fBbAd5E47fc",
      421614: "0x8acFd502E5D1E3747C17f8c61880be64BABAE2dF",
      84532: "0x9A2Da2FA519AFCcCc6B33CA48dFa07fE3a9887eF", // DESTINATION_mockWETH
    },
    priceFeed: {
      421614: "0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165",
      84532: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
      1114: "0x6c75b16496384caE307f7E842e7133590E6D79Af",
    },
  },
  {
    name: "lstBTC",
    symbol: "lstBTC",
    logo: "/token/lstBTC-logo.png",
    decimals: 8,
    addresses: {
      1114: "0x3217D2b65Df07C7FD5BBa61144ad4B7ec623E311",
      421614: "0xd642a577d77DF95bADE47F6A2329BA9d280400Ea",
      84532: "0x11603bf689910b9312bd0915749095C12cc92ac1", // DESTINATION_mockWBTC
    },
    priceFeed: {
      421614: "0x56a43EB56Da12C0dc1D972ACb089c06a5dEF8e69",
      84532: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
      1114: "0x121296103189009d9D082943bE723387A6c7D30C",
    },
  },
  {
    name: "WtCORE",
    symbol: "WtCORE",
    logo: "/token/core-logo.png",
    decimals: 18,
    addresses: {
      1114: "0x14A9bEe4e32f4862e648a4cb208E57FF299662a5",
      421614: "0x0a3Fc1B5194B5564987F8062d1C9EC915B5B11d9",
      84532: "0x10d3743F6A987082CB7B0680cA2283F5839e77CD", // DESTINATION_mockWXTZ
    },
    priceFeed: {
      421614: "0xe27498c9Cc8541033F265E63c8C29A97CfF9aC6D",
      84532: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
      1114: "0x1C17f47A297Ed0cCb0dD566eD79C65DA0EE69566",
    },
  },
  {
    name: "USDC",
    symbol: "USDC",
    logo: "/token/usdc.png",
    decimals: 6,
    addresses: {
      1114: "0xcD108eEE9a62baEeA4a03e4CE5D2dD15b47b2857",
      421614: "0x902bf8CaC2222a8897d07864BEB49C291633B70E",
      84532: "0xdfd290562Ce8aB4A4CCBfF3FC459D504a628f8eD", // DESTINATION_mockUSDC
    },
    priceFeed: {
      421614: "0x902bf8CaC2222a8897d07864BEB49C291633B70E",
      84532: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
    },
  },
  {
    name: "USDT",
    symbol: "USDT",
    logo: "/token/usdt.png",
    decimals: 6,
    addresses: {
      1114: "0xBd788D49ffD8707dC713897614D96755FF72b313",
      421614: "0x2315a799b5E50b0454fbcA7237a723df4868F606",
      84532: "0xF597525130e6295CFA0C75EA968FBf89D486c528", // DESTINATION_mockUSDT
    },
    priceFeed: {
      421614: "0x80EDee6f667eCc9f63a0a6f55578F870651f06A4",
      84532: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
    },
  },
];

export const helperAddress = "0x8BDa1a549676B056A84b37F17739614b2F41Dd02";
