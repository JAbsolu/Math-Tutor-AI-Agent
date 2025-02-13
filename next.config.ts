import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    AGENT_ID: process.env.AGENT_ID
  }
};

export default nextConfig;
