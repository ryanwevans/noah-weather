export default function weatherReducer( state = {
    loading: false,
    weather: []
}, action) {
    switch(action.type) {
        case 'LOADING_WEATHER':
            return {
                ...state, loading: true
            };

        case 'FETCH_WEATHER':

            console.log(action)

            return {
                ...state,
                loading: false,
                weather: action
            };

        default:
            return state;
    }
}