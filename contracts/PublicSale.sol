// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

import "./interfaces/IPublicSale.sol";

contract PublicSale is IPublicSale {
    mapping(address => uint256) _amount;

    function amountBought(address user) external view returns (uint256) {
        return _amount[user];
    }

    function setAmountBought(address user, uint256 amount) external {
        _amount[user] = amount;
    }
}