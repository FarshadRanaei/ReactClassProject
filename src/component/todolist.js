import { Input, Button } from 'antd';
import { useEffect, useState } from 'react';


const Todolist = () => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const [todoList, setTodoList] = useState([]);

    const addToDo = () => {
        setTodoList(([...todoList, { "value": value, "key": todoList.length + 1 }]),
            () => localStorage.setItem("todoList", JSON.stringify(todoList)));
    }

    useEffect(() => {
        setTodoList(JSON.parse(localStorage.getItem("todoList")) || []);
    }, []);

    return (
        <>
            <span>
                {/* {value} */}
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
                    {todoList.map(todo => <li key={todo.key}>{todo.value}</li>)}
                </ul>
            </div>
        </>
    )
}

export default Todolist;