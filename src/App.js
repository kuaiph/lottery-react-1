import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {manager: '' };
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const manager = await lottery.methods.manager().call({from: accounts[0]});
    this.setState({manager});
    console.log(manager);
    console.log('Attempting to deploy from account', accounts[0]);
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
