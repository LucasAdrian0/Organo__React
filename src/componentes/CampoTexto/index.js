import './CampoTexto.css'

const CampoTexto = (props) => {

  const placeholderModificado = `${props.placeholder}...`

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)//pegar o valor digitado no campo de texto e passar para o componente pai atraves da funcao aoAlterado que foi passada via props
  }

  return (
    <div className='campo-texto'>
      <label>
        {props.label}
      </label>
      <input value={props.valor} onChange={aoDigitado} required = {props.obrigatorio} placeholder={placeholderModificado} />

    </div>// required indica que o campo e obrigatorio, se o valor for true o campo e obrigatorio, se for false nao e obrigatorio
  )
}

export default CampoTexto