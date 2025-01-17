import { DataBase } from '@/services/DataBase'
import { useQuery } from '@tanstack/react-query'
export function useGetListUpgrade(id_user: string) {
  const db = new DataBase(id_user)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: () => db.GetListUpgrade(),
  })
  return { data, isLoading, isError }
}