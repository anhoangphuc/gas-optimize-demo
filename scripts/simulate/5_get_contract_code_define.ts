import { network, ethers } from "hardhat"

(async function main() {
    const DefineOneSlot = await ethers.getContractFactory('DefineOneSlot');
    const defineOneSlot = await DefineOneSlot.deploy();
    await defineOneSlot.deployed();
    console.log(`Contract DefineOneSlot is deployed at address ${defineOneSlot.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${defineOneSlot.address} is:`)
    const contractCode = await network.provider.send("eth_getCode", [defineOneSlot.address]) as string;
    console.log(contractCode);
    console.log(`Contract size is ${contractCode.length / 2}`)
    console.log('--------------------');

    const DefineTwoSlot = await ethers.getContractFactory('DefineTwoSlot');
    const defineTwoSlot = await DefineTwoSlot.deploy();
    await defineTwoSlot.deployed();
    console.log(`Contract DefineTwoSlot is deployed at address ${defineTwoSlot.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${defineTwoSlot.address} is:`)
    const contractCode1 = await network.provider.send("eth_getCode", [defineTwoSlot.address]) as string;
    console.log(contractCode1);
    console.log(`Contract size is ${contractCode1.length / 2}`)
    console.log('--------------------');
})()