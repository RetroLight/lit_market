import {
    ADD_NEW_ROW,
    CLEAR_JSON_DATA,
    DELETE_INPUT_ROW,
    LOAD_JSON_DATA,
    ON_INPUT_CHANGE,
    ON_TEXTAREA_CHANGE, ROW_DOWN, ROW_EDIT, ROW_UP,
    SAVE_JSON_DATA
} from "./actionTypes";

export const INITIAL_STATE = {
    dataRowArr: [],
    textFieldJSON: [{'name':'example name', 'value': 'example value'}],
    textFieldString: JSON.stringify([{'name':'example name', 'value': 'example value'}]),
    error: ''
}
export const inputDataReducer = (state, action) => {
    switch (action.type) {
        case ON_TEXTAREA_CHANGE:
            return {
                ...state,
                textFieldString: action.payload
            }
        case CLEAR_JSON_DATA:
            return {
                ...state,
                textFieldJSON: [],
                textFieldString: ''
            }
        case LOAD_JSON_DATA:
            try {
                let dataArr = JSON.parse(state.textFieldString)
                dataArr.map(el => {
                    el.id = Math.floor(Math.random() * 1000)
                })
                return {
                    ...state,
                    dataRowArr: dataArr,
                    error: ''
                }
            } catch(e) {
                return {
                    ...state,
                    error: e.message
                }
            }
        case SAVE_JSON_DATA:
            var dataRowArrCopy = structuredClone(state.dataRowArr)
            dataRowArrCopy.map(el => delete el.id)
            return {
                ...state,
                textFieldJSON: dataRowArrCopy,
                textFieldString: JSON.stringify(dataRowArrCopy),
                error: ''
            }
        case ADD_NEW_ROW:
            const newRow = action.payload;
            newRow.id = Math.floor(Math.random() * 1000)
            return {
                ...state,
                dataRowArr: [...state.dataRowArr, newRow]
            }
        case ROW_EDIT:
            return {
                ...state,
                dataRowArr: state.dataRowArr.map(el => el.id === action.payload.id
                ? {...el, [action.payload.key]:action.payload.text} : el)
            }

        case DELETE_INPUT_ROW:
            return {
                ...state,
                dataRowArr: state.dataRowArr.filter(el => el.id != action.payload)
            }
        case ROW_DOWN:
            var dataRowArrCopy = structuredClone(state.dataRowArr);
            var element = dataRowArrCopy.splice(action.payload, 1)[0];
            dataRowArrCopy.splice(action.payload + 1, 0, element);
            return {
                ...state,
                dataRowArr: dataRowArrCopy
            }
        case ROW_UP:
            var dataRowArrCopy = structuredClone(state.dataRowArr);
            if(action.payload !== 0) {
                var element = dataRowArrCopy.splice(action.payload, 1)[0];
                dataRowArrCopy.splice(action.payload - 1, 0, element);
                return {
                    ...state,
                    dataRowArr: dataRowArrCopy
                }
            }
            return state
        default: return state
    }
}
