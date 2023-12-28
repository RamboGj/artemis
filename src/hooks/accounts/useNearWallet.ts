import { WalletConnection, connect } from 'near-api-js'
import { useEffect, useState } from 'react'
import { useNearWalletProps } from '../../@types/accounts'
import { connectionConfig } from '@/utils/constants'

// This hook will retrieve near wallet

export function useNearWallet(): useNearWalletProps {
  const [wallet, setWallet] = useState<WalletConnection>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function onGet() {
    const connection = await connect(connectionConfig)
    const walletConnection = new WalletConnection(connection, '')

    setWallet(walletConnection)
    setIsLoading(false)
  }

  useEffect(() => {
    onGet()
  }, [])

  return {
    wallet,
    isLoading,
  }
}
