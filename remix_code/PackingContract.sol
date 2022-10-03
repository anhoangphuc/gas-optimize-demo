// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract PackingContract {
    uint112 reserve0;
    uint112 reserve1;
    uint32 blockTimestamp;
    uint256 total;
    uint256 limit;
    uint32 blockNumber;

    constructor() {}

    function setValue(uint112 reverse0_, uint112 reverse1_, uint32 blockTimestamp_) external {
        reserve0 = reverse0_;
        reserve1 = reverse1_;
        blockTimestamp = blockTimestamp_;
    }

    function setTotal(uint256 total_) external {
        total = total_;
    }

    function setReserve0(uint112 reserver0_) external {
        reserve0 = reserver0_;
    }

    function setLimit(uint256 limit_) external{
        limit = limit_;
    }

    function setReserve0AndBlockNumber(uint112 reserve0_, uint32 blockNumber_) external {
        reserve0 = reserve0_;
        blockNumber = blockNumber_;
    }
}