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
        console.log('rsvpValue: ', rsvpValue);
        return (
            <div className="section u-bg-color-sea u-text-center" id="rsvp">
                <div className="gutters">
                    <div className="block-padded u-bg-color-white">
                        <h4>RSVP</h4>
                        <p>
                            Please RSVP by{' '}
                            <span className="u-text-bold">02 March 2018</span>
                        </p>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="grid-flex grid--col-spacing">
                                <Field
                                    name="q3_name"
                                    type="text"
                                    label="Guest name"
                                    required={true}
                                    component={InputField}
                                />
                                {guest.size >= 1 && (
                                    <Field
                                        name="q10_name2"
                                        type="text"
                                        label="Guest name"
                                        component={InputField}
                                    />
                                )}
                                {guest.size === 2 && (
                                    <Field
                                        name="q11_name3"
                                        type="text"
                                        label="Guest name"
                                        component={InputField}
                                    />
                                )}
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
                                        value="Yes - attending"
                                    />
                                    <Field
                                        name="q5_rsvp"
                                        id="input_5_1"
                                        type="radio"
                                        value="No - not attending"
                                        label={`Sorry, ${
                                            guest.size > 0 ? 'we' : 'I'
                                        } can't attend the wedding.`}
                                        component={RadioField}
                                    />
                                    {rsvpValue === 'Yes - attending' && (
                                        <Field
                                            name="q6_typeA"
                                            type="checkbox"
                                            label={`${
                                                guest.size > 0 ? 'We' : 'I'
                                            } would like to take the bus to & from Takapuna`}
                                            component={CheckboxField}
                                            value="Yes! Take the bus"
                                        />
                                    )}
                                    {guest.type === 'family' && (
                                        <Field
                                            name="q12_typeA12"
                                            type="checkbox"
                                            label={`${
                                                guest.size > 0 ? 'We' : 'I'
                                            } would like to come to Sunday lunch`}
                                            component={CheckboxField}
                                            value="Yes! to sunday lunch"
                                        />
                                    )}
                                </div>
                                <Field
                                    name="q13_anyComments"
                                    label="Any comments, dietry requirements etc?"
                                    component={TextAreaField}
                                />

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
