export function reducer(state = { toDoList: [] }, action) {
    switch (action.type) {
        case "ADDTODO":
            return {
                ...state,
                toDoList: action.payload
            }
        default:
            return state;
    }
}