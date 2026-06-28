async function main() {

    const Storage =
        await ethers.getContractFactory("Storage");

    const storage =
        await Storage.deploy();

    console.log("Contract deployed:", storage.target);
}

main()
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
