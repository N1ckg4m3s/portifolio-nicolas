import React, { useEffect, useReducer, useState } from 'react';

import NavBar from '../../components/navbar/navbar';
import FooterBar from "../../components/footer/footer"

/* MODUOLOS */
import DetalheHeader from './modules/Header/detalhesHeader';
import DetalheSobre from './modules/sobreOProjeto/detalhesSobre';
import DetalheTecnologiasUsadas from './modules/infoTecnologias/detalhesTecnologias';
import DetalheImagens from './modules/imagensProjeto/detalhesImagens';
import { useNavigation } from 'react-router-dom';
import { projeto } from '../../controller/types';
import projetoController from '../../controller/projetoController';

/*
export interface projeto {
    tecnologias: string[]; // Lista do nome das tecnologias usadas
    imagens: string[]; // caminho das imagens
}
*/
const DetalheProjetos: React.FC = () => {
    const [projetoMostrar, setProjeto] = useState<projeto>()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const projetoKey = params.get('projeto')
        const obterData = async () => {
            const projetoEspecifico: projeto = await new projetoController().obterProjetoCompleto(projetoKey!);
            setProjeto(projetoEspecifico)
        }
        if (projetoKey) obterData()
    }, [])

    if (!projetoMostrar) return <div></div>;

    return (
        <div className="MainContainer Flex-Center">
            <NavBar redirecionador={{
                "Sobre": "#DetalhesSobre",
                "Tecnologias": "#DetalhesTecnologias",
                "Imagens": "#DetalhesImagens",
            }} />
            <DetalheHeader titulo={projetoMostrar.nome} type={projetoMostrar.type} />
            <div className="containerProjeto">
                <DetalheSobre
                    desafios={projetoMostrar.descricao.desafios}
                    problemaResolvido={projetoMostrar.descricao.problemaResolvido}
                    resumo={projetoMostrar.descricao.resumo}
                    dificuldade={projetoMostrar.dificuldade}
                    repositorio={projetoMostrar.linkRepósitorio}
                    responsivo={projetoMostrar.responsivo}
                    tempo={projetoMostrar.tempo}
                />
                <DetalheTecnologiasUsadas
                    tecnologias={projetoMostrar.tecnologias}
                />
                <DetalheImagens
                    imagens={projetoMostrar.imagens}
                />
            </div>
            <FooterBar />
        </div>
    );
}

export default DetalheProjetos;