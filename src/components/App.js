import React from 'react';
import {connectComponent} from '../redux/store/Store';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Home from './scenes/Home';
import Register from './scenes/Register';
import Login from './scenes/Login';

const App = (props) => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="register" component={Register} title="Register"/>
                <Scene key="home" component={Home} initial={true}/>
            </Stack>
        </Router>
    );
};

export default connectComponent(App);
