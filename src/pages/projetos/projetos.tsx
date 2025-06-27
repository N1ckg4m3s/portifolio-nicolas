import './projetos.css';

import { useEffect, useRef, useState } from "react";
import { resumoProjeto } from "../../controller/types";
import TituloSection from "../../components/tituloSection/tituloSection";
import projetoController, { projetosPaginados } from "../../controller/projetoController";
import CardProjetoMain from "../../components/cardProjetoMain/cardProjetoMain";
import NavBar from "../../components/navbar/navbar";

const ProjetosPaginados: React.FC = () => {
    const [projetos, SetProjetos] = useState<Map<string, resumoProjeto>>();
    const [pagina, setPagina] = useState<number>(1);
    const [paginaLimite, setPaginaLimite] = useState<number>();
    const [itemsPerRow, setItemsPerRow] = useState<number>(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const numeroDeRows: number = 5;

    // 👀 Atualiza itemsPerRow automaticamente com ResizeObserver
    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const itemWidth = 150;
                const newItemsPerRow = Math.floor(containerWidth / itemWidth) || 1;
                setItemsPerRow(newItemsPerRow);
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);

    // 🔁 Atualiza os projetos sempre que itemsPerRow ou página mudarem
    useEffect(() => {
        const obterDados = async () => {
            const numeroDeProjetosPorPagina: number = itemsPerRow * numeroDeRows;
            const projetosNaPagina: projetosPaginados =
                await new projetoController().obterProjetosPorPagina(numeroDeProjetosPorPagina, pagina);

            setPaginaLimite(projetosNaPagina.numeroDePaginas);
            SetProjetos(projetosNaPagina.projetosNaPagina);
        };

        obterDados();
    }, [itemsPerRow, pagina]);

    return (
        <div className="MainContainer Flex-Center ProjetosContainer">
            <NavBar />
            <TituloSection texto={'Projetos'} />
            <div
                className="containerProjeto gradeProjetos"
                style={{ "--quantidade": `${itemsPerRow}` } as React.CSSProperties}
                ref={containerRef}
            >
                {projetos ? (
                    Array.from(projetos.entries()).map(([key, item], index) => (
                        <CardProjetoMain
                            key={`${key}-${index}`}
                            click={true}
                            index={key}
                            capa={item.capa}
                            nome={item.nome}
                            type={item.type}
                        />
                    ))
                ) : (
                    <div>Carregando projetos...</div>
                )}
            </div>
        </div>
    );
};

export default ProjetosPaginados;
