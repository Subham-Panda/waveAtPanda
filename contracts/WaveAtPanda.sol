// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WaveAtPanda {
    uint256 numOfWaves;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] waves;

    constructor() payable {
        console.log("Hi I am WaveAtPanda Smart Contract");
    }

    function wave(string memory _message) public {
        numOfWaves += 1;
        console.log("%s has waved with message %s!", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        emit NewWave(msg.sender, block.timestamp, _message);

        uint256 prizeAmount = 0.0000001 ether;
        require(
            prizeAmount <= address(this).balance,
            "Trying to transfer more money than present in the contract"
        );

        (bool success, ) = (msg.sender).call{value: prizeAmount}("");
        require(success, "Failed to send money from contract");
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", numOfWaves);
        return numOfWaves;
    }
}