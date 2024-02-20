import React, { useState, useEffect } from 'react';

const Stats = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const loadedPlayers = JSON.parse(localStorage.getItem('players')) || [];
        loadedPlayers.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
        setPlayers(loadedPlayers);
    }, []);

    return (
        <div>
            <h1>Classement des Joueurs</h1>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player.name} - {player.score} points</li>
                ))}
            </ul>
        </div>
    );
};

export default Stats;
