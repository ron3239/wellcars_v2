import { DataBase } from '@/services/DataBase'
import { useQuery } from '@tanstack/react-query'
export function CreateUser(id_user: string,name:string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: () => DataBase.CreateUser(name,id_user),
  })
  return { data, isLoading, isError }
}
