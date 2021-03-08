import React from 'react';
import './time-left.scss';

interface Props {}

export const TimeLeft: React.FC<Props> = () => {
    return (
        <>
            <div className="time-left__label">
                <span>CLOSING IN</span>
            </div>
            <div className="time-left__quantity">
                <div className="time-left-quantity__separator">
                    <div></div>
                    <div className="time-left-quantity__separator--triangle"></div>
                    <div></div>
                </div>
                <div className="time-left-quantity__duration">
                    <span>
                        <b>22</b> days
                    </span>
                </div>
            </div>
        </>
    );
};
