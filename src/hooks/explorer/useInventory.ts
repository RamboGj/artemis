import type { useInventoryType } from '@/@types/accounts'
import { NEAR_BLOCK_EXPLORER_BASE_URL } from '@/utils/constants'
import { useZustandInventory } from '@/zustand/hooks'
import { useEffect } from 'react'

export function useInventory(accountId: string): useInventoryType {
  const { inventory, isLoading, saveInventory, saveInventoryError } =
    useZustandInventory()

  async function onGetAccountInventory() {
    try {
      const response = await fetch(
        `${NEAR_BLOCK_EXPLORER_BASE_URL}/account/${accountId}/inventory`,
      )
      const data = await response.json()

      saveInventory(data.inventory)
    } catch (err) {
      saveInventoryError()
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
