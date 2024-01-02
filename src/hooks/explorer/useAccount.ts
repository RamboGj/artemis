import type { useAccountType } from '@/@types/accounts'
import { NEAR_BLOCK_EXPLORER_BASE_URL } from '@/utils/constants'
import { useZustandAccount } from '@/zustand/hooks'
import { useEffect } from 'react'

export function useAccount(accountId: string): useAccountType {
  const { account, isLoading, saveAccount, saveAccountError } =
    useZustandAccount()

  async function onGetAccount() {
    try {
      const response = await fetch(
        `${NEAR_BLOCK_EXPLORER_BASE_URL}/account/${accountId}`,
      )

      const data = await response.json()

      saveAccount(data.account[0])
    } catch (err) {
      saveAccountError()
      return err
    }
  }

  useEffect(() => {
    onGetAccount()
  }, [])

  return { account, isLoading }
}
