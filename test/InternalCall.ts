import { ethers } from "hardhat";
import { InternalCall, PublicSale } from "../typechain-types"
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

context(`InternalCall`, async () => {
    let internalCall: InternalCall;
    let publicSale: PublicSale;
    let account1: SignerWithAddress;

    beforeEach(async () => {
        [ account1 ] = await ethers.getSigners();
        const PublicSale = await ethers.getContractFactory('PublicSale');
        publicSale = await PublicSale.deploy();
        await publicSale.deployed();

        const InternalCall = await ethers.getContractFactory('InternalCall');
        internalCall = await InternalCall.deploy(publicSale.address);
        await internalCall.deployed();

        await publicSale.setAmountBought(account1.address, 1000);
    });

    it(`Call external`, async () => {
        await internalCall.callExternal(account1.address);
    })

    it(`Call internal`, async () => {
        await internalCall.callInternal(account1.address);
    })
})