import './App.css';
import React, {useState, useReducer} from "react";

import {InputDataContext, inputDataReducer} from "./state/inputData";
import {INITIAL_STATE} from "./state/inputData/inputDataReducer";
import {
    addNewRowAC,
    clearJsonAC, deleteInputRowAC,
    loadJsonAC,
    onInputChangeAC,
    onTextareaChangeAC, rowDownAC, rowUpAC,
    saveJsonAC
} from "./state/inputData/inputDataActions";

import Input from "./components/Input/Input.component";
import Button from "./components/Button/Button.component";
import Textarea from "./components/Textarea/Teaxtarea.components";
import DataRowItem from "./components/DataRowItem/DataRowItem.component";


function App() {
    const newRowInputs = {
        'name':'',
        'value': ''
    }
    const [inputState, dispatchInputState] = useReducer(inputDataReducer, INITIAL_STATE)
    const [newRowValue, setNewRowValue] = useState(newRowInputs)

    const handleNewInputChange = (e) => {
        const { name, value } = e.target;
        setNewRowValue({
            ...newRowValue,
            [name]: value,
        });
    };

    const createNewRow = (event, newRowObj) => {
        event.preventDefault()
        dispatchInputState(addNewRowAC(newRowObj))
        setNewRowValue(newRowInputs)
    }

    // const onInputChange = (event) => {
    //     console.log(event)
    // }

    const onTextareaChange = (event) => {
        dispatchInputState(onTextareaChangeAC(event.target.value))
    }
    const onLoadJsonData = (json) => {
        dispatchInputState(loadJsonAC(json))
        console.log(inputState.dataRowArr)
    }
    const onSaveInputData = () => {
        dispatchInputState(saveJsonAC())
    }
    const deleteInputRow = (rowId) => {
        dispatchInputState(deleteInputRowAC(rowId))
    }
    const moveDownHandler = (index) => {
        dispatchInputState(rowDownAC(index))
    }
    const moveUpHandler = (index) => {
        dispatchInputState(rowUpAC(index))
    }

    return (
        <InputDataContext.Provider value={{inputState, dispatchInputState}}>
            <div className="App">
                <div className="container">
                    <section className='inputDataContainer'>
                        {
                            inputState.dataRowArr.length > 0 ?
                                inputState.dataRowArr.map((el, index) => {
                                    return (
                                        <DataRowItem key={el.id} id={el.id}>
                                            <Input value={el.name}>
                                                <Button title='edit'/>
                                            </Input>
                                            <Input value={el.value}>
                                                <Button title='edit'/>
                                            </Input>
                                            <div className="inputsControl">
                                                <div>
                                                    <Button clickHandler={() => moveUpHandler(index)} title='Up'/>
                                                    <Button clickHandler={() => moveDownHandler(index)} title='Down'/>
                                                </div>
                                                <Button title='X' clickHandler={() => deleteInputRow(el.id)}/>
                                            </div>
                                        </DataRowItem>
                                    )
                                }) : <div style={{textAlign: 'center'}}>Нет данных</div>
                        }
                    </section>

                    <section className="jsonContainer">
                        <Textarea
                            onTextareaChange={onTextareaChange}
                            text={inputState.textFieldString}
                        />
                        <div className='btnContainer'>
                            <Button clickHandler={onSaveInputData} title='Save'/>
                            <Button clickHandler={() => onLoadJsonData(inputState.textFieldJSON)} title='Load'/>
                            <Button clickHandler={() => dispatchInputState(clearJsonAC())} title='Clear'/>
                        </div>
                        {inputState.error ? <span className='errorMessage'>Incorrect JSON: {inputState.error}</span> : null}
                    </section>

                    <section className='newTableRowContainer'>
                        <form onSubmit={e => createNewRow(e, newRowValue)}>
                            <Input
                                onTextChange={handleNewInputChange}
                                value={newRowValue.name}
                                name='name'
                                placeholder='type name...'
                            />
                            <Input
                                onTextChange={handleNewInputChange}
                                value={newRowValue.value}
                                name='value'
                                placeholder='type value...'
                            />
                            <Button type='submit' title='Add table row'/>
                        </form>
                    </section>
                </div>
            </div>
        </InputDataContext.Provider>
    );
}

export default App;
