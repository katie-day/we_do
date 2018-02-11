import React from 'react';
import PropTypes from 'prop-types';
import loading from '../../../svg/loading.svg';

const Loading = ({ className }) => {
    return (
        <div className={`loader ${className}`}>
            <img src={loading} className="loader__icon" alt="Loading..." />
        </div>
    );
};

Loading.propTypes = {
    className: PropTypes.string,
};

Loading.defaultProps = {
    className: '',
};

export default Loading;
