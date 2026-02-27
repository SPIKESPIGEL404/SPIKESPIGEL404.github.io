export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "AiMo Network",
    description:
      "A permissionless AI marketplace on Solana and Base. Humans and autonomous agents access AI inference without KYC via stablecoin micropayments.",
    tags: ["solana", "base", "ai", "defi"],
    github: "https://github.com/SPIKESPIGEL404/aimo-network-docs",
    live: "https://aimo.network",
  },
  {
    title: "x402-flash",
    description:
      "Coinbase CDP Award winner and ETHGlobal Finalist. Enabling instant micropayments for AI agent interactions.",
    tags: ["ethereum", "payments", "agents"],
    github: "https://github.com/SPIKESPIGEL404/x402-flash",
  },
  {
    title: "Onchain Pal",
    description:
      "An on-chain companion tool for navigating crypto and DeFi interactions.",
    tags: ["web3", "defi", "typescript"],
    github: "https://github.com/SPIKESPIGEL404/onchain-pal",
  },
  {
    title: "Crypto AI Trading Bot",
    description:
      "An AI-powered trading bot for crypto markets with automated strategy execution.",
    tags: ["python", "ai", "trading"],
    github: "https://github.com/SPIKESPIGEL404/crypto-ai-trading-bot",
  },
];
