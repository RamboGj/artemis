import { InventoryProps } from '@/@types/accounts'
import { NEAR_BLOCK_EXPLORER_BASE_URL } from '@/utils/constants'
import { useEffect, useState } from 'react'

export function useInventory(accountId: string): InventoryProps | null {
  const [inventory, setInvetory] = useState<InventoryProps | null>(null)

  async function onGetAccountInventory() {
    try {
      const response = await fetch(
        `${NEAR_BLOCK_EXPLORER_BASE_URL}/account/${accountId}/inventory`,
      )
      const data = await response.json()

      setInvetory(data.inventory)
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    onGetAccountInventory()
  }, [])

  return inventory
}
