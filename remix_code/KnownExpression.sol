// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity 0.6.12;

contract KnowExpression {
    uint256 constant x = 100;
    uint256 z;
    uint256 k;
    constructor() public {}

    function setResult(uint256 t) external {
        z = t + 0;
    }

    function setResult1(uint t) external {
        z = t;
        k = 100 * z;
    } 
}