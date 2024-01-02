/*
  THIS FILE CONTAINS ALL TYPES RELATED TO ZUSTAND HOOKS IN ORDER TO AVOID MISUNDERSTANDING REGARDING TO ARTEMIS SDK HOOKS.
 */

export interface useZustandNearWalletProps {
  wallet: WalletConnection | undefined
  isLoading: boolean
  saveWallet: (wallet: WalletConnection) => void
}
