import { render, fireEvent } from "@testing-library/react";
import Todolist from './Todolist'
import { reducer } from '../redux/reducer/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddItem from "./AddItem";


const initialState = {
    toDoList: [],
}


const renderWithRedux = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}

it('first test', () => {
    const { getByText } = renderWithRedux(<AddItem />);
    getByText("Add todo");
})

test("second test", () => {
    const { getByTestId } = renderWithRedux(<AddItem />);
    getByTestId("btnAdd");
    const InnerButton = getByTestId("InnerButton");
    expect(getByTestId("btnAdd")).toContainElement(InnerButton);
})