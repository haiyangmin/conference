import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, } from 'react-router';
import { Provider } from 'react-redux';

// app store
import appStore from './store';

// app views
import AppContainer from './app';


ReactDOM.render(
    <Provider store={ appStore }>
        <Router history={ browserHistory }>
            <Route path="/" component={ AppContainer }>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
