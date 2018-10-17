import React, { Component } from 'react';
import './App.css';
var synaptic = require('synaptic');

const CERVEZA_PILSNER = 0;
const CERVEZA_STOUT = 1;
const CERVEZA_PORTER = 2;
const CERVEZA_BARLEY = 3;
const CERVEZA_LAGER = 4;

const SABOR_AGRIDULCE = 0;
const SABOR_ACIDO = 1;
const SABOR_PICANTE = 2;
const SABOR_SALADO = 3;
const SABOR_DULCE = 4;

const NIVEL_MUY_FUERTE = 0;
const NIVEL_FUERTE = 1;
const NIVEL_NORMAL = 2;
const NIVEL_SUAVE = 3;

const GRASAS_ALTO = 0;
const GRASAS_MEDIO = 1;
const GRASAS_BAJO = 2;
const GRASAS_NO = 3;

const AHUMADO_NO = 0;
const AHUMADO_SI = 1;

const CALIENTE_NO = 0;
const CALIENTE_SI = 1;

const COCINA_JAPONESA = 0;
const COCINA_ITALIANA = 1;
const COCINA_ALEMANA = 2;
const COCINA_FRANCESA = 3;
const COCINA_REGIONAL = 4;

class App extends Component {

  constructor(props) {
    super(props);

    this.cervezas = [CERVEZA_BARLEY, CERVEZA_LAGER, CERVEZA_PILSNER, CERVEZA_PORTER, CERVEZA_STOUT];
    this.cervezasNombres = {
      Barley: CERVEZA_BARLEY,
      Lager: CERVEZA_LAGER,
      Pilsner: CERVEZA_PILSNER,
      Porter: CERVEZA_PORTER,
      Stout: CERVEZA_STOUT
    };
    
    this.comidas = [];
    this.comidas.push(this.comida('Cordero asado', SABOR_SALADO, NIVEL_FUERTE, GRASAS_BAJO, AHUMADO_SI, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_PORTER));
    this.comidas.push(this.comida('Salchichas ahumadas picantes', SABOR_PICANTE, NIVEL_MUY_FUERTE, GRASAS_MEDIO, AHUMADO_SI, CALIENTE_SI, COCINA_ALEMANA, CERVEZA_PORTER));
    this.comidas.push(this.comida('Embutidos de ciervo', SABOR_SALADO, NIVEL_FUERTE, GRASAS_MEDIO, AHUMADO_SI, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_PORTER));
    this.comidas.push(this.comida('Embutidos de jabalí', SABOR_SALADO, NIVEL_MUY_FUERTE, GRASAS_MEDIO, AHUMADO_SI, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_PORTER));
    this.comidas.push(this.comida('Calamar picante', SABOR_PICANTE, NIVEL_FUERTE, GRASAS_BAJO, AHUMADO_NO, CALIENTE_SI, COCINA_JAPONESA, CERVEZA_PORTER));
    this.comidas.push(this.comida('Carne madurada', SABOR_SALADO, NIVEL_MUY_FUERTE, GRASAS_BAJO, AHUMADO_SI, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_PORTER));
    this.comidas.push(this.comida('Empanada de carne picante', SABOR_PICANTE, NIVEL_FUERTE, GRASAS_BAJO, AHUMADO_NO, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_PORTER));
    this.comidas.push(this.comida('Curry', SABOR_SALADO, NIVEL_MUY_FUERTE, GRASAS_MEDIO, AHUMADO_SI, CALIENTE_SI, COCINA_JAPONESA, CERVEZA_PORTER));

    this.comidas.push(this.comida('Cerdo a la cerveza', SABOR_SALADO, NIVEL_NORMAL, GRASAS_ALTO, AHUMADO_SI, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_STOUT));
    this.comidas.push(this.comida('Brownies', SABOR_DULCE, NIVEL_NORMAL, GRASAS_ALTO, AHUMADO_NO, CALIENTE_NO, COCINA_FRANCESA, CERVEZA_STOUT));
    this.comidas.push(this.comida('Costillas de cerdo BBQ', SABOR_AGRIDULCE, NIVEL_FUERTE, GRASAS_ALTO, AHUMADO_SI, CALIENTE_SI, COCINA_FRANCESA, CERVEZA_STOUT));
    this.comidas.push(this.comida('Picada de fiambres', SABOR_SALADO, NIVEL_NORMAL, GRASAS_ALTO, AHUMADO_SI, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_STOUT));
    this.comidas.push(this.comida('Salchichas ahumadas', SABOR_SALADO, NIVEL_FUERTE, GRASAS_MEDIO, AHUMADO_SI, CALIENTE_SI, COCINA_ALEMANA, CERVEZA_STOUT));
    this.comidas.push(this.comida('Papas fritas', SABOR_SALADO, NIVEL_NORMAL, GRASAS_ALTO, AHUMADO_NO, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_STOUT));
    this.comidas.push(this.comida('Mousse de chocolate', SABOR_DULCE, NIVEL_NORMAL, GRASAS_ALTO, AHUMADO_NO, CALIENTE_NO, COCINA_FRANCESA, CERVEZA_STOUT));
    this.comidas.push(this.comida('Helado', SABOR_DULCE, NIVEL_NORMAL, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_STOUT));
    this.comidas.push(this.comida('Pollo provenzal', SABOR_SALADO, NIVEL_FUERTE, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_STOUT));
    this.comidas.push(this.comida('Picada de quesos fuertes', SABOR_SALADO, NIVEL_FUERTE, GRASAS_MEDIO, AHUMADO_SI, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_STOUT));

    this.comidas.push(this.comida('Pizza margarita', SABOR_SALADO, NIVEL_SUAVE, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_SI, COCINA_ITALIANA, CERVEZA_PILSNER));
    this.comidas.push(this.comida('Pizza calabresa', SABOR_SALADO, NIVEL_FUERTE, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_SI, COCINA_ITALIANA, CERVEZA_PILSNER));
    this.comidas.push(this.comida('Gulash', SABOR_PICANTE, NIVEL_NORMAL, GRASAS_ALTO, AHUMADO_SI, CALIENTE_SI, COCINA_ALEMANA, CERVEZA_PILSNER));
    this.comidas.push(this.comida('Mousse de limón', SABOR_DULCE, NIVEL_SUAVE, GRASAS_BAJO, AHUMADO_NO, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_PILSNER));
    this.comidas.push(this.comida('Milanesa', SABOR_SALADO, NIVEL_NORMAL, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_SI, COCINA_ITALIANA, CERVEZA_PILSNER));
    this.comidas.push(this.comida('Aceitunas rellenas', SABOR_PICANTE, NIVEL_FUERTE, GRASAS_NO, AHUMADO_NO, CALIENTE_NO, COCINA_ITALIANA, CERVEZA_PILSNER));
    this.comidas.push(this.comida('Empanadas con pasas', SABOR_AGRIDULCE, NIVEL_NORMAL, GRASAS_BAJO, AHUMADO_SI, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_PILSNER));
    this.comidas.push(this.comida('Picada caliente', SABOR_SALADO, NIVEL_SUAVE, GRASAS_ALTO, AHUMADO_SI, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_PILSNER));
    this.comidas.push(this.comida('Fideos con pesto', SABOR_SALADO, NIVEL_NORMAL, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_SI, COCINA_ITALIANA, CERVEZA_PILSNER));

    this.comidas.push(this.comida('Sushi', SABOR_SALADO, NIVEL_SUAVE, GRASAS_NO, AHUMADO_NO, CALIENTE_NO, COCINA_JAPONESA, CERVEZA_BARLEY));
    this.comidas.push(this.comida('Ramen', SABOR_SALADO, NIVEL_NORMAL, GRASAS_BAJO, AHUMADO_NO, CALIENTE_SI, COCINA_JAPONESA, CERVEZA_BARLEY));
    this.comidas.push(this.comida('Calamar con salsa miso', SABOR_ACIDO, NIVEL_FUERTE, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_NO, COCINA_JAPONESA, CERVEZA_BARLEY));
    this.comidas.push(this.comida('Calamar frito', SABOR_SALADO, NIVEL_NORMAL, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_SI, COCINA_JAPONESA, CERVEZA_BARLEY));
    this.comidas.push(this.comida('Bolas de arroz', SABOR_SALADO, NIVEL_SUAVE, GRASAS_NO, AHUMADO_NO, CALIENTE_NO, COCINA_JAPONESA, CERVEZA_BARLEY));
    this.comidas.push(this.comida('Pollo a la parrilla', SABOR_SALADO, NIVEL_SUAVE, GRASAS_NO, AHUMADO_NO, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_BARLEY));
    this.comidas.push(this.comida('Asado', SABOR_SALADO, NIVEL_NORMAL, GRASAS_MEDIO, AHUMADO_SI, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_BARLEY));
    this.comidas.push(this.comida('Lomo', SABOR_SALADO, NIVEL_SUAVE, GRASAS_BAJO, AHUMADO_NO, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_BARLEY));

    this.comidas.push(this.comida('Pizza peperonni', SABOR_SALADO, NIVEL_SUAVE, GRASAS_ALTO, AHUMADO_NO, CALIENTE_NO, COCINA_ITALIANA, CERVEZA_LAGER));
    this.comidas.push(this.comida('Alitas de pollo', SABOR_PICANTE, NIVEL_FUERTE, GRASAS_ALTO, AHUMADO_SI, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_LAGER));
    this.comidas.push(this.comida('Tacos', SABOR_PICANTE, NIVEL_FUERTE, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_LAGER));
    this.comidas.push(this.comida('Lomo a la pimienta', SABOR_SALADO, NIVEL_NORMAL, GRASAS_BAJO, AHUMADO_SI, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_LAGER));
    this.comidas.push(this.comida('Panceta', SABOR_SALADO, NIVEL_NORMAL, GRASAS_ALTO, AHUMADO_NO, CALIENTE_NO, COCINA_REGIONAL, CERVEZA_LAGER));
    this.comidas.push(this.comida('Huevos fritos', SABOR_SALADO, NIVEL_NORMAL, GRASAS_ALTO, AHUMADO_NO, CALIENTE_SI, COCINA_FRANCESA, CERVEZA_LAGER));
    this.comidas.push(this.comida('Hamburguesas', SABOR_SALADO, NIVEL_FUERTE, GRASAS_MEDIO, AHUMADO_SI, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_LAGER));
    this.comidas.push(this.comida('Ravioles a la putanesca', SABOR_PICANTE, NIVEL_FUERTE, GRASAS_BAJO, AHUMADO_NO, CALIENTE_SI, COCINA_ITALIANA, CERVEZA_LAGER));
    this.comidas.push(this.comida('Salchichas picantes', SABOR_PICANTE, NIVEL_FUERTE, GRASAS_MEDIO, AHUMADO_NO, CALIENTE_SI, COCINA_ALEMANA, CERVEZA_LAGER));
    this.comidas.push(this.comida('Guiso con rocoto', SABOR_PICANTE, NIVEL_FUERTE, GRASAS_ALTO, AHUMADO_NO, CALIENTE_SI, COCINA_REGIONAL, CERVEZA_LAGER));

    this.state = {
      sabor: '',
      nivel: '',
      grasas: '',
      ahumado: '',
      caliente: '',
      cocina: '',
      cerveza: '',
      output: '',
      precision: '',
      network: this.createNetwork(),
    };
    
  }
  
