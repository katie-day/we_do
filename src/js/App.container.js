import { connect } from 'react-redux';
import actions from './actions';
import Component from './App.component';

const mapStateToProps = (state, ownProps) => {
    return {
        guest: ownProps.params.guest,
        isLoading: state.store.loading,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateGuest: () => {
            const guest_id = ownProps.params.guest;
            const guest = {};
            dispatch(actions.updatingGuest(guest));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);
