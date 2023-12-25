import { WalletConnection } from "near-api-js";

export interface useNearWalletProps {
  wallet: WalletConnection | undefined
  isLoading: boolean
}