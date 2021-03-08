import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../utils';
import './navbar.scss';

interface Props {}

export const NavBar: React.FC<Props> = () => {
    return (
        <nav className="navbar navbar--transparent">
            <h1 className="navbar__title ">
                <NavLink to={ROUTES.CLIENT.HOME}>Rule of Thumb.</NavLink>
            </h1>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <NavLink to={ROUTES.CLIENT.PAST_TRIALS}>Past trials</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to={ROUTES.CLIENT.HOW_IT_WORKS}>How it works</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to={ROUTES.CLIENT.AUTHENTICATION}>Log In/Sign Up</NavLink>
                </li>
                <li className="navbar__item">
                    <FontAwesomeIcon icon={['fas', 'search']} />
                </li>
            </ul>
        </nav>
    );
};
