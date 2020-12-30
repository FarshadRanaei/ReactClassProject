import { render, fireEvent, getByText } from "@testing-library/react";
import Todolist from './todolist'
import { reducer } from '../redux/reducer/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import { Provider } from 'react-redux'
// import configureMockStore from 'redux-mock-store'


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
    const { getByText } = renderWithRedux(<Todolist />);
    const todoListText = getByText("ToDo List");
    expect(todoListText).toBeInTheDocument();
    getByText("Add todo");
})

test("second test", () => {
    const { getByTestId } = renderWithRedux(<Todolist />);
    getByTestId("btnAdd");
    const InnerButton = getByTestId("InnerButton");
    expect(getByTestId("btnAdd")).toContainElement(InnerButton);
})

test("third test", () => {
    const { getByTestId, getByText } = renderWithRedux(<Todolist />);

    const item = "farshad";
    const input = getByTestId("value");
    const button = getByTestId("btnAdd");

    fireEvent.change(input, { target: { value: item } });
    fireEvent.click(button);
    getByText(item);
})

