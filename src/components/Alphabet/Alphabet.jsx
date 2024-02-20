import React from 'react';
import './Alphabet.scss'

const Alphabet = ({ selectedLetters, onLetterClick }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return (
        <div className="alphabet">
            {alphabet.split('').map((letter) => (
                <button
                    key={letter}
                    onClick={() => onLetterClick(letter)}
                    disabled={selectedLetters.includes(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default Alphabet;
