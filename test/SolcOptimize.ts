import { ethers } from "hardhat";
import { SolcOptimize } from "../typechain-types"

context(`SolcOptimize`, async () => {
    let solcOptimize: SolcOptimize;

    beforeEach(async () => {
        const SolcOptimizeContract = await ethers.getContractFactory('SolcOptimize');
        solcOptimize = await SolcOptimizeContract.deploy();
        solcOptimize.deployed();
    })

    it(`set result success`, async () => {
        await solcOptimize.setResult(100);
    })

    it(`set result1 success`, async () => {
        await solcOptimize.setResult1(100);
    })
})