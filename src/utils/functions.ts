import { WalletConnection, connect } from "near-api-js"
import { connectionConfig } from "@src/utils/constants"

export async function onGetNearWalletConnection() {
  const connection = await connect(connectionConfig)
  const walletConnection = new WalletConnection(connection, '')

  return walletConnection
}