import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import getWeb3 from "./web3";
import contractData from "./lottery";

class App extends Component {
  state = {
    manager: "",
     web3: {}, 
     lottery: {}
  };

  async componentDidMount() {
    console.log(contractData);
    const { web3 } = await getWeb3;
    const lottery = new web3.eth.Contract(
      contractData.abi,
      contractData.address
    );

    const manager = await lottery.methods.manager().call();
    this.setState({ manager, web3, lottery });
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}

export default App;
