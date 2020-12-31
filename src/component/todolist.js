import { Divider, List } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setTodo, setValue } from "../redux/action/action";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import 'antd/dist/antd.css';


const Todolist = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.toDoList);


    const removeTodo = (id) => {
        const removeItem = item.filter(o => o.key !== id);
        dispatch(setTodo(removeItem));
    }

    const editTodo = (id) => {
        const editItem = item.find(o => o.key === id);
        dispatch(setValue({ "key": id, "value": editItem.value }));
    }

    useEffect(() => {
        dispatch(setTodo(JSON.parse(localStorage.getItem("todoList")) || []));
    }, []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(item));
    }, [item]);


    return (
        <>
            <Divider orientation="left">ToDo List</Divider>
            <List
                size="large"
                bordered
                dataSource={item}
                renderItem={item => <List.Item>{item.value}
                    <div style={{ float: "right" }}>
                        <EditFilled title="Edit..." style={{ margin: '5px', cursor: 'pointer' }} onClick={e => editTodo(item.key)} />
                        <DeleteFilled title="Delete..." style={{ margin: '5px', cursor: 'pointer' }} onClick={e => removeTodo(item.key)} />
                    </div>
                </List.Item>}
            />
        </>
    )
}

export default Todolist;