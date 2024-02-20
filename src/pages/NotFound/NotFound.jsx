import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
    return (
        <div className="not-found-container">
            <h1>404 - Page Non Trouvée</h1>
            <p>Désolé, la page que vous recherchez semble introuvable.</p>
            <Link to="/" className="home-link">Retourner à l'accueil</Link>
        </div>
    );
}

export default NotFound;
