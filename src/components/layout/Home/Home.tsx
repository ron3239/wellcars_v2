
import React, { FC } from 'react'
import { Header, } from '../../screen/header/Header'
import style from './style.module.scss'
import { Button_car, Energy, Footer,Button_claim } from '../..'

export const Home:FC = () => {

  return (
    <main className='flex-col w-full h-screen'>
      <div className={style.header}>
      <Header />
      </div>
      
      <div className={style.main}>
        <Button_car/>
        <div className={style.energy_claim}>
          <Energy/>
          <Button_claim/>
        </div>
      </div>

      <hr className={style.hr}/>

      <Footer/>
      
      
    
    </main>
  )
}
