import Image from 'next/image'
import React from 'react'

export const  Loading = ()=> {
  return (
    <div>
        <Image src='/loading.png' fill={true}  alt="loading" />
    </div>
  )
}
