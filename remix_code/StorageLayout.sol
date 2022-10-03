// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract StorageLayout {
    uint256 x1;
    uint32 x2;
    uint112 x3;
    uint200 x4;
    struct Struct1 {
        uint32 y1;
    }
    Struct1 x5;
    uint32 x6;

    constructor() {
        x1 = 1;
        x2 = 2;
        x3 = 3;
        x4 = 4;
        x5.y1 = 5;
        x6 = 6; 
    }
}