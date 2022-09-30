import { network, ethers } from "hardhat"

(async function main() {
    const UseUint256 = await ethers.getContractFactory('UseUint256');
    const useUint256 = await UseUint256.deploy();
    await useUint256.deployed();
    console.log(`Contract UseUint256 is deployed at address ${useUint256.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${useUint256.address} is:`)
    const contractCode = await network.provider.send("eth_getCode", [useUint256.address]) as string;
    console.log(contractCode);
    console.log(`Contract size is ${contractCode.length / 2}`)
    console.log('--------------------');
})()