import { useNearWalletProps } from '@src/utils/accounts'
import { connectionConfig } from '@src/utils/constants'
import { WalletConnection, connect } from 'near-api-js'
import { useEffect, useState } from 'react'

// This hook will retrieve near account id

export function useNearWallet(): useNearWalletProps {
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