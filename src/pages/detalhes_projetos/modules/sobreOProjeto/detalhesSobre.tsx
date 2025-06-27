import React from "react";
import './detalhesSobre.css'
import TituloSection from "../../../../components/tituloSection/tituloSection";
import { Link } from "react-router-dom";

import SimpleCard from "../../../../components/simpleCard/simpleCard";
import { ReactComponent as GitHub } from '../../../../assets/icons/GitHub_icon.svg'
import { descricaoProjeto } from "../../../../controller/types";

interface props extends descricaoProjeto {
    tempo: string,
    responsivo: boolean,
    repositorio: string,
    dificuldade: string,
}

function DetalheSobre(informacoes: props) {
    return (
        <section className="DetalheSobre Flex-Center" id="DetalhesSobre">
            <TituloSection texto={'SOBRE O PRPROJETO'} />
            <article>
                <div className="descricoesSobre">
                    {informacoes.resumo}
                    <TituloSection texto={'PROBLEMA RESOLVIDO'} />
                    {informacoes.problemaResolvido}
                    <TituloSection texto={'DESAFIOS'} />
                    {informacoes.desafios}
                </div>
                <div className='cardsInformacoes Flex-Center'>
                    <SimpleCard tittle='Tempo' value={informacoes.tempo} />
                    <SimpleCard tittle='Responsivo' value={informacoes.responsivo ? "SIM" : 'NÃO'} />
                    <Link to={informacoes.repositorio}
                        target="_blank"
                        rel="noopener noreferrer">
                        <SimpleCard tittle='Repositorio' value={<GitHub />} />
                    </Link>
                    <SimpleCard tittle='Dificuldade' value={`${informacoes.dificuldade}/10`} />
                </div>
            </article>
        </section>
    );
}

export default DetalheSobre;