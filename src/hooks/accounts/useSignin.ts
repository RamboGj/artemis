import { WalletConnection, connect } from 'near-api-js'
import { useEffect, useState } from 'react'
import { connectionConfig } from '../../utils/constants'
import { useNearWalletProps } from '../../../types/accounts'

// This hook will retrieve near wallet object

export function useSignin(): useNearWalletProps {
  const [wallet, setWallet] = useState<WalletConnection>()

  let isLoading: boolean = true

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