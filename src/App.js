import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import getWeb3 from "./web3";
import contractData from "./lottery";
import Web3 from "web3";
const web3 = new Web3(window.web3.currentProvider);
class App extends Component {
  state = {
    manager: "",
     web3: {}, 
     lottery: {},
     players: [],
     balance: '',
     value: '',
     message: ''
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
 
  onSubmit = async (event) => {
    event.preventDefault();
    const lottery = new web3.eth.Contract(
      contractData.abi,
      contractData.address
    );
    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'Waiting on transaction success...'});

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });
    this.setState({message: "You have been entered! "});
  }
  onClick = async() => {
    const lottery = new web3.eth.Contract(
      contractData.abi,
      contractData.address
    );
    const accounts = await web3.eth.getAccounts();
    this.setState({message: 'Waiting on transaction success...'});
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    this.setState({message: 'A winner has been picked!'});
  };
  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}.
          There are currently {this.state.players.length} people entered,
          competiting to win { web3.utils.fromWei(this.state.balance, 'ether') } ether! 
          </p>
      <hr/>
      <form onSubmit={this.onSubmit}>
        <h4>Want to try your luck?</h4>
        <div>
          <label>Amount of ether to enter</label>
          <input 
            value={this.state.value}
            onChange={event => this.setState({value: event.target.value})}
          />
        </div>
        <button>Enter</button>
      </form>
      <hr/>
      <h4>Ready to pick a winner?</h4>
      <button onClick={this.onClick}>Pick a winner!</button>
      <hr />
      <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
