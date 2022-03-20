export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_USERS':
            return action.payload;
            case 'FETCH_USER':
                if(state.indexOf(action.payload.id) >= 0) return state;
                return [...state, action.payload];
        default:
            return state;
    }
}