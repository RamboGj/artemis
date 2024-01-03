import type { useNearWalletType } from '@/@types/accounts'
import { WalletConnection, connect } from 'near-api-js'
import { useEffect } from 'react'
import { connectionConfig } from '@/utils/constants'
import { useZustandNearWallet } from '@/zustand/index'

export function useNearWallet(): useNearWalletType {
  const { isLoading, wallet, saveWallet, error, saveWalletError } =
    useZustandNearWallet()

  async function onGet() {
    try {
      const connection = await connect(connectionConfig)
      const walletConnection = new WalletConnection(connection, '')
      saveWallet(walletConnection)
    } catch (err) {
      saveWalletError(String(err))
    }
  }

  useEffect(() => {
    onGet()
  }, [])

  return {
    wallet,
    isLoading,
    error,
  }
}
