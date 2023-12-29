import type {
  useNearWalletProps,
  useSigninProps,
  InventoryProps,
} from '../src/@types/accounts'
import type { AccountProps } from '../src/@types/explorer'

declare module 'artemis-sdk' {
  export function useNearWallet(): useNearWalletProps
  export function useSignin({
    contractId,
    failureUrl,
    methodNames,
    successUrl,
  }: useSigninProps): { onSignin(): Promise<void> }
  export function useSignout(): { onSignout: () => Promise<void> }
  export function useAccount(accountId: string): {
    account: AccountProps | null
  }
  export function useInventory(accountId: string): InventoryProps | null
}
