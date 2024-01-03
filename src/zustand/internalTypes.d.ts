/*
  THIS FILE CONTAINS ALL TYPES RELATED TO ZUSTAND HOOKS IN ORDER TO AVOID MISUNDERSTANDING REGARDING TO ARTEMIS SDK HOOKS.
 */

import type { InventoryProps } from '@/@types/accounts'
import type { AccountProps } from '@/@types/explorer'
import type { Contract, WalletConnection } from 'near-api-js'

export interface useZustandNearWalletProps {
  wallet: WalletConnection | undefined
  isLoading: boolean
  error: string
  saveWallet: (wallet: WalletConnection) => void
  saveWalletError: (error: string) => void
}

export interface useZustandAccountProps {
  account: AccountProps | null
  isLoading: boolean
  error: string
  saveAccount: (account: AccountProps) => void
  saveAccountError: (error: string) => void
}
export interface useZustandInventoryProps {
  inventory: InventoryProps | null
  isLoading: boolean
  error: string
  saveInventory: (inventory: InventoryProps) => void
  saveInventoryError: (error: string) => void
}

export interface useZustandContractViewProps {
  contract: Contract | null
  isLoading: boolean
  error: string
  saveContractViewInstance: (contract: Contract) => void
  saveContractViewInstanceError: (error: string) => void
}
