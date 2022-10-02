// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract UseArray1000000Uint {
    uint256[1000000] public arr;
    constructor() {}

    function accessArr(uint256 index) external view returns (uint256) {
        return arr[index];
    }

    function setArr(uint256 index, uint256 value) external {
        arr[index] = value;
    }
}