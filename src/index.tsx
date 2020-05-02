import './helpFunctions/wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './scss/styles.scss';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/reduxStore";
import {BrowserRouter as Router} from "react-router-dom";

const app =
    <Router>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </Router>;


ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
