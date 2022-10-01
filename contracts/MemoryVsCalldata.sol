// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract MemoryVsCalldata {
    uint256 sum;

    function addMemory(uint256[] memory arr) external {
        uint256 localSum = 0;
        for (uint256 i = 0; i < arr.length; i++) {
            localSum += arr[i];
        }
        sum = localSum;
    }

    function addCalldata(uint256[] calldata arr) external {
        uint256 localSum = 0;
        for (uint256 i = 0; i < arr.length; i++) {
            localSum += arr[i];
        }
        sum = localSum;
    }
}