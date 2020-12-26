export function setTodo(data) {
    return { type: "ADDTODO", payload: data || 0 }
}