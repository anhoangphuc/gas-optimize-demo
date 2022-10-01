// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

interface IPublicSale {
    function amountBought(address user) external returns (uint256);
}