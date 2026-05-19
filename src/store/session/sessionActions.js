import { setDay, setError } from "./sessionSlice"

export const  changeTheme =  (isDay) => async (dispatch) =>{
    try {
        dispatch(setDay(isDay))
    } catch (error) {
        console.log(error)
        dispatch(setError(true))
    }
}
