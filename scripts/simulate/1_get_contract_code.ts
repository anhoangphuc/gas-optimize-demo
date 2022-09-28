import { network, ethers } from "hardhat"

(async function main() {
    const [account1] = await ethers.getSigners();
    const PackingContract = await ethers.getContractFactory('PackingContract');
    const packingContract = await PackingContract.deploy();
    await packingContract.deployed();
    console.log(`Contract Packing is deployed at address ${packingContract.address}`);
    console.log('--------------------');
    console.log(`Code deployed at address ${packingContract.address} is:`)
    const contractCode = await network.provider.send("eth_getCode", [packingContract.address]) as string;
    console.log(contractCode);
    console.log(`Contract size is ${contractCode.length / 2}`)
    console.log('--------------------');
    const accountCode = await network.provider.send("eth_getCode", [account1.address])
    console.log(`Code of account ${account1.address} is:`) 
    console.log(accountCode);
})()