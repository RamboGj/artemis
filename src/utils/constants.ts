import { keyStores } from 'near-api-js'

const myKeysStore = new keyStores.BrowserLocalStorageKeyStore()

const testnetConfig = {
  networkId: 'testnet',
  keyStores: myKeysStore,
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://testnet.mynearwallet.com',
  helperUrl: 'https://help.mynearwallet.com',
  explorerUrl: 'https://testnet.nearblocks.io',
}

const mainnetConfig = {
  networkId: 'mainnet',
  keyStores: myKeysStore,
  nodeUrl: 'https://rpc.mainnet.near.org',
  walletUrl: 'https://mynearwallet.com/',
  helperUrl: 'https://help.mynearwallet.com',
  explorerUrl: 'https://nearblocks.io/',
}

export const connectionConfig = testnetConfig

export const NEAR_BLOCK_EXPLORER_BASE_URL =
  'https://api-testnet.nearblocks.io/v1'
