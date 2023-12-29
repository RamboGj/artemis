import { InventoryProps } from '@/@types/accounts'
import { NEAR_BLOCK_EXPLORER_BASE_URL } from '@/utils/constants'
import { useEffect, useState } from 'react'

export function useInventory(accountId: string): {
  isLoading: boolean
  inventory: InventoryProps | null
} {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [inventory, setInvetory] = useState<InventoryProps | null>(null)

  async function onGetAccountInventory() {
    try {
      const response = await fetch(
        `${NEAR_BLOCK_EXPLORER_BASE_URL}/account/${accountId}/inventory`,
      )
      const data = await response.json()

      setInvetory(data.inventory)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      return err
    }
  }

  useEffect(() => {
    onGetAccountInventory()
  }, [])

  return {
    isLoading,
    inventory,
  }
}
