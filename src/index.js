import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
// import 'whatwg-fetch';
// import addToCalendar from 'addtocalendar/addtocalendar'

import store from './js/store/configureStore';
import App from './js/App.container';

import Thanks from './js/components/common/Thanks.component';
import Errors from './js/components/common/Errors.component';
import PageNotFound from './js/components/common/PageNotFound.component';

import { tabFocus, initFlexboxSupport, initFeatureDetection } from './js/utils'
// import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './App.css';

initFeatureDetection();
initFlexboxSupport();
tabFocus();

const mount = document.querySelector('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/:guest" component={App} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/error" component={Errors} />
            <Route path="*" component={PageNotFound} />
        </Router>
    </Provider>, mount);

// registerServiceWorker();
