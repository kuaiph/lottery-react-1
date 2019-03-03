import getWeb3 from './web3';
//import Web3 from "web3";
const web3 =  new getWeb3;
const address = '0x8895B2ed3EF4F4f66d048A3F215aC0DeA9Eb6777';

const abi =[ { constant: true,
    inputs: [],
    name: 'manager',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x481c6a75' },
  { constant: false,
    inputs: [],
    name: 'pickWinner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x5d495aea' },
  { constant: true,
    inputs: [],
    name: 'getPlayers',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8b5b9ccc' },
  { constant: false,
    inputs: [],
    name: 'enter',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    signature: '0xe97dcb62' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'players',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xf71d96cb' },
  { inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    constant: undefined,
    signature: 'constructor' } ];
/*
 const fetchERC20 = async instance => {
          let object = {};
          try {
            let name = await instance.name.call();
            let sym = await instance.symbol.call();
            let totalSupply = await instance.totalSupply.call();
            object.name = name;
            object.sym = sym;
            object.totalSupply = totalSupply.toNumber();
          } catch (err) {
            console.log(err);
            return false;
          }
          return object;
        };
        
        export default fetchERC20;
*/
export default new web3.eth.Contract(abi,address);