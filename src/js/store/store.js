import Store from './configureStore';

const state = {
    guest: {
        id: '',
        type: 'friends',
        size: 1,
        lastname: null,
        names: []
    },
    loading: false,
};

export default (state = defaultState, action) => {
    const newState = { ...state };
    switch (action.type) {
    case ACTIONS.UPDATING_GUEST:
        newState.guest = action.payload.guest;
        break;
    default:
        console.warn('Unknown type', action.type);
    }
    return newState;
};