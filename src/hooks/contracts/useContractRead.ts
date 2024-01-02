// import { onGetNearWalletConnection } from '@/utils/functions'
// import { Contract } from 'near-api-js'

// interface useContractViewProps {
//   methods: string[]
//   contractId: string
// }

// export function useContractView({
//   contractId,
//   methods,
// }: useContractViewProps): [() => void] {
//   async function onGetContractRead() {
//     const wallet = await onGetNearWalletConnection()

//     const contract = new Contract(wallet.account(), contractId, {
//       viewMethods: methods,
//     } as any)

//     const methodsReturn = []

//     for (let i = 0; i < methods.length; i++) {
//       methodsReturn.push(contract?.methods[i] as any)
//     }

//     await contract.methodName()
//   }

//   return null
// }

export function useContractRead() {
  return null
}
