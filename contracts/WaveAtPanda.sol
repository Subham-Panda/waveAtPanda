// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WaveAtPanda {
    uint256 numOfWaves;

    constructor() {
        console.log("Yippee, worte my first smart contract");
    }

    function wave() public {
        numOfWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", numOfWaves);
        return numOfWaves;
    }
}