import React from 'react';
import { OpinionCard } from '../opinion-card/opinion-card';
import { TimeLeft } from '../time-left/time-left';
import './main-candidate.scss';

interface Props {}

export const MainCandidate: React.FC<Props> = () => {
    return (
        <section className="main-candidate">
            <div className="main-candidate__content-wrapper">
                <OpinionCard />
            </div>
            <div className="main-candidate__remaining-time">
                <TimeLeft />
            </div>
        </section>
    );
};
