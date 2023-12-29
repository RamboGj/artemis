import { onGetNearWalletConnection } from '@/utils/functions'

export function useSignout(): { onSignout: () => Promise<void> } {
  async function onSignout() {
    const wallet = await onGetNearWalletConnection()
    wallet?.signOut()
  }

  return {
    onSignout,
  }
}
