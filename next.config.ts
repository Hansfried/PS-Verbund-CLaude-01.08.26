import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plesk hosts Node apps via Passenger, which runs a single entry file rather
  // than a full `next start` process manager — standalone output makes `next
  // build` emit that self-contained server.js (plus a pruned node_modules),
  // which is what Passenger's "Application Startup File" should point to.
  output: "standalone",
};

export default nextConfig;