  comida(nombre, sabor, nivel, grasas, ahumado, caliente, cocina, cerveza) {
    return {
      nombre: nombre,
      sabor: sabor,
      nivel: nivel,
      grasas: grasas,
      ahumado: ahumado,
      caliente: caliente,
      cocina: cocina,
      cerveza: cerveza
    };
  }
  
  comidasPorCerveza(desde, hasta) {
    let arr = {};
    
    this.cervezas.forEach(cerveza => {
      arr[cerveza] = this.comidas.filter(comida => {
        return comida.cerveza === cerveza;
      });
      arr[cerveza] = arr[cerveza].slice(Math.round(arr[cerveza].length * desde), Math.round(arr[cerveza].length * hasta));
    });
    
    return arr;
    
  }

  createNetwork() {
    const { Layer, Network, Neuron } = synaptic;

    // Crea las capas
    /*
      0 => tipo sabor
      1 => nivel sabor
      2 => nivel grasas
      3 => ahumado
      4 => caliente
      5 => tipo cocina
    */
    let inputLayer = new Layer(6);
    let hiddenLayer = new Layer(4);
    let outputLayer = new Layer(1);
    
    outputLayer.set({
      squash: Neuron.squash.IDENTITY
    });

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
    let learningRate = .01;
    let comidas = this.comidasPorCerveza(0, 0.7); //Usar el 70% de las comidas de cada cerveza para el entrenamiento
     
    for(var n = 0; n <= 50000; n++) {
       
      for(var i in comidas) {
        for(let j = 0; j < comidas[i].length; j++) {
          network.activate([
            comidas[i][j].sabor,
            comidas[i][j].nivel,
            comidas[i][j].grasas,
            comidas[i][j].ahumado,
            comidas[i][j].caliente,
            comidas[i][j].cocina
          ]);
          network.propagate(learningRate, [comidas[i][j].cerveza]);
        }
        
      }
      
    }
    
    this.setState({network});
    
    this.test();
  }
  
