"use client";

import React from "react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "High Security",
    description: "Audited smart contracts and advanced security protocols"
  },
  {
    title: "Optimal Yield",
    description: "Get the best returns from your crypto assets with yield farming strategies"
  },
  {
    title: "Multi-Chain",
    description: "Support for various popular blockchains with low gas fees"
  },
  {
    title: "High Liquidity",
    description: "Large liquidity pools to ensure smooth transactions"
  },
  {
    title: "Trustless",
    description: "Direct P2P transactions without traditional intermediaries"
  },
  {
    title: "Full Transparency",
    description: "All transactions are recorded on the blockchain and verifiable"
  }
];

export default function Features() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Platform Features
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Enjoy the advantages of our DeFi platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group p-6 border border-white/10 backdrop-blur-sm bg-black/40 hover:bg-black/60 transition-all duration-300 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
