/* eslint-disable eqeqeq */
import React from "react";
import '../styles/Boton.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Boton(props) {
    let operador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
    } 

    return (
        <div className={`${operador(props.children) ? 'btn btn-primary rounded-pill align-items-center' : 'btn btn-light waves-effect d-flex fs-1 rounded-pill align-items-center' }`.trimEnd()}
        onClick={ () => props.manejarClick(props.children)}
        >
           
            {props.children}
        </div>
    );
}

export default Boton;