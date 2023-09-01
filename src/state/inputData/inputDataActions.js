import {
    CLEAR_JSON_DATA,
    ON_INPUT_CHANGE,
    LOAD_JSON_DATA,
    SAVE_JSON_DATA,
    ON_TEXTAREA_CHANGE, DELETE_INPUT_ROW, ROW_UP, ROW_DOWN, ADD_NEW_ROW, ROW_EDIT
} from "./actionTypes";

export const onInputChangeAC = (text) => ({
    type: ON_INPUT_CHANGE,
    payload: text
})

export const onTextareaChangeAC = (text) => ({
    type: ON_TEXTAREA_CHANGE,
    payload: text
})

export const saveJsonAC = () => ({
    type: SAVE_JSON_DATA
})

export const loadJsonAC = (text) => ({
    type: LOAD_JSON_DATA,
    payload: text
})

export const clearJsonAC = () => ({
    type: CLEAR_JSON_DATA
})

export const addNewRowAC = ({name, value}) => ({
    type: ADD_NEW_ROW,
    payload: {name, value}
})

export const rowEditAC = (id, key, text) => ({
    type: ROW_EDIT,
    payload: {id, key, text}
})

export const deleteInputRowAC = (id) => ({
    type: DELETE_INPUT_ROW,
    payload: id
})

export const rowUpAC = (index) => ({
    type: ROW_UP,
    payload: index
})

export const rowDownAC = (index) => ({
    type: ROW_DOWN,
    payload: index
})
