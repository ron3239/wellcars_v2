'use client'
import { Home, Invite, Upgrade, Wallet } from '@/components/layout/index'
import { Loading } from '@/components'
import { useStorage } from '@/hooks/useStorage'

export default function Main() {
  const _metaDate = useStorage()

  switch (_metaDate?.state) {
    case '0':
      return <Home />
    case '1':
      return <Upgrade />
    case '2':
      return <Invite />
    case '3':
      return <Wallet />
    default:
      return <Loading />
  }
}
