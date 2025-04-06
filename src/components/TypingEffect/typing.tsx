import React, { useState, useEffect } from 'react';
import './typing.css'


const TypingEffect: React.FC = () => {
    const texts = ["Full-Stack", "Front-End", "Back-End"]; // Palavras que vão ser digitadas e apagadas
    const [currentText, setCurrentText] = useState(''); // Texto atual que está sendo mostrado
    const [textIndex, setTextIndex] = useState(0); // Índice das palavras
    const [isDeleting, setIsDeleting] = useState(false); // Flag para saber se estamos apagando ou digitando
    const [currentCharIndex, setCurrentCharIndex] = useState(0); // Índice do caractere atual

    const typingSpeed = 150; // Velocidade de digitação
    const deletingSpeed = 100; // Velocidade de apagamento
    const pauseTime = 1250; // Pausa após terminar de digitar a palavra

    useEffect(() => {
        const handleTyping = setTimeout(() => {
            const currentWord = texts[textIndex];

            // Se estamos apagando, diminuímos o índice de caracteres
            if (isDeleting) {
                setCurrentText(currentWord.substring(0, currentCharIndex - 1));
                setCurrentCharIndex(prev => prev - 1);
            } else {
                // Se estamos digitando, aumentamos o índice de caracteres
                setCurrentText(currentWord.substring(0, currentCharIndex + 1));
                setCurrentCharIndex(prev => prev + 1);
            }

            // Se o texto foi completamente digitado, vamos começar a apagar depois de um tempo
            if (!isDeleting && currentCharIndex === currentWord.length) {
                setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }

            // Se o texto foi completamente apagado, vamos passar para a próxima palavra
            if (isDeleting && currentCharIndex === 0) {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length); // Alterna para a próxima palavra (e volta ao início)
            }
        }, isDeleting ? deletingSpeed : typingSpeed); // Define a velocidade com base no estado (digitando ou apagando)

        return () => clearTimeout(handleTyping); // Limpa o timeout ao desmontar o componente
    }, [currentCharIndex, isDeleting, textIndex, currentText]);

    return (
        <div className="typing-container">
            <span className="typing-text">{currentText}</span>
        </div>
    );
};

export default TypingEffect;
