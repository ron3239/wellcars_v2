import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'
import { DataBase } from '@/services/DataBase'
import { useStorage } from '@/hooks/useStorage'

export function Button_car() {
  const _metaDate = useStorage()
  return (
    <>
      <div className='w-[348] h-[348] flex justify-center items-center'>
        <Image src='/bg-button.png' alt='' width={348} height={348} className={style.button1} />
        <Image
          src={`/ux/button_car/pngwing.com_${1}.png`}
          width={348}
          height={348}
          alt='as'
          className={style.button2}
          onClick={() => {
            //TODO доделать функцию на отправку данных в БД
            // DataBase.sendCountChange(_metaDate?.id_user, 'plus',1)
          }}
        />
      </div>
    </>
  )
}
