import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Home = (props) => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={Actions.login}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.register}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
