import type { useAccountType } from '@/@types/accounts'
import { NEAR_BLOCK_EXPLORER_BASE_URL } from '@/utils/constants'
import { useZustandAccount } from '@/zustand/index'
import { useEffect } from 'react'

export function useAccount(accountId: string): useAccountType {
  const { account, isLoading, saveAccount, saveAccountError, error } =
    useZustandAccount()

  async function onGetAccount() {
    try {
      const response = await fetch(
        `${NEAR_BLOCK_EXPLORER_BASE_URL}/account/${accountId}`,
      )

      const data = await response.json()

      saveAccount(data.account[0])
    } catch (err) {
      saveAccountError(String(err))
    }
  }

  useEffect(() => {
    onGetAccount()
  }, [])

  return { account, isLoading, error }
}
