import React from 'react';
import normalizeText from '../../utils/format';
import './WordDisplay.scss';


const WordDisplay = ({ mysteryWord, correctLetters }) => {
    const displayLetters = mysteryWord.split('').map((letter) => {
        const normalizedLetter = normalizeText(letter);
        return correctLetters.some(correctLetter => normalizeText(correctLetter) === normalizedLetter) ? letter : '_';
    });

    return (
        <div className="word-display">
            {displayLetters.map((letter, index) => (
                <div key={index} className={`letter-box ${letter !== '_' ? '' : 'empty'}`}>
                    {letter}
                </div>
            ))}
        </div>
    );
};

export default WordDisplay;
