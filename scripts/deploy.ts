import { ethers, deployments } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    // const DankBankStaking = await ethers.getContract("DankBankStaking");

    const rewardsToken = "0x7fbfd4a50d9dcfbac28f48491cd68fb73c567448";
    const stakingToken = "0x7fbfd4a50d9dcfbac28f48491cd68fb73c567448";

    const dankBankStaking = await deployments.deploy("DankBankStaking", { from: deployer.address, args: [deployer.address, rewardsToken, stakingToken ], log: true });

    console.log(`Dank Bank Staking Address: ${dankBankStaking.address}`);
}

main().catch(error => {
    console.error(error);
    throw new Error(error);
});