  test() {
    
    const {network} = this.state;
    let precision = 0;
    var comidas = this.comidasPorCerveza(0.7, 1); //Validar con el 30% restante
    
    let validate = function(comida) {

      let calc = network.activate([comida.sabor, comida.nivel, comida.grasas, comida.ahumado, comida.caliente, comida.cocina]);
      if(Math.round(calc) === comida.cerveza)
        precision++;
      
    };
    
    for(var i in comidas)
      comidas[i].forEach(validate);
    
    this.setState({ precision: ((precision/this.comidas.length)*100).toFixed(2) });
    
  }

  getOutput() {
    const { sabor, nivel, grasas, ahumado, caliente, cocina, network } = this.state;
    const output = network.activate([parseInt(sabor), parseInt(nivel), parseInt(grasas), parseInt(ahumado), parseInt(caliente), parseInt(cocina)]);
    
    this.setState({
      output: output,
      cerveza: this.cervezaPorId(output)
    });
  }
  
  cervezaPorId(id) {
    id = Math.round(id);

    for(let i in this.cervezasNombres)
      if(this.cervezasNombres[i] === id)
        return i;
        
    return 'N/A';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.trainNetwork.bind(this)}> Entrenar red neuronal </button>
          <h4>Resultado</h4>
          <p>Precisión: {this.state.precision}%</p>
          <h4> Probar red :</h4>
          <h6> Entradas: </h6>
          <div className="inputs">
            <label>
              Sabor
              <select onChange={e => this.setState({sabor: e.target.value})}>
                <option>Seleccione</option>
                <option value={SABOR_AGRIDULCE}>Agridulce</option>
                <option value={SABOR_ACIDO}>Ácido</option>
                <option value={SABOR_PICANTE}>Picante</option>
                <option value={SABOR_SALADO}>Salado</option>
                <option value={SABOR_DULCE}>Dulce</option>
              </select> 
            </label>
            
