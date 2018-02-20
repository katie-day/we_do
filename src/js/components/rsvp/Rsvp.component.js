import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import RsvpHidden from './Rsvp.hidden.container';
import Loading from '../common/Loading';
import InputField from '../common/fields/Input';
import CheckboxField from '../common/fields/Checkbox';
import RadioField from '../common/fields/Radio';
import TextAreaField from '../common/fields/TextArea';

class RSVP extends Component {
    super(props) {}
    render() {
        const { handleSubmit, guest, isFormLoading, rsvpValue } = this.props;
        let nameLabel = "Guest's names";
        let namePlaceholder = 'eg. Natalie and Patrick Campbell';
        if (guest.size < 1) {
            nameLabel = 'Guest name';
            namePlaceholder = 'eg. Natalie Campbell';
        }
        return (
            <div className="section u-bg-color-sea u-text-center" id="rsvp">
                <div className="gutters gutters-1/2@small">
                    <div className="block-padded u-bg-color-white">
                        <h4>RSVP</h4>
                        <p>
                            Please RSVP by{' '}
                            <span className="u-text-bold">12 March 2018</span>
                        </p>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="grid-flex grid--col-spacing">
                                <Field
                                    name="q3_name"
                                    type="text"
                                    label={nameLabel}
                                    required={true}
                                    component={InputField}
                                    placeholder={namePlaceholder}
                                />

                                <Field
                                    name="q4_email"
                                    type="email"
                                    label="Email address"
                                    required={true}
                                    component={InputField}
                                />
                                <Field
                                    name="q7_postalAddress"
                                    type="text"
                                    label="Postal address"
                                    component={InputField}
                                />
                                <Field
                                    name="q13_anyComments"
                                    label="Any comments, dietary requirements, song requests etc?"
                                    component={TextAreaField}
                                />
                                <div className="form__field width-1/2@medium">
                                    <p className="u-mb-xxs u-text-bold">
                                        Can you attend:
                                    </p>
                                    <Field
                                        name="q5_rsvp"
                                        id="input_5_0"
                                        type="radio"
                                        label={`Yes, ${
                                            guest.size > 0 ? 'we' : 'I'
                                        } will be be there!`}
                                        component={RadioField}
                                        value="Yes"
                                    />
                                    <Field
                                        name="q5_rsvp"
                                        id="input_5_1"
                                        type="radio"
                                        value="No"
                                        label={`Sorry, ${
                                            guest.size > 0 ? 'we' : 'I'
                                        } can't attend the wedding.`}
                                        component={RadioField}
                                    />
                                    {guest.type === 'family' && (
                                        <Field
                                            name="q12_typeA12"
                                            label={`${
                                                guest.size > 0 ? 'We' : 'I'
                                            } would like to come to Sunday happy hour`}
                                            component={CheckboxField}
                                        />
                                    )}
                                    {rsvpValue === 'Yes' && (
                                        <Field
                                            name="q6_typeA"
                                            label={`${
                                                guest.size > 0 ? 'We' : 'I'
                                            } would like to take the complimentry bus to & from Takapuna`}
                                            component={CheckboxField}
                                        />
                                    )}
                                </div>

                                <div className="width-full">
                                    <button
                                        className={`btn btn--orange btn-block@small ${
                                            isFormLoading ? 'btn--disabled' : ''
                                        }`}
                                        type="submit"
                                    >
                                        {isFormLoading
                                            ? 'Submitting'
                                            : 'Submit'}
                                    </button>
                                    {isFormLoading && (
                                        <Loading className="loader--inline" />
                                    )}
                                </div>
                            </div>
                        </form>
                        <RsvpHidden />
                    </div>
                </div>
            </div>
        );
    }
}

RSVP.propTypes = {
    guest: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    isFormLoading: PropTypes.bool.isRequired,
};

RSVP.defaultProps = {
    guest: {},
};

export default RSVP;
