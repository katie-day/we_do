import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
    UPDATING_GUEST: null,
    FORM_SUBMISSION: null,
});

export const updatingGuest = guest => ({
    type: ACTIONS.UPDATING_GUEST,
    payload: {
        guest,
    },
});

export const pendingFormSubmission = bool => ({
    type: ACTIONS.FORM_SUBMISSION,
    payload: {
        isFormLoading: bool,
    },
});
