import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'

export function Button_claim() {
  return (
    <>
    <Image  alt='' src={`/ux/bg-button.png`} width={140} height={80} className={style.button1} />
    </>
  )
}
