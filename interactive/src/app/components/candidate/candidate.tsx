import React, { useEffect, useState } from 'react';
import './candidate.scss';

import { CandidateOverall, CandidateOverallTitle, ICandidate } from '../../../types';
import { Common } from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { StorageService } from '../../../services';

interface Props {
    candidate: ICandidate;
    onChange: () => void;
}

export const Candidate: React.FC<Props> = ({ candidate, onChange }) => {
    const [showThumbs, setShowThumbs] = useState<boolean>(true);
    const [overall, setOverall] = useState<[CandidateOverall, CandidateOverallTitle]>(['thumbs-up', 'upvoted']);
    const [percentages, setPercentages] = useState<[number, number]>([50, 50]);
    const [upvoteSelection, setUpvoteSelection] = useState<boolean>(true);
    const [downvoteSelection, setDownvoteSelection] = useState<boolean>(false);

    useEffect(() => {
        if (candidate.votes.includes(StorageService.getSessionId())) setShowThumbs(false);
        else setShowThumbs(true);

        if (candidate.upvotes >= candidate.downvotes) setOverall(['thumbs-up', 'upvoted']);
        else setOverall(['thumbs-down', 'downvoted']);

        const totalVotes = candidate.upvotes + candidate.downvotes;
        const upvotesPercentage = Math.ceil((candidate.upvotes / totalVotes) * 100);
        const downvotesPercentage = 100 - upvotesPercentage;

        setPercentages([upvotesPercentage, downvotesPercentage]);
    }, [candidate]);

    function handleSeleccionChange(clicked: 'upvote' | 'downvote') {
        const isUpvote = clicked === 'upvote';
        console.log(isUpvote);
        setUpvoteSelection(isUpvote);
        setDownvoteSelection(!isUpvote);
    }

    function handleToogle() {
        setShowThumbs(!showThumbs);
    }

    function handleVote() {
        if (upvoteSelection) candidate.upvotes++;
        if (downvoteSelection) candidate.downvotes++;

        if (!candidate.votes.includes(StorageService.getSessionId()))
            candidate.votes.push(StorageService.getSessionId());

        const action = upvoteSelection ? 'upvoted' : 'downvoted';
        const message = `Candidate ${candidate.name} was ${action} `;

        Common.notify(upvoteSelection, message);

        onChange();
        setShowThumbs(false);
    }

    return (
        <>
            <div className="candidate" style={{ backgroundImage: `url(${candidate.imageUrl})` }}>
                <div className="candidate__content">
                    <div className="candidate__info">
                        <div
                            className={`candidate__info--overall-${overall[1]}`}
                            title={`Overall status: ${overall[1]}`}
                        >
                            <div className="icon-abosulte-wrapper">
                                <FontAwesomeIcon icon={['fas', overall[0] as IconName]} />
                            </div>
                        </div>
                        <div className="candidate-info">
                            <div className="candidate-info__name">
                                <h3>{candidate.name}</h3>
                            </div>
                            <div className="candidate-info__updated-at">
                                <h4>
                                    <b>{candidate.lastUpdate}</b> in {candidate.updateArea}
                                </h4>
                            </div>
                            <div className="candidate-info__description">
                                <p>{showThumbs ? candidate.description : 'Thank you for voting!'}</p>
                            </div>
                            <div className="candidate-info__actions">
                                {!showThumbs ? (
                                    <div className="candidate-info__actions--submit" onClick={() => handleToogle()}>
                                        <span>Vote again</span>
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            className={`candidate-info__actions--upvote ${
                                                upvoteSelection ? 'candidate-info__actions--active' : ''
                                            }`}
                                            onClick={() => handleSeleccionChange('upvote')}
                                        >
                                            <FontAwesomeIcon icon={['fas', 'thumbs-up']} />
                                        </div>
                                        <div
                                            className={`candidate-info__actions--downvote ${
                                                downvoteSelection ? 'candidate-info__actions--active' : ''
                                            }`}
                                            onClick={() => handleSeleccionChange('downvote')}
                                        >
                                            <FontAwesomeIcon icon={['fas', 'thumbs-down']} />
                                        </div>
                                        <div className="candidate-info__actions--submit" onClick={() => handleVote()}>
                                            <span>Vote now</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="candidate__poll">
                        <div
                            className="candidate__poll--upvotes candidate__poll--upvotes"
                            style={{ width: `${percentages[0]}%` }}
                        >
                            <FontAwesomeIcon icon={['fas', 'thumbs-up']} />
                            <h4>{`${percentages[0]} %`} </h4>
                        </div>

                        <div
                            className="candidate__poll--downvotes candidate__poll--downvotes"
                            style={{ width: `${percentages[1]}%` }}
                        >
                            <h4>{`${percentages[1]} %`}</h4>
                            <FontAwesomeIcon icon={['fas', 'thumbs-down']} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
