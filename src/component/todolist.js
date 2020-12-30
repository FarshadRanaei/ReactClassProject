import { Input, Button, Divider, List, Form, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../redux/action/action";
import { EditFilled, DeleteFilled, PlusCircleFilled } from "@ant-design/icons";
import 'antd/dist/antd.css';


const Todolist = () => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const dispatch = useDispatch();
    const item = useSelector(state => state.toDoList);

    const addToDo = () => {
        if (!key) {
            dispatch(setTodo([...item, { "value": value, "key": item.length + 1 }]));
        }
        else {
            item.find(o => o.key === key).value = value;
            dispatch(setTodo(item));
            setKey(0);
        }
        setValue("");
        console.log(item);
    }

    const removeTodo = (id) => {
        const removeItem = item.filter(o => o.key !== id);
        dispatch(setTodo(removeItem));
    }

    const [key, setKey] = useState(0);
    const editTodo = (id) => {
        const editItem = item.find(o => o.key === id);
        setValue(editItem.value);
        setKey(id);
    }

    useEffect(() => {
        dispatch(setTodo(JSON.parse(localStorage.getItem("todoList")) || []));
    }, []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(item));
        document.getElementById("txtItem").focus();
    }, [item]);


    return (
        <>
            <Divider orientation="left"></Divider>
            <Row gutter={16}>
                <Col span={10}>
                    <Input id="txtItem" type="text" value={value} onChange={onChange} data-testid="value" />
                </Col>
                <Col span={4}>
                    <Button type="primary" htmlType="submit" onClick={addToDo} data-testid="btnAdd">
                        <PlusCircleFilled data-testid="InnerButton" />
                                Add todo
                    </Button>
                </Col>
            </Row>
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