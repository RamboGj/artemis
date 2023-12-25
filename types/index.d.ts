import { useNearWalletProps } from "../types/accounts"

declare module "artemis-test" {
  export function useNearWallet(): useNearWalletProps
}