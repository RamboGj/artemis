import { AccountProps } from '@/@types/explorer'
import { NEAR_BLOCK_EXPLORER_BASE_URL } from '@/utils/constants'
import { useEffect, useState } from 'react'

export function useAccount(accountId: string): {
  account: AccountProps | null
} {
  const [account, setAccount] = useState<AccountProps | null>(null)

  async function onGetAccount() {
    try {
      const response = await fetch(
        `${NEAR_BLOCK_EXPLORER_BASE_URL}/account/${accountId}`,
      )
      const data = await response.json()

      setAccount(data.account[0])
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    onGetAccount()
  }, [])

  return { account }
}
