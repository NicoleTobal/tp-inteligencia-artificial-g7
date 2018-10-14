import React, { Component } from 'react';
import './App.css';
var synaptic = require('synaptic');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      output: '',
      network: this.createNetwork()
    };
  }

  createNetwork() {
    const { Layer, Network } = synaptic;

    // Crea las capas
    let inputLayer = new Layer(2);
    let hiddenLayer = new Layer(3);
    let outputLayer = new Layer(1);

    // Une las capas y forma la red
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);
    return new Network({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });
  }

  trainNetwork() {
    const {network} = this.state;
    let learningRate = .3;
    for (let i = 0; i < 20000; i++) {
      // 0,0 => 0
      network.activate([0,0]);
      network.propagate(learningRate, [0]);
      // 0,1 => 1
      network.activate([0,1]);
      network.propagate(learningRate, [1]);
      // 1,0 => 1
      network.activate([1,0]);
      network.propagate(learningRate, [1]);
      // 1,1 => 0
      network.activate([1,1]);
      network.propagate(learningRate, [0]);
    }
    this.setState({network});
  }

  getOutput() {
    const { input1, input2, network } = this.state;
    this.setState({
      output: network.activate([input1, input2])
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.trainNetwork.bind(this)}> Entrenar red neuronal </button>
          <h4> Probar red :</h4>
          <h6> Entradas: </h6>
          <input onChange={e => this.setState({input1: e.target.value})}/> 
          <input onChange={e => this.setState({input2: e.target.value})}/> 
          <button onClick={this.getOutput.bind(this)}> Calcular Salida </button>
          <h6> Salida: {this.state.output}</h6>
        </header>
      </div>
    );
  }
}

export default App;
