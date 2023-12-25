import { WalletConnection, connect } from 'near-api-js'
import { useEffect, useState } from 'react'
import { connectionConfig } from '../../utils/constants'

// This hook will retrieve near account id

export function useNearWallet(): unknown {
  const [wallet, setWallet] = useState<WalletConnection>()

  let isLoading = true

  async function onGet() {
    const connection = await connect(connectionConfig)
    const walletConnection = new WalletConnection(connection, '')

    setWallet(walletConnection)
    isLoading = false
  }

  useEffect(() => {
    onGet()
  }, [])

  return {
    wallet,
    isLoading
  }
}