import React from 'react';
import PropTypes from 'prop-types';

const RsvpHidden = ({ values }) => {
    return (
        <div>
            <form
                action="https://submit.jotform.co/submit/72975928197881/"
                method="post"
                name="form_72975928197881"
                id="72975928197881"
                className="u-hidden"
            >
                <input type="hidden" name="formID" value="72975928197881" />
                <input
                    type="text"
                    id="input_3"
                    name="q3_name"
                    value={values.q3_name}
                />
                <input
                    type="text"
                    id="input_10"
                    name="q10_name2"
                    value={values.q10_name2}
                />
                <input
                    type="text"
                    id="input_11"
                    name="q11_name3"
                    value={values.q11_name3}
                />
                <input
                    type="text"
                    id="input_4"
                    name="q4_email"
                    value={values.q4_email}
                />

                <input
                    type="radio"
                    id="input_5_0"
                    name="q5_rsvp"
                    value="Yes! I'll be there"
                    checked={values.q5_rsvp === 'Yes'}
                />
                <input
                    type="radio"
                    id="input_5_1"
                    name="q5_rsvp"
                    value="Sorry, we can't attend"
                    checked={values.q5_rsvp === 'No'}
                />
                <input
                    type="checkbox"
                    id="input_6_0"
                    name="q6_typeA[]"
                    value="I will catch the bus"
                    checked={values.q6_typeA}
                />
                <input
                    type="text"
                    id="input_7"
                    name="q7_postalAddress"
                    value={values.q7_postalAddress}
                />
                <input
                    type="text"
                    id="input_13"
                    name="q13_anyComments"
                    value={values.q13_anyComments}
                />
                <input
                    type="checkbox"
                    id="input_12_0"
                    name="q12_typeA12[]"
                    value="I will come to sunday lunch"
                    checked={values.q12_typeA12}
                />

                <textarea id="input_9" name="q9_comments" cols="40" rows="6" />
                <div className="u-hidden">
                    <input type="text" name="website" value="" />
                </div>
                <button id="input_2" type="submit">
                    Submit
                </button>

                <input
                    type="hidden"
                    id="simple_spc"
                    name="simple_spc"
                    value="72975928197881"
                />
            </form>
        </div>
    );
};

RsvpHidden.propTypes = {
    values: PropTypes.object,
};

RsvpHidden.defaultProps = {
    values: {},
};

export default RsvpHidden;
