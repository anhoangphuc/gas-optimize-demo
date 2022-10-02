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

    const UseArray1000000 = await ethers.getContractFactory('UseArray1000000Uint');
    const useArray1000000 = await UseArray1000000.deploy();
    await useArray1000000.deployed();
    console.log(`Contract UseArray1000000 is deployed at address ${useArray1000000.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${useArray1000000.address} is:`)
    const contractCode2 = await network.provider.send("eth_getCode", [useArray1000000.address]) as string;
    console.log(contractCode2);
    console.log(`Contract size is ${contractCode2.length / 2}`)
    console.log('--------------------');

    const UseArray10000000 = await ethers.getContractFactory('UseArray10000000Uint');
    const useArray10000000 = await UseArray10000000.deploy();
    await useArray10000000.deployed();
    console.log(`Contract UseArray10000000 is deployed at address ${useArray10000000.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${useArray10000000.address} is:`)
    const contractCode3 = await network.provider.send("eth_getCode", [useArray10000000.address]) as string;
    console.log(contractCode3);
    console.log(`Contract size is ${contractCode3.length / 2}`)
    console.log('--------------------');
})()