            <label>
              Nivel
              <select onChange={e => this.setState({nivel: e.target.value})}>
                <option>Seleccione</option>
                <option value={NIVEL_MUY_FUERTE}>Muy fuerte</option>
                <option value={NIVEL_FUERTE}>Fuerte</option>
                <option value={NIVEL_NORMAL}>Normal</option>
                <option value={NIVEL_SUAVE}>Suave</option>
              </select> 
            </label>
    
            <label>
              Grasas
              <select onChange={e => this.setState({grasas: e.target.value})}>
                <option>Seleccione</option>
                <option value={GRASAS_ALTO}>Alto</option>
                <option value={GRASAS_MEDIO}>Medio</option>
                <option value={GRASAS_BAJO}>Bajo</option>
                <option value={GRASAS_NO}>Sin grasas</option>
              </select> 
            </label>
    
            <label>
              Ahumado
              <select onChange={e => this.setState({ahumado: e.target.value})}>
                <option>Seleccione</option>
                <option value={AHUMADO_SI}>Sí</option>
                <option value={AHUMADO_NO}>No</option>
              </select> 
            </label>
    
            <label>
              Caliente
              <select onChange={e => this.setState({caliente: e.target.value})}>
                <option>Seleccione</option>
                <option value={CALIENTE_SI}>Sí</option>
                <option value={CALIENTE_NO}>No</option>
              </select> 
            </label>
    
            <label>
              Tipo cocina
              <select onChange={e => this.setState({cocina: e.target.value})}>
                <option>Seleccione</option>
                <option value={COCINA_ALEMANA}>Alemana</option>
                <option value={COCINA_FRANCESA}>Francesa</option>
                <option value={COCINA_ITALIANA}>Italiana</option>
                <option value={COCINA_JAPONESA}>Japonesa</option>
                <option value={COCINA_REGIONAL}>Regional</option>
              </select> 
            </label>
          </div>
          <button onClick={this.getOutput.bind(this)}> Obtener cerveza </button>
          <h6> Salida: {this.state.output} ({this.state.cerveza})</h6>
        </header>
      </div>
    );
  }
}

export default App;
