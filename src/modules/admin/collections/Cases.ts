import type { CollectionConfig } from "payload"

export const CasesCollection: CollectionConfig = {
  slug: "cases",
  fields: [
    { name: "name", type: "text", required: true },
    { name: "modalName", type: "text", required: true },
    { name: "description", type: "text" },
    { name: "url", type: "text" },
    { name: "poster", type: "upload", relationTo: "media", required: true },
    {
      type: "relationship",
      relationTo: ["tags"],
      name: "tags",
      required: true,
      hasMany: true,
    },
    {
      name: "labels",
      type: "array",
      label: "Лейблы",
      minRows: 2,
      maxRows: 2,
      labels: {
        singular: "Лейбл",
        plural: "Лейблы",
      },
      fields: [{ name: "name", type: "text", required: true }],
    },
  ],
  admin: {
    defaultColumns: ["name", "poster", "tags"],
  },
}
