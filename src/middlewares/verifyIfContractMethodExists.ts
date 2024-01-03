import { parseContract } from '@/utils/decoder'
import { NEAR_BLOCK_EXPLORER_BASE_URL } from '@/utils/constants'

export async function verifyIfContractMethodExists(
  contractId: string,
  methodName: string,
) {
  try {
    const response = await fetch(
      `${NEAR_BLOCK_EXPLORER_BASE_URL}/account/${contractId}/contract`,
    )

    const data = await response.json()

    const base64EncodedString = data.contract[0].code_base64

    const contractMetadata = parseContract(base64EncodedString)

    const methodExists =
      contractMetadata.methodNames.filter((method) => {
        return method === methodName
      }).length > 0

    return methodExists
  } catch (err) {
    return false
  }
}
