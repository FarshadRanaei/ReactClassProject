import { useDispatch, useSelector } from "react-redux";
import { setTodo, setValue } from "../redux/action/action";
import { Input, Button, Divider, Row, Col } from 'antd';
import { PlusCircleFilled } from "@ant-design/icons";

const AddItem = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.toDoList);
    const { key, value } = useSelector(state => state.value);

    const onChange = (e) => {
        dispatch(setValue({ "key": key, "value": e.target.value }));
    }

    const addToDo = () => {
        if (!key) {
            dispatch(setTodo([...item, { "value": value, "key": item.length + 1 }]));
        }
        else {
            item.find(o => o.key === key).value = value;
            dispatch(setTodo(item));
        }
        dispatch(setValue({ "key": 0, "value": "" }));
        document.getElementById("txtItem").focus();
    }

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
        </>
    )
}
export default AddItem;