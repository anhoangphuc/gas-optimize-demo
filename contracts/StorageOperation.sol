// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract StorageOperation {
    uint256[] arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    uint256 sum;
    function calculateSum() external {
        sum = 0;
        for (uint256 i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
    }
    function betterCalculateSum() external {
        uint256 localSum = 0;
        for (uint256 i = 0; i < arr.length; i++) {
            localSum = localSum + arr[i];
        }
        sum = localSum;
    }
    function moreBetterCalculateSum() external {
        uint256 localSum = 0;
        uint256 len = arr.length;
        for (uint256 i = 0; i < len; i++) {
            localSum = localSum + arr[i];
        }
        sum = localSum;
    }
    function bestCalculateSum() external {
        uint256 localSum = 0;
        uint256[] memory localArr = arr;
        uint256 len = localArr.length;
        for (uint256 i = 0; i < len; i++) {
            localSum = localSum + localArr[i];
        }
        sum = localSum;
    }
}