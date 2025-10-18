import './Formulario.css';
import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';



const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {//funcao que vai ser disparada quando o formulario for submetido  
        evento.preventDefault()//previnir o comportamento padrao do formulario de recarregar a pagina, nesse caso a pagina nao recarrega mais
        props.aoColaboradorCadastrado({//chamando a funcao que veio por props lá do App.js
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>

                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>

                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>

                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa label="Itens" itens={times} valor={time} aoAlterado={valor => setTime(valor)}/>

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}
export default Formulario;