import React from 'react'
import style from './style.module.scss'

type Props = {
  title: string|undefined
}

export const Header = ({title}:  Props) => {
  return (
    <div className={style.header}>

    <h1>{title}</h1>

    

    

    </div>
  )
}

