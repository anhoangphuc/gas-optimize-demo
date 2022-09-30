// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract UseUint256 {
    uint256 private state;

    function setState(uint256 x) external {
        state = x;
    }
}