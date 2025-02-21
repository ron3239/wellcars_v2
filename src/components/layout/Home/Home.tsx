import { MetaDataContext } from '@/components/Providers/ProviderStore'
import React, { FC, useContext } from 'react'
import { Header, } from '../../screen/header/Header'
import style from './style.module.scss'
import { Button_car, Energy, Footer,Button_claim } from '../..'

export const Home:FC = () => {
  const storageContext = useContext(MetaDataContext)

  if (!storageContext) {
    return null
  }
  const { _metaDate,setMetaDate } = storageContext
  


  return (
    <main className='flex-col w-screen h-screen'>
      <div className={style.header}>
      <Header />
      </div>
      
      <div className={`${style.main}`}>
        <Button_car/>
        <div className={style.energy_claim}>
          <Energy/>
          <Button_claim/>
        </div>
      </div>
      <div>
      <Footer/>
      </div>
      
    
    </main>
  )
}
