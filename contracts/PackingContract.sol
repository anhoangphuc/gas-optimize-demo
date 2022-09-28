// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

contract PackingContract {
    uint112 reserve0;
    uint112 reserve1;
    uint32 blockTimestamp;
    uint256 total;
    uint256 limit;

    constructor() {}

    function getValue() external view returns (uint112 reserve0_, uint112 reserve1_, uint32 blockTimestamp_) {
        reserve0_ = reserve0;    
        reserve1_ = reserve1;
        blockTimestamp_ = blockTimestamp;
    }

    function setValue(uint112 reverse0_, uint112 reverse1_, uint32 blockTimestamp_) external {
        reserve0 = reverse0_;
        reserve1 = reverse1_;
        blockTimestamp = blockTimestamp_;
    }

    function getTotal() external view returns (uint256 total_) {
        total_ = total;
    }

    function setTotal(uint256 total_) external {
        total = total_;
    }

    function getReserve0() external view returns (uint112 reserve0_) {
        reserve0_ = reserve0;
    }

    function setReserve0(uint112 reserver0_) external {
        reserve0 = reserver0_;
    }

    function setLimit(uint256 limit_) external{
        limit = limit_;
    }
}