import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { pendingFormSubmission } from '../../actions';
import Component from './Rsvp.component';

const formName = 'rsvp';

const validate = values => {
    const errors = {};

    const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.q3_name) {
        errors.q3_name = 'Please enter your full name';
    }

    if (!values.q4_email) {
        errors.q4_email = 'Please enter your email address';
    } else if (!validateEmail.test(values.q4_email)) {
        errors.q4_email = "We're friends aren't we? Enter a real email address";
    }

    if (!values.q5_rsvp) {
        errors.q5_rsvp = 'Please select a RSVP choice';
    }

    return errors;
};

const mapStateToProps = state => {
    const selector = formValueSelector(formName);
    return {
        initialValues: state.store.rsvp,
        guest: state.store.guest,
        isFormLoading: state.store.isFormLoading,
        rsvpValue: selector(state, 'q5_rsvp'),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: submit => {
            dispatch(pendingFormSubmission(true));
            const input = document.getElementById('simple_spc');
            const form = document.getElementById('72975928197881');
            input.value = '72975928197881-72975928197881';

            form.submit();
        },
    };
};

const RsvpContainer = reduxForm({
    form: formName,
    validate,
})(Component);

export default connect(mapStateToProps, mapDispatchToProps)(RsvpContainer);
