// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

import "./interfaces/IPublicSale.sol";

contract InternalCall {
    uint256 count;
    mapping(address => uint256) cache;

    IPublicSale publicSale;
    constructor(address publicSaleAddress) {
        publicSale = IPublicSale(publicSaleAddress);
    }

    function callExternal(address user) external {
        uint256 amount = publicSale.amountBought(user);
        count = count + amount;
    }

    function cacheValue(address user) public {
        if (cache[user] > 0) return;
        cache[user] = publicSale.amountBought(user);
    }

    function callInternal(address user) external {
        cacheValue(user);
        uint256 value = cache[user];
        count += value;
    }
}