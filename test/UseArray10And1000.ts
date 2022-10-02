import { ethers } from "hardhat";
import { UseArray10000000Uint, UseArray1000000Uint, UseArray10Uint } from "../typechain-types"

context(`UseArray10`, async () => {
    let array10: UseArray10Uint;
    beforeEach(async () => {
        const Array10 = await ethers.getContractFactory('UseArray10Uint');
        array10 = await Array10.deploy();
        await array10.deployed();
    })

    it(`Set element`, async () => {
        await array10.setArr(9, 9);
    })
})

context(`UseArray1000000`, async () => {
    let array1000000: UseArray1000000Uint;
    beforeEach(async () => {
        const Array1000000 = await ethers.getContractFactory('UseArray1000000Uint');
        array1000000 = await Array1000000.deploy();
        await array1000000.deployed();
    })

    it(`Set element`, async () => {
        await array1000000.setArr(9, 9);
    })
})

context(`UseArray10000000`, async () => {
    let array100000000: UseArray10000000Uint;
    beforeEach(async () => {
        const Array10000000 = await ethers.getContractFactory('UseArray10000000Uint');
        array100000000 = await Array10000000.deploy();
        await array100000000.deployed();
    })

    it(`Set element`, async () => {
        await array100000000.setArr(9, 9);
    })
})