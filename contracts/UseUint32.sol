// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract UseUint32 {
    uint32 private state;
    uint32 private state2;

    function setState(uint32 x) external {
        state = x;
    }

    function setState2(uint32 x) external {
        state2 = x;
    }
}