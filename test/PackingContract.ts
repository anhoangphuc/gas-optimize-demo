import { ethers } from "hardhat";
import { PackingContract } from "../typechain-types"
import { expect } from "chai";

context(`PackingContract`, async () => {
    let packingContract: PackingContract;

    beforeEach(async () => {
        const PackingContract = await ethers.getContractFactory(`PackingContract`);
        packingContract = await PackingContract.deploy();
        await packingContract.deployed();
    })

    it(`Deploy success`, async () => {
        expect(packingContract.address).to.be.properAddress;
    })

    it(`setValue success`, async () => {
        await packingContract.setValue(100, 100, 20);
    })

    it(`setTotal success`, async () => {
        await packingContract.setTotal(100);
    })

    it(`serReserve0 success`, async () => {
        await packingContract.setReserve0(100);
    })

    it(`setReserve0 success`, async () => {
        await packingContract.setReserve0(100);
    })

    it(`Set limit success`, async () => {
        await packingContract.setLimit(100);
    })
})