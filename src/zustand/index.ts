import { Contract, WalletConnection } from 'near-api-js'
import { create } from 'zustand'
import type {
  useZustandAccountProps,
  useZustandContractViewProps,
  useZustandInventoryProps,
  useZustandNearWalletProps,
} from './internalTypes'
import { AccountProps } from '@/@types/explorer'
import { InventoryProps } from '@/@types/accounts'

export const useZustandNearWallet = create<useZustandNearWalletProps>(
  (set) => ({
    isLoading: true,
    wallet: undefined,
    error: '',
    saveWallet: (wallet: WalletConnection) =>
      set(() => ({ isLoading: false, wallet })),
    saveWalletError: (error: string) =>
      set(() => ({ isLoading: false, error })),
  }),
)

export const useZustandAccount = create<useZustandAccountProps>((set) => ({
  account: null,
  isLoading: true,
  error: '',
  saveAccount: (account: AccountProps) =>
    set(() => ({ account, isLoading: false })),
  saveAccountError: (error: string) => set(() => ({ isLoading: false, error })),
}))

export const useZustandInventory = create<useZustandInventoryProps>((set) => ({
  inventory: null,
  isLoading: true,
  error: '',
  saveInventory: (inventory: InventoryProps) =>
    set(() => ({ inventory, isLoading: false })),
  saveInventoryError: (error: string) =>
    set(() => ({ isLoading: false, error })),
}))

export const useZustandContractView = create<useZustandContractViewProps>(
  (set) => ({
    contract: null,
    isLoading: true,
    error: '',
    saveContractViewInstance: (contract: Contract) =>
      set(() => ({ contract, isLoading: false })),
    saveContractViewInstanceError: (error: string) =>
      set(() => ({ isLoading: false, error })),
  }),
)
