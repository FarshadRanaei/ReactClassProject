import { render } from "@testing-library/react";
import Todolist from './Todolist'
import { reducer } from '../redux/reducer/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


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
    getByText("ToDo List");
})


