import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    super(props) {}
    render() {
        const { guest } = this.props;
        const id = guest.id ? guest.id : '';
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
                                    <a href={`${id}#the-details`}>
                                        The details
                                    </a>
                                </li>
                                {!guest.rsvp && (
                                    <li className="header__menu-item">
                                        <a href={`${id}#rsvp`}>RSVP</a>
                                    </li>
                                )}
                                <li className="header__menu-item">
                                    <a href={`${id}#travel`}>Travel</a>
                                </li>
                                <li className="header__menu-item">
                                    <a href={`${id}#accommodation`}>
                                        Accommodation
                                    </a>
                                </li>

                                <li className="header__menu-item">
                                    <a href={`${id}#the-extras`}>The extras</a>
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
