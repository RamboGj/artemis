# Artemis-SDK

Artemis-SDK is a React library built with TypeScript, designed to simplify the integration of NEAR Blockchain functionality into React applications. It abstracts the usage of the NEAR-API-JS library and provides easy access to public APIs from the NEAR block explorer.

## Installation

```bash
npm install artemis-sdk
```

or

```bash
yarn add artemis-sdk
```

## Usage

Artemis-SDK makes it straightforward to interact with the NEAR Blockchain in your React applications. Here's a quick example usign Next.js:

```tsx
"use client"

import { useNearWallet, useSignin } from "artemis-sdk"

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
      <pre>
        {JSON.stringify(wallet, null, 2)}
      </pre>
    </div>
  )
}
```

## Features

- Abstracts NEAR-API-JS for simplified integration.
- Provides easy access to public APIs from the NEAR block explorer.
- Written in TypeScript for enhanced development experience.

## Contributing

We welcome contributions! Feel free to open issues or pull requests. For major changes, please open an issue first to discuss what you would like to change on [Github](https://github.com/RamboGj/artemis).