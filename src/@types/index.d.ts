import type {
  useNearWalletType,
  useSigninProps,
  useSendProps,
  useAccountType,
  useInventoryType,
} from './accounts'

declare module 'artemis-sdk' {
  export function useNearWallet(): useNearWalletType
  /**
   * Hook that returns the near connected wallet state and a loading state while fetching it.
   *
   *
   * @example
   * ```tsx
   * import { useNearWallet } from "artemis-sdk"
   *
   * export function App() {
   *  const {  wallet, isLoading } = useNearWallet()
   * }
   *
   * ```
   *
   * @returns The wallet current state and a loading state while the call is being maden.
   */

  export function useSignin({
    contractId,
    failureUrl,
    methodNames,
    successUrl,
  }: useSigninProps): { onSignin(): Promise<void> }
  /**
   * Hook that returns a sign in function.
   *
   *
   * @example
   * ```tsx
   * import { useSignin } from "artemis-sdk"
   *
   * export function App() {
   *  const { onSignin } = useSignin({  contractId, failureUrl, methodNames, successUrl })
   * }
   *
   * ```
   *
   * @param contractId - The Near Contract ID you wanna interact with.
   * @param failureUrl - The URL user will be redirect if the sign in goes wrong. (optional)
   * @param successUrl - The URL user will be redirect if the sign in works correctly. (optional)
   * @param methodNames - The methods from the Near Contract. (optional)
   * @returns The sign in function.
   */

  export function useSignout(): { onSignout: () => Promise<void> }
  /**
   * Hook that returns a sign out function.
   *
   *
   * @example
   * ```tsx
   * import { useSignout } from "artemis-sdk"
   *
   * export function App() {
   *  const { onSignout } = useSignout()
   * }
   *
   * ```
   *
   * @returns The sign out function.
   */

  export function useAccount(accountId: string): useAccountType
  /**
   * Hook that returns the account state and a loading state while the call is being maden.
   *
   *
   * @example
   * ```tsx
   * import { useAccount } from "artemis-sdk"
   *
   * export function App() {
   *  const { account, isLoading } = useAccount("accountId.testnet")
   * }
   *
   * ```
   *
   * @param accountId - The Near Account Id that you wanna get data from.
   *
   * @returns The account state and a loading state while the call is being maden.
   */

  export function useInventory(accountId: string): useInventoryType
  /**
   * Hook that returns the account's inventory state and a loading state while the call is being maden.
   *
   *
   * @example
   * ```tsx
   * import { useInventory } from "artemis-sdk"
   *
   * export function App() {
   *  const { inventory, isLoading } = useInventory("accountId.testnet")
   * }
   *
   * ```
   *
   * @param accountId - The Near Account Id that you wanna get data from.
   *
   * @returns The account's inventory state and a loading state while the call is being maden.
   */

  export function useSend({
    amountYoctoNear,
    receiverAccountId,
    contractId,
    failureUrl,
    methodNames,
    successUrl,
  }: useSendProps): { onSend: () => void } /**
   * Hook that returns the account's inventory state and a loading state while the call is being maden.
   *
   *
   * @example
   * ```tsx
   * import { useSend } from "artemis-sdk"
   *
   * export function App() {
   *  const { onSend } = useSend({ receiverAccountId, amountYoctoNear, contractId, failureUrl, methodNames, successUrl })
   * }
   *
   * ```
   *
   * @param receiverAccountId - The Near Account ID you wanna send funds to.
   * @param amountYoctoNear - The Amount of Near(in YoctoNear) you wanna send to the receiver.
   * @param contractId - The Near Contract ID you wanna interact with.
   * @param failureUrl - The URL user will be redirect if the sign in goes wrong. (optional)
   * @param successUrl - The URL user will be redirect if the sign in works correctly. (optional)
   * @param methodNames - The methods from the Near Contract. (optional)
   *
   * @returns The send function.
   */

  export function parseYocto(nearAmount: string): string
  /**
   * Utility function that converts near to yocto near.
   *
   *
   * @example
   * ```tsx
   * import { parseYocto } from "artemis-sdk"
   *
   * export function App() {
   *  const amountInYocto = parseYocto("1")
   * }
   *
   * ```
   *
   * @param nearAmount - The NEAR amount.
   *
   * @returns The YoctoNEAR amount.
   */

  export function parseNear(yoctoNearAmount: string): string
  /**
   * Utility function that converts YoctoNEAR to NEAR.
   *
   *
   * @example
   * ```tsx
   * import { parseNear } from "artemis-sdk"
   *
   * export function App() {
   *  const amountInNear = parseNear("1000000000000000000000000")
   * }
   *
   * ```
   * @param yoctoNearAmount - The YoctoNEAR amount.
   *
   * @returns The NEAR function.
   */
}
