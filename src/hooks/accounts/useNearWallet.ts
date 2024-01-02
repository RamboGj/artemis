import { WalletConnection, connect } from 'near-api-js'
import { useEffect } from 'react'
import { connectionConfig } from '@/utils/constants'
import { useZustandNearWallet } from '@/zustand/hooks'
import { useZustandNearWalletProps } from '@/zustand/internalTypes'

export function useNearWallet(): Omit<useZustandNearWalletProps, 'saveWallet'> {
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
