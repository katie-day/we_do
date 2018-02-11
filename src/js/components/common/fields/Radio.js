import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ input, id, meta: { touched, error }, label, className }) => {
    return (
        <div className={`radio ${className}`}>
            <input {...input} id={id} type="radio" />&nbsp;&nbsp;
            <label htmlFor={id}>
                {label}
                {touched &&
                    error && <span className="form__error"> {error}</span>}
            </label>
        </div>
    );
};

Radio.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Radio.defaultProps = {
    className: '',
};

export default Radio;
