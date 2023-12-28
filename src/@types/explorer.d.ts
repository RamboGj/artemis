export interface AccountProps {
  amount: string
  block_hash: string
  block_height: number
  code_hash: string
  locked: string
  storage_paid_at: number
  storage_usage: number
  account_id: string
  created: {
    transaction_hash: string
    block_timestamp: number
  }
  deleted: {
    transaction_hash: null | string
    block_timestamp: null | number
  }
}
