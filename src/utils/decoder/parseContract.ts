import { getProbableInterfaces } from './getProbableInterfaces'
import { ParsedContract } from './ParsedContract'
import { getMethodNames } from './methods'

export function parseContract(codeBase64: string): ParsedContract {
  const methodNames = getMethodNames(codeBase64)
  const probableInterfaces = getProbableInterfaces(methodNames)
  return {
    methodNames,
    ...probableInterfaces,
  }
}
