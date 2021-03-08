import React, { useState } from 'react';
import './callout.scss';

interface Props {}

export const Callout: React.FC<Props> = () => {
    const [isHidden, setHidden] = useState<boolean>(false);

    return isHidden ? (
        <></>
    ) : (
        <section className="callout">
            <div className="callout__content">
                <div className="callout-content__title">
                    <div className="callout-content-title__sub-heading">
                        <h3>Speak out. Be heard.</h3>
                    </div>
                    <div className="callout-content-title__heading">
                        <h3>Be counted</h3>
                    </div>
                </div>
                <div className="callout-content__description">
                    <p>
                        Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out
                        and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public
                        report.
                    </p>
                </div>
                <div className="callout-content__close" onClick={() => setHidden(true)} title="close">
                    <span>&#10005;</span>
                </div>
            </div>
        </section>
    );
};
