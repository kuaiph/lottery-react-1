const address = "0x8895B2ed3EF4F4f66d048A3F215aC0DeA9Eb6777";

const abi = [
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "pickWinner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "enter",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "players",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];
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
export default {
  abi,
  address
};
