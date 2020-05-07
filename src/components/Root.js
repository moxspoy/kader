import React from 'react';
import {Provider} from 'react-redux';
import Store from '../redux/store/Store';
import App from './App';

const Root = () => {
    return (
        <Provider store={Store}>
            <App/>
        </Provider>
    );
};

export default Root;
