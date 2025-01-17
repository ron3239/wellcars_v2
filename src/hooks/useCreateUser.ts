import { DataBase } from '@/services/DataBase'
import { useQuery } from '@tanstack/react-query'
export function useCreateUser(id_user: string,name:string) {
  const db = new DataBase(id_user)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: () => db.CreateUser(name),
  })
  return { data, isLoading, isError }
}
