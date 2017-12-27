import { connect } from 'react-redux';
import { updatingGuest } from './actions';
import { getGuestById } from './utils';
import Component from './App.component';

const mapStateToProps = (state, ownProps) => {
    let guest_id = '';

    if (ownProps.match.params.guest) {
        guest_id = ownProps.match.params.guest;
    }

    return {
        guest_id,
        guest: state.store.guest,
        isLoading: state.store.loading,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateGuest: () => {
            const guest_id = ownProps.match.params.guest;
            const guest = getGuestById(guest_id);
            dispatch(updatingGuest(guest));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
