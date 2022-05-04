import { ethers, deployments } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const rewardToken = "0x93e46118165e6b32b83e5c8931b1291a7d1c53f2";
    const memeToken = "0x93e46118165e6b32b83e5c8931b1291a7d1c53f2";
    const stakingToken = "0x93e46118165e6b32b83e5c8931b1291a7d1c53f2";
    const rewardRate = 10;

    const dankBankStaking = await deployments.deploy("DankBankStaking", {
        from: deployer.address,
        args: [deployer.address, memeToken, rewardToken, stakingToken, rewardRate],
        log: true,
    });

    console.log(`Dank Bank Staking Address: ${dankBankStaking.address}`);
}

main().catch(error => {
    console.error(error);
    throw new Error(error);
});
