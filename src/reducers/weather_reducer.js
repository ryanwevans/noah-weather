export default function weatherReducer( state = {
    loading: false,
    weather: []
}, action) {
    switch(action.type) {
        case 'LOADING WEATHER':
            return {
                ...state, loading: true
            };

        case 'FETCH WEATHER':
            return {
                ...state,
                loading: false,
                weather: action.payload
            };

        default:
            return state;
    }
}