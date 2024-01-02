import { WalletConnection } from 'near-api-js'
import { create } from 'zustand'
import { useZustandNearWalletProps } from './internalTypes'

export const useZustandNearWallet = create<useZustandNearWalletProps>(
  (set) => ({
    isLoading: true,
    wallet: undefined,
    saveWallet: (wallet: WalletConnection) =>
      set(() => ({ isLoading: false, wallet })),
  }),
)
