import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ input, meta: { touched, error }, label, className }) => {
    return (
        <div className="checkbox">
            <label>
                <input
                    {...input}
                    id={input.name}
                    type="checkbox"
                    className="checkbox__input"
                />
                <span className="label">{label}</span>
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
};

export default Checkbox;
