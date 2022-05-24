import { BigNumber } from "ethers";
import { ethers, deployments } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const rewardToken = "0x93e46118165e6b32b83e5c8931b1291a7d1c53f2";
    const memeToken = "0x93e46118165e6b32b83e5c8931b1291a7d1c53f2";
    const stakingToken = "0xFc509DB19c008D851F1823961B541b65FbEf43ff";
    const lpTokenId = BigNumber.from("844314671304614845033216911081071804793522770930");
    const rewardRate = 10;
    const initialMemeBalance = 400;
    const initialTokenBalance = 1000;
    const marketAddress = "0x64C5CD052dc212E774f6d46f0d1845d457D02981";



    const dankBankStaking = await deployments.deploy("DankBankStaking", {
        from: deployer.address,
        args: [deployer.address, memeToken, rewardToken, stakingToken, lpTokenId, rewardRate, initialMemeBalance, initialTokenBalance],
        log: true,
    });

    console.log(`Dank Bank Staking Address: ${dankBankStaking.address}`);
}

main().catch(error => {
    console.error(error);
    throw new Error(error);
});
