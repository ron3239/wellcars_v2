import { MetaDataContext } from '@/components/Providers/ProviderStore'
import React, { FC, useContext } from 'react'
import { Header, } from '../../screen/header/Header'
import style from './style.module.scss'
import { Footer } from '../..'

export const Home:FC = () => {
  const storageContext = useContext(MetaDataContext)

  if (!storageContext) {
    return null
  }
  const { _metaDate,setMetaDate } = storageContext
  


  return (
    <main className='flex w-screen h-full'>
      <Header />
      
      <div className={`${style.main}`}>
        <h1>Home</h1>
      </div>
      
      <Footer/>
      
    
    </main>
  )
}
