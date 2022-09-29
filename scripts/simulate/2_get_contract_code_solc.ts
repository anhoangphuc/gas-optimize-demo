import { network, ethers } from "hardhat"

(async function main() {
    const [account1] = await ethers.getSigners();
    const SolcOptimizeContract = await ethers.getContractFactory('SolcOptimize');
    const solcOptimize = await SolcOptimizeContract.deploy();
    await solcOptimize.deployed();
    console.log(`Contract SolcOptimize is deployed at address ${solcOptimize.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${solcOptimize.address} is:`)
    const contractCode = await network.provider.send("eth_getCode", [solcOptimize.address]) as string;
    console.log(contractCode);
    console.log(`Contract size is ${contractCode.length / 2}`)
    console.log('--------------------');
})()