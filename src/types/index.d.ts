import type { useNearWalletProps } from "@src/utils/accounts"

declare module "artemis-test" {
  export function useNearWallet(): useNearWalletProps
  export function useSignin({ contractId, failureUrl, methodNames, successUrl }: useSigninProps): { onSignin(): Promise<void> }
  export function useSignout(): { onSignout: () => Promise<void> }
}