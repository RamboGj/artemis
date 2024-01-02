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
      <div className="w-full h-screen bg-black text-white">
        <h1 className="text-[5rem]">LOADING...</h1>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-black text-white">
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
const { isLoading, wallet } = useNearWallet();
```

#### API

- `wallet`: An instance of the NEAR WalletConnection.
- `isLoading`: A boolean indicating whether the wallet is still loading.

<!-- To add a separator line -->
##
<!-- To add a separator line -->

### `useSignin`

The `useSignin` hook returns function that trigger a sign in event and redirect you to near wallet platform.

#### Usage

```tsx
const { onSignin } = useSignin({
  contractId,
  failureUrl,
  methodNames,
  successUrl,
});
```

#### API

- `onSignin`: A function that trigger a sign in event and redirect you to near wallet platform.
- `contractId`: The Near Contract ID you wanna interact with.
- `failureUrl`: The URL user will be redirect if the sign in goes wrong. (optional)
- `successUrl`: The URL user will be redirect if the sign in works correctly. (optional)
- `methodNames`: The methods from the Near Contract. (optional - By default you will get access to all methods)

<!-- Add more hooks information here . -->
<!-- To add a separator line -->
##
<!-- To add a separator line -->

## Contributing

We welcome contributions! Feel free to open issues or pull requests. For major changes, please open an issue first to discuss what you would like to change on [Github](https://github.com/RamboGj/artemis).