import { useSendProps } from '@/@types/accounts'
import { onGetNearWalletConnection } from '@/utils/functions'
import { useSignin } from './useSignin'

export function useSend({
  amountYoctoNear,
  receiverAccountId,
  contractId,
  failureUrl,
  methodNames,
  successUrl,
}: useSendProps): { onSend: () => void } {
  const { onSignin } = useSignin({
    contractId,
    failureUrl,
    methodNames,
    successUrl,
  })

  async function onSend() {
    try {
      const wallet = await onGetNearWalletConnection()
      const account = wallet.account()

      if (wallet.isSignedIn()) {
        await account.sendMoney(receiverAccountId, amountYoctoNear)
      } else {
        onSignin()
      }
    } catch (err) {
      return err
    }
  }

  return {
    onSend,
  }
}
