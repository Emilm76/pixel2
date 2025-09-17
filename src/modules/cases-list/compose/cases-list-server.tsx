import { getCasesList } from "../repository/cases"
import { getTagsList } from "../repository/tags"
import { CasesList } from "./cases-list"

export async function CasesListServer() {
  const casesList = await getCasesList()
  const tagsList = await getTagsList()

  return <CasesList cases={casesList} tags={tagsList} />
}
