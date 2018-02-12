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
                        <div className="header__logo-group">
                            <p className="header__logo header__menu-item">
                                <a href="https://daleandkatie.co.nz/">K / D</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    guest: PropTypes.object,
};

Header.defaultProps = {
    guest: {},
};

export default Header;

// <div className="width-4/5@medium  u-hidden@small">
//                         <ul className="list-inline header__menu-large">
//                             <li className="header__menu-item">
//                                 <a
//                                     href={`https://daleandkatie.co.nz/#/${id}#the-details`}
//                                 >
//                                     The details
//                                 </a>
//                             </li>
//                             {!guest.rsvp && (
//                                 <li className="header__menu-item">
//                                     <a
//                                         href={`https://daleandkatie.co.nz/#/${id}#rsvp`}
//                                     >
//                                         RSVP
//                                     </a>
//                                 </li>
//                             )}
//                             <li className="header__menu-item">
//                                 <a
//                                     href={`https://daleandkatie.co.nz/#/${id}#travel`}
//                                 >
//                                     Travel
//                                 </a>
//                             </li>
//                             <li className="header__menu-item">
//                                 <a
//                                     href={`https://daleandkatie.co.nz/#/${id}#accommodation`}
//                                 >
//                                     Accommodation
//                                 </a>
//                             </li>
//                             <li className="header__menu-item">
//                                 <a
//                                     href={`https://daleandkatie.co.nz/#/${id}#the-extras`}
//                                 >
//                                     The extras
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
