export default function user(state = {}, action) {
    switch (action.type) {
        case 'x':
            return Object.assign({}, state, action.user);
        case 'y':
            return defaultStore.user;
        default:
            return state;
    }
}
