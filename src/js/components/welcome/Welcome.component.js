import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getWindowHeight } from '../../utils';

class Welcome extends Component {
    super(props) {}

    renderNames() {
        const { guest } = this.props;
        const names = guest.names;
        let punctuation = [' '];
        if (guest.size === 1) punctuation = [' and '];
        if (guest.size === 2) punctuation = [', ', ' and '];

        return names.map((name, index) => (
            <span key={`key-${name}`}>
                {name}
                {punctuation[index]}
            </span>
        ));
    }

    render() {
        const { guest } = this.props;
        const windowHeight = getWindowHeight();
        const style = {
            minHeight: windowHeight - 60,
        };
        return (
            <div className="welcome u-text-center t-plum" style={style}>
                <div className="welcome__background" />
                <div className="gutters welcome__table-cell">
                    {guest.id && (
                        <h2 className="welcome__guest u-current-text-color">
                            {this.renderNames()}{' '}
                            {guest.lastname && guest.lastname}
                        </h2>
                    )}
                    <h1 className="u-current-text-color">Katie + Dale</h1>
                    <h3 className="welcome__subtitle u-current-text-color u-text-bold">
                        are getting married
                    </h3>
                    <div className="line-length-large u-auto">
                        <h3 className="u-current-text-color">
                            and together with our families, we would like to
                            invite you to dine, dance and enjoy this special day
                            with us.
                        </h3>
                        <p className="u-hidden@medium">
                            <a
                                href="#rsvp"
                                className="btn btn--blush btn--block"
                            >
                                RSVP
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

Welcome.propTypes = {
    guest: PropTypes.object,
};

Welcome.defaultProps = {
    guest: {},
};

export default Welcome;
