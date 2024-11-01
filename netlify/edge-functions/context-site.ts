import type { Context, Config } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return new Response(`Hello from ${context.server.region}!`, {
    headers: {
      'x-probe-region': context.server.region,
    },
  });
};

export const config: Config = {
  path: "/context-site",
};