const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WaveAtPanda");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed at: ", waveContract.address);
  
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());

    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait();
  
    const [_, randomPerson] = await hre.ethers.getSigners();
    waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
    await waveTxn.wait();
  
    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
  };

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