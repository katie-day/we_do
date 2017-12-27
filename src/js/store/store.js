import { ACTIONS } from '../actions';

const defaultState = {
    rsvp: {},
    guest: {
        id: '',
        type: 'friends',
        size: 1,
        rsvp: true,
        lastname: null,
        names: [],
    },
    loading: false,
    isFormLoading: false,
};

export default (state = defaultState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case ACTIONS.UPDATING_GUEST:
            newState.guest = action.payload.guest;
            break;
        case ACTIONS.FORM_SUBMISSION:
            newState.isFormLoading = action.payload.isFormLoading;
            break;
        default:
        // console.warn('Unknown type', action.type);
    }
    return newState;
};
