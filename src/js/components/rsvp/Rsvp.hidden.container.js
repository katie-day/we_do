import { connect } from 'react-redux';
import Component from './Rsvp.hidden.component';

const mapStateToProps = state => {
    return {
        values: state.form.Rsvp.values,
    };
};

export default connect(mapStateToProps)(Component);
