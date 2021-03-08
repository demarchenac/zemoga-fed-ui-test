import React from 'react';
import { Callout, CandidateGallery, ContentWrapper, Footer, MainCandidate } from '../../components';

interface Props {}

export const Home: React.FC<Props> = () => {
    return (
        <>
            <MainCandidate></MainCandidate>
            <ContentWrapper>
                <Callout />
                <CandidateGallery />
                <Footer />
            </ContentWrapper>
        </>
    );
};
