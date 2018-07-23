import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        // We never manipulate our state here, but we return
        // a new state here.
        if (!state.some(cityData => cityData.city.id === action.payload.data.city.id)) {
            return [ action.payload.data, ...state ];
        }
    }
    return state;
}