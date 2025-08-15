"use client";
import { useReadAddressPosition } from "@/hooks/read/useReadPositionAddress";
import React from "react";

const Page = () => {
  const { addressPosition } = useReadAddressPosition(
    "0x6A4B259ee7a03d9B4a92Ba438179ed5922593f77"
  );
  return <div></div>;
};

export default Page;
