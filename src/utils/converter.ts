import { utils } from 'near-api-js'

export function parseYocto(nearAmount: string): string {
  const amountInYocto = utils.format.parseNearAmount(nearAmount)

  return amountInYocto || ''
}

export function parseNear(yoctoNearAmount: string): string {
  const amountInNEAR = utils.format.formatNearAmount(yoctoNearAmount)

  return amountInNEAR || ''
}
