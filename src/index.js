import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Test from './Test';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contactsReducer } from './reducers';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const addressBookApp = combineReducers({
    contacts: contactsReducer
});
const store = createStore(addressBookApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
