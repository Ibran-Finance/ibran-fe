"use client";
import Hero from "./components/hero";
import HowToUse from "./components/how-to-use";
import Features from "./components/features";

import React from "react";

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="relative">
        <HowToUse />
        <Features />
      </div>
    </div>
  );
};

export default Page;
