import { network, ethers } from "hardhat"

(async function main() {
    const UseArray10 = await ethers.getContractFactory('UseArray10Uint');
    const useArray10 = await UseArray10.deploy();
    await useArray10.deployed();
    console.log(`Contract UseArray10 is deployed at address ${useArray10.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${useArray10.address} is:`)
    const contractCode = await network.provider.send("eth_getCode", [useArray10.address]) as string;
    console.log(contractCode);
    console.log(`Contract size is ${contractCode.length / 2}`)
    console.log('--------------------');

    const UseArray1000 = await ethers.getContractFactory('UseArray1000Uint');
    const useArray1000 = await UseArray1000.deploy();
    await useArray1000.deployed();
    console.log(`Contract UseArray1000 is deployed at address ${useArray1000.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${useArray1000.address} is:`)
    const contractCode2 = await network.provider.send("eth_getCode", [useArray1000.address]) as string;
    console.log(contractCode2);
    console.log(`Contract size is ${contractCode.length / 2}`)
    console.log('--------------------');
})()