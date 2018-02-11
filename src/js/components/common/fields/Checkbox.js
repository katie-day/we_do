import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ input, meta: { touched, error }, label, className }) => {
    return (
        <div className={`checkbox ${className}`}>
            <input {...input} id={input.name} type="checkbox" />&nbsp;&nbsp;
            <label htmlFor={input.name}>
                {label}
                {touched &&
                    error && <span className="form__error"> {error}</span>}
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Checkbox.defaultProps = {
    className: '',
};

export default Checkbox;
