'use client'
import { MetaDataContext } from '@/components/Providers/ProviderStore'
import { useContext, } from 'react'
import { Home, Invite, Upgrade, Wallet } from '@/components/screen/index'
import { Loading } from '@/components'

export default function Main() {
  const storageContext = useContext(MetaDataContext)

  if (!storageContext) {
    return null
  }
  const { _metaDate, setMetaDate } = storageContext


    switch (_metaDate?.state) {
      case '1':
        return <Home/>
      case '2':
        return <Upgrade/>
      case '3':
        return <Invite/>
      case '4':
        return <Wallet/>
        default: return <Loading/>
    }

}
