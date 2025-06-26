import { projeto, resumoProjeto } from "./types";

const ObterProjetos = async (): Promise<Record<string, projeto>> => {
    const response = await fetch('/Projetos.json');
    const data: Record<string, projeto> = await response.json();
    return data;
};

class projetoController {
    async obterResumoDosProjetosDaCapa(): Promise<Map<string, resumoProjeto>> {
        // Obter os projetos
        const projetos: Record<string, projeto> = await ObterProjetos();

        // Criar o Map
        const resumoMap = new Map<string, resumoProjeto>();

        for (let index in projetos) {
            const Projeto: projeto = projetos[index]
            const resumo: resumoProjeto = {
                nome: Projeto.nome,
                type: Projeto.type,
                capa: Projeto.imagens[0]
            };

            // Adicionar o resumo ao Map
            resumoMap.set(index, resumo);
        }

        return resumoMap;
    }

    async obterProjetoCompleto(index: string) {
        // Obter os projetos
        const projetos: Record<string, projeto> = await ObterProjetos();

        // Acessa o projeto pela chave
        const projetoEspecifico: projeto | null = projetos[index] ?? null;

        return projetoEspecifico;
    }
}

export default projetoController;