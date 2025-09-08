import { getCasesList } from "../repository/cases"
import { CasesList } from "./cases-list"

export async function CasesListServer() {
  const casesList = await getCasesList()

  return <CasesList cases={casesList} />
}
