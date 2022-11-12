const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WaveAtPanda");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("WaveAtPanda contract is deployed at: ",waveContract.address)
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log("ERROR: ", error);
        process.exit(1);
    }
}

runMain();