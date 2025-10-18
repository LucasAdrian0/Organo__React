import './ListaSuspensa.css'
import { useState } from 'react'

const ListaSuspensa = (props) => {

    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })} 
            </select>
        </div>
    )
}

export default ListaSuspensa;