import React from 'react';
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #ffffff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    const {marca, year, plan} = datos;
    return(
        <ContenedorResumen>
            <h2>Resumen de cotizacion </h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>

        </ContenedorResumen>
    )
}
export default Resumen