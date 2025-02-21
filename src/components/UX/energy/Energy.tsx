import React from 'react'

export function Energy() {
    const [energy, setEnergy] = React.useState(100)


  return (
    <>
    <Image/>
    <h1>100/{energy}</h1>

    </>
  )
}
