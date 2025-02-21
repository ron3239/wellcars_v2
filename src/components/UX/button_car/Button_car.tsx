import React from 'react'
import Image from 'next/image'
import style from './style.module.scss'

export function Button_car() {
  return (
    <>
      <div className='w-auto h-auto'>
        <Image src='/bg-button.png' alt='asd' width={333} height={330} />
        <Image
          src={`/ux/button_car/pngwing.com_${1}.png`}
          width={333}
          height={330}
          alt='as'
          className={style.button}
        />
      </div>
    </>
  )
}
