import React, { ReactNode } from 'react'
import { _metaDate } from '@/types/metaDate'
import Image from 'next/image'
import style from './style.module.scss'


type Props = {
  idComponent: string
  _metaDate?: _metaDate
  setMetaDate: (metaDate: _metaDate) => void
  children: ReactNode
}

export const Button = ({ idComponent, _metaDate, setMetaDate, children }: Props) => {
  if (_metaDate==undefined) {
    return null
  }
  const handleChange = () => {
    console.log(idComponent)
    setMetaDate({..._metaDate, state: idComponent, });
  };
  

  return (
    <div className={`${style.container}`}>

        <input
          className={`hidden `}
          id='radio-1'
          type='radio'
          name='radio'
          value='1'
          checked={_metaDate.state === idComponent}
          onChange={() => handleChange()}
        />
        <Image src='/ux/button_bg.png'  alt="ad"  objectFit='contain' width={96} height={90} className={style.img} />
        {children}
        
        

    </div>
  )
}
