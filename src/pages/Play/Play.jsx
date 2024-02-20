import React, { useState, useEffect } from 'react';
import WordDisplay from '../../components/WordDisplay/WordDisplay';
import Alphabet from '../../components/Alphabet/Alphabet';
import Potence from '../../components/Potence/Potence';
import { useNavigate } from 'react-router-dom';
import imageLost from '../../assets/Potence/7.jpg';

import './Play.scss'

const Play = () => {
    const [mysteryWord, setMysteryWord] = useState('');
    const [correctLetters, setCorrectLetters] = useState([]);
    const [incorrectLetters, setIncorrectLetters] = useState([]);
    const [gameWon, setGameWon] = useState(false);
    const [winnerName, setWinnerName] = useState('');
    const [gameLost, setGameLost] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchRandomWord = async () => {
            const response = await fetch('https://trouve-mot.fr/api/random');
            if (response.ok) {
                const data = await response.json();
                if (Array.isArray(data) && data[0]?.name) {
                    setMysteryWord(data[0].name.toUpperCase());
                } else {
                    console.error('Mot mystère non trouvé dans la réponse de l\'API');
                }
            } else {
                console.error(`HTTP error! status: ${response.status}`);
            }
        };

        fetchRandomWord();
    }, []);

    useEffect(() => {
        const allLettersGuessed = mysteryWord.split('').every((letter) => correctLetters.includes(letter));
        if (allLettersGuessed && mysteryWord) {
            setGameWon(true);
        }
    }, [correctLetters, mysteryWord]);
    useEffect(() => {
        if (incorrectLetters.length > 7) {
            setGameLost(true);
        }
    }, [incorrectLetters.length]);

    const handleLetterClick = (letter) => {
        if (gameWon || gameLost) return;

        if (mysteryWord.includes(letter)) {
            setCorrectLetters([...correctLetters, letter]);
        } else {
            setIncorrectLetters([...incorrectLetters, letter]);
        }
    };
    const updatePlayerScore = (playerName, score) => {
        const players = JSON.parse(localStorage.getItem('players')) || [];
        const playerIndex = players.findIndex(player => player.name === playerName);

        if (playerIndex >= 0) {
            players[playerIndex].score += score;
        } else {
            players.push({ name: playerName, score });
        }

        players.sort((a, b) => b.score - a.score);

        localStorage.setItem('players', JSON.stringify(players));
    };
    const handleNameSubmit = (event) => {
        event.preventDefault();
        const score = correctLetters.length - incorrectLetters.length;
        updatePlayerScore(winnerName, score);
        navigate('/statistiques');
    };

    const resetGame = () => {
        window.location.reload();
    };
    return (
        <>
            <div>
                <h1>Jeu du Pendu</h1>
                <WordDisplay mysteryWord={mysteryWord} correctLetters={correctLetters} />
                <Alphabet
                    selectedLetters={[...correctLetters, ...incorrectLetters]}
                    onLetterClick={handleLetterClick}
                />
            </div>
            <div>
                <Potence errorCount={incorrectLetters.length} />
            </div>
            {gameWon && (
                <div className="message-container game-won">
                    <h2>Félicitations ! Vous avez gagné !</h2>
                    <form onSubmit={handleNameSubmit}>
                        <input
                            type="text"
                            placeholder="Entrez votre nom"
                            value={winnerName}
                            onChange={(e) => setWinnerName(e.target.value)}
                        />
                        <button type="submit">Soumettre</button>
                    </form>
                </div>
            )}
            {gameLost && (
                <div className="message-container game-lost">
                    <img src={imageLost} />
                    <h2>Dommage ! Vous avez perdu...</h2>
                    <p>Le mot était : {mysteryWord}</p>
                    <button onClick={resetGame}>Rejouer !</button>
                </div>
            )}

        </>
    );
};

export default Play;
