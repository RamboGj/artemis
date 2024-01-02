import { WalletConnection } from 'near-api-js'
import { create } from 'zustand'
import {
  useZustandAccountProps,
  useZustandInventoryProps,
  useZustandNearWalletProps,
} from './internalTypes'
import { AccountProps } from '@/@types/explorer'
import { InventoryProps } from '@/@types/accounts'

export const useZustandNearWallet = create<useZustandNearWalletProps>(
  (set) => ({
    isLoading: true,
    wallet: undefined,
    saveWallet: (wallet: WalletConnection) =>
      set(() => ({ isLoading: false, wallet })),
  }),
)

export const useZustandAccount = create<useZustandAccountProps>((set) => ({
  account: null,
  isLoading: true,
  saveAccount: (account: AccountProps) =>
    set(() => ({ account, isLoading: false })),
  saveAccountError: () => set(() => ({ isLoading: false })),
}))

export const useZustandInventory = create<useZustandInventoryProps>((set) => ({
  inventory: null,
  isLoading: true,
  saveInventory: (inventory: InventoryProps) =>
    set(() => ({ inventory, isLoading: false })),
  saveInventoryError: () => set(() => ({ isLoading: false })),
}))
