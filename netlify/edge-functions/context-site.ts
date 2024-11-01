import type { Context, Config } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const a = await Deno.resolveDns("example.com", "A");
  return new Response(`Hello from ${context.server.region}: ${a}!`, {
    headers: {
      'x-probe-region': context.server.region,
    },
  });
};

export const config: Config = {
  path: "/context-site",
};