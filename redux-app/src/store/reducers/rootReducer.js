import FETCH_WEATHER_START from '../../actions/index';

export const initialState = {
    weather: null,
    isFetching: false,
    error: ""
  };

export const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCH_WEATHER_START :
          return {
            ...state,

            
          }
        case FETCH_WEATHER_SUCCESS :
        return {
        ...state
        
        }
        case FETCH_WEATHER_ERROR :
        return {
        ...state
        
        }
        default:
            return state
    }

}