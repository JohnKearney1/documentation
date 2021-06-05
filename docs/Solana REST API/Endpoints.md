# Endpoints

The Solana REST API is `GET` only; `POST` requests will not be served. Requests to port 80 will not be served. Ensure you are using the correct endport and endpoint. 

These methods mirror the RPC API although the endpoints are arbitrarily named. For examples on how to form a request, check [the GitHub Repository](https://github.com/JohnKearney1/Solana-API/tree/main/Example%20Scripts%20(Python)).

API: [http://api.kearneyjohn.com:8042](https://api.kearneyjohn.com:8042)/`endpoint`/`param1`&`param2`

### getBalance

Endpoint: [/balance](https://api.kearneyjohn.com:8042/balance)

| Name    | Type   | Mandatory | Description           |
|---------|--------|-----------|-----------------------|
| account | STRING | YES       | Account's public key |

### getAccountInfo  

Endpoint: [/accountInfo](https://api.kearneyjohn.com:8042/accountInfo)  

| Name    | Type   | Mandatory | Description                  |
|---------|--------|-----------|------------------------------|
| account | STRING | YES       | Account's public key         |
| chain   | STRING | YES       | Denotes which network to use |  


### getBlockCommitment  

Endpoint: [/blockCommitment](https://api.kearneyjohn.com:8042/blockCommitment) 

| Name | Type | Mandatory | Description |
|------|------|-----------|-------------|
| slot | INT  | YES       | Slot number |

### GetBlockTime

Endpoint: [/blockTime](https://api.kearneyjohn.com:8042/blockTime)  

| Name | Type | Mandatory | Description |
|------|------|-----------|-------------|
| slot | INT  | YES       | Slot number |

### getClusterNodes  

Endpoint: [/clusterNodes](https://api.kearneyjohn.com:8042/clusterNodes)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |


### getConfirmedBlock  

Endpoint: [/confirmedBlock](https://api.kearneyjohn.com:8042/confirmedBlock)  

| Name | Type | Mandatory | Description |
|------|------|-----------|-------------|
| slot | INT  | YES       | Slot number |

### getConfirmedBlocks  

Endpoint: [/confirmedBlocks](https://api.kearneyjohn.com:8042/confirmedBlocks) 

| Name | Type | Mandatory | Description |
|------|------|-----------|-------------|
| start_slot | INT  | YES       | Slot number |

### getConfirmedSignaturesForAddress  

Endpoint: [/confirmedSignatures](https://api.kearneyjohn.com:8042/confirmedSignatures)  

| Name       | Type   | Mandatory | Description                             |
|------------|--------|-----------|-----------------------------------------|
| pubkey     | STRING | YES       | Denotes the address to check            |
| start_slot | INT    | YES       | Denotes the slot to begin checking from |
| end_slot   | INT    | YES       | Denotes the slot to stop checking at    |

###  getConfirmedTransaction  

Endpoint: [/confirmedTransaction](https://api.kearneyjohn.com:8042/confirmedTransaction)  

| Name      | Type   | Mandatory | Description                    |
|-----------|--------|-----------|--------------------------------|
| signature | STRING | YES       | Denotes the signature to check |
| chain     | STRING | YES       | Denotes which network to use   |

### getEpochInfo  

Endpoint: [/epochInfo](https://api.kearneyjohn.com:8042/epochInfo)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |


### getEpochSchedule  

Endpoint: [/epochSchedule](https://api.kearneyjohn.com:8042/epochSchedule)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getFeeCaclulatorForBlockhash  

Endpoint: [/feeCalculator](https://api.kearneyjohn.com:8042/feeCalculator)  

| Name      | Type   | Mandatory | Description                    |
|-----------|--------|-----------|--------------------------------|
| blockhash | STRING | YES       | Denotes the blockhash to check |
| chain     | STRING | YES       | Denotes which network to use   |

### getFeeRateGovernor  

Endpoint: [/feeGovernor](https://api.kearneyjohn.com:8042/feeGovernor)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getFirstAvailableBlock  

Endpoint: [/firstBlock](https://api.kearneyjohn.com:8042/firstBlock)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getGenesisHash  

Endpoint: [/genesisHash](https://api.kearneyjohn.com:8042/genesisHash)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getIdentity  

Endpoint: [/identity](https://api.kearneyjohn.com:8042/identity)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getLargestAccounts  

Endpoint: [/largestAccounts](https://api.kearneyjohn.com:8042/largestAccounts)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |


### getLeaderSchedule  

Endpoint: [/leaderSchedule](https://api.kearneyjohn.com:8042/leaderSchedule) 

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| slot  | INT    | YES       | Slot identifier              |
| chain | STRING | YES       | Denotes which network to use |

### getMinimumBalanceForRentExemption  

Endpoint: [/rentExemption](https://api.kearneyjohn.com:8042/rentExemption)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| size  | INT    | YES       | Balance                      |
| chain | STRING | YES       | Denotes which network to use |

### getProgramAccounts  

Endpoint: [/programAccounts](https://api.kearneyjohn.com:8042/programAccounts)  

| Name   | Type   | Mandatory | Description                  |
|--------|--------|-----------|------------------------------|
| pubkey | STRING | YES       | Account's public key         |
| chain  | STRING | YES       | Denotes which network to use |

### getRecentBlockhash  

Endpoint: [/recentBlockhash](https://api.kearneyjohn.com:8042/recentBlockhash)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getSignatureStatuses  

Endpoint: [/signatureStatuses](https://api.kearneyjohn.com:8042/signatureStatuses)

### getSlot  

Endpoint: [/slot](https://api.kearneyjohn.com:8042/slot)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getSlotLeader  

Endpoint: [/slotLeader](https://api.kearneyjohn.com:8042/slotLeader)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getTotalSupply  

Endpoint: [/totalSupply](https://api.kearneyjohn.com:8042/totalSupply)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getTransactionCount  

Endpoint: [/transactionCount](https://api.kearneyjohn.com:8042/transactionCount)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getVersion  

Endpoint: [/version](https://api.kearneyjohn.com:8042/version)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### getVoteAccounts  

Endpoint: [/voteAccounts](https://api.kearneyjohn.com:8042/voteAccounts)  

| Name  | Type   | Mandatory | Description                  |
|-------|--------|-----------|------------------------------|
| chain | STRING | YES       | Denotes which network to use |

### requestAirdrop  

Endpoint: [/airdrop](https://api.kearneyjohn.com:8042/airdrop)  

| Name     | Type   | Mandatory | Description                   |
|----------|--------|-----------|-------------------------------|
| pubkey   | STRING | YES       | Account's public key          |
| lamports | INT    | YES       | Number of lamports to request |
| chain    | STRING | YES       | Denotes which network to use  |

### sendTransaction  

Endpoint: [/sendTransaction](https://api.kearneyjohn.com:8042/sendTransaction)  

| Name     | Type   | Mandatory | Description                  |
|----------|--------|-----------|------------------------------|
| signedtx | STRING | YES       | Signed transaction (Base-58) |
| chain    | STRING | YES       | Denotes which network to use |