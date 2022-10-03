// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract UseUint256 {
    uint256 private state;
    uint256 private state2;

    function setState(uint256 x) external {
        state = x;
    }

    function setState2(uint256 x) external {
        state2 = x;
    }
}