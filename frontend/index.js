import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';
import ConferenceContainer from './containers/ConferenceContainer';
import CalculatorContainer from './containers/CalculatorContainer';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

render(
    <Provider store={store}>
        <Router >
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/calculator">
                    <CalculatorContainer />
                </Route>
                <Route path="/conference/:id">
                    <ConferenceContainer />
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
