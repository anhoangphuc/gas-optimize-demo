import { ethers } from "hardhat";
import { StorageOperation } from "../typechain-types"

context(`StorageOperation`, async () => {
    let storageOperation: StorageOperation;
    beforeEach(async () => {
        const StorageOperation = await ethers.getContractFactory('StorageOperation');
        storageOperation = await StorageOperation.deploy();
        await storageOperation.deployed();
    })

    it(`calculateSum`, async () => {
        await storageOperation.calculateSum();
    })

    it(`betterCalculateSum`, async () => {
        await storageOperation.betterCalculateSum();
    })

    it(`moreBetterCalculateSum`, async () => {
        await storageOperation.moreBetterCalculateSum();
    })


    it(`bestCalculateSum`, async () => {
        await storageOperation.bestCalculateSum();
    })
})