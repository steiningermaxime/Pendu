import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import pendu from '../../assets/Potence/pendu.jpg';

function Home() {
    return (
        <div className="home">
            <h1>Bienvenue dans le Jeu du Pendu!</h1>
            <p>Découvrez le mot caché - une lettre à la fois. Mais faites attention à vos choix, chaque lettre incorrecte vous rapproche du pendu!</p>

            <div className="rules">
                <h2>Règles du Jeu</h2>
                <ul>
                    <li>Commencez par deviner une lettre du mot caché.</li>
                    <li>Pour chaque lettre incorrecte, une partie du pendu sera dessinée.</li>
                    <li>Le jeu se termine quand vous découvrez le mot entier ou le pendu est complètement dessiné.</li>
                </ul>
                <h2>Comptage de points</h2>
                <ul>
                    <li>Vous trouvez le mot du premier coup : 3 points.</li>
                    <li>Vous trouvez le mot du second coup : 2 points.</li>
                    <li>Vous trouvez le mot après le deuxième coup : 1 points.</li>
                </ul>
            </div>

            <div className="image-container">
                <img src="hangman-image.jpg" alt="Jeu du Pendu" />
            </div>

            <div className="start-game">
                <p>Prêt à jouer? Commencez une nouvelle partie et testez votre savoir!</p>
            </div>
            <div className="start-game">
                <Link to="/jouer" className="play-button">Jouer</Link>
            </div>
            <div>
                <img src={pendu} />
            </div>
        </div>
    );
}

export default Home;
