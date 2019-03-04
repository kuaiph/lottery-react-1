import Web3 from "web3";
const web3 = new Web3(window.web3.currentProvider);
let getWeb3 = new Promise(async function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  var results;
  let _web3;
  try {
    if (window.ethereum) {
      _web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    else if (typeof window.web3 !== "undefined") {
      // Use Mist/MetaMask's provider.
      _web3 = new Web3(window.web3.currentProvider);

      console.log("Injected web3 detected.");
    } else {
      // Fallback to localhost if no web3 injection. We've configured this to
      // use the development console's port by default.
      var provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/727c635298344b37961bb1755114f08b"
      );

      _web3 = new Web3(provider);
      console.log("No web3 instance injected, using Infuria web3.");
    }
    results = {
      web3: _web3
    };
    resolve(results);
  } catch (e) {
    throw new Error(e.message || e);
  }
});

export default getWeb3;
