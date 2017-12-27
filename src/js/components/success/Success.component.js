import React from 'react';
import Header from '../common/header/Header.component';
import { getWindowHeight } from '../../utils';

const Success = () => {
    const windowHeight = getWindowHeight();
    const style = {
        minHeight: windowHeight - 50,
    };
    return (
        <div>
            <Header rsvp={true} />
            <div className="welcome u-text-center t-plum" style={style}>
                <div className="welcome__background" />
                <div className="gutters welcome__table-cell">
                    <h4 className="u-current-text-color">
                        Thanks for your rsvp
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Success;
