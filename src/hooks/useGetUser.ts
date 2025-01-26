import { DataBase } from '@/services/DataBase'
import { useQuery } from '@tanstack/react-query'
export function useGetUser(id_user: string) {
  const id_user_int = parseInt(id_user)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: () => DataBase.GetUser(id_user_int),
  })
  return { data, isLoading, isError }
}
