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

initFeatureDetection();

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
