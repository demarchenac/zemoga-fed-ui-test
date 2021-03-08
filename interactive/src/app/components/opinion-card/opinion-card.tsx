import React from 'react';
import './opinion-card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {}

export const OpinionCard: React.FC<Props> = () => {
    return (
        <>
            <div className="opinion-card">
                <div className="opinion-card__content-wraper">
                    <div className="opinion-card__content">
                        <span className="opinion-card-content__question">What's your opinion on?</span>
                        <h2 className="opinion-card-content__character">Pope Francis?</h2>
                        <p className="opinion-card-content__summary">
                            He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector?
                            (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
                        </p>

                        <p className="opinion-card-content__related">
                            <FontAwesomeIcon icon={['fab', 'wikipedia-w']} />
                            <a href="/">More information</a>
                        </p>

                        <h3 className="opinion-card-content__callout">What's your veredict?</h3>
                    </div>
                </div>
            </div>
            <div className="opinion-card__actions">
                <div className="opinion-card__actions--upvote" title="up vote">
                    <FontAwesomeIcon icon={['fas', 'thumbs-up']} />
                </div>
                <div className="opinion-card__actions--downvote" title="down vote">
                    <FontAwesomeIcon icon={['fas', 'thumbs-down']} />
                </div>
            </div>
        </>
    );
};
