import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    input,
    meta: { touched, error },
    label,
    type,
    placeholder,
    className,
    required,
}) => {
    return (
        <div className={`form__field width-1/2@medium ${className}`}>
            <label
                htmlFor={input.name}
                className={`label ${error && touched ? 'label--error' : ''}`}
            >
                <span className="form__label">
                    {label}
                    {required && <span>*</span>}
                </span>
                <input
                    {...input}
                    id={`id_${input.name}`}
                    type={type}
                    placeholder={placeholder}
                    className="input"
                    autoCapitalize={type === 'email' ? 'off' : 'words'}
                />
                {touched &&
                    error && <span className="form__error">{error}</span>}
            </label>
        </div>
    );
};

Input.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool,
};

Input.defaultProps = {
    placeholder: '',
    className: '',
    required: false,
};

export default Input;
