import React from "react";
import '../styles/Pantalla.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Pantalla = ({ input }) => (
<div className="input-group-text d-flex justify-content-end">
{ input }
</div>
);

export default Pantalla;