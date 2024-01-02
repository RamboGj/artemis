/*
  THIS FILE CONTAINS ALL TYPES RELATED TO ZUSTAND HOOKS IN ORDER TO AVOID MISUNDERSTANDING REGARDING TO ARTEMIS SDK HOOKS.
 */

import type { InventoryProps } from '@/@types/accounts'
import type { AccountProps } from '@/@types/explorer'

export interface useZustandNearWalletProps {
  wallet: WalletConnection | undefined
  isLoading: boolean
  saveWallet: (wallet: WalletConnection) => void
}

export interface useZustandAccountProps {
  account: AccountProps | null
  isLoading: boolean
  saveAccount: (account: AccountProps) => void
  saveAccountError: () => void
}
export interface useZustandInventoryProps {
  inventory: InventoryProps | null
  isLoading: boolean
  saveInventory: (inventory: InventoryProps) => void
  saveInventoryError: () => void
}
