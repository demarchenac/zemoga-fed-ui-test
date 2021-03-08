import React, { useEffect, useState } from 'react';
import './candidate-gallery.scss';

import { Candidate } from '../candidate/candidate';
import { ICandidate } from '../../../types';
import { StorageService } from '../../../services';
import { NewCandidate } from '../new-candidate/new-candidate';

interface Props {}

export const CandidateGallery: React.FC<Props> = () => {
    const [candidates, setCandidates] = useState<ICandidate[]>([]);

    useEffect(() => {
        setCandidates(StorageService.getCandidates());
    }, []);

    function renderCandidates() {
        return candidates.map((candidate) => (
            <Candidate
                candidate={candidate}
                key={candidate.id}
                onChange={() => {
                    handleCandidateChange();
                }}
            />
        ));
    }

    function handleCandidateChange() {
        StorageService.setCandidates(candidates);
        const _candidates: ICandidate[] = StorageService.getCandidates();
        setCandidates(_candidates);
    }

    return (
        <section className="votes">
            <h2 className="votes__title">Votes</h2>
            <div className="votes__gallery">{renderCandidates()}</div>
            <div className="votes__new-candiate">
                <NewCandidate />
            </div>
        </section>
    );
};
