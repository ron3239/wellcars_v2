import { MetaDataContext } from '@/components/Providers/ProviderStore'
import React, { FC, useContext } from 'react'
import { Header } from '../layout/header/Header'

export const Home:FC = () => {
  const storageContext = useContext(MetaDataContext)

  if (!storageContext) {
    return null
  }
  const { _metaDate, setMetaDate } = storageContext


  return (
    <div>
      <Header title={_metaDate?.name}/>
      

      <h3 className='text-white'>{_metaDate?.id_user}</h3>
    
    </div>
  )
}
