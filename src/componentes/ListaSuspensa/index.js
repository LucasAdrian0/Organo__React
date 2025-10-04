import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })} 
            </select>
        </div>
    )
}

export default ListaSuspensa;