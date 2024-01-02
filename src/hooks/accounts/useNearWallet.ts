import type { useNearWalletType } from '@/@types/accounts'
import { WalletConnection, connect } from 'near-api-js'
import { useEffect } from 'react'
import { connectionConfig } from '@/utils/constants'
import { useZustandNearWallet } from '@/zustand/hooks'

export function useNearWallet(): useNearWalletType {
  const { isLoading, wallet, saveWallet } = useZustandNearWallet()

  async function onGet() {
    const connection = await connect(connectionConfig)
    const walletConnection = new WalletConnection(connection, '')
    saveWallet(walletConnection)
  }

  useEffect(() => {
    onGet()
  }, [])

  return {
    wallet,
    isLoading,
  }
}
