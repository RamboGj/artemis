import { WalletConnection } from "near-api-js";

export interface useNearWalletProps {
  wallet: WalletConnection | undefined
  isLoading: boolean
}

export interface useSigninProps {
  contractId: string,
  failureUrl?: string,
  methodNames?: string[],
  successUrl?: string
}