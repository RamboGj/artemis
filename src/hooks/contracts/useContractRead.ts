import type { useZustandContractViewProps } from '@/zustand/internalTypes'
import { Contract } from 'near-api-js'
import { useNearWallet } from '../accounts/useNearWallet'
import { verifyIfContractMethodExists } from '@/middlewares/verifyIfContractMethodExists'
import { useEffect } from 'react'
import { useZustandContractView } from '@/zustand/index'

export function useContractView(
  contractId: string,
  methodName: string,
): Pick<useZustandContractViewProps, 'contract' | 'isLoading'> {
  const { wallet, isLoading } = useNearWallet()
  const {
    contract,
    isLoading: contractLoading,
    saveContractViewInstance,
    saveContractViewInstanceError,
  } = useZustandContractView()

  async function onCreateViewInstance() {
    if (typeof wallet === 'undefined' || isLoading) return

    const isValidMethod = await verifyIfContractMethodExists(
      contractId,
      methodName,
    )

    if (!isValidMethod)
      return saveContractViewInstanceError('Method not found.')

    try {
      const contract = new Contract(wallet.account(), contractId, {
        viewMethods: [methodName],
        changeMethods: [],
        useLocalViewExecution: false,
      }) as any

      saveContractViewInstance(contract)
    } catch (err) {
      saveContractViewInstanceError(String(err))
    }
  }

  useEffect(() => {
    onCreateViewInstance()
  }, [wallet])

  return {
    contract,
    isLoading: contractLoading,
  }
}
