const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WaveAtPanda");
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.1"),
    });
    await waveContract.deployed();
    console.log("WaveAtPanda deployed at:", waveContract.address);
  
    let contractBalance = await hre.ethers.provider.getBalance(
      waveContract.address
    );
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );
  
    const waveTxn = await waveContract.wave("This is wave #1");
    await waveTxn.wait();
  
    const waveTxn2 = await waveContract.wave("This is wave #2");
    await waveTxn2.wait();
  
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );
  
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