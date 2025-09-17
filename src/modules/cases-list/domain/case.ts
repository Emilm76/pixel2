export type Case = {
  id: number
  title: string
  modalTitle: string
  description: string | null
  url: string | null
  labels: string[]
  posterPath: string
  tags: string[]
}
