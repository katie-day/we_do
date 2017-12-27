import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    super(props) {}
    render() {
        const { rsvp } = this.props;
        return (
            <div className="header" id="header">
                <div className="gutters">
                    <div className="grid-flex">
                        <div className="header__logo-group width-1/5@medium">
                            <p className="header__logo">K / D</p>
                        </div>
                        <div className="width-4/5@medium  u-hidden@small">
                            <ul className="list-inline header__menu-large">
                                <li className="header__menu-item">
                                    <a href="#the-details">The details</a>
                                </li>
                                {!rsvp && (
                                    <li className="header__menu-item">
                                        <a href="#rsvp">RSVP</a>
                                    </li>
                                )}
                                <li className="header__menu-item">
                                    <a href="#travel">Travel & accommodation</a>
                                </li>

                                <li className="header__menu-item">
                                    <a href="#the-extras">The extras</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    rsvp: PropTypes.bool,
};

Header.defaultProps = {
    rsvp: true,
};

export default Header;
