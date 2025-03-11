import { useEffect, useState } from 'react'
import { useFetchTg } from './useFetchTg'
import { useGetUser } from './useGetUser'
import { useCreateUser } from './useCreateUser'
import { IUser } from '@/types/IUser'

interface IUseInit {
 data: IUser | undefined,
 isLoading: boolean,
 isError: boolean
}

export const useInit = (): IUseInit => {
 const tgData = useFetchTg()
 const [data] = useState<IUser | undefined>(undefined)
 const [isLoading] = useState<boolean>(true)
 const [isError] = useState<boolean>(false)
 const {
   data: userData,
  //  isLoading: userLoading,
  //  isError: userError,
 } = useGetUser('5064231449')  //gData?.user?.id

 useEffect(() => {
   const init = async () => {

    


    //  if (tgData?.user?.id) {
      //  if (userLoading) {
      //    setLoading(true)
      //    return
      //  }
      //  if (userError || userData === null) {
      //    const {
      //      data: newUserData,
      //      isLoading: createLoading,
      //      isError: createError,
      //    } = useCreateUser(tgData.user.id, tgData.user.name)
      //    setData(newUserData)
      //    setLoading(createLoading)
      //    setError(createError)
      //  } else {
      //    setData(userData)
      //    setLoading(false)
      //    setError(false)
         
      //  }
    //  } else {
    //    setLoading(false)
    //  }
     console.log('use init')
     console.log(data,'data')
   }

   init()

   
 }, [tgData,userData])

 return { data, isLoading, isError }
}

