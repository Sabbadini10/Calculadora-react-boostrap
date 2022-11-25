import React from 'react';
import '../styles/BotonClear.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const BotonClear = (props) => (
    <div className='btn btn-danger'
    onClick={ () => props.manejarClear(props.children)}>
        {props.children}
    </div>
)

export default BotonClear