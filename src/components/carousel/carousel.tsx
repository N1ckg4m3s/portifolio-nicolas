import React, { useEffect, useRef, useState } from "react";
import './carousel.css';

/* TODOS OS ICONES DE TECNOLOGIA */
import { ReactComponent as Css } from '../../assets/iconsTecnologias/Css.svg';
import { ReactComponent as Express } from '../../assets/iconsTecnologias/Express.svg';
import { ReactComponent as Figma } from '../../assets/iconsTecnologias/Figma.svg';
import { ReactComponent as Flutter } from '../../assets/iconsTecnologias/Flutter.svg';
import { ReactComponent as Git } from '../../assets/iconsTecnologias/Git.svg';
import { ReactComponent as Html } from '../../assets/iconsTecnologias/Html.svg';
import { ReactComponent as Js } from '../../assets/iconsTecnologias/Js.svg';
import { ReactComponent as Mongo } from '../../assets/iconsTecnologias/Mongo.svg';
import { ReactComponent as Node } from '../../assets/iconsTecnologias/Node.svg';
import { ReactComponent as Postgree } from '../../assets/iconsTecnologias/Postgree.svg';
import { ReactComponent as Python } from '../../assets/iconsTecnologias/Python.svg';
import { ReactComponent as React_icon } from '../../assets/iconsTecnologias/React.svg';
import { ReactComponent as SqlSer } from '../../assets/iconsTecnologias/SqlSer.svg';
import { ReactComponent as Ts } from '../../assets/iconsTecnologias/Ts.svg';
import { ReactComponent as Vsc } from '../../assets/iconsTecnologias/Vsc.svg';
import { ReactComponent as Vue } from '../../assets/iconsTecnologias/Vue.svg';
import { carouselProps, iconsMap, resumoProjeto } from "../../controller/types";

const iconesMap: iconsMap = new Map([
    ['CSS', <Css />],
    ['Express.js', <Express className="SvgWhite-fill" />],
    ['Figma', <Figma />],
    ['Flutter', <Flutter />],
    ['Git', <Git />],
    ['HTML', <Html />],
    ['JavaScript', <Js />],
    ['MongoDB', <Mongo />],
    ['Node.js', <Node />],
    ['PostgreSQL', <Postgree />],
    ['Python', <Python />],
    ['React', <React_icon />],
    ['SQL Server', <SqlSer className="SvgWhite-fill" />],
    ['TypeScript', <Ts />],
    ['V.S.Code', <Vsc />],
    ['Vue.js', <Vue />],
]);

const Carousel: React.FC<carouselProps> = ({ type, iconesEspecificos, dadosCard, build, maxheight }) => {
    const [ShouldAnimate, setShouldAnimate] = useState(false);
    const [IconsToRender, setIconsToRender] = useState<string[]>([]);
    const [CardsToRender, setCardsToRender] = useState<React.ReactNode[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const calculateItemsPerRow = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const itemWidth = type === 'icons' ? 150 : maxheight; // Defina a largura aproximada do item
            const itemsPerRow = Math.floor(containerWidth / itemWidth); // Quantidade de itens por linha
            return itemsPerRow;
        }
        return 1;
    };

    useEffect(() => {
        const updateItems = () => {
            const itemsPerRow = calculateItemsPerRow();
            const icons = iconesEspecificos?.length ? iconesEspecificos : Array.from(iconesMap.keys());
            const cards = dadosCard ? Array.from(dadosCard.entries()).map((item, _) => {
                const index: string = item[0];
                const projeto: resumoProjeto = item[1];
                return build ? build(projeto, index) : (
                    <div key={index} className="cardTeste"> - == ERROR == - </div>
                );
            }) : [];

            // Verifica se a quantidade de itens excede o número de itens que cabem na tela
            const itemsToCheck = type === 'icons' ? icons.length : cards.length;
            if (itemsToCheck > itemsPerRow) {
                setShouldAnimate(true);
                setIconsToRender([...icons, ...icons]); // Duplicar ícones ou cards
                setCardsToRender([...cards, ...cards]); // Duplicar também os cards
            } else {
                setShouldAnimate(false);
                setIconsToRender(icons);
                setCardsToRender(cards);
            }
        };

        // Calcular a quantidade de itens na primeira renderização
        updateItems();

        // Adicionar um ouvinte de resize para recalcular a quantidade de itens
        window.addEventListener('resize', updateItems);

        // Limpar o ouvinte de resize quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', updateItems);
        };
    }, [type, iconesEspecificos, dadosCard, build]);

    return (
        <div className="carouselContainer Flex-Center" ref={containerRef} style={{ maxHeight: maxheight }}>
            <div className={`carouselArticle ${ShouldAnimate ? 'courselAnimated' : ''}`}>
                {type === 'icons' ? (
                    <>
                        {IconsToRender.map((iconKey, index) => (
                            <div key={index} className="iconItem iconHoverAnimation Flex-Center" style={{ maxHeight: maxheight }}>
                                {iconesMap.get(iconKey)}
                                <div className="iconHoverName" key={index}>{iconKey}</div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {CardsToRender}
                    </>
                )}
            </div>
        </div>
    );
};

export default Carousel;
