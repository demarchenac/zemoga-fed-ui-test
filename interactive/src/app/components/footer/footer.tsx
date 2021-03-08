import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.scss';

interface Props {}

export const Footer: React.FC<Props> = () => {
    return (
        <>
            <footer className="footer">
                <hr className="footer__divider" />
                <div className="footer__contact">
                    <ul className="footer__contact--documents">
                        <li>
                            <a href="/">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                    <ul className="footer__contact--social">
                        <li>
                            <FontAwesomeIcon icon={['fas', 'twitter']} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas', 'facebook-square']} />
                        </li>
                        <li>Follow Us</li>
                    </ul>
                </div>
            </footer>
        </>
    );
};
