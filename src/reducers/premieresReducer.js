import {SET_PREMIERES} from "../constants/premieres";
const initialState = {
    lastPremieres: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_PREMIERES:
        return { ...state, lastPremieres: payload }
    default:
        return state
    }
}
