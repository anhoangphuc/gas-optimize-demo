// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract UseUint32 {
    uint32 private state;

    function setState(uint32 x) external {
        state = x;
    }
}