import {LOAD_USER} from './ActionTypes';

export function login(username, password) {
    return async (dispatch) => {
        let response = {
            name: 'Eqi',
            age: 20,
        };
        return dispatch(
            {
                type: LOAD_USER,
                response,
            },
        );
    };
}

export function register(user) {
    return async (dispatch) => {
        let response = {
            name: 'Eqi Regis',
            age: 20,
        };
        return dispatch(
            {
                type: LOAD_USER,
                response,
            },
        );
    };
}
