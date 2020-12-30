import { screen, render } from "@testing-library/react";
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

it('checks initial state is equal to 0', () => {
    const { getByText } = renderWithRedux(<Todolist />);
    const todoListText = screen.getByText(/ToDo List/i);
    expect(todoListText).toBeInTheDocument();
    // expect(getByTestId('counter')).toHaveTextContent('0')

})

// const mockStore = configureMockStore();
// test("TestContains", () => {
    // const store = mockStore({
    //     startup: { toDoList: [] }
    // });
    // const wrapper = mount(
    //     <Provider store={store}>
    //         <Todolist />;
    //     </Provider>
    // )
//     render(<Todolist />)

//     const todoListText = screen.getByText(/ToDo List/i);
//     expect(todoListText).toBeInTheDocument();
// })