import type { CollectionConfig } from "payload"

export const CasesCollection: CollectionConfig = {
  slug: "cases",
  fields: [
    { name: "name", type: "text", required: true },
    { name: "description", type: "text" },
    { name: "url", type: "text" },
    { name: "poster", type: "upload", relationTo: "media" },
  ],
}
