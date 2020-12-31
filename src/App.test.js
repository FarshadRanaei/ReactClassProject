import { render, fireEvent } from '@testing-library/react';
import { reducer } from './redux/reducer/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Todolist from './component/Todolist'
import AddItem from './component/AddItem';



const initialState = {
  toDoList: [],
  value: { "key": 0, "value": "" }
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


test("third test", () => {
  const { getByTestId, getByText } = renderWithRedux(<Todolist />);
  renderWithRedux(<AddItem />);

  const item = "farshad";
  const input = getByTestId("value");
  const button = getByTestId("btnAdd");

  fireEvent.change(input, { target: { value: item } });
  fireEvent.click(button);
  getByText(item);
})
