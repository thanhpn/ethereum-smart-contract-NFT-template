const hre = require("hardhat");
const { getImplementationAddress } = require("@openzeppelin/upgrades-core");

async function main() {
    //npx hardhat run scripts/NFT721/deploy.js --network bsc-testnet
    const NFT721 = await hre.ethers.getContractFactory("NFT721");
    const contractNFT = await upgrades.deployProxy(NFT721);
    await contractNFT.deployed();
    console.log("NFT721 deployed to:", contractNFT.address);

    try {
        const nftImplAddress = await getImplementationAddress(
            contractNFT.provider,
            contractNFT.address
        );
        await hre.run("verify:verify", { address: nftImplAddress });
        console.log("contractNFT verified to:", nftImplAddress);
    } catch (e) {

    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
//npx hardhat run scripts/NFT721/deploy.js --network mainnet