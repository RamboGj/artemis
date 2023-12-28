import { Contract, keyStores, connect, WalletConnection } from 'near-api-js'

const myKeysStore = new keyStores.BrowserLocalStorageKeyStore()

export const connectionConfig = {
  networkId: 'testnet',
  keyStore: myKeysStore,
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://nearblocks.io/',
}

export const NEAR_BLOCK_EXPLORER_BASE_URL =
  'https://api-testnet.nearblocks.io/v1'
