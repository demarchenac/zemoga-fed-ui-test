import React from 'react';
import './content-wrapper.scss';

interface Props {}

export const ContentWrapper: React.FC<Props> = ({ children }) => {
    return <div className="wrapper">{children}</div>;
};
