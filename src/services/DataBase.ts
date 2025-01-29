export const DataBase = {
  async GetUser(id_user: string): Promise<any | null> {
    try {
      const response = await fetch(`api/user/${id_user}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
 
      if (!response.ok) {
        console.error(response.statusText)
        return null
      }
      return await response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  },
 
  async CreateUser(name: string, id_user: string): Promise<any | null> {
    try {
      const response = await fetch(`/api/user/${id_user}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
        }),
      })
 
      if (!response.ok) {
        return null
      }
 
      return await response.json()
    } catch (e) {
      console.log(e)
      return null
    }
  },
 
  async UpdateDate(id_user: string) {
    try {
      await fetch('api/user/update_dateTime', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: id_user,
          DateTime: new Date(),
        }),
      })
    } catch (e) {
      console.error(e)
    }
  },
 
  async sendCountChange(id_user: string, action: 'plus' | 'minus', kol: number) {
    try {
      const response = await fetch(`/api/user/${action}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: id_user,
          kol: kol,
        }),
      })
 
      if (!response.ok) {
        console.error(response.statusText)
        return null
      }
 
      return await response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  },
 
  async PlusCount(id_user: string, kol: number) {
    return this.sendCountChange(id_user, 'plus', kol)
  },
 
  async MinusCount(id_user: string, kol: number) {
    return this.sendCountChange(id_user, 'minus', kol)
  },
 
  async GetListUpgrade() {
    try {
      const response = await fetch('api/upgrade')
 
      if (!response.ok) {
        return null
      }
 
      return await response.json()
    } catch (e) {
      console.log(e)
    }
  },
 
  async GetListUpgradeUser(id_user: string) {
    try {
      const response = await fetch('api/upgrade/user_upgrade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: id_user,
        }),
      })
 
      if (!response.ok) {
        return null
      }
 
      const data = await response.json()
      console.log('//get user upgrade:', data.user)
      return data
    } catch (error) {
      console.error('Error fetching upgrades:', error)
    }
  },
 
  async SearchUpgradeLvl(upgradeId: number, level: number) {
    try {
      const response = await fetch('api/upgrade/search/search_upgrade_cost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          upgradeId: upgradeId,
          level: level,
        }),
      })
 
      if (!response.ok) {
        return null
      }
 
      return await response.json()
    } catch (error) {
      console.error('Fetch error:', error)
      return null
    }
  },
 
  async BuyUpgrade(list: any, id_user: string) {
    const url = list.level > 1 ? 'api/upgrade/update' : 'api/upgrade/user_upgrade_create'
 
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: id_user,
          upgradeId: list.upgradeId,
        }),
      })
 
      await this.GetListUpgradeUser(id_user)
 
      await fetch('api/user/update_coin_hour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: id_user,
          coin_hour: list.coinPerHour,
        }),
      })
    } catch (error) {
      console.error('Error:', error)
    }
  },
 }
 