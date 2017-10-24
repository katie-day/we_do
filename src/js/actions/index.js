import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
    UPDATING_GUEST: null,
});


export const updatingGuest = (guest) => (
    {
        type: ACTIONS.UPDATING_GUEST,
        payload: {
            guest,
        }
    }
)