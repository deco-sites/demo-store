import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 557,
  site: "demo-store",
  domains: ["demo-store.deco.site"],
});