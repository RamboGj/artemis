# INTEGRATE


## ACCOUNT ENDPOINTS
GET /v1/account/{account}
* METHOD: GET
examples REQUEST: 
- https://api-testnet.nearblocks.io/v1/account/rambogj.testnet

example RESPONSE:
```jsx
{
  "account": [
    {
      "amount": "100829765005243725400000000",
      "block_hash": "Bxwt2wcbHAnjqMHuyKzTP8ep2aJwcq8D3qqL26HQjcyR",
      "block_height": 152179995,
      "code_hash": "11111111111111111111111111111111",
      "locked": "0",
      "storage_paid_at": 0,
      "storage_usage": 2596,
      "account_id": "rambogj.testnet",
      "created": {
        "transaction_hash": "ARpK87ZsKCUnMp1AHMniiouC1mWmc5peFZ1XKpWpSM56",
        "block_timestamp": 1661003134142770400
      },
      "deleted": {
        "transaction_hash": null,
        "block_timestamp": null
      }
    }
  ]
}
```

GET /v1/account/{account}/contract
* METHOD: GET
examples REQUEST: 
- ttps://api-testnet.nearblocks.io/v1/account/rambogj.testnet/contract

example RESPONSE:
```jsx
{
  "contract": [
    {
      "keys": [
        {
          "access_key": {
            "nonce": 148685455000000,
            "permission": {
              "FunctionCall": {
                "allowance": "250000000000000000000000",
                "method_names": [],
                "receiver_id": "voting_test.rambogj.testnet"
              }
            }
          },
          "public_key": "ed25519:2Tm94esWLE9ju6ExcNz77uJHgtNDmX6QJzHZtuDk4srh"
        },
        {
          "access_key": {
            "nonce": 147181884000000,
            "permission": {
              "FunctionCall": {
                "allowance": "0",
                "method_names": [
                  "__wallet__metadata"
                ],
                "receiver_id": "rambogj.testnet"
              }
            }
          },
          "public_key": "ed25519:2m3BMgzr8XjvnAR2T2W9bXrBj6nKFtZ8ZYVg7ti6ES6J"
        },
        {
          "access_key": {
            "nonce": 147303010000000,
            "permission": {
              "FunctionCall": {
                "allowance": "0",
                "method_names": [
                  "__wallet__metadata"
                ],
                "receiver_id": "rambogj.testnet"
              }
            }
          },
          "public_key": "ed25519:4jy9GriKvFnMqedfeQBR2uexGzGpVRsycRdAY1mPM3tT"
        },
        {
          "access_key": {
            "nonce": 98061677000000,
            "permission": {
              "FunctionCall": {
                "allowance": "0",
                "method_names": [
                  "__wallet__metadata"
                ],
                "receiver_id": "rambogj.testnet"
              }
            }
          },
          "public_key": "ed25519:52NeYG66mDwcvxp35f89373EaAtzCKyPWhvrcuxaQAH9"
        },
        {
          "access_key": {
            "nonce": 148684852000000,
            "permission": {
              "FunctionCall": {
                "allowance": "250000000000000000000000",
                "method_names": [],
                "receiver_id": "voting_test.rambogj.testnet"
              }
            }
          },
          "public_key": "ed25519:5J6ewnLfjX5Soj5sxYSisJgA9cACoQYFk5wN14AWLJq1"
        },
        {
          "access_key": {
            "nonce": 150025348000001,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:5XkWjcAotY9HE3i6NiTX7d1rXiBoH5V1TGEEWNScUExX"
        },
        {
          "access_key": {
            "nonce": 148122253000013,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:6zxQcMmECfU46N1SqMj9tpmd9Z83gT6eUEF2YF2fvyZr"
        },
        {
          "access_key": {
            "nonce": 148286744000024,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:7Yf4PxE5TX1QDbRvRJzz9NKc9mKJo4Mm6HLRtvwkpSS9"
        },
        {
          "access_key": {
            "nonce": 148010067000012,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:7Yrq19u3QSPemPR2ZfsPKVR8k14yfXQoGhqCsNBC82S3"
        },
        {
          "access_key": {
            "nonce": 151276179000013,
            "permission": {
              "FunctionCall": {
                "allowance": "231948305072935400000000",
                "method_names": [],
                "receiver_id": "voting_test.rambogj.testnet"
              }
            }
          },
          "public_key": "ed25519:8yXwaMDBRfjgXLB7FPF7zr3HEfs65maVYXGQmYYUHGgQ"
        },
        {
          "access_key": {
            "nonce": 147997936000005,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:9dVgcLddJAENxyzMERbSoSkiTdB6boJura9MtbuSJ4uX"
        },
        {
          "access_key": {
            "nonce": 149807439000029,
            "permission": {
              "FunctionCall": {
                "allowance": "211864404519237500000000",
                "method_names": [],
                "receiver_id": "voting_test.rambogj.testnet"
              }
            }
          },
          "public_key": "ed25519:B5PNBuXeZrhtxF8YmTgoDuwHUBjUL6BdYj9Eafvs2NYH"
        },
        {
          "access_key": {
            "nonce": 148681875000000,
            "permission": {
              "FunctionCall": {
                "allowance": "250000000000000000000000",
                "method_names": [],
                "receiver_id": "voting_test.rambogj.testnet"
              }
            }
          },
          "public_key": "ed25519:BRjyzD8wyVu7rcbAoTxmiPmbzxNiK5t6tQbfonQQ28y6"
        },
        {
          "access_key": {
            "nonce": 147870834000011,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:BXFAbU5gThUVY93uCjRWgRJc7dd5oEdG52RLbsKLt2ii"
        },
        {
          "access_key": {
            "nonce": 149825328000006,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:BhrofahXyLPvCK5GJ9vvzWYJXA2yiDksibC85Z6CKboc"
        },
        {
          "access_key": {
            "nonce": 148679585000000,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:BsR9NzdCiE6ksJv5noTfoYhSExNpmk8s4aAeKdNBgA17"
        },
        {
          "access_key": {
            "nonce": 147849980000003,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:C42Wq13Wpujj5Ak3qBw1NNgNnVGPtikvvWDjZfX1TxaT"
        },
        {
          "access_key": {
            "nonce": 147968050000006,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:CEakwcLgKFDdE7ckSSwn71mFzDnDNKsqWxF3DRCXh6Pd"
        },
        {
          "access_key": {
            "nonce": 149809531000003,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:CU2g5RhVqGYRg57qpwFi5MZmaHP3McswbRkiFR5ocqTT"
        },
        {
          "access_key": {
            "nonce": 147183802000001,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:Cgpjv8fZSpETeiWG5H5MpY8MgkmFSW6c4ZugEiZTDPzV"
        },
        {
          "access_key": {
            "nonce": 147989823000015,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:CsM4uzQjcFbJrz9xbjaCU98MKh9n9YtnqL5YVxNZLNru"
        },
        {
          "access_key": {
            "nonce": 148007101000000,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:EoYVm4i7XDGwHGVnG3UXX4LJrK1ddMD3ixafMgvKaEue"
        },
        {
          "access_key": {
            "nonce": 98061659000024,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:EzwsdqSeALRcxeHEep3hsZW7hD9gWeDF1QuRzGAm3Lf3"
        },
        {
          "access_key": {
            "nonce": 147982462000006,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:FZUzp6REVPBuATCmX4jWgjEy6mkEPNv1TiX6Hp5AhcTr"
        },
        {
          "access_key": {
            "nonce": 148000382000004,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:G7qdFFw7TwAbNhPDaKP8zVLMAncGNKLsTQUKMuh6UL5x"
        }
      ],
      "locked": false
    }
  ]
}
```