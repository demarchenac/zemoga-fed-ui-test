import React from 'react';
import './new-candidate.scss';

interface Props {}

export const NewCandidate: React.FC<Props> = () => {
    return (
        <>
            <div className="new-candidate__content">
                <h3 className="new-candidate__title">Is there anyone else you would want us to add?</h3>
                <div className="new-candidate__submit" title="Add a new candidate!">
                    <span>Submit a name</span>
                </div>
            </div>
        </>
    );
};
