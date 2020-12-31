export function setTodo(data) {
    return { type: "ADDTODO", payload: data || [] }
}
export function setValue(data) {
    return { type: "SETVALUE", payload: data || { "key": 0, "value": "" } }
}