"use server"
import { Tag as PayloadTag } from "@/modules/admin/payload-types"
import { getAppPayload } from "@/shared/payload"
import { Tag } from "../domain/tag"

export const getTagsList = async () => {
  const payload = await getAppPayload()
  const cases = await payload.find({
    collection: "tags",
    depth: 1,
    pagination: false,
  })
  return cases.docs.map(mapTag)
}

function mapTag(tag: PayloadTag): Tag {
  return tag.name
}
