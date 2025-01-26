export interface IUser {
  id_user: bigint
  username: string
  coin: number
  coin_tap: number
  coin_hour: number
  last_update_time: Date
  upgrades?: IUserUpgrade[]
}
