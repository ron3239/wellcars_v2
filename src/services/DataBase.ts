export class DataBase {
    private url: string;
    private id_user: string
  
    constructor(url: string,id_user: string) {
      this.url = url;
      this.id_user = id_user
    }
  
    async getUser(): Promise<any | null> {
      try {
        const response = await fetch(`${this.url}/user/search`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id_user:this.id_user }),
        });
  
        if (!response.ok) {
          console.error('Ошибка сети:', response.statusText);
          return null;
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Ошибка получения данных пользователя:', error);
        return null;
      }
    }

    async createUser(id_user:string,name:string):Promise<any|null>{
        try{
            const response = await fetch(`${this.url}/user/create`,{
                method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        id_user:this.id_user,
            username: name,
          last_update_time: new Date(),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        return null
      }
      return data
            
        }catch(e){
            console.log(e)
            return null
        }
    }


    async UpdateDate(id_user:string)  {
        try {
            await fetch('api/user/update_dateTime', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_user:this.id_user,
                    DateTime: new Date(),
                }),
            });
        } catch (e) {
            console.error(e);
        }
      };

       async PlusCount(kol:number) {
        try {
          const response = await fetch('./api/user/plus', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  id_user: this.id_user,
                  kol: kol,
              }),
          });
          if (!response.ok) {
            return null
          }
          const data = await response.json();
          return data
      } catch (e) {
          console.error(e);
      }
      };
  
       async minusCount(kol:number) {
        try {
            const response = await fetch('api/user/minus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_user: this.id_user,
                    kol: kol,
                }),
            });
            if (!response.ok) {
                return null
            }
            const data = await response.json();
            return data
            
        } catch (e) {
            console.error(e);
        }
      };

      async GetListUpgrade() {
        try {
          const response = await fetch('api/upgrade');
          if (!response.ok) {
            return null
          }
          const data = await response.json();
          return data
        } catch (e) {
          console.log(e)
        }
      }
    
      async GetListUpgradeUser() {
        try {
            const response = await fetch('api/upgrade/user_upgrade', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  id_user: this.id_user
                }),
              });

              if (!response.ok) {
                return null
              }

            const data = await response.json();
            console.log('//get user upgrade:', data.user);
            return data

        } catch (error) {
          console.error('Error fetching upgrades:', error);
        }
      };

     async SearchUpgradeLvl (upgradeId:number, level:number) {
        try {
            const response = await fetch('api/upgrade/search/search_upgrade_cost', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    upgradeId: upgradeId,
                    level: level
                }),
            });

            if (!response.ok) {
              
              return null
              
            }
            
            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Fetch error:', error);
            return null
        }
    };

    async BuyUpgrade (list:any) { //лист улучшения
    

      const url = list.level > 1 ? 'api/upgrade/update' : 'api/upgrade/user_upgrade_create';
    
      try {
        const response = await fetch(url, {

          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_user: this.id_user,
            upgradeId: list.upgradeId
          })
        });

        this.GetListUpgradeUser()

        const response1 = await fetch('api/user/update_coin_hour',{ //Прибавление афк фарма
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            id_user: this.id_user,
            coin_hour:list.coinPerHour              
          })
        })
        
      } catch (error) {
        
          console.error('Error:', error);
        }
      } 


  }
