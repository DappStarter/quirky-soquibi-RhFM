require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name rifle saddle concert harvest battle equal gift'; 
let testAccounts = [
"0xa352e02a71e956b961950c9ffc00a886aa670d8e4f669b9edec56074aad50adc",
"0x8931b984af9380cb86235c7812d1146af7b53b8ae96de011e55a04ba57d31b57",
"0x95c9ea9f67f006fe09d59a5bc7a1383dcfdb34ca43214f7c7ef21b2db1c56af6",
"0x608a33e55ea6f9a18139240aa41cb2def1eece0218dd67fe97317808401afd9c",
"0xe5aa0f6b003a6205a73c4d428c24656d5951c597c94a7c23e93aba571a8b0827",
"0x3e3fa68dfdbe751e861f2089187b0bd4e357ec9edb20c6f32deb81bc5e5c2a65",
"0x6efab2bfbcd843fd6bed075e6e22ee9220463811fa216bfd5e29e8fd17424a1f",
"0x27e0944e17649fb57555eccd0917de0b74827deee2c8b240f419bdf983e0ec44",
"0xe8fae2c3ac6d42bc42272cd7eed52a607d5c8e2d78b45997bb1e7cf6035b2877",
"0xd29c0245c1c1c092a247593b2eac2139d6da98b55d24036c952dcf0110a5ac8a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


