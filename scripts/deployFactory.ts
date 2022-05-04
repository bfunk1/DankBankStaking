import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const DankBankStakingFactory = await ethers.getContractFactory("DankBankStakingFactory");

    const dankBankStakingFactory = await DankBankStakingFactory.deploy(deployer.address);

    console.log(`Dank Bank Staking Factory Address: ${dankBankStakingFactory.address}`);
}

main().catch(error => {
    console.error(error);
    throw new Error(error);
});
