import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
    return (
        <div className="footer section u-text-center t-green" id="footer">
            <div className="gutters">
                <h4 className="u-mb-l u-current-text-color">
                    We can't wait to see you!
                </h4>
                <h5 className="u-mb-s u-current-text-color">
                    Any questions? Contact us
                </h5>
                <p className="u-current-text-color">
                    <a
                        href="mailto:katie.and.dale.stringer@gmail.com"
                        className="u-link-color-white"
                    >
                        katie.and.dale.stringer@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
