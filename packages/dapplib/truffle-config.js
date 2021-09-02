require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind uncover grace indoor fortune twenty'; 
let testAccounts = [
"0x2445d92589a79c8388dd5ed8bacc1b3b4744d7be782f57fcf2e5a72cd6fa03c9",
"0x05a6c1a8c84930d8452061efc29c479e4c128637cd6df535ce5d5fd227eff078",
"0x6fa06af9d0403f563292183adcec9717373f56cf31d78a3b35ab028e377c01f6",
"0x4630b480b46c378f0a67939146c7a466ed164a90da28b4c5ad44fc840dbe513d",
"0x4d3e27ffb6605c5706904520437af08303cd0ae1ff6fbb354ede53d826f54b61",
"0x9d211f779feec78d62046b733cf3b4b757f225445a799bad50f3abe7e19282c5",
"0xfd21286b5eb43bbe87633dff88dfe9660f21ee8c2f998c674240ece1726189ea",
"0x9049d92e22590d3be9328212b747d5a7bb3ab5668c1f49001d533e5cb163c409",
"0x802c242071c7367b17e1f982140be7977e20e4f3523a0822aa65b4067ee57a71",
"0x55c89ddf94f73ca2a06c18a007f4f06e3eb3d1a624ee5781c9a8f7e3d5099697"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

