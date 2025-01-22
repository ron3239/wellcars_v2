type IUserUpgrade = {
  id: number
  userId: bigint
  upgradeId: number
  currentLevel: number
  purchasedAt: Date
  upgrade: Upgrade
  user: IUser
}
