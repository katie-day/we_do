import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import store from './js/store/configureStore';
import App from './js/App.container';
import Success from './js/components/success/Success.component';
import PageNotFound from './js/components/common/PageNotFound.component';

import { tabFocus, initFlexboxSupport, initFeatureDetection } from './js/utils';
import 'normalize.css';
import './App.css';

initFeatureDetection();
initFlexboxSupport();
tabFocus();

const mount = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/:guest" component={App} />
                <Route path="/rsvp/success" component={Success} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    </Provider>,
    mount,
);
