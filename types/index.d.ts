import type { useNearWalletProps, useSigninProps } from './accounts'

declare module '@artemis/react' {
  export function useNearWallet(): useNearWalletProps
  export function useSignin({
    contractId,
    failureUrl,
    methodNames,
    successUrl,
  }: useSigninProps): { onSignin(): Promise<void> }
  export function useSignout(): { onSignout: () => Promise<void> }
}
