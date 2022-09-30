import { ethers } from "hardhat";
import { UseUint256, UseUint32 } from "../typechain-types"

context(`UseUint`, async () => {
    let useUint32: UseUint32;
    let useUint256: UseUint256;
    
    beforeEach(async () => {
        const UseUint32 = await ethers.getContractFactory(`UseUint32`);
        useUint32 = await UseUint32.deploy();
        await useUint32.deployed();

        const UseUint256 = await ethers.getContractFactory(`UseUint256`);
        useUint256 = await UseUint256.deploy();
        await useUint256.deployed();
    })

    it(`useUint32 set`, async () => {
        await useUint32.setState(100);
    })

    it(`useUint256 set`, async () => {
        await useUint256.setState(100);
    })
})