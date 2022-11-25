import "./App.css";
import * as React from 'react';
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import {useState} from 'react';
import { evaluate } from 'mathjs';  
import Swal from "sweetalert2"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function App() {

const [input, setInput] = useState('');

const agregarInput = value => {
  setInput(input + value)
}


const calcularResultado = () => {
  if(input){
    setInput(evaluate(input))
  }else{
      Swal.fire({  
          icon: 'error',  
          title: 'Error',  
          type: 'warning',  
          text: 'Debes Ingresar un numero',  
      }); 
}}

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={ input } />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton className="botonIgual" manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
  <BotonClear manejarClear={ () => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
