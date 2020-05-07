import {applyMiddleware, bindActionCreators, compose, createStore} from 'redux';
import rootReducer from '../reducer/Index';
import thunkMiddleware from 'redux-thunk';
import {connect} from 'react-redux';

const Store = createStore(
    rootReducer,
    JSON.parse(JSON.stringify(defaultStore)),
    compose(applyMiddleware(thunkMiddleware)),
);

export function mapStateToProps(state) {
    return {...state};
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export function connectComponent(component) {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

export function connectCustomComponent(stateProps, dispatchProps = mapDispatchToProps) {
    return connect(stateProps, dispatchProps);
}

export default Store;
