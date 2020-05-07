import React from 'react';
import {Provider} from 'react-redux';
import App from '../../components/App';
import Store from '../redux/store/Store';

const Root = () => {
    return (
        <Provider store={Store}>
            <App/>
        </Provider>
    );
};

export default Root;
