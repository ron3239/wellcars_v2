'use client'
import { createContext, useEffect, useState } from 'react'
import { _metaDate } from '@/types/metaDate'
import { useInit } from '@/hooks/useInit'
import React from 'react'

export const MetaDataContext = createContext<
  | {
      _metaDate: _metaDate | undefined
      setMetaDate: React.Dispatch<React.SetStateAction<_metaDate | undefined>>
    }
  | undefined
>(undefined)

export const ProviderStorage = ({ children }: { children: React.ReactNode }) => {
  const { data: initialMetaData, isLoading, isError } = useInit()
  const [metaData, setMetaDate] = useState<_metaDate | undefined>(initialMetaData)

  useEffect(() => {
    if (initialMetaData) {
      setMetaDate(initialMetaData)
    }
  }, [initialMetaData])

  if (isLoading) {
    return <div>Loading...</div> // Индикатор загрузки
  }

  if (isError) {
    return <div>Error occurred</div> // Обработка ошибок
  }

  return (
    <MetaDataContext.Provider value={{ _metaDate: metaData, setMetaDate }}>
      {children}
    </MetaDataContext.Provider>
  )
}
