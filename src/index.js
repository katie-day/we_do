import React from 'react';
import ReactDOM from 'react-dom';
// import addToCalendar from 'addtocalendar/addtocalendar'

import App from './js/App';
// import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './App.css';



function initFeatureDetection() {
    const touchClass = 'ontouchstart' in window ? 'touch' : 'no-touch';
    document.documentElement.className = `${document.documentElement.className} ${touchClass}`;

    window.IsTouch = 'ontouchstart' in window;
}

export function initBackgroundClip() {
    const docStyles = document.documentElement.style;
    const hasBackgroundClip = 'webkitBackgroundClip' in docStyles; 
    // || 'WebkitFlexWrap' in docStyles || 'msFlexWrap' in docStyles;
    document.documentElement.className += hasBackgroundClip ? ' backgroundclip' : ' no-backgroundclip';
}

// webkitBackgroundClip

initFeatureDetection();
initBackgroundClip();

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
