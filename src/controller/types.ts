export interface carouselProps {
    type: 'icons' | 'card' | 'images'; // Tipo de conteúdo (ícones ou cards)
    images?: string[]; // Caminho das imagens
    iconesEspecificos?: string[]; // Lista de ícones específicos (se fornecida)
    dadosCard?: Map<string, resumoProjeto>; // Dados para construir os cards
    build?: (item: resumoProjeto, index: string, i: number) => React.ReactNode; // Função para construir cards
    maxheight: number; // tamanho que o component vai ter
}

export type iconsMap = Map<string, React.ReactNode>;

export interface descricaoProjeto {
    resumo: string; // Descrição rapida do projeto
    problemaResolvido: string; // problema que o projeto resolve
    desafios: string; // desafios resolvidos durante o projeto
}

export interface projeto {
    nome: string; // Nome do projeto
    type: 'Full-Stack' | 'Front-end' | 'Back-end' | 'Mobile', // Tipo do sistema
    descricao: descricaoProjeto; // Descrição do projeto
    tempo: string; // Tempo de duração do projeto
    responsivo: boolean; // site é ou não responsivo
    dificuldade: string; // nivel de Dioficuldade do projeto de 0 a 10
    linkRepósitorio: string; // Url para o respositorio do projeto
    tecnologias: string[]; // Lista do nome das tecnologias usadas
    imagens: string[]; // caminho das imagens
}

export interface resumoProjeto {
    nome: string; // Nome do projeto
    type: 'Full-Stack' | 'Front-end' | 'Back-end' | 'Mobile', // Tipo do sistema
    capa: string; // caminho da imagem
}

export interface cardResumoProjeto extends resumoProjeto {
    index: string,
    click: boolean
}
export interface escolaridadeProps {
    icon: React.ReactNode,
    side: boolean,
    tempo: string,
    title: string,
    subtitle?: string,
}
export interface contatoProps {
    icon: React.ReactNode,
    title: string,
    contato: string,
}