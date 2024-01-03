# Artemis-SDK

Artemis SDK is a React library built with TypeScript, designed to simplify the integration of NEAR Blockchain functionality into React applications. It abstracts the usage of the [NEAR-API-JS](https://docs.near.org/tools/near-api-js/quick-reference#what-is-near-api-js) library and provides easy access to [public APIs](https://api.nearblocks.io/api-docs/) from the NEAR block explorer.

## Installation

```bash
npm install artemis-sdk
```

or

```bash
yarn add artemis-sdk
```

## Usage

Artemis-SDK makes it straightforward to interact with the NEAR Blockchain in your React applications. Here's a quick example using Next.js:

```tsx
"use client"

import { useNearWallet } from "artemis-sdk"

export default function Home() {
  const { isLoading, wallet } = useNearWallet()

  if (isLoading) {
    return (
      <div>
        <span>LOADING...</span>
      </div>
    )
  }

  return (
    <div>
      <pre>{JSON.stringify(wallet, null, 2)}</pre>
    </div>
  )
}
```

## Features

- Abstracts NEAR-API-JS for simplified integration.
- Provides easy access to public APIs from the NEAR block explorer.
- Written in TypeScript for enhanced development experience.

## React Hooks

### `useNearWallet`

The `useNearWallet` hook initializes a connection to the NEAR blockchain and provides access to the connected wallet instance.

#### Usage

```tsx
const { isLoading, wallet } = useNearWallet()
```

#### API

- `wallet`: An instance of the NEAR WalletConnection.
- `isLoading`: A boolean indicating whether the wallet is still loading.

<!-- To add a separator line -->
##
<!-- To add a separator line -->

### `useSignin`

The `useSignin` hook returns a function that trigger a sign in event and redirect you to near wallet platform.

#### Usage

```tsx
const { onSignin } = useSignin({
  contractId,
  failureUrl,
  methodNames,
  successUrl,
})
```

#### API

- `onSignin`: A function that trigger a sign in event and redirect you to near wallet platform.
- `contractId`: The Near Contract ID you wanna interact with.
- `failureUrl`: The URL user will be redirect if the sign in goes wrong. (optional)
- `successUrl`: The URL user will be redirect if the sign in works correctly. (optional)
- `methodNames`: The methods from the Near Contract. (optional - By default you will get access to all methods)

<!-- To add a separator line -->
##
<!-- To add a separator line -->

### `useSignout`

The `useSignout` hook returns a function that sign out your connected wallet.

#### Usage

```tsx
const { onSignout } = useSignout()
```

#### API

- `onSignout`: A function that sign out your connected wallet.

<!-- To add a separator line -->
##
<!-- To add a separator line -->

### `useSend` - UNDER TESTING

The `useSend` hook returns a function that send near from your connected wallet to another specified near account.

#### Building...

<!-- To add a separator line -->
##
<!-- To add a separator line -->

### `useInventory`

The `useInventory` hook returns all FTs and NFTs data from a near wallet.

#### Usage

```tsx
const { inventory, isLoading } = useInventory("accountId.testnet")
```

#### API

- `inventory`: All wallet FTs and NFTs data.
- `isLoading`: A boolean indicating whether the inventory is still loading.

<!-- To add a separator line -->
##
<!-- To add a separator line -->

### `useAccount`

The `useAccount` hook returns all data from a near blockchain account.

#### Usage

```tsx
const { account, isLoading } = useAccount("accountId.testnet")
```

#### API

- `account`: An account data object.
- `isLoading`: A boolean indicating whether the account is still loading.

<!-- To add a separator line -->
##
<!-- To add a separator line -->

## Utils Functions

### `parseYocto`

The `parseYocto` converts NEAR Token amount to YoctoNEAR and return its value.

#### Usage

```tsx
const yoctoNearAmount = parseYocto("1")
```

#### API

- `yoctoNearAmount`: Amount in YoctoNEAR.

<!-- To add a separator line -->
##
<!-- To add a separator line -->

### `parseNear`

The `parseNear` converts YoctoNEAR Token amount to NEAR and return its value.

#### Usage

```tsx
const nearAmount = parseNear("1000000000000000000000000")
```

#### API

- `nearAmount`: Amount in NEAR.

<!-- To add a separator line -->
##
<!-- To add a separator line -->


## Contributing

We welcome contributions! Feel free to open issues or pull requests. For major changes, please open an issue first to discuss what you would like to change on [Github](https://github.com/RamboGj/artemis).