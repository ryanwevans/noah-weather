export default function weatherReducer( state = {
    loading: false,
    currentWeather: [],
    dailySummary: '',
}, action) {
    switch(action.type) {
        // Allows alternate page view during API loading time
        case 'LOADING_WEATHER':
            // returns state as is, only updates property of 'loading' to 'true'
            return {
                ...state, loading: true
            };

        case 'FETCH_WEATHER':

            console.log(action.payload.daily.summary)
            // returns state as is, but updates with any provided data, updates 'loading' to 'false'
            return {
                ...state,
                loading: false,
                currentWeather: action.payload.currently,
                dailySummary: action.payload.daily.summary
            };

        // Must have a default action
        default:
            return state;
    }
}