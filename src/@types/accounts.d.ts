import type {
  useZustandInventoryProps,
  useZustandNearWalletProps,
  useZustandAccountProps,
} from '@/zustand/internalTypes'

export type useNearWalletType = Omit<useZustandNearWalletProps, 'saveWallet'>

export type useAccountType = Omit<
  useZustandAccountProps,
  'saveAccount' | 'saveAccountError'
>

export type useInventoryType = Omit<
  useZustandInventoryProps,
  'saveInventory',
  'saveInventoryError'
>

export interface useSigninProps {
  contractId: string
  failureUrl?: string
  methodNames?: string[]
  successUrl?: string
}

export interface useSendProps extends useSigninProps {
  receiverAccountId: string
  amountYoctoNear: string
}

export interface FTSMetaProps {
  name: string
  symbol: string
  decimals: number
  icon: null | string
  reference: null | string
  price: null | string
}

export interface FTSProps {
  contract: string
  amount: string
  ft_metas: FTSMetaProps
}

export interface NFTSMetaProps {
  name: string
  symbol: string
  icon: null | string
  reference: null | string
  price: null | string
}

export interface NFTProps {
  contract: string
  quantity: string
  nft_meta: NFTSMetaProps
}

export interface InventoryProps {
  fts: FTSProps[]
  nfts: NFTProps[]
}
