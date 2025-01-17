import { useState, useEffect } from 'react';
import { replaceUpgrades,connectList } from '@/utils/replaceUpgrade';

export function useUpgradeData(
  list_upgrade: any[],
  userBought: any[],
  searchUpgradeLvl: (id: number, level: number) => Promise<any>
) {
  const [cost, setCost] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const updateData = async () => {
      const arr = await replaceUpgrades(list_upgrade, userBought, searchUpgradeLvl);
      setCost(arr);
      setData(connectList(list_upgrade, arr)); // Ensure _newData is defined and imported if necessary
    };

    if (list_upgrade.length > 0 && userBought.length > 0) {
      updateData();
    }
  }, [list_upgrade, userBought, searchUpgradeLvl]);

  return { cost, data };
}