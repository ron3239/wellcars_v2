import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'

export function Button_car() {
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
        />
      </div>
    </>
  )
}
