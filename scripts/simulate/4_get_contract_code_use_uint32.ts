import { network, ethers } from "hardhat"

(async function main() {
    const UseUint32 = await ethers.getContractFactory('UseUint32');
    const useUint32 = await UseUint32.deploy();
    await useUint32.deployed();
    console.log(`Contract UseUint32 is deployed at address ${useUint32.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${useUint32.address} is:`)
    const contractCode = await network.provider.send("eth_getCode", [useUint32.address]) as string;
    console.log(contractCode);
    console.log(`Contract size is ${contractCode.length / 2}`)
    console.log('--------------------');
})()