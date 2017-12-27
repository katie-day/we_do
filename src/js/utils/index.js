import { guestlist } from '../constants/guestslist';

export function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
}

export function initFeatureDetection() {
    const touchClass = 'ontouchstart' in window ? 'touch' : 'no-touch';
    document.documentElement.className = `${document.documentElement
        .className} ${touchClass}`;

    window.IsTouch = 'ontouchstart' in window;
}

// Remove CSS outlines in an accessible manner
// Make sure you have an empty style tag that
// lives after your main style sheet
export function tabFocus(selector = '.accessTab') {
    const tabFocusElmt = document.querySelector(selector);
    window.addEventListener('mousedown', () => {
        tabFocusElmt.innerHTML = '';
    });

    window.addEventListener('keydown', e => {
        const isTabKey = e.keyCode === 9;
        if (isTabKey) {
            tabFocusElmt.innerHTML = 'a:focus { outline: solid 3px #e3a7a1; }';
        }
    });
}

export function initFlexboxSupport() {
    const docStyles = document.documentElement.style;
    const hasFlexbox =
        'flexWrap' in docStyles ||
        'WebkitFlexWrap' in docStyles ||
        'msFlexWrap' in docStyles;
    document.documentElement.className += hasFlexbox
        ? ' flexbox'
        : ' no-flexbox';
}

export function getGuestById(id) {
    const guest = guestlist.find(guest => {
        return guest.id === id;
    });
    return guest;
}

export function getWindowHeight() {
    return window.innerHeight || window.clientHeight;
}
