import React from 'react'
import style from './style.module.scss'
import { SlEnergy } from "react-icons/sl";

export function Energy() {
  const [energy] = React.useState(100)

  return (
    <div className={style.container} >
      
      <SlEnergy className={style.image} />
      <h1 className={style.text}>100 / {energy}</h1>
    </div>
  )
}
