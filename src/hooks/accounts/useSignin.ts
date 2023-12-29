// This hook will call signin function

import { useSigninProps } from '@/@types/accounts'
import { onGetNearWalletConnection } from '@/utils/functions'

export function useSignin({
  contractId,
  failureUrl,
  methodNames,
  successUrl,
}: useSigninProps): { onSignin(): Promise<void> } {
  async function onSignin() {
    const wallet = await onGetNearWalletConnection()

    await wallet?.requestSignIn({
      contractId,
      failureUrl,
      methodNames,
      successUrl,
    })
  }

  return {
    onSignin,
  }
}
