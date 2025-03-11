import { IUpgradeLevelCost } from "@/types/UpgradeLevelCost";

export const replaceUpgrades = async (
    list1: IUpgradeLevelCost[],
    list2: IUserUpgrade[],
    searchUpgradeLvl: (id: number, level: number) => Promise<IUpgradeLevelCost>
  ): Promise<IUpgradeLevelCost[]> => {
    const promises = list1.map(async (item1) => {
      const foundItem = list2.find(item2 => item1.id === item2.upgradeId);
      const upgradeLvl = foundItem
        ? await searchUpgradeLvl(item1.id, foundItem.currentLevel + 1)
        : await searchUpgradeLvl(item1.id, 1);
      return upgradeLvl;
    });
  
    return Promise.all(promises);
  };

export const connectList = (list1:IUpgradeLevelCost[], list2:IUpgradeLevelCost[]) => {
    return list1.map((obj,id)=>({
        ...obj,
        ...list2[id]
    }))
}