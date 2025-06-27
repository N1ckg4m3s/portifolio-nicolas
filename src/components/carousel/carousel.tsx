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
import { ReactComponent as ReactIcon } from '../../assets/iconsTecnologias/React.svg';
import { ReactComponent as SqlSer } from '../../assets/iconsTecnologias/SqlSer.svg';
import { ReactComponent as Ts } from '../../assets/iconsTecnologias/Ts.svg';
import { ReactComponent as Vsc } from '../../assets/iconsTecnologias/Vsc.svg';
import { ReactComponent as Vue } from '../../assets/iconsTecnologias/Vue.svg';
import { carouselProps, iconsMap } from "../../controller/types";

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
    ['React', <ReactIcon />],
    ['SQL Server', <SqlSer className="SvgWhite-fill" />],
    ['TypeScript', <Ts />],
    ['V.S.Code', <Vsc />],
    ['Vue.js', <Vue />],
]);

const Carousel: React.FC<carouselProps> = ({ type, iconesEspecificos, dadosCard, build, maxheight, images }) => {
    const [ShouldAnimate, setShouldAnimate] = useState(false);
    const [imagesToRender, setImagesToRender] = useState<string[]>([]);
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

            // ===== ICONES =====
            const icons = iconesEspecificos?.length ? iconesEspecificos : Array.from(iconesMap.keys());
            const shouldDuplicateIcons = icons.length > itemsPerRow;
            setIconsToRender(shouldDuplicateIcons ? [...icons, ...icons] : icons);

            // ===== IMAGENS =====
            const imagens = images?.length ? images : Array.from(iconesMap.keys());
            const shouldDuplicateImages = imagens.length > itemsPerRow;
            setImagesToRender(shouldDuplicateImages ? [...imagens, ...imagens] : imagens);

            // ===== CARDS =====
            let cards: React.ReactNode[] = [];

            let shouldDuplicateCards: boolean = false
            if (dadosCard) {
                const entries = Array.from(dadosCard.entries());
                shouldDuplicateCards = entries.length > itemsPerRow;
                const duplicatedEntries = shouldDuplicateCards ? [...entries, ...entries] : entries;

                cards = duplicatedEntries.map(([index, projeto], i) => {
                    return build
                        ? build(projeto, index, i)
                        : <div key={`card-erro-${index}-${i}`} className="cardTeste"> - == ERROR == - </div>;
                });

                setCardsToRender(cards);
            } else {
                setCardsToRender([]);
            }
            setShouldAnimate(
                (type === 'icons' && shouldDuplicateIcons) ||
                (type === 'images' && shouldDuplicateImages) ||
                (type === 'card' && shouldDuplicateCards));
        };

        // Primeira renderização
        updateItems();

        // Recalcular ao redimensionar a tela
        window.addEventListener('resize', updateItems);

        return () => {
            window.removeEventListener('resize', updateItems);
        };
    }, [type, iconesEspecificos, dadosCard, build, images]);


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
                ) :
                    type === 'images' ? (
                        <>
                            {imagesToRender.map((imgUrl, index) => (
                                <img className="curselImage" key={index} src={require(`../../assets/Images/${imgUrl}`)} alt="" />
                            ))}
                        </>
                    ) :
                        (
                            <>
                                {CardsToRender}
                            </>
                        )}
            </div>
        </div >
    );
};

export default Carousel;
