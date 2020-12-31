export function reducer(state = { toDoList: [], value: { "key": 0, "value": "" } }, action) {
    switch (action.type) {
        case "ADDTODO":
            return {
                ...state,
                toDoList: action.payload
            }
        case "SETVALUE":
            return {
                ...state,
                value: action.payload
            }
        default:
            return state;
    }
}