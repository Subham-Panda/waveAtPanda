const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WaveAtPanda");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("WaveAtPanda contract is deployed at: ",waveContract.address);
    console.log("WaveAtPanda contract deployed by: ", owner.address);

    await waveContract.getTotalWaves();

    const waveTxn = await waveContract.wave();
    await waveTxn.wait();

    await waveContract.getTotalWaves();
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