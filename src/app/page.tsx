'use client'
import { MetaDataContext } from '@/components/Providers/ProviderStore'
import { useContext, } from 'react'
import { Home, Invite, Upgrade, Wallet } from '@/components/layout/index'
import { Loading } from '@/components'

export default function Main() {
  const storageContext = useContext(MetaDataContext)

  if (!storageContext) {
    return null
  }
  const { _metaDate, setMetaDate } = storageContext


    switch (_metaDate?.state) {
      case '0':
        return <Home/>
      case '1':
        return <Upgrade/>
      case '2':
        return <Invite/>
      case '3':
        return <Wallet/>
        default: return <Loading/>
    }

}
