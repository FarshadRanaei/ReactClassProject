import { render } from "@testing-library/react";
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
    // expect(getByTestId('counter')).toHaveTextContent('0')
})

