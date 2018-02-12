import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ input, id, meta: { touched, error }, label }) => {
    return (
        <div className="radio">
            <label>
                <input
                    {...input}
                    id={id}
                    type="radio"
                    className="radio__input"
                />
                <span className="label">{label}</span>
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
};

export default Radio;
