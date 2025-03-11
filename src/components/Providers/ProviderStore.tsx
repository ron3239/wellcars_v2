'use client'
import { createContext, useEffect, useState } from 'react'
import { _metaDate } from '@/types/metaDate'
import { useInit } from '@/hooks/useInit'
import React from 'react'
import { Loading } from '@/components/layout/Loading/Loading'

export const MetaDataContext = createContext<
  | {
      _metaDate: _metaDate | null
      setMetaDate: React.Dispatch<React.SetStateAction<_metaDate | null>>
    }
  | undefined
>(undefined)

export const ProviderStorage = ({ children }: { children: React.ReactNode }) => {
  const { data: initialMetaData, isLoading, isError } = useInit()
  const [metaData, setMetaDate] = useState<_metaDate | null>(null)

  useEffect(() => {
    if (initialMetaData) {
      console.log(initialMetaData)
      setMetaDate({
        id_user: String(initialMetaData.id_user),
        name: initialMetaData.username,
        count: initialMetaData.coin,
        coin_hour: initialMetaData.coin_hour,
        state: '0',
      })
    }
  }, [initialMetaData])

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <div>Error occurred</div> // Error handling
  }

  return (
    <MetaDataContext.Provider value={{ _metaDate: metaData, setMetaDate }}>
      {children}
    </MetaDataContext.Provider>
  )
}
