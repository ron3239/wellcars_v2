'use client'
import { MetaDataContext } from '@/components/Providers/ProviderStore'
import { useContext, useEffect } from 'react'
import { Home } from '@/layout/index'

export default function Main() {
  const storageContext = useContext(MetaDataContext)

  if (!storageContext) {
    return null
  }
  const { _metaDate, setMetaDate } = storageContext

  useEffect(()=>{
    setMetaDate(undefined)
  },[])

  if (_metaDate?.id_user === null) {
    switch (_metaDate.state) {
      case '1':
        return <Home/>
    }
  } else {
    ;<div>Loading...</div>
  }
}
