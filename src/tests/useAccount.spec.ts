import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useAccount } from '../hooks/explorer/account/useAccount'
import { NEAR_BLOCK_EXPLORER_BASE_URL } from '..'

// TO-DO

describe('useAccount', async () => {
  it('should call the fetch with correct params', async () => {
    const accountId = 'rambogj.testnet'
    const fetchSpy = vi.spyOn(global, 'fetch')

    const { result } = renderHook(() => useAccount(accountId))

    expect(result.current.account).toBe(null)
    expect(result.current.isLoading).toBe(true)
    expect(fetchSpy).toHaveBeenCalledWith(
      `${NEAR_BLOCK_EXPLORER_BASE_URL}/account/${accountId}`,
    )
  })
})
