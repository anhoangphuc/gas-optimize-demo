import { ethers } from "hardhat";
import { MemoryVsCalldata } from "../typechain-types"

context(`MemoryVsCalldata`, async () => {
    let contract: MemoryVsCalldata;
    let arr: number[];

    beforeEach(async () => {
        const Contract = await ethers.getContractFactory('MemoryVsCalldata');
        contract = await Contract.deploy();
        await contract.deployed();
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    })

    it(`addMemory`, async () => {
        await contract.addMemory(arr);
    })

    it(`addCalldata`, async () => {
        await contract.addCalldata(arr);
    })
})