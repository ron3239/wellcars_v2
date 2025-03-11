export type _metaDate = {
  id_user: string
  name: string
  coin_hour: number
  count: number
  state: string
} | null

export interface FunctionMetaDate {
  setMetaData: (obj: Partial<_metaDate>) => void
  handleChange: () => void
}
