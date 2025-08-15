"use client";

import React from "react";
import { Card } from "@/components/ui/card";

const borrowFlow = [
  {
    number: "01",
    title: "Connect Wallet",
    description: "Connect your crypto wallet to access DeFi services"
  },
  {
    number: "02",
    title: "Select Pool",
    description: "Choose from our diverse lending pools with competitive rates"
  },
  {
    number: "03",
    title: "Supply Collateral",
    description: "Deposit your assets as collateral to enable borrowing"
  },
  {
    number: "04",
    title: "Borrow Assets",
    description: "Borrow against your collateral with flexible terms"
  },
  {
    number: "05",
    title: "Swap Collateral",
    description: "Optionally swap your collateral to optimize your position"
  },
  {
    number: "06",
    title: "Repay Loan",
    description: "Repay your borrowed assets to maintain healthy ratios"
  },
  {
    number: "07",
    title: "Withdraw Collateral",
    description: "Retrieve your collateral once loans are repaid"
  }
];

const lendFlow = [
  {
    number: "01",
    title: "Supply Liquidity",
    description: "Provide assets to lending pools and earn interest"
  },
  {
    number: "02",
    title: "Earn Yield",
    description: "Automatically earn yields from borrowers' interest payments"
  }
];

export default function HowToUse() {
  return (
    <section className="w-full py-12 -mt-140 md:-mt-80 lg:-mt-100  md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 text-transparent bg-clip-text">
            How To Use
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose your path in DeFi: Borrow or Lend
          </p>
        </div>

        {/* Borrowing Flow */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Borrowing Flow
          </h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {borrowFlow.slice(0, 4).map((step, index) => (
                <Card key={step.number} className="group p-6 border border-white/10 backdrop-blur-sm bg-black/40 hover:bg-black/60 transition-all duration-300 rounded-xl overflow-hidden relative">
                  {/* Horizontal connector for larger screens */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-6 top-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 transform -translate-y-1/2 z-20"></div>
                  )}
                  {/* Vertical connector for smaller screens */}
                  {index < borrowFlow.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -bottom-6 w-0.5 h-12 bg-gradient-to-b from-blue-500/40 to-purple-500/40 transform -translate-x-1/2 z-20"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-4 text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">{step.number}</div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{step.title}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Second row of borrowing flow */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {borrowFlow.slice(4).map((step, index) => (
                <Card key={step.number} className="group p-6 border border-white/10 backdrop-blur-sm bg-black/40 hover:bg-black/60 transition-all duration-300 rounded-xl overflow-hidden relative">
                  {/* Horizontal connector for larger screens */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute -right-6 top-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 transform -translate-y-1/2 z-20"></div>
                  )}
                  {/* Vertical connector for smaller screens */}
                  {index < borrowFlow.slice(4).length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -bottom-6 w-0.5 h-12 bg-gradient-to-b from-blue-500/40 to-purple-500/40 transform -translate-x-1/2 z-20"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-4 text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">{step.number}</div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{step.title}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Lending Flow */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Lending Flow
          </h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {lendFlow.map((step, index) => (
                <Card key={step.number} className="group p-6 border border-white/10 backdrop-blur-sm bg-black/40 hover:bg-black/60 transition-all duration-300 rounded-xl overflow-hidden relative">
                  {/* Horizontal connector */}
                  {index === 0 && (
                    <div className="hidden sm:block absolute -right-6 top-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-500/40 to-blue-500/40 transform -translate-y-1/2 z-20"></div>
                  )}
                  {/* Vertical connector for mobile */}
                  {index === 0 && (
                    <div className="sm:hidden absolute left-1/2 -bottom-6 w-0.5 h-12 bg-gradient-to-b from-purple-500/40 to-blue-500/40 transform -translate-x-1/2 z-20"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-4 text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">{step.number}</div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">{step.title}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
