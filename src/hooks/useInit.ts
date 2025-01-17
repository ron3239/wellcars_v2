import { useEffect, useState } from 'react'
import { useFetchTg } from './useFetchTg'
import { useGetUser } from './useGetUser'
import { useCreateUser } from './useCreateUser'

export const useInit = () => {
  const tgData = useFetchTg()
  const [data, setData] = useState(undefined)
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useGetUser(tgData?.user?.id)

  useEffect(() => {
    const init = async () => {
      if (tgData?.user?.id) {
        if (userLoading) {
          setLoading(true)
          return
        }
        if (userError || userData === null) {
          const {
            data: newUserData,
            isLoading: createLoading,
            isError: createError,
          } = useCreateUser(tgData.user.id, tgData.user.name)
          setData(newUserData)
          setLoading(createLoading)
          setError(createError)
        } else {
          setData(userData)
          setLoading(false)
          setError(false)
        }
      } else {
        setLoading(false)
      }
      console.log('use init')
    }

    init()
  }, [tgData])

  return { data, isLoading, isError }
}
