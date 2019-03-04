import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import getWeb3 from "./web3";
import contractData from "./lottery";

class App extends Component {
  state = {
    manager: "",
     web3: {}, 
     lottery: {},
     players: [],
     balance: ''
  };

  async componentDidMount() {
    console.log(contractData);
    const { web3 } = await getWeb3;
    const lottery = new web3.eth.Contract(
      contractData.abi,
      contractData.address
    );

    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager, web3, lottery,players, balance });
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}.
          There are currently {this.state.players.length} people entered,
          competiting to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!
          </p>
      </div>
    );
  }
}

export default App;
