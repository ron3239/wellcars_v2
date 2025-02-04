import { MetaDataContext } from '@/components/Providers/ProviderStore'
import React, { FC, useContext } from 'react'
import { Header, } from '../layout/header/Header'
import style from './style.module.scss'

export const Home:FC = () => {
  const storageContext = useContext(MetaDataContext)

  if (!storageContext) {
    return null
  }
  const { _metaDate, setMetaDate } = storageContext


  return (
    <div>
      <Header />
      
      <div className={`${style.main}`}>
        <h1>Home</h1>
      </div>

      Foter
      
    
    </div>
  )
}
