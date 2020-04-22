import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './scss/styles.scss';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/reduxStore";

const app =
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>;

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
