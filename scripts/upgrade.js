const hre = require("hardhat");

//npx hardhat run scripts/NFT721/upgrade.js --network bsc-testnet
async function main() {
    const NFT721 = await hre.ethers.getContractFactory("NFT721");
    const addressProduction = "";

    console.log("Upgrading NFT721...");
    const nft721 = await upgrades.upgradeProxy(addressProduction, NFT721);
    await nft721.deployed();

    console.log("NFT721 upgrade");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
//npx hardhat run scripts/NFT721/upgrade.js --network mainnet
//npx hardhat verify --network mainnet 