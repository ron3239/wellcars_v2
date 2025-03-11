import { useState, useEffect } from 'react'
import { replaceUpgrades, connectList } from '@/utils/replaceUpgrade'
import { IUpgradeLevelCost } from '@/types/UpgradeLevelCost'

export function useUpgradeData(
  list_upgrade: IUpgradeLevelCost[],
  userBought: IUserUpgrade[],
  searchUpgradeLvl: (id: number, level: number) => Promise<IUpgradeLevelCost>
) {
  const [cost, setCost] = useState<unknown[]>([])
  const [data, setData] = useState<unknown[]>([])

  useEffect(() => {
    const updateData = async () => {
      const arr = await replaceUpgrades(list_upgrade, userBought, searchUpgradeLvl)
      setCost(arr)
      setData(connectList(list_upgrade, arr)) // Ensure _newData is defined and imported if necessary
    }

    if (list_upgrade.length > 0 && userBought.length > 0) {
      updateData()
    }
  }, [list_upgrade, userBought, searchUpgradeLvl])

  return { cost, data }
}
