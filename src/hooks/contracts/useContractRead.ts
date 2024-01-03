import { NEAR_BLOCK_EXPLORER_BASE_URL } from '@/utils/constants'
import { useNearWallet } from '../accounts/useNearWallet'
import { useEffect } from 'react'
import { decode } from '@webassemblyjs/wasm-parser'
import { parseContract } from '@/utils/decoder'

export function useContractRead(contractId: string) {
  const { wallet, isLoading } = useNearWallet()

  async function onFetchContract() {
    if (typeof wallet === 'undefined' || isLoading) return

    try {
      const response = await fetch(
        `${NEAR_BLOCK_EXPLORER_BASE_URL}/account/${contractId}/contract`,
      )

      console.log('response', response)

      const data = await response.json()

      console.log('data', data)

      const base64EncodedString = data.contract[0].code_base64
      console.log('base64EncodedString', base64EncodedString)

      const contractMetadata = parseContract(base64EncodedString)

      console.log('decodedStuff', contractMetadata)
    } catch (err) {
      console.log('err', err)
      return err
    }
  }

  useEffect(() => {
    onFetchContract()
  }, [wallet])

  return null
}
