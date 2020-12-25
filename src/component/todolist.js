import { Input, Button } from 'antd';
import { useEffect, useState } from 'react';


const Todolist = () => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const [todoList, setTodoList] = useState([]);

    const addToDo = () => {
        if (!key) {
            setTodoList(() => [...todoList, { "value": value, "key": todoList.length + 1 }]);
        }
        else {
            todoList.find(o => o.key === key).value = value;
            setTodoList(todoList);
            setKey(0);
        }
        setValue("");
    }

    const removeTodo = (id) => {
        const removeItem = todoList.filter(o => o.key !== id);
        setTodoList(removeItem);
    }

    const [key, setKey] = useState(0);
    const editTodo = (id) => {
        const editItem = todoList.find(o => o.key === id);
        setValue(editItem.value);
        setKey(id);
    }

    useEffect(() => {
        setTodoList(JSON.parse(localStorage.getItem("todoList")) || []);
    }, []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <>
            <span>
                <Input
                    type="text"
                    value={value}
                    onChange={onChange}
                    style={{ width: 100 }}
                />
                <Button type="primary" htmlType="submit" onClick={addToDo}>
                    Submit
            </Button>
            </span>
            <div>
                <ul>
                    {todoList.map(todo => <li key={todo.key}>{todo.value}
                        <span
                            style={{ margin: '5px', color: 'red' }}
                            onClick={e => removeTodo(todo.key)}>
                            x
                        </span>
                        <span
                            style={{ margin: '5px', color: 'red' }}
                            onClick={e => editTodo(todo.key)}>
                            Edit
                        </span>
                    </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Todolist;