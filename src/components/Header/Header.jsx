import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

function Header() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header>
            <nav>
                <ul>
                    <li className={isActive('/') ? 'active' : ''}>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className={isActive('/jouer') ? 'active' : ''}>
                        <Link to="/jouer">Jouer</Link>
                    </li>
                    <li className={isActive('/statistiques') ? 'active' : ''}>
                        <Link to="/statistiques">Statistiques</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
