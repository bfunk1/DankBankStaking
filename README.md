# Dank Bank Staking

## Usage

### Pre Requisites

Before running any command, make sure to install dependencies:

```sh
$ yarn install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ yarn compile
```

### Deploy

Deploy the contracts to Hardhat Network:

Deploy the contracts to a specific network, options are Matic and Mumbai:

```sh
$ yarn deploy:matic
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan/Polyscan API key and the MNEMONIC of the account which will send the deployment transaction. Updated the `arguments.js` file with the exact arguments for the constructor that were used to deploy the contract. With a valid .env and `argument.js` file in place, first deploy your contract

```shell
yarn deploy:matic
```

Then, run the verify task, passing the address of the contract replacing `DEPLOYED_CONTRACT_ADDRESS`, the network where it's deployed by replacing `NETWORK`:

```shell
npx hardhat verify --constructor-args arguments.js --network <NETWORK_NAME> <DEPLOYED_CONTRACT_ADDRESS>
```

### Notes

Test Staking Factory Contract on mumbai: 0xBCb0b8a9F64738CBd197F27dCd71Aceb1C7B7c52
Test Staking Contract on mumbai: 0x79BE5496D1F8136C85DaCe417Df05DFe86fa71aE
