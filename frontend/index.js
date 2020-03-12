import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App'
import CalculatorContainer from './containers/CalculatorContainer'

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
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
            </Route>
            <Route path="calculator" component={ CalculatorContainer }/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
