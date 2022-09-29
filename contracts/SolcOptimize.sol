// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract SolcOptimize {
    uint256 constant x = 100;
    uint256 z;
    uint256 k;
    constructor() {}

    function setResult(uint256 t) external {
        z = t + 0;
    }

    function setResult1(uint t) external {
        z = t;
        k = 100 * z;
    } 
}