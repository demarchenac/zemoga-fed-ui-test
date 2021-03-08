import React, { useEffect, useState } from 'react';
import './candidate-gallery.scss';

import { Candidate } from '../candidate/candidate';
import { ICandidate } from '../../../types';
import { StorageService } from '../../../services';

interface Props {}

export const CandidateGallery: React.FC<Props> = () => {
    const [candidates, setCandidates] = useState<ICandidate[]>([]);

    useEffect(() => {
        handleCandidateChange();
    }, []);

    function renderCandidates() {
        return candidates.map((candidate) => (
            <Candidate
                candidate={candidate}
                key={candidate.id}
                onChange={() => {
                    handleCandidateChange(true);
                }}
            />
        ));
    }

    function handleCandidateChange(update: boolean = false) {
        if (update) StorageService.setCandidates(candidates);
        const _candidates: ICandidate[] = StorageService.getCandidates();
        console.log('kelly');
        console.log(_candidates);
        setCandidates(_candidates);
    }

    return (
        <section className="votes">
            <h2 className="votes__title">Votes</h2>
            <div className="votes__gallery">{renderCandidates()}</div>

            <div className="votes__new-candiate">
                <div className="new-candidate__content">
                    <h3 className="new-candidate__title">Is there anyone else you would want us to add?</h3>
                    <div className="new-candidate__submit">
                        <span>Submit a name</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
