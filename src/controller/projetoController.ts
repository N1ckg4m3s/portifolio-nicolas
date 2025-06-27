import { projeto, resumoProjeto } from "./types";

const ObterProjetos = async (): Promise<Record<string, projeto>> => {
    const response = await fetch('/Projetos.json');
    const data: Record<string, projeto> = await response.json();
    return data;
};

const projetosEmDestaque: string[] = [
    'teste3',
    'teste2'
]

export interface projetosPaginados {
    paginaAtual: number,
    projetosNaPagina: Map<string, resumoProjeto>,
    numeroDePaginas: number
}
class projetoController {
    async obterResumoDosProjetosDaCapa(): Promise<Map<string, resumoProjeto>> {
        // Obter os projetos
        const projetos: Record<string, projeto> = await ObterProjetos();

        // Criar o Map
        const resumoMap = new Map<string, resumoProjeto>();

        for (let index in projetos) {
            if (projetosEmDestaque.includes(index)) {
                const Projeto: projeto = projetos[index]
                const resumo: resumoProjeto = {
                    nome: Projeto.nome,
                    type: Projeto.type,
                    capa: Projeto.imagens[0]
                };

                // Adicionar o resumo ao Map
                resumoMap.set(index, resumo);
            }
        }

        return resumoMap;
    }

    async obterProjetoCompleto(index: string): Promise<projeto> {
        // Obter os projetos
        const projetos: Record<string, projeto> = await ObterProjetos();

        // Acessa o projeto pela chave
        const projetoEspecifico: projeto | null = projetos[index] ?? null;

        return projetoEspecifico;
    }

    async obterQuantidadeDeProjetos(): Promise<number> {
        /* obtem todos os projetos no arquivo */
        const projetos: Record<string, projeto> = await ObterProjetos();
        /* obtem a quantidade de projetos */
        const quantidadeDeProjetos: number = Object.entries(projetos).length;

        return quantidadeDeProjetos;
    }

    /**
     * @param {number} quantidadePorPagina # valor inteiro que representa a quantidade de itens na pagina
     * @param {number} page # valor inteiro com inicial 1 que representa a pagina atual do usuario
    */
    async obterProjetosPorPagina(quantidadePorPagina: number, page: number): Promise<projetosPaginados> {
        /* obtem todos os projetos no arquivo */
        const projetos: Record<string, projeto> = await ObterProjetos();

        /* obtem a quantidade de projetos */
        const quantidadeDeProjetos: number = Object.entries(projetos).length;

        /* calcula a quantidade de paginas com base na quantidade de projetos por pagina */
        const numeroDePaginas: number = Math.max(Math.floor(quantidadeDeProjetos / quantidadePorPagina), 1)

        /* calcula o indice minimo / maximo para obter os projetos da pagina */
        const indexMin: number = Math.max(0, (page - 1) * quantidadePorPagina)
        const indexMax: number = Math.min(page * quantidadePorPagina, quantidadeDeProjetos);

        /* transforma a lista de um map para array */
        const projetosLista = Object.entries(projetos);

        /* obtem os projetos na 'faixa' de quantidade */
        const projetosNaFaixaDeEspaco = projetosLista.splice(indexMin, indexMax);


        let projetosNaPagina = new Map<string, resumoProjeto>();

        for (let index in projetosNaFaixaDeEspaco) {
            const indexProjeto = projetosNaFaixaDeEspaco[index][0]
            const Projeto: projeto = projetosNaFaixaDeEspaco[index][1]

            const resumo: resumoProjeto = {
                nome: Projeto.nome,
                type: Projeto.type,
                capa: Projeto.imagens[0]
            };

            // Adicionar o resumo ao Map
            projetosNaPagina.set(indexProjeto, resumo);
        }
        return {
            numeroDePaginas,
            paginaAtual: page,
            projetosNaPagina
        }
    }
}

export default projetoController;