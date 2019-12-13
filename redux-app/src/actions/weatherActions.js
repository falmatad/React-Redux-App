
export const FETCH_WEATHER_START = "FETCH_WEATHER_START"

const getWeather = () => {
    return (dispatch) => {
        dispatch({type: "FETCH_WEATHER_START"});
    }